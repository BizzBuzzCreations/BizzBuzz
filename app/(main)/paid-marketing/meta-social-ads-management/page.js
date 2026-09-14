import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-meta-social-ads-management", {
  title: "Meta & Social Ads Management Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a social media ads management agency running paid campaigns across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/meta-social-ads-management"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "meta-social-ads-management");

export default async function MetaSocialAdsManagement() {
  const overrides = await getPageContent("subservice-paid-marketing-meta-social-ads-management");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
