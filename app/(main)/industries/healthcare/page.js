import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("healthcare");
const staticContent = getIndustryPageContent("healthcare");

export async function generateMetadata() {
  return buildPageMetadata("industry-healthcare", {
  title: "Healthcare Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations helps hospitals, clinics and doctors grow with healthcare SEO, PPC, content and social media marketing across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/healthcare",
  },
});
}

export default async function HealthcareIndustryPage() {
  const overrides = await getPageContent("industry-healthcare");
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
