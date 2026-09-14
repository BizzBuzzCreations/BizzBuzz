import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-google-search-ads-management", {
  title: "Google Ads Management Services | BizzBuzz Creations",
  description: "BizzBuzz Creations is a Google Ads agency delivering measurable PPC campaigns for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/google-search-ads-management"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "google-search-ads-management");

export default async function GoogleSearchAdsManagement() {
  const overrides = await getPageContent("subservice-paid-marketing-google-search-ads-management");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
