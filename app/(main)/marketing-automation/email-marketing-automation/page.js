import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-marketing-automation-email-marketing-automation", {
  title: "Email Marketing Automation Services | BizzBuzz Creations",
  description: "BizzBuzz Creations provides email marketing automation services that turn subscribers into customers across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation/email-marketing-automation"
  }
});
}

const staticContent = getSubServicePageContent("marketing-automation", "email-marketing-automation");

export default async function EmailMarketingAutomation() {
  const overrides = await getPageContent("subservice-marketing-automation-email-marketing-automation");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
