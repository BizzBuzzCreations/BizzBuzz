import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-search-engine-optimization-ai-content-optimization", {
  title: "White Label SEO Services for Agencies | BizzBuzz Creations",
  description: "BizzBuzz Creations provides white label SEO fulfillment for agencies serving clients across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/ai-content-optimization"
  }
});
}

const staticContent = getSubServicePageContent("search-engine-optimization", "ai-content-optimization");

export default async function AgencyGrowthWhiteLabelSeo() {
  const overrides = await getPageContent("subservice-search-engine-optimization-ai-content-optimization");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
