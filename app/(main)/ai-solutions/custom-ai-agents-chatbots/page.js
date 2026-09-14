import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-ai-solutions-custom-ai-agents-chatbots", {
  title: "Custom AI Agent Development Company | BizzBuzz Creations",
  description: "BizzBuzz Creations is a custom AI agent development company building chatbots and AI agents for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions/custom-ai-agents-chatbots"
  }
});
}

const staticContent = getSubServicePageContent("ai-solutions", "custom-ai-agents-chatbots");

export default async function CustomAiAgentsChatbots() {
  const overrides = await getPageContent("subservice-ai-solutions-custom-ai-agents-chatbots");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
