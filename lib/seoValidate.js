import PageContent from "@/models/pageContent";
import Redirect from "@/models/redirect";
import { PAGE_PATHS } from "@/lib/pagePaths";
import { defaultSchemaJsonFor } from "@/lib/siteSchema";
import {
  SCHEMA_TYPES,
  currentSlugFor,
  isTrue,
  isValidHreflangCode,
  isValidSlug,
  normalizePath,
  originalPathFor,
  parseSchemaJson,
  publicPathFor,
  toSitePath,
} from "@/lib/seo";

// Server-side checks for what the dashboard's SEO panel saves, run from
// savePageContent (page-level fields) and the redirect actions. The client
// never gets to skip them — they decide what proxy.js / generateMetadata
// will later trust.

// Top-level routes that exist outside the page registries and must never
// be claimed by a URL slug.
const RESERVED_TOP_LEVEL = ["blog", "admin", "api", "en-uk", "robots.txt", "sitemap.xml"];

const MAX = { short: 200, long: 600, json: 50_000 };

const clip = (v, n) => String(v ?? "").trim().slice(0, n);

function isHttpUrl(v) {
  try {
    const u = new URL(v);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

// Returns { fields } (cleaned copy) or { error } with a message fit to
// show the user. Only the SEO keys are touched; every other content field
// passes through unchanged.
export async function validateSeoFields(pageKey, fields) {
  const f = { ...fields };

  // URL slug
  const slug = clip(f.seoSlug, 100).toLowerCase();
  if (slug && slug !== currentSlugFor(pageKey)) {
    const original = originalPathFor(pageKey);
    if (!original || original === "/") {
      return { error: "The home page's URL can't be changed." };
    }
    if (!isValidSlug(slug)) {
      return {
        error:
          "URL Slug can only use lowercase letters, numbers and single hyphens (e.g. my-new-page).",
      };
    }
    const publicPath = publicPathFor(pageKey, slug);
    const parts = publicPath.split("/");
    if (parts.length === 2 && RESERVED_TOP_LEVEL.includes(slug)) {
      return { error: `"${slug}" is reserved by the site — pick another slug.` };
    }
    const taken = Object.entries(PAGE_PATHS).find(
      ([key, p]) => key !== pageKey && p === publicPath,
    );
    if (taken) {
      return { error: `${publicPath} is already used by another page.` };
    }
    const others = await PageContent.find({
      pageKey: { $ne: pageKey },
      "fields.seoSlug": { $exists: true, $ne: "" },
    })
      .select("pageKey fields.seoSlug")
      .lean();
    const clash = others.find(
      (o) => publicPathFor(o.pageKey, o.fields?.seoSlug) === publicPath,
    );
    if (clash) {
      return { error: `${publicPath} is already used by another page.` };
    }
    f.seoSlug = slug;
  } else {
    // Blank, or identical to the real slug -> no override.
    f.seoSlug = "";
  }

  // Canonical URL
  const canonical = clip(f.seoCanonical, 500);
  if (canonical && !isHttpUrl(canonical)) {
    return {
      error: "Canonical URL must be a full URL starting with https:// (or leave it blank).",
    };
  }
  f.seoCanonical = canonical;

  f.seoPrimaryKeyword = clip(f.seoPrimaryKeyword, MAX.short);
  f.seoSecondaryKeywords = clip(f.seoSecondaryKeywords, MAX.long);

  for (const key of ["ogTitle", "twTitle"]) f[key] = clip(f[key], MAX.short);
  for (const key of ["ogDescription", "twDescription"]) f[key] = clip(f[key], MAX.long);
  for (const key of ["ogImage", "twImage"]) {
    const v = clip(f[key], 1000);
    if (v && !isHttpUrl(v) && !v.startsWith("/")) {
      return { error: "Social images must be an uploaded image or a full URL." };
    }
    f[key] = v;
  }

  // Indexing controls
  const index = f.robotsIndex || "index";
  const follow = f.robotsFollow || "follow";
  if (!["index", "noindex"].includes(index) || !["follow", "nofollow"].includes(follow)) {
    return { error: "Invalid indexing option." };
  }
  f.robotsIndex = index;
  f.robotsFollow = follow;
  f.sitemapInclude = isTrue(f.sitemapInclude, true);

  // Schema
  const schemaType = clip(f.schemaType, 40);
  if (schemaType && !SCHEMA_TYPES.includes(schemaType)) {
    return { error: "Unknown schema type." };
  }
  f.schemaType = schemaType;
  f.schemaEnabled = isTrue(f.schemaEnabled, false);
  f.schemaJson = String(f.schemaJson ?? "").slice(0, MAX.json);
  if (f.schemaEnabled) {
    const parsed = parseSchemaJson(f.schemaJson);
    if (!parsed.ok) return { error: parsed.error };
  }

  // The panel pre-fills the Schema box with the page's built-in schema. If
  // it's still exactly that and the custom schema is off, don't store it —
  // nothing was customised, and it would only bloat every saved page.
  if (!f.schemaEnabled) {
    const parsedSaved = parseSchemaJson(f.schemaJson);
    const parsedDefault = parseSchemaJson(defaultSchemaJsonFor(pageKey));
    if (
      parsedSaved.ok &&
      parsedDefault.ok &&
      JSON.stringify(parsedSaved.data) === JSON.stringify(parsedDefault.data)
    ) {
      f.schemaJson = "";
      f.schemaType = "";
    }
  }

  // Hreflang — [{ lang, url }] rows; blank rows are dropped.
  const rawRows = Array.isArray(f.hreflang) ? f.hreflang : [];
  if (rawRows.length > 40) {
    return { error: "Hreflang can have at most 40 entries." };
  }
  const seenLang = new Set();
  const hreflang = [];
  for (const row of rawRows) {
    const lang = clip(row?.lang, 20).toLowerCase();
    let url = clip(row?.url, 500);
    if (!lang && !url) continue;
    if (!lang || !url) {
      return { error: "Each Hreflang entry needs both a language code and a URL." };
    }
    if (!isValidHreflangCode(lang)) {
      return {
        error: `"${lang}" isn't a valid hreflang code. Use e.g. en, en-gb, hi-in, fr-ca or x-default.`,
      };
    }
    if (url.startsWith("/")) url = `https://bizzbuzzcreations.com${url}`;
    if (!isHttpUrl(url)) {
      return { error: `Hreflang URL for "${lang}" must be a full https:// URL.` };
    }
    if (seenLang.has(lang)) {
      return { error: `Hreflang "${lang}" is listed twice — each code can appear once.` };
    }
    seenLang.add(lang);
    hreflang.push({ lang, url });
  }
  f.hreflang = hreflang;

  // Image alt text (url -> alt)
  if (f.imageAlts && typeof f.imageAlts === "object" && !Array.isArray(f.imageAlts)) {
    const cleaned = {};
    for (const [url, alt] of Object.entries(f.imageAlts)) {
      const a = clip(alt, 300);
      if (a) cleaned[url] = a;
    }
    f.imageAlts = cleaned;
  } else {
    f.imageAlts = {};
  }

  return { fields: f };
}

// Returns { from, to } normalised, or { error }. `ignoreId` lets an edit
// pass the "already exists" and cycle checks against its own old row.
export async function validateRedirect({ from, to }, ignoreId = null) {
  const fromPath = toSitePath(from);
  if (!fromPath) {
    return { error: "Old URL must be a path on this site, like /old-page." };
  }
  if (fromPath === "/") {
    return { error: "The home page can't be redirected." };
  }
  if (/^\/(admin|api|_next)(\/|$)/.test(fromPath)) {
    return { error: "That path can't be redirected." };
  }

  const toRaw = String(to ?? "").trim();
  let dest = toSitePath(toRaw);
  if (!dest) {
    if (isHttpUrl(toRaw)) dest = toRaw;
    else return { error: "New URL must be a path (/new-page) or a full https:// URL." };
  }
  if (dest === fromPath) {
    return { error: "Old URL and New URL are the same." };
  }

  const existing = await Redirect.findOne({ from: fromPath }).lean();
  if (existing && String(existing._id) !== String(ignoreId)) {
    return { error: `A redirect from ${fromPath} already exists — edit that one instead.` };
  }

  // Walk the chain from the destination; reaching `from` again = a loop.
  const all = await Redirect.find({ enabled: true }).select("from to").lean();
  const map = Object.fromEntries(all.map((r) => [r.from, r.to]));
  let hop = dest;
  for (let i = 0; i < 10 && hop; i++) {
    const next = normalizePath(hop) && map[normalizePath(hop)];
    if (!next) break;
    if (normalizePath(next) === fromPath) {
      return { error: "That would create a redirect loop." };
    }
    hop = next;
  }

  return { from: fromPath, to: dest };
}
