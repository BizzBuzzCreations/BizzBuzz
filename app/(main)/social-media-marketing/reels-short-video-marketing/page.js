import ServiceDetailPage from "@/components/sections/serviceDetailPage";
import { getSubServicePageContent } from "@/lib/subServicePageContent";
import { mergeSubServiceContent } from "@/lib/subServiceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("subservice-social-media-marketing-reels-short-video-marketing", {
  title: "Reels & Short Video Marketing Agency | BizzBuzz Creations",
  description: "BizzBuzz Creations is a Reels and short video marketing agency creating scroll-stopping content for brands across India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing/reels-short-video-marketing"
  }
});
}

const staticContent = getSubServicePageContent("social-media-marketing", "reels-short-video-marketing");

export default async function ReelsShortVideoMarketing() {
  const overrides = await getPageContent("subservice-social-media-marketing-reels-short-video-marketing");
  const content = mergeSubServiceContent(staticContent, overrides);
  return (
    <ServiceDetailPage
      {...content}
      showStats={false}
      showWhyChooseUs={false}
    />
  );
}
