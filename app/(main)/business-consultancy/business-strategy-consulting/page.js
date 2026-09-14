import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-business-strategy-consulting", {
  title: "Business Strategy Consulting Firm | BizzBuzz Creations",
  description: "BizzBuzz Creations is a business strategy consulting firm helping companies plan and grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/business-strategy-consulting"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "business-strategy-consulting");

export default async function BusinessStrategyConsulting() {
  const overrides = await getPageContent("subservice-business-consultancy-business-strategy-consulting");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
