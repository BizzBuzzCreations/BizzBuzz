import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-social-media-marketing-linkedin-marketing-b2b-growth", {
  title: "LinkedIn Marketing Agency for B2B | BizzBuzz Creations",
  description: "BizzBuzz Creations is a LinkedIn marketing agency generating qualified B2B leads for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/linkedin-marketing-b2b-growth"
  }
});
}

const staticContent = getSubServicePageContent("social-media-marketing", "linkedin-marketing-b2b-growth");

export default async function LinkedinMarketingB2bGrowth() {
  const overrides = await getPageContent("subservice-social-media-marketing-linkedin-marketing-b2b-growth");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
