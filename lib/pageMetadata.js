import { getPageContent } from "@/actions/pageContentActions";
import {
  absoluteUrl,
  normalizeHreflang,
  publicPathFor,
  splitKeywords,
} from "@/lib/seo";

const absoluteImage = (src) =>
  src && src.startsWith("/") ? absoluteUrl(src) : src;

// Shared by every page's generateMetadata() — pulls everything the
// dashboard saves for a page (meta title/description, URL slug, canonical,
// keywords, Open Graph + X/Twitter tags, index/follow) and falls back to
// the page's own real, hardcoded metadata whenever nothing's been saved
// yet, so nothing goes blank before an admin edits it. Any other metadata
// keys (icons, ...) pass through untouched from `fallback`.
export async function buildPageMetadata(pageKey, fallback) {
  const content = await getPageContent(pageKey);

  const title = content?.metaTitle || fallback.title;
  const description = content?.metaDescription || fallback.description;
  const meta = { ...fallback, title, description };

  // Canonical: an explicit one wins; otherwise, if the page's URL slug was
  // changed, canonical follows the new URL; otherwise the page's own.
  const slugPath = content?.seoSlug
    ? publicPathFor(pageKey, content.seoSlug)
    : null;
  const canonical =
    content?.seoCanonical ||
    (slugPath ? absoluteUrl(slugPath) : fallback.alternates?.canonical);
  if (canonical) {
    meta.alternates = { ...fallback.alternates, canonical };
  }

  // Hreflang rows -> <link rel="alternate" hreflang="..." href="...">.
  const hreflang = normalizeHreflang(content?.hreflang);
  if (hreflang.length) {
    meta.alternates = {
      ...(meta.alternates || fallback.alternates),
      languages: {
        ...(fallback.alternates?.languages || {}),
        ...Object.fromEntries(hreflang.map((r) => [r.lang, r.url])),
      },
    };
  }

  const keywords = [
    content?.seoPrimaryKeyword,
    ...splitKeywords(content?.seoSecondaryKeywords),
  ].filter(Boolean);
  if (keywords.length) meta.keywords = keywords;

  const hasOg =
    content?.ogTitle || content?.ogDescription || content?.ogImage;
  if (hasOg) {
    const fb = fallback.openGraph || {};
    meta.openGraph = {
      siteName: "Digital Marketing Agency",
      ...fb,
      title: content.ogTitle || fb.title || title,
      description: content.ogDescription || fb.description || description,
      ...(canonical ? { url: canonical } : {}),
      ...(content.ogImage
        ? { images: [{ url: absoluteImage(content.ogImage) }] }
        : {}),
    };
  }

  const hasTwitter =
    content?.twTitle || content?.twDescription || content?.twImage;
  if (hasTwitter) {
    const fb = fallback.twitter || {};
    meta.twitter = {
      card: "summary_large_image",
      ...fb,
      title: content.twTitle || fb.title || meta.openGraph?.title || title,
      description:
        content.twDescription ||
        fb.description ||
        meta.openGraph?.description ||
        description,
      ...(content.twImage
        ? { images: [absoluteImage(content.twImage)] }
        : content.ogImage
          ? { images: [absoluteImage(content.ogImage)] }
          : {}),
    };
  }

  const index = content?.robotsIndex === "noindex" ? false : true;
  const follow = content?.robotsFollow === "nofollow" ? false : true;
  if (!index || !follow) {
    meta.robots = { index, follow };
  }

  return meta;
}
