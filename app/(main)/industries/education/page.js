import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("education");
const staticContent = getIndustryPageContent("education");

export async function generateMetadata() {
  return buildPageMetadata("industry-education", {
  title: "Education Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an education digital marketing agency helping schools, coaching institutes, and EdTech brands grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/education",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-education");
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
