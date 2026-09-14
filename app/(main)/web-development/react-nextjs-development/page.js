import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-web-development-react-nextjs-development", {
  title: "React & Next.js Development Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a React & Next.js development agency building fast, scalable web apps for businesses across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development/react-nextjs-development"
  }
});
}

const staticContent = getSubServicePageContent("web-development", "react-nextjs-development");

export default async function ReactNextjsDevelopment() {
  const overrides = await getPageContent("subservice-web-development-react-nextjs-development");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
