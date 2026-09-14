import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("finance");
const staticContent = getIndustryPageContent("finance");

export async function generateMetadata() {
  return buildPageMetadata("industry-finance", {
  title: "Finance Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fintech and financial services digital marketing agency helping NBFCs, insurers and lenders grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/finance",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-finance");
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
