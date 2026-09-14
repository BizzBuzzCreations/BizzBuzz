import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-startup-new-business-consulting", {
  title: "Startup & New Business Consultant | BizzBuzz Creations",
  description: "BizzBuzz Creations is a startup business consultant helping founders launch and grow across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/startup-new-business-consulting"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "startup-new-business-consulting");

export default async function StartupNewBusinessConsulting() {
  const overrides = await getPageContent("subservice-business-consultancy-startup-new-business-consulting");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
