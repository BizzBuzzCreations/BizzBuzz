import { getPageContent } from "@/actions/pageContentActions";
import { hasCustomSchema, isTrue, parseSchemaJson } from "@/lib/seo";
import ImageAltPatcher from "@/components/sections/imageAltPatcher";

// Rendered once near the top of every dashboard-editable page. Outputs
// what the SEO panel saves that can't go through generateMetadata():
//   - the page's JSON-LD schema (when enabled and valid)
//   - the image alt-text overrides
export default async function PageSeoScripts({ pageKey }) {
  const content = await getPageContent(pageKey);

  let jsonLd = null;
  if (isTrue(content?.schemaEnabled, false)) {
    const parsed = parseSchemaJson(content.schemaJson);
    if (parsed.ok) {
      jsonLd = parsed.data["@context"]
        ? parsed.data
        : { "@context": "https://schema.org", ...parsed.data };
    }
  }

  const alts = content?.imageAlts || {};
  const hasAlts = Object.keys(alts).length > 0;

  if (!jsonLd && !hasAlts) return null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          // Lets the site-wide default schema (allScripts.js) see that this
          // page carries its own and not add a duplicate.
          data-custom-schema="true"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {hasAlts && <ImageAltPatcher alts={alts} />}
    </>
  );
}
