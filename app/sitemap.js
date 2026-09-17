import connectDB from "@/db/connect";
import Blog from "@/models/blog";
import { INDUSTRIES } from "@/lib/industriesData";
import { SUB_SERVICE_CONTENT_REGISTRY } from "@/lib/subServiceContentRegistry";

const BASE_URL = "https://bizzbuzzcreations.com";

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

export default async function sitemap() {
  await connectDB();
  const posts = await Blog.find({ status: "published" })
    .select("slug publishedAt updatedAt")
    .lean();

  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const staticPages = STATIC_PAGES.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  // All 15 /industries/<slug> pages — pulled from the same INDUSTRIES data
  // every industry page and nav menu already uses, so a new industry added
  // there shows up here automatically.
  const industryPages = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // All 44 /<hub>/<slug> sub-service pages — pulled from the same registry
  // the dashboard's Sub-Service Pages editor uses, so a new sub-service
  // added there shows up here automatically too.
  const subServicePages = SUB_SERVICE_CONTENT_REGISTRY.map((entry) => ({
    url: `${BASE_URL}/${entry.hub}/${entry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...industryPages,
    ...subServicePages,
    ...blogPages,
  ];
}
