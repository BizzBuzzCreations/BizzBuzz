import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-performance-marketing-roi-campaigns", {
  title: "Performance Marketing Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a performance marketing agency running data-driven, ROI-focused campaigns across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/performance-marketing-roi-campaigns"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "performance-marketing-roi-campaigns");

export default async function PerformanceMarketingRoiCampaigns() {
  const overrides = await getPageContent("subservice-paid-marketing-performance-marketing-roi-campaigns");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
