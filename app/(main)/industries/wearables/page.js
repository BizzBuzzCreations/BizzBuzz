import IndustryDetailPage from "@/components/sections/industryDetailPage";
import { getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryPageContent } from "@/lib/industryPageContent";
import { mergeIndustryContent } from "@/lib/industryContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

const industry = getIndustryBySlug("wearables");
const staticContent = getIndustryPageContent("wearables");

export async function generateMetadata() {
  return buildPageMetadata("industry-wearables", {
  title: "Digital Marketing for Wearable Brands | BizzBuzz Creations",
  description:
    "BizzBuzz Creations helps wearable brands grow with SEO, performance marketing, influencer campaigns and e-commerce strategies across India, the UK, and the USA.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries/wearables",
  },
});
}

export default async function IndustryPage() {
  const overrides = await getPageContent("industry-wearables");
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
