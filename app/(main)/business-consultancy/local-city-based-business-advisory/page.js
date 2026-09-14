import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-local-city-based-business-advisory", {
  title: "Local Business Advisor & Consultant | BizzBuzz Creations",
  description: "BizzBuzz Creations is a local business advisor helping small businesses in Prayagraj and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/local-city-based-business-advisory"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "local-city-based-business-advisory");

export default async function LocalCityBasedBusinessAdvisory() {
  const overrides = await getPageContent("subservice-business-consultancy-local-city-based-business-advisory");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
