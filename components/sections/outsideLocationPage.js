import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import HomeAbout from "@/components/sections/homeAbout";
import HomeHero from "@/components/sections/homeHero";
import OurServices from "@/components/sections/ourServices";
import CaseStudies from "@/components/sections/caseStudies";
import StatsShowcase from "@/components/sections/statsShowcase";
import WhoWeAreBox from "@/components/sections/whoWeAreBox";
import ClioShowcase from "@/components/sections/clioShowcase";
import PraxistenceShowcase from "@/components/sections/praxistenceShowcase";
import Reviews from "@/components/sections/reviews";
import VideoTestimonial from "@/components/sections/videoTestimonial";
import WhatMAkesUs from "@/components/sections/whatMakesUs";
import Recognitions from "@/components/sections/recognitions";
import IndustriesShowcase from "@/components/sections/industriesShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ConsultationPopup from "@/components/sections/popupForm";
import LatestBlogs from "@/components/sections/latestBlogs";
import { getPageContent } from "@/actions/pageContentActions";
import PageSeoScripts from "@/components/sections/pageSeoScripts";
import { ukPageSchema } from "@/lib/ukPageSchema";
import { hasCustomSchema } from "@/lib/seo";

// The Outside Location page layout — the UK page
// (/en-uk/digital-marketing-services-in-uk) and every page created from
// the dashboard's Outside Location section (/en-uk/<slug>) render through
// this one component, so they always have the exact same structure. Only
// `pageKey` differs: it decides which saved content / SEO settings load.
//
// Mostly the same sections as the real homepage, except: the hero's
// background is an either/or Image-or-Video choice (HomeHero's
// `heroMediaChoice`) read from the dashboard's own fields; the hero's big
// outlined "BizzBuzz Creations" wordmark is dropped (`showWordmark={false}`);
// and the "Know More About Us" scroll-zoom section is swapped for
// WhoWeAreBox. Each section can be switched off from the dashboard
// ("Remove section") — `hidden` below.
export default async function OutsideLocationPage({ pageKey }) {
  const content = await getPageContent(pageKey);
  const hidden = new Set(content?.hiddenSections || []);
  const isUk = pageKey === "outside-location-uk";

  return (
    <>
      <PageSeoScripts pageKey={pageKey} />
      {/* The UK page's own structured data (the site-wide India
          LocalBusiness schema is skipped on that route — see allScripts.js);
          `<` is escaped so no field can close the script tag early. Pages
          created from the dashboard use the site-wide default instead, and
          a custom schema saved in the SEO panel replaces either. */}
      {isUk && !hasCustomSchema(content) && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ukPageSchema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      {!hidden.has("hero") && (
        <HomeHero content={content} showWordmark={false} heroMediaChoice separated />
      )}
      {!hidden.has("about") && <HomeAbout content={content} separated />}
      {!hidden.has("services") && <OurServices content={content} />}
      {!hidden.has("caseStudies") && <CaseStudies content={content} plainLogos />}
      {!hidden.has("stats") && <StatsShowcase content={content} />}
      {!hidden.has("praxistenceShowcase") && <PraxistenceShowcase content={content} />}
      {!hidden.has("whoWeAre") && <WhoWeAreBox content={content} />}
      {!hidden.has("clioShowcase") && <ClioShowcase content={content} />}
      {!hidden.has("process") && <WhatMAkesUs content={content} />}
      {!hidden.has("whyChooseUs") && <WhyChooseUs dark content={content} />}
      {!hidden.has("recognitions") && <Recognitions content={content} showIcons={false} />}
      {!hidden.has("industries") && <IndustriesShowcase content={content} />}
      {!hidden.has("reviews") && <Reviews content={content} />}
      {!hidden.has("videoTestimonial") && <VideoTestimonial content={content} />}
      <LatestBlogs dark />
      <div className="bg-black pt-10">
        {!hidden.has("faq") && <FAQ content={content} />}
        {!hidden.has("cta") && <CTA content={content} />}
      </div>
      {!hidden.has("popup") && <ConsultationPopup content={content} />}
    </>
  );
}
