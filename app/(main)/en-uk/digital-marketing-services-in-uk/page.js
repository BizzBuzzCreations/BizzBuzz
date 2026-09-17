import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import OurServices from "@/components/sections/ourServices";
import CaseStudies from "@/components/sections/caseStudies";
import ScrollZoomReveal from "@/components/sections/scrollZoomReveal";
import StatsShowcase from "@/components/sections/statsShowcase";
import AiShowcase from "@/components/sections/aiShowcase";
import Reviews from "@/components/sections/reviews";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import Recognitions from "@/components/sections/recognitions";
import IndustriesShowcase from "@/components/sections/industriesShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConsultationPopup from "@/components/sections/popupForm";
import LatestBlogs from "@/components/sections/latestBlogs";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

// Hidden landing page — same layout/sections as the real homepage, but
// its own editable content (dashboard: "Outside Location Page", below
// Sub-Service Pages) and its own pageKey, so editing it never touches
// the real homepage. Deliberately not linked from the navbar, footer, or
// anywhere else on the site — only reachable at this exact URL (search
// engines / paid campaigns), which is why it's still listed in
// sitemap.xml (so it can be indexed) despite having no internal links.
export async function generateMetadata() {
  return buildPageMetadata("outside-location-uk", {
    title: "Digital Marketing Services in UK | BizzBuzz Creations",
    description:
      "BizzBuzz Creations offers full digital marketing services for businesses in the UK — SEO, Google Ads, social media & web development.",
    alternates: {
      canonical: "https://bizzbuzzcreations.com/en-uk/digital-marketing-services-in-uk",
    },
    robots: {
      // Findable in search results, but never followed/crawled onward
      // from here into the rest of the site via any link a bot might
      // otherwise assume exists on a normal landing page.
      index: true,
      follow: false,
    },
  });
}

export default async function DigitalMarketingServicesInUk() {
  const content = await getPageContent("outside-location-uk");

  return (
    <>
      <HomeHero content={content} />
      <HomeAbout content={content} />
      <OurServices content={content} />
      <CaseStudies content={content} />
      <StatsShowcase content={content} />
      <ScrollZoomReveal />
      <AiShowcase content={content} />
      <WhatMAkesUs content={content} />
      <WhyChooseUs dark content={content} />
      <Recognitions content={content} />
      <IndustriesShowcase content={content} />
      <Reviews content={content} />
      <LatestBlogs dark />
      <div className="bg-black pt-10">
        <FAQ content={content} />
        <CTA content={content} />
      </div>
      <ConsultationPopup content={content} />
    </>
  );
}

export const dynamic = "force-dynamic";
