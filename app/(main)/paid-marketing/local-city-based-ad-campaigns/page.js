import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-local-city-based-ad-campaigns", {
  title: "ChatGPT & AI Platform Ads Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a ChatGPT ads agency running AI platform advertising campaigns for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/local-city-based-ad-campaigns"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "local-city-based-ad-campaigns");

export default async function LocalCityBasedAdCampaigns() {
  const overrides = await getPageContent("subservice-paid-marketing-local-city-based-ad-campaigns");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
