import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-business-development-marketing-consulting", {
  title: "Business Development Consulting | BizzBuzz Creations",
  description: "BizzBuzz Creations provides business development and marketing consulting for companies across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/business-development-marketing-consulting"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "business-development-marketing-consulting");

export default async function BusinessDevelopmentMarketingConsulting() {
  const overrides = await getPageContent("subservice-business-consultancy-business-development-marketing-consulting");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
