// Shared (client + server) SEO helpers for the dashboard's per-page SEO
// panel and for the public pages that read what it saves.
//
// Every SEO value is stored in the same PageContent.fields map as the
// page's text/images, under the reserved keys below — so loading, saving
// and the existing "Save Changes" button all keep working unchanged.
import { PAGE_PATHS, SITE_URL } from "@/lib/pagePaths";

export const SEO_FIELD_KEYS = [
  "seoSlug",
  "seoCanonical",
  "seoPrimaryKeyword",
  "seoSecondaryKeywords",
  "ogTitle",
  "ogDescription",
  "ogImage",
  "twTitle",
  "twDescription",
  "twImage",
  "schemaEnabled",
  "schemaType",
  "schemaJson",
  "hreflang",
  "hiddenSections",
  "robotsIndex",
  "robotsFollow",
  "sitemapInclude",
  "imageAlts",
];

export const SCHEMA_TYPES = [
  "Organization",
  "LocalBusiness",
  "WebPage",
  "Service",
  "Article",
  "FAQPage",
  "Product",
  "BreadcrumbList",
  "Custom",
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isValidSlug(slug) {
  return SLUG_RE.test(slug);
}

// "/about/" -> "/about", "about" -> "/about", "" -> "/". Strips query and
// hash, collapses duplicate slashes. Returns null for anything that isn't
// a site-relative path (full URLs are handled by normalizeRedirectTarget).
export function normalizePath(input) {
  if (typeof input !== "string") return null;
  let p = input.trim();
  if (!p) return null;
  p = p.split(/[?#]/)[0];
  if (!p.startsWith("/")) p = "/" + p;
  p = p.replace(/\/{2,}/g, "/");
  if (p.length > 1) p = p.replace(/\/+$/, "");
  return p;
}

// Accepts "/path", "path" or "https://bizzbuzzcreations.com/path" and
// returns the site-relative path, or null if it points at another host.
export function toSitePath(input) {
  if (typeof input !== "string") return null;
  const v = input.trim();
  if (/^https?:\/\//i.test(v)) {
    try {
      const u = new URL(v);
      if (u.hostname.replace(/^www\./, "") !== new URL(SITE_URL).hostname) {
        return null;
      }
      return normalizePath(u.pathname);
    } catch {
      return null;
    }
  }
  return normalizePath(v);
}

// The path a page actually lives at in the codebase (never changes).
export const OUTSIDE_PAGE_PREFIX = "outside-location-";

// Pages created from the dashboard's Outside Location section (anything
// "outside-location-<slug>" that isn't the built-in UK page) live at
// /en-uk/<slug> — derived from the key, so it works on client and server
// with no lookup.
export function isDynamicOutsidePageKey(pageKey) {
  return (
    typeof pageKey === "string" &&
    pageKey.startsWith(OUTSIDE_PAGE_PREFIX) &&
    !PAGE_PATHS[pageKey] &&
    pageKey.length > OUTSIDE_PAGE_PREFIX.length
  );
}

export function originalPathFor(pageKey) {
  if (PAGE_PATHS[pageKey]) return PAGE_PATHS[pageKey];
  if (isDynamicOutsidePageKey(pageKey)) {
    return `/en-uk/${pageKey.slice(OUTSIDE_PAGE_PREFIX.length)}`;
  }
  return null;
}

// The path visitors see — the original path with its last segment
// swapped for the saved URL slug, when one is set.
export function publicPathFor(pageKey, slug) {
  const original = originalPathFor(pageKey);
  if (!original) return null;
  if (!slug || original === "/") return original;
  const parts = original.split("/");
  parts[parts.length - 1] = slug;
  return parts.join("/");
}

export function currentSlugFor(pageKey) {
  const original = originalPathFor(pageKey);
  if (!original || original === "/") return "";
  return original.split("/").pop();
}

export function absoluteUrl(path) {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function splitKeywords(value) {
  return String(value || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

export function isTrue(value, fallback = true) {
  if (value === undefined || value === null || value === "") return fallback;
  return value === true || value === "true";
}

// Starter JSON-LD for the "Insert template" button — filled with this
// page's own URL/title so there's something valid to edit from.
export function schemaTemplate(type, { url, title, description, image }) {
  const base = { "@context": "https://schema.org", "@type": type };
  switch (type) {
    case "Organization":
      return {
        ...base,
        name: "BizzBuzz Creations",
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.png`,
        sameAs: ["https://x.com/BizzBuzzAgency"],
      };
    case "LocalBusiness":
      return {
        ...base,
        name: "BizzBuzz Creations",
        url: SITE_URL,
        telephone: "",
        address: {
          "@type": "PostalAddress",
          streetAddress: "",
          addressLocality: "Prayagraj",
          addressCountry: "IN",
        },
      };
    case "WebPage":
      return { ...base, name: title, description, url };
    case "Service":
      return {
        ...base,
        name: title,
        description,
        url,
        provider: { "@type": "Organization", name: "BizzBuzz Creations" },
      };
    case "Article":
      return {
        ...base,
        headline: title,
        description,
        image: image || undefined,
        author: { "@type": "Organization", name: "BizzBuzz Creations" },
        mainEntityOfPage: url,
      };
    case "FAQPage":
      return {
        ...base,
        mainEntity: [
          {
            "@type": "Question",
            name: "Question text",
            acceptedAnswer: { "@type": "Answer", text: "Answer text" },
          },
        ],
      };
    case "Product":
      return { ...base, name: title, description, image: image || undefined };
    case "BreadcrumbList":
      return {
        ...base,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title, item: url },
        ],
      };
    default:
      return { "@context": "https://schema.org" };
  }
}

// Parses saved schema JSON. Returns { ok, data, error }.
export function parseSchemaJson(text) {
  const raw = String(text || "").trim();
  if (!raw) return { ok: false, error: "Schema JSON is empty." };
  try {
    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") {
      return { ok: false, error: "Schema must be a JSON object." };
    }
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: `Schema is not valid JSON (${e.message}).` };
  }
}

// ---- Headings / image-alt discovery -------------------------------------
// Walks a page's registry sections (+ saved values) to find the editable
// heading-like text fields and the images, so the SEO panel can show them
// in one outline. Level is by position, not stored: the first hero heading
// is the page's H1, other section-level headings are H2, and headings
// inside repeatable items (cards, FAQ questions) are H3.

const HEADING_KEY = /(heading|title)$/i;
const HEADING_ITEM_KEY = /^(heading|title|question|q|name)$/i;

function setIn(container, path, value) {
  if (path.length === 0) return value;
  const [head, ...rest] = path;
  if (Array.isArray(container)) {
    return container.map((item, i) =>
      i === head ? setIn(item, rest, value) : item,
    );
  }
  return { ...(container || {}), [head]: setIn((container || {})[head], rest, value) };
}

// Returns a new `values` object with the value at `path` (e.g.
// ["cards", 2, "title"]) replaced.
export function setValueAtPath(values, path, value) {
  return setIn(values, path, value);
}

export function collectHeadings(page, values) {
  const out = [];
  let h1Taken = false;
  for (const section of page?.sections || []) {
    if (section.key === "seo") continue;
    for (const field of section.fields) {
      if (field.type === "text" && HEADING_KEY.test(field.key)) {
        const isHero = section.key === "hero" && !h1Taken;
        if (isHero) h1Taken = true;
        out.push({
          level: isHero ? "H1" : "H2",
          label: `${section.label} — ${field.label}`,
          path: [field.key],
          value: values?.[field.key] ?? "",
        });
      } else if (field.type === "list") {
        const items = Array.isArray(values?.[field.key]) ? values[field.key] : [];
        items.forEach((item, i) => {
          for (const itemField of field.itemFields || []) {
            if (itemField.type === "text" && HEADING_ITEM_KEY.test(itemField.key)) {
              out.push({
                level: "H3",
                label: `${field.label} #${i + 1} — ${itemField.label}`,
                path: [field.key, i, itemField.key],
                value: item?.[itemField.key] ?? "",
              });
            }
          }
        });
      }
    }
  }
  return out;
}

