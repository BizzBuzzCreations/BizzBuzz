import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-business-growth-scaling-consulting", {
  title: "Business Growth & Scaling Consultant | BizzBuzz Creations",
  description: "BizzBuzz Creations is a business growth consultant helping companies scale sustainably across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/business-growth-scaling-consulting"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "business-growth-scaling-consulting");

export default async function BusinessGrowthScalingConsulting() {
  const overrides = await getPageContent("subservice-business-consultancy-business-growth-scaling-consulting");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
