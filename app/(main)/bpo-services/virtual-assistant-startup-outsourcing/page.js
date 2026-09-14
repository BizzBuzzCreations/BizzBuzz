import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-bpo-services-virtual-assistant-startup-outsourcing", {
  title: "Virtual Assistant Services | BizzBuzz Creations",
  description: "BizzBuzz Creations provides dedicated virtual assistant services for startups",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/virtual-assistant-startup-outsourcing"
  }
});
}

const staticContent = getSubServicePageContent("bpo-services", "virtual-assistant-startup-outsourcing");

export default async function VirtualAssistantStartupOutsourcing() {
  const overrides = await getPageContent("subservice-bpo-services-virtual-assistant-startup-outsourcing");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
