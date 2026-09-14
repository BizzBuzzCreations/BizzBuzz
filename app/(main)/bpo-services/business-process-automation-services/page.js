import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-bpo-services-business-process-automation-services", {
  title: "Business Process Automation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations delivers business process automation services that save time for companies across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/business-process-automation-services"
  }
});
}

const staticContent = getSubServicePageContent("bpo-services", "business-process-automation-services");

export default async function BusinessProcessAutomationServices() {
  const overrides = await getPageContent("subservice-bpo-services-business-process-automation-services");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
