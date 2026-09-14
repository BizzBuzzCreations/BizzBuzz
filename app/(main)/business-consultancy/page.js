import Link from "next/link";
import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import RichText from "@/components/ui/richText";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import BpoWeAre from "@/components/sections/bpoWeAre";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { getServicePageContent } from "@/lib/servicePageContent";
import { mergeServiceContent } from "@/lib/serviceContentRegistry";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("service-business-consultancy", {
  title: "Top Business Consulting Firm | BizzBuzz Creations",
  description:
    "BizzBuzz Creations is a business consulting firm advising on strategy, growth and operations for India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy",
  },
});
}

const staticContent = getServicePageContent("business-consultancy");

export default async function BusinessConsultancy() {
  const overrides = await getPageContent("service-business-consultancy");
  const content = mergeServiceContent(staticContent, overrides);

  return (
    <>
      <BpoHero
        heading={content.heroHeading}
        description={content.heroDescription}
        img={content.heroImage}
        ctaText={content.heroCtaText}
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          {/* /bc-img.png doesn't exist in /public — was rendering as a
              broken image icon. Swapped for a real photo. */}
          <div className="hidden lg:block relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src={content.introImage}
              alt="BizzBuzz Creations business consultants at work"
              fill
              sizes="440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2 text-white">
              {content.introHeading}
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-4">
              {content.introTagline}
            </h3>
            {/* Mobile-only — image between the tagline and the
                paragraphs; desktop shows its own copy on the left via
                lg:flex-row above. */}
            <div className="lg:hidden relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-xl mb-6">
              <Image
                src={content.introImage}
                alt="BizzBuzz Creations business consultants at work"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(200deg, rgba(5,11,22,0.75) 0%, rgba(11,96,176,0.3) 45%, transparent 75%)",
                }}
                aria-hidden="true"
              />
            </div>
            <RichText as="p" text={content.introParagraphOne} className="text-white/70 leading-relaxed mb-4" />
            <RichText as="p" text={content.introParagraphTwo} className="text-white/70 leading-relaxed" />
          </div>
        </div>
      </section>

      {/* "Six Ways We Help Your Business Move Forward" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title={content.servicesGridHeading}
            subheading={content.servicesGridSubheading}
            items={content.services}
          />
        </div>
      </section>

      {/* "How We Turn Advice Into Action" — auto-scrolling carousel
          (right-to-left, pauses on hover) instead of a static accordion,
          so the six-step process reads as motion. */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            {content.roadmapHeading}
          </h2>
          <RichText as="p" text={content.roadmapSubtext} className="text-white/60 text-center max-w-2xl mx-auto mb-14" />
          <RoadmapCarousel steps={content.roadmapSteps} />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title={content.weAreHeading}
          description={content.weAreDescription}
          points={content.weArePoints}
        />
      </section>

      <DarkFAQSection
        faqs={content.faqs}
        heading={content.faqHeading}
        subheading={content.faqSubheading}
      />

      {/* "Why Businesses Trust Our Advice, and Where We're Rooted" —
          heading on top, copy on the left, image on the right. */}
      <section className="relative overflow-hidden bg-black py-20">
        <div className="relative max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            {content.trustHeading}
          </h2>
          <RichText as="p" text={content.trustSubtext} className="text-white/60 text-center max-w-2xl mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <div className="md:hidden relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6">
                <Image
                  src={content.trustImage}
                  alt="Why businesses trust BizzBuzz Creations' advice"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <RichText as="p" text={content.trustParagraphOne} className="text-white/70 leading-relaxed mb-4" />
              <RichText as="p" text={content.trustParagraphTwo} className="text-white/70 leading-relaxed" />
            </div>
            <div className="hidden md:block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={content.trustImage}
                alt="Why businesses trust BizzBuzz Creations' advice"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Page-local CTA — heading + paragraph + two buttons, both pointing
          to /contact, instead of the shared email-form CTA. */}
      <div className="bg-black px-5 py-10 scroll-mt-34" id="CTA">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-10 z-10 text-white">
            <h2 className="md:text-3xl text-2xl font-bold mb-2">
              {content.ctaHeading}
            </h2>
            <h3 className="text-base font-semibold text-[#40A2D8] mb-5">
              {content.ctaTagline}
            </h3>
            <RichText as="p" text={content.ctaParagraph} className="max-w-3xl text-white/70 mb-8" />
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                {content.ctaPrimaryText}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
              >
                {content.ctaSecondaryText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Same full-width divider the shared CTA ends with, so this page
          still transitions into the footer the same way. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