export function collectImages(page, values) {
  const seen = new Map();
  const add = (url, label) => {
    if (typeof url !== "string" || !url.trim()) return;
    if (!seen.has(url)) seen.set(url, label);
  };
  for (const section of page?.sections || []) {
    if (section.key === "seo") continue;
    for (const field of section.fields) {
      if (field.type === "image") add(values?.[field.key], `${section.label} — ${field.label}`);
      else if (field.type === "list") {
        const items = Array.isArray(values?.[field.key]) ? values[field.key] : [];
        items.forEach((item, i) => {
          for (const itemField of field.itemFields || []) {
            if (itemField.type === "image") {
              add(item?.[itemField.key], `${field.label} #${i + 1} — ${itemField.label}`);
            }
          }
        });
      }
    }
  }
  return [...seen].map(([url, label]) => ({ url, label }));
}

// True when the page has a saved, enabled and valid custom schema — in
// which case it REPLACES the page's built-in default schema (the site-wide
// LocalBusiness block / the UK page's @graph).
export function hasCustomSchema(content) {
  return (
    isTrue(content?.schemaEnabled, false) &&
    parseSchemaJson(content?.schemaJson).ok
  );
}

// ---- Hreflang -------------------------------------------------------------
// Saved as an array of { lang, url } rows (lang = "en-gb", "hi-in",
// "x-default", ...). Language = 2-3 letters, optional script (4 letters) and
// optional region (2 letters or 3 digits).
const HREFLANG_RE = /^(x-default|[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|[0-9]{3}))?)$/i;

export function isValidHreflangCode(code) {
  return HREFLANG_RE.test(String(code || "").trim());
}

// Cleans whatever is stored into [{ lang, url }] (lowercased codes, absolute
// URLs, no blanks). Never throws — bad rows are dropped.
export function normalizeHreflang(value) {
  const rows = Array.isArray(value) ? value : [];
  const out = [];
  for (const row of rows) {
    const lang = String(row?.lang ?? "").trim().toLowerCase();
    let url = String(row?.url ?? "").trim();
    if (!lang || !url || !isValidHreflangCode(lang)) continue;
    if (url.startsWith("/")) url = absoluteUrl(url);
    if (!/^https?:\/\//i.test(url)) continue;
    out.push({ lang, url });
  }
  return out;
}
