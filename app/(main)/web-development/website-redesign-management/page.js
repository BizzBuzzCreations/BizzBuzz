import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-web-development-website-redesign-management", {
  title: "Website Redesign & Management Services | BizzBuzz Creations",
  description: "BizzBuzz Creations offers website redesign and monthly management services that keep sites fast, modern and secure across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/website-redesign-management"
  }
});
}

const staticContent = getSubServicePageContent("web-development", "website-redesign-management");

export default async function WebsiteRedesignManagement() {
  const overrides = await getPageContent("subservice-web-development-website-redesign-management");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
