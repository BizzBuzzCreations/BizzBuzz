import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("manufacturing");
const staticContent = getIndustryPageContent("manufacturing");

export async function generateMetadata() {
  return buildPageMetadata("industry-manufacturing", {
  title: "B2B Manufacturing Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a B2B digital marketing agency helping manufacturers and industrial companies generate leads across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/manufacturing",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-manufacturing");
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
