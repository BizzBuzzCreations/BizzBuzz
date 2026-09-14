import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-web-development-wordpress-development", {
  title: "WordPress Development Company | BizzBuzz Creations",
  description: "BizzBuzz Creations is a WordPress development company building custom WordPress and WooCommerce sites for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/wordpress-development"
  }
});
}

const staticContent = getSubServicePageContent("web-development", "wordpress-development");

export default async function WordPressDevelopment() {
  const overrides = await getPageContent("subservice-web-development-wordpress-development");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
