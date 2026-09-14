import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-marketing-automation-crm-marketing-automation", {
  title: "CRM Marketing Automation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations provides CRM marketing automation that connects your data and campaigns across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation/crm-marketing-automation"
  }
});
}

const staticContent = getSubServicePageContent("marketing-automation", "crm-marketing-automation");

export default async function CrmMarketingAutomation() {
  const overrides = await getPageContent("subservice-marketing-automation-crm-marketing-automation");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
