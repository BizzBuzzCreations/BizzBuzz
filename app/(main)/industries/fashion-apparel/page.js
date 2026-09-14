import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("fashion-apparel");
const staticContent = getIndustryPageContent("fashion-apparel");

export async function generateMetadata() {
  return buildPageMetadata("industry-fashion-apparel", {
  title: "Fashion Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a fashion digital marketing agency helping D2C, apparel and clothing brands grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/fashion-apparel",
  },
});
}

export default async function FashionApparelIndustryPage() {
  const overrides = await getPageContent("industry-fashion-apparel");
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
