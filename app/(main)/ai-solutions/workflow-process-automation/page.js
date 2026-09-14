import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-ai-solutions-workflow-process-automation", {
  title: "AI Workflow Automation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations delivers AI workflow automation using tools like n8n and Zapier for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions/workflow-process-automation"
  }
});
}

const staticContent = getSubServicePageContent("ai-solutions", "workflow-process-automation");

export default async function WorkflowProcessAutomation() {
  const overrides = await getPageContent("subservice-ai-solutions-workflow-process-automation");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
