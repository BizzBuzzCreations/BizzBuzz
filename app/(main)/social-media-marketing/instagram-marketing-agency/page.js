import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-social-media-marketing-instagram-marketing-agency", {
  title: "Instagram Marketing Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is an Instagram marketing agency helping brands grow followers and sales across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/instagram-marketing-agency"
  }
});
}

const staticContent = getSubServicePageContent("social-media-marketing", "instagram-marketing-agency");

export default async function InstagramMarketingAgency() {
  const overrides = await getPageContent("subservice-social-media-marketing-instagram-marketing-agency");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
