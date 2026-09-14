import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("events");
const staticContent = getIndustryPageContent("events");

export async function generateMetadata() {
  return buildPageMetadata("industry-events", {
  title: "Event Marketing Agency India | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an event marketing agency helping event companies, concerts, and exhibitions grow ticket sales across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/events",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-events");
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
