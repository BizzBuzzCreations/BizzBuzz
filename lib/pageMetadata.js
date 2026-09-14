import { getPageContent } from "@/actions/pageContentActions";

// Shared by every page's generateMetadata() — pulls the dashboard-saved
// metaTitle/metaDescription (added to every page's "SEO / Meta" section
// in pageContentRegistry.js) and falls back to the page's own real,
// hardcoded title/description whenever nothing's been saved yet, so
// nothing goes blank before an admin edits it. Any other metadata keys
// (alternates, openGraph, twitter, keywords, icons...) pass through
// untouched from `fallback`.
export async function buildPageMetadata(pageKey, fallback) {
  const content = await getPageContent(pageKey);
  return {
    ...fallback,
    title: content?.metaTitle || fallback.title,
    description: content?.metaDescription || fallback.description,
  };
}
