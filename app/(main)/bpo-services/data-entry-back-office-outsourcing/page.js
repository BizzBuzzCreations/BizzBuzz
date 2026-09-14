import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-bpo-services-data-entry-back-office-outsourcing", {
  title: "Data Entry & Back-Office Outsourcing | BizzBuzz Creations",
  description: "BizzBuzz Creations provides data entry and back-office outsourcing services for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services/data-entry-back-office-outsourcing"
  }
});
}

const staticContent = getSubServicePageContent("bpo-services", "data-entry-back-office-outsourcing");

export default async function DataEntryBackOfficeOutsourcing() {
  const overrides = await getPageContent("subservice-bpo-services-data-entry-back-office-outsourcing");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
