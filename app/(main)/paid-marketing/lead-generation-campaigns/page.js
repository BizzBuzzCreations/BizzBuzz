import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-lead-generation-campaigns", {
  title: "Lead Generation Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a lead generation agency delivering qualified leads for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/lead-generation-campaigns"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "lead-generation-campaigns");

export default async function LeadGenerationCampaigns() {
  const overrides = await getPageContent("subservice-paid-marketing-lead-generation-campaigns");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
