import connectDB from "@/db/connect";
import Blog from "@/models/blog";
import PageContent from "@/models/pageContent";
import OutsidePage from "@/models/outsidePage";
import { INDUSTRIES } from "@/lib/industriesData";
import { SUB_SERVICE_CONTENT_REGISTRY } from "@/lib/subServiceContentRegistry";
import { PAGE_PATHS, SITE_URL } from "@/lib/pagePaths";
import { isTrue, isValidSlug, originalPathFor, publicPathFor } from "@/lib/seo";

// Every static, hand-authored page on the site — everything that isn't
// generated from a registry below (industries, sub-services, blog posts).
const STATIC_PAGES = [
  { path: "", changeFrequency: "yearly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "weekly", priority: 0.5 },
  { path: "/career", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.6 },
  { path: "/how-we-work", changeFrequency: "monthly", priority: 0.6 },
  { path: "/our-team", changeFrequency: "monthly", priority: 0.5 },
  { path: "/our-team/bpo-team", changeFrequency: "monthly", priority: 0.4 },
  { path: "/our-team/rnd-team", changeFrequency: "monthly", priority: 0.4 },
  { path: "/services", changeFrequency: "weekly", priority: 0.8 },
  { path: "/industries", changeFrequency: "weekly", priority: 0.7 },
  { path: "/blog", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  // The 8 main service-category hub pages.
  { path: "/web-development", changeFrequency: "weekly", priority: 0.7 },
  { path: "/search-engine-optimization", changeFrequency: "weekly", priority: 0.7 },
  { path: "/paid-marketing", changeFrequency: "weekly", priority: 0.7 },
  { path: "/bpo-services", changeFrequency: "weekly", priority: 0.7 },
  { path: "/business-consultancy", changeFrequency: "weekly", priority: 0.7 },
  { path: "/social-media-marketing", changeFrequency: "weekly", priority: 0.7 },
  { path: "/ai-solutions", changeFrequency: "weekly", priority: 0.7 },
  { path: "/marketing-automation", changeFrequency: "weekly", priority: 0.7 },
  // Hidden landing page (dashboard: "Outside Location Page") — no
  // internal link anywhere on the site, so it relies entirely on this
  // sitemap entry for search engines to find and index it.
  { path: "/en-uk/digital-marketing-services-in-uk", changeFrequency: "monthly", priority: 0.5 },
];

// Per-page choices saved from the dashboard's SEO panel, keyed by the
// page's real path: excluded from the sitemap (explicitly, or because it's
// set to noindex) and/or served at a different URL slug.
async function loadPageOverrides() {
  const docs = await PageContent.find({
    $or: [
      { "fields.sitemapInclude": { $in: [false, "false"] } },
      { "fields.robotsIndex": "noindex" },
      { "fields.seoSlug": { $exists: true, $ne: "" } },
    ],
  })
    .select("pageKey fields.sitemapInclude fields.robotsIndex fields.seoSlug")
    .lean();

  const byOriginalPath = {};
  for (const doc of docs) {
    const original = originalPathFor(doc.pageKey);
    if (!original) continue;
    const f = doc.fields || {};
    const slug = f.seoSlug && isValidSlug(f.seoSlug) ? f.seoSlug : "";
    byOriginalPath[original] = {
      excluded: !isTrue(f.sitemapInclude, true) || f.robotsIndex === "noindex",
      publicPath: slug ? publicPathFor(doc.pageKey, slug) : original,
    };
  }
  return byOriginalPath;
}

// All sitemap entries ({ url, lastModified, changeFrequency, priority }),
// after applying each page's include/exclude + URL slug choices.
export async function buildSitemapEntries() {
  await connectDB();
  const [posts, overrides, outsidePages] = await Promise.all([
    Blog.find({ status: "published" })
      .select("slug publishedAt updatedAt")
      .lean(),
    loadPageOverrides(),
    OutsidePage.find({}).select("slug").lean(),
  ]);

  const entry = (path, changeFrequency, priority) => {
    const key = path === "" ? "/" : path;
    const o = overrides[key];
    if (o?.excluded) return null;
    const publicPath = o?.publicPath ?? key;
    return {
      url: `${SITE_URL}${publicPath === "/" ? "" : publicPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  };

  const staticPages = STATIC_PAGES.map((p) =>
    entry(p.path, p.changeFrequency, p.priority),
  );
  // All 15 /industries/<slug> pages — pulled from the same INDUSTRIES data
  // every industry page and nav menu already uses.
  const industryPages = INDUSTRIES.map((i) =>
    entry(`/industries/${i.slug}`, "monthly", 0.6),
  );
  // All 44 /<hub>/<slug> sub-service pages — pulled from the same registry
  // the dashboard's Sub-Service Pages editor uses.
  const subServicePages = SUB_SERVICE_CONTENT_REGISTRY.map((e) =>
    entry(`/${e.hub}/${e.slug}`, "monthly", 0.6),
  );
  // Pages created from the dashboard's Outside Location section.
  const outsideLocationPages = outsidePages.map((p) =>
    entry(`/en-uk/${p.slug}`, "monthly", 0.5),
  );
  const blogPages = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...industryPages,
    ...subServicePages,
    ...outsideLocationPages,
    ...blogPages,
  ].filter(Boolean);
}

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function entriesToXml(entries) {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${esc(e.url)}</loc>\n    <lastmod>${e.lastModified.toISOString()}</lastmod>\n    <changefreq>${e.changeFrequency}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
