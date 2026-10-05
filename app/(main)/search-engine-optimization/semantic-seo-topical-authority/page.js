import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("subservice-search-engine-optimization-semantic-seo-topical-authority", {
  title: "Semantic SEO & Topical Authority Services | BizzBuzz Creations",
  description: "Semantic SEO and topical authority services in India — build your website into a trusted authority within your niche through content clusters and entity SEO, by BizzBuzz Creations.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/semantic-seo-topical-authority"
  }
});
}

const staticContent = getSubServicePageContent("search-engine-optimization", "semantic-seo-topical-authority");

export default async function SemanticSeoTopicalAuthority() {
  const overrides = await getPageContent("subservice-search-engine-optimization-semantic-seo-topical-authority");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="subservice-search-engine-optimization-semantic-seo-topical-authority" />
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
    </>
  );
}
