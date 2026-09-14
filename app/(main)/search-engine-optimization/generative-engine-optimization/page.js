import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-search-engine-optimization-generative-engine-optimization", {
  title: "Generative Engine Optimization Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations offers generative engine optimization services that get your brand cited by ChatGPT and other AI tools worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/generative-engine-optimization"
  }
});
}

const staticContent = getSubServicePageContent("search-engine-optimization", "generative-engine-optimization");

export default async function GenerativeEngineOptimization() {
  const overrides = await getPageContent("subservice-search-engine-optimization-generative-engine-optimization");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
