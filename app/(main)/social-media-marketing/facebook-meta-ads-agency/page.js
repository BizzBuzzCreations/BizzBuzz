import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-social-media-marketing-facebook-meta-ads-agency", {
  title: "Facebook & Meta Ads Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a Facebook & Meta ads agency running conversion-focused campaigns for brands across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/facebook-meta-ads-agency"
  }
});
}

const staticContent = getSubServicePageContent("social-media-marketing", "facebook-meta-ads-agency");

export default async function FacebookMetaAdsAgency() {
  const overrides = await getPageContent("subservice-social-media-marketing-facebook-meta-ads-agency");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
