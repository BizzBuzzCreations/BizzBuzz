import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("subservice-web-development-custom-web-development", {
  title: "Custom Web Development Company | BizzBuzz Creations",
  description: "BizzBuzz Creations is a custom web development company building bespoke websites and web apps for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/custom-web-development"
  }
});
}

const staticContent = getSubServicePageContent("web-development", "custom-web-development");

export default async function CustomWebDevelopment() {
  const overrides = await getPageContent("subservice-web-development-custom-web-development");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <>
      <PageSeoScripts pageKey="subservice-web-development-custom-web-development" />
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
    </>
  );
}
