import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-business-consultancy-operations-process-consulting", {
  title: "Operations & Process Consulting Firm | BizzBuzz Creations",
  description: "BizzBuzz Creations is an operations consulting firm improving business processes for companies across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy/operations-process-consulting"
  }
});
}

const staticContent = getSubServicePageContent("business-consultancy", "operations-process-consulting");

export default async function OperationsProcessConsulting() {
  const overrides = await getPageContent("subservice-business-consultancy-operations-process-consulting");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
