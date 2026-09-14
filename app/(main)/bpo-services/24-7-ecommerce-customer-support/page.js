import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-bpo-services-24-7-ecommerce-customer-support", {
  title: "24/7 & Ecommerce Customer Support | BizzBuzz Creations",
  description: "BizzBuzz Creations provides 24/7 e-commerce customer support outsourcing for online stores across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/24-7-ecommerce-customer-support"
  }
});
}

const staticContent = getSubServicePageContent("bpo-services", "24-7-ecommerce-customer-support");

export default async function TwentyFourSevenEcommerceCustomerSupport() {
  const overrides = await getPageContent("subservice-bpo-services-24-7-ecommerce-customer-support");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
