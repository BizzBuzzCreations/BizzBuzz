import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-web-development-shopify-ecommerce-development", {
  title: "Shopify & Ecommerce Development Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a Shopify development agency building fast, conversion-focused e-commerce stores for brands across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/shopify-ecommerce-development"
  }
});
}

const staticContent = getSubServicePageContent("web-development", "shopify-ecommerce-development");

export default async function ShopifyEcommerceDevelopment() {
  const overrides = await getPageContent("subservice-web-development-shopify-ecommerce-development");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
