import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("travel");
const staticContent = getIndustryPageContent("travel");

export async function generateMetadata() {
  return buildPageMetadata("industry-travel", {
  title: "Travel Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a travel digital marketing agency helping travel agencies, hotels and tour operators grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/travel",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-travel");
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
