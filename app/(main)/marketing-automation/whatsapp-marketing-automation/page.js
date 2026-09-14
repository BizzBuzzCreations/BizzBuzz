import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-marketing-automation-whatsapp-marketing-automation", {
  title: "WhatsApp Marketing Automation | BizzBuzz Creations",
  description: "BizzBuzz Creations provides WhatsApp marketing automation that engages customers directly across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation/whatsapp-marketing-automation"
  }
});
}

const staticContent = getSubServicePageContent("marketing-automation", "whatsapp-marketing-automation");

export default async function WhatsappMarketingAutomation() {
  const overrides = await getPageContent("subservice-marketing-automation-whatsapp-marketing-automation");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
