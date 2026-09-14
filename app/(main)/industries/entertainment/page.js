import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("entertainment");
const staticContent = getIndustryPageContent("entertainment");

export async function generateMetadata() {
  return buildPageMetadata("industry-entertainment", {
  title: "Entertainment Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an entertainment digital marketing agency helping artists, OTT platforms, and creators grow audiences across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/entertainment",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-entertainment");
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
