import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("ecommerce");
const staticContent = getIndustryPageContent("ecommerce");

export async function generateMetadata() {
  return buildPageMetadata("industry-ecommerce", {
  title: "E-commerce Digital Marketing Agency | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is an e-commerce digital marketing agency helping D2C brands, Shopify and Amazon sellers grow sales across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/ecommerce",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-ecommerce");
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
