import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("real-estate");
const staticContent = getIndustryPageContent("real-estate");

export async function generateMetadata() {
  return buildPageMetadata("industry-real-estate", {
  title: "Real Estate Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a real estate digital marketing agency helping builders, realtors, and developers generate leads across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/real-estate",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-real-estate");
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
