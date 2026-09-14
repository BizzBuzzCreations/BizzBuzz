import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-ai-solutions-ai-content-generative-engines", {
  title: "AI Content Generation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations offers AI content generation services combining generative AI and strategy across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions/ai-content-generative-engines"
  }
});
}

const staticContent = getSubServicePageContent("ai-solutions", "ai-content-generative-engines");

export default async function AiContentGenerativeEngines() {
  const overrides = await getPageContent("subservice-ai-solutions-ai-content-generative-engines");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
