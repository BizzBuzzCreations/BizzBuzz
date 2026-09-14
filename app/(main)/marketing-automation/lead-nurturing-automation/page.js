import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-marketing-automation-lead-nurturing-automation", {
  title: "Lead Nurturing Automation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations provides lead nurturing automation that moves prospects toward sales across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation/lead-nurturing-automation"
  }
});
}

const staticContent = getSubServicePageContent("marketing-automation", "lead-nurturing-automation");

export default async function LeadNurturingAutomation() {
  const overrides = await getPageContent("subservice-marketing-automation-lead-nurturing-automation");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
