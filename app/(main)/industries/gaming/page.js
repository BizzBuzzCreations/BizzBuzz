import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("gaming");
const staticContent = getIndustryPageContent("gaming");

export async function generateMetadata() {
  return buildPageMetadata("industry-gaming", {
  title: "Gaming Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a gaming digital marketing agency helping mobile games, esports and gaming brands grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/gaming",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-gaming");
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
