import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-search-engine-optimization-high-intent-local-seo", {
  title: "High-Intent & Local SEO Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations offers high-intent local SEO services that bring nearby, ready-to-buy customers across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization/high-intent-local-seo"
  }
});
}

const staticContent = getSubServicePageContent("search-engine-optimization", "high-intent-local-seo");

export default async function HighIntentLocalSeo() {
  const overrides = await getPageContent("subservice-search-engine-optimization-high-intent-local-seo");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
