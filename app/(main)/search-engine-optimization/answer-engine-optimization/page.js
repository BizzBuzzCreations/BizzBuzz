import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-search-engine-optimization-answer-engine-optimization", {
  title: "Answer Engine Optimization Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations offers answer engine optimization services that get your content featured in AI overviews and snippets worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/answer-engine-optimization"
  }
});
}

const staticContent = getSubServicePageContent("search-engine-optimization", "answer-engine-optimization");

export default async function AnswerEngineOptimization() {
  const overrides = await getPageContent("subservice-search-engine-optimization-answer-engine-optimization");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
