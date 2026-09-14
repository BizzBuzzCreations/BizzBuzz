import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-social-media-marketing-social-media-management-services", {
  title: "Social Media Management Services | BizzBuzz Creations",
  description: "BizzBuzz Creations offers social media management services that grow your brand consistently across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/social-media-management-services"
  }
});
}

const staticContent = getSubServicePageContent("social-media-marketing", "social-media-management-services");

export default async function SocialMediaManagementServices() {
  const overrides = await getPageContent("subservice-social-media-marketing-social-media-management-services");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
