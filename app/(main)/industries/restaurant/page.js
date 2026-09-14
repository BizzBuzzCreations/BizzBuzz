import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("restaurant");
const staticContent = getIndustryPageContent("restaurant");

export async function generateMetadata() {
  return buildPageMetadata("industry-restaurant", {
  title: "Restaurant Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a restaurant digital marketing agency helping restaurants, cafes, and cloud kitchens grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/restaurant",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-restaurant");
  const content = mergeIndustryContent(staticContent, overrides);
  return (
    <IndustryDetailPage
      label={industry.label}
      icon={industry.icon}
      description={industry.description}
      spectrumHeading={`Our Full Spectrum of ${industry.label} Marketing Services`}
      serviceBreakdownFlip
      {...content}
    />
  );
}
