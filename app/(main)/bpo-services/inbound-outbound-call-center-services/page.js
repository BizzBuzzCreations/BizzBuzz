import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-bpo-services-inbound-outbound-call-center-services", {
  title: "Inbound & Outbound Call Center | BizzBuzz Creations",
  description: "BizzBuzz Creations provides inbound and outbound call center services for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/inbound-outbound-call-center-services"
  }
});
}

const staticContent = getSubServicePageContent("bpo-services", "inbound-outbound-call-center-services");

export default async function InboundOutboundCallCenterServices() {
  const overrides = await getPageContent("subservice-bpo-services-inbound-outbound-call-center-services");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
