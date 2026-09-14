import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("fitness");
const staticContent = getIndustryPageContent("fitness");

export async function generateMetadata() {
  return buildPageMetadata("industry-fitness", {
  title: "Fitness Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fitness digital marketing agency helping gyms, studios, and personal trainers get more leads and members across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/fitness",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-fitness");
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
