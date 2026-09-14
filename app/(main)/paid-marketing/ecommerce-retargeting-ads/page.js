import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-paid-marketing-ecommerce-retargeting-ads", {
  title: "Ecommerce & Retargeting Ads Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is an e-commerce ads agency running retargeting and PPC campaigns for stores across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing/ecommerce-retargeting-ads"
  }
});
}

const staticContent = getSubServicePageContent("paid-marketing", "ecommerce-retargeting-ads");

export default async function EcommerceRetargetingAds() {
  const overrides = await getPageContent("subservice-paid-marketing-ecommerce-retargeting-ads");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
