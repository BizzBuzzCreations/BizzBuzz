import mongoose from "mongoose";
import PageContent from "@/models/pageContent";
import Redirect from "@/models/redirect";
import { isValidSlug, originalPathFor, publicPathFor } from "@/lib/seo";

// Everything proxy.js needs to decide what to do with a request: the
// dashboard's enabled 301 redirects plus the URL-slug overrides saved on
// individual pages (public path -> real path rewrites, and the old real
// path -> new public path 301s). Cached briefly in memory so the proxy
// doesn't hit MongoDB on every single request.
const TTL_MS = 20_000;
let cache = { at: 0, rules: null };

// Not db/connect.js: that one calls process.exit(1) when MongoDB is
// unreachable, which must never happen inside a request-path proxy.
async function connectSafe() {
  if (mongoose.connection.readyState === 1) return true;
  if (!process.env.MONGO_URI) return false;
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    return true;
  } catch (error) {
    console.error("Routing rules: MongoDB connect failed:", error.message);
    return false;
  }
}

const EMPTY = { redirects: {}, slugRedirects: {}, rewrites: {} };

export async function getRoutingRules() {
  if (cache.rules && Date.now() - cache.at < TTL_MS) return cache.rules;
  try {
    if (!(await connectSafe())) return cache.rules || EMPTY;

    const [redirectDocs, slugDocs] = await Promise.all([
      Redirect.find({ enabled: true }).select("from to").lean(),
      PageContent.find({ "fields.seoSlug": { $exists: true, $ne: "" } })
        .select("pageKey fields.seoSlug")
        .lean(),
    ]);

    const rules = { redirects: {}, slugRedirects: {}, rewrites: {} };
    for (const r of redirectDocs) rules.redirects[r.from] = r.to;
    for (const doc of slugDocs) {
      const slug = doc.fields?.seoSlug;
      const original = originalPathFor(doc.pageKey);
      if (!slug || !original || !isValidSlug(slug)) continue;
      const publicPath = publicPathFor(doc.pageKey, slug);
      if (!publicPath || publicPath === original) continue;
      rules.slugRedirects[original] = publicPath;
      rules.rewrites[publicPath] = original;
    }
    cache = { at: Date.now(), rules };
    return rules;
  } catch (error) {
    console.error("Routing rules load failed:", error);
    return cache.rules || EMPTY;
  }
}
