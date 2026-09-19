import AboutHero from "@/components/sections/aboutHero";
import CTA from "@/components/sections/CTA";
import Reviews from "@/components/sections/reviews";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Rocket,
  BarChart3,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutFAQ from "@/components/sections/AboutFAQ";
import DifferentiatorsCarousel from "@/components/sections/differentiatorsCarousel";
import TrustAdvantage from "@/components/sections/trustAdvantage";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
import RichText from "@/components/ui/richText";
import AboutCulture from "@/components/sections/aboutCulture";
import OurJourney from "@/components/sections/ourJourney";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";

// icons stay code-driven (design), matched positionally to whichever core
// value cards are saved.
const CORE_VALUE_ICONS = [BarChart3, Eye, Lightbulb, Users, ShieldCheck];

const DEFAULT_CORE_VALUES = [
  { title: "Results Over Reports", description: "We measure success in real growth, not just polished monthly PDFs." },
  { title: "Transparency First", description: "Clear communication, honest timelines, and zero hidden agendas, always." },
  { title: "Innovation-Led Thinking", description: "We track algorithm shifts and AI search trends before they trend." },
  { title: "Client-Centric Culture", description: "Every strategy is built around your business, never a generic template." },
  { title: "Integrity in Execution", description: "Ethical, white-hat practices that protect your brand's reputation long-term." },
];

const DEFAULT_ROADMAP_STEPS = [
  { title: "Discover & Audit", desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities." },
  { title: "Strategize", desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals." },
  { title: "Create & Execute", desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content." },
  { title: "Optimize & Scale", desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI." },
  { title: "Report & Grow", desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day." },
];

export async function generateMetadata() {
  return buildPageMetadata("about", {
  title: "About BizzBuzz Creations | Digital Marketing Agency in Prayagraj",
  description:
    "Meet BizzBuzz Creations, a digital marketing agency in Prayagraj helping businesses across India and worldwide grow through SEO, paid ads, social media, web and digital strategy.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/about",
  },
});
}

export default async function About() {
  const content = await getPageContent("about");

  const storyHeading = content?.storyHeading || "Our Story";
  const storySubheading = content?.storySubheading || "From Local Projects to Global Ambition";
  const storyImage = content?.storyImage || "/team-images/team-5.webp";
  const storyParagraphOne =
    content?.storyParagraphOne ||
    "Every big journey starts somewhere. Ours began in Prayagraj (Allahabad), India, with a simple belief: marketing shouldn't feel like guesswork.";
  const storyParagraphTwo =
    content?.storyParagraphTwo ||
    "BizzBuzz Creations started with a small team of marketers, designers, and strategists determined to help businesses get more from their digital presence. What began locally in Prayagraj has grown into a digital marketing agency serving businesses across India, the UK, the US, and beyond.";
  const storyParagraphThree =
    content?.storyParagraphThree ||
    "Today, we bring together strategy, creativity, technology, SEO, and performance marketing to help businesses build stronger brands, reach the right audiences, and achieve meaningful digital growth.";
  const storyParagraphFour =
    content?.storyParagraphFour ||
    "Our ambition is global, but our approach remains personal: understand the business, build the right strategy, and focus on results that actually matter.";
  // Links inside paragraphs two and three only render on the real,
  // un-edited default copy — an admin override falls back to plain text
  // since a textarea can't carry embedded links.
  const storyParagraphTwoIsDefault = !content?.storyParagraphTwo;
  const storyParagraphThreeIsDefault = !content?.storyParagraphThree;

  const missionVisionHeading = content?.missionVisionHeading || "Our Mission, Vision & Core Values";
  const missionTitle = content?.missionTitle || "Our Mission";
  const missionText =
    content?.missionText ||
    "To help every business unlock measurable growth through smart, ethical, and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.";
  const visionTitle = content?.visionTitle || "Our Vision";
  const visionText =
    content?.visionText ||
    "To become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency.";
  const coreValuesHeading = content?.coreValuesHeading || "Our Core Values";
  const coreValuesRaw = content?.coreValues?.length > 0 ? content.coreValues : DEFAULT_CORE_VALUES;
  const coreValues = coreValuesRaw.map((v, i) => ({ ...v, Icon: CORE_VALUE_ICONS[i % CORE_VALUE_ICONS.length] }));

  const differentiatorsHeading = content?.differentiatorsHeading || "Built Different, Built to Perform";
  const differentiatorsSubtext =
    content?.differentiatorsSubtext ||
    `In a market flooded with agencies promising "guaranteed rankings," we chose a different path — building sustainable digital growth systems instead of chasing quick wins.`;

  const roadmapHeading = content?.roadmapHeading || "How Our Digital Marketing Process Works";
  const roadmapSubheading = content?.roadmapSubheading || "The Bizzbuzz Growth Blueprint";
  const roadmapIntro =
    content?.roadmapIntro ||
    "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.";
  const roadmapStepsRaw = content?.roadmapSteps?.length > 0 ? content.roadmapSteps : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s, i) => ({ number: i + 1, title: s.title, desc: s.desc }));
  const roadmapClosing =
    content?.roadmapClosing ||
    "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.";

  const trustHeading = content?.trustHeading || "Why Businesses Choose BizzBuzz Creations";
  const trustIntro =
    content?.trustIntro ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.";
  const trustClosing =
    content?.trustClosing ||
    "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.";

  return (
    <>
      <AboutHero content={content} />

      {/* Who we are */}
      <div className="bg-black py-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">{storyHeading}</h2>
        <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-center gap-15">
          <Image src={storyImage} alt="team" width={500} height={500} />
          <div className="text-white">
            <h2 className="text-white"><b>{storySubheading}</b></h2>
            <RichText
              as="p"
              text={storyParagraphOne}
              className="leading-relaxed text-left max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line"
            />
            <p className="leading-relaxed text-left max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphTwoIsDefault ? (
                <>
                  BizzBuzz Creations started with a small team of marketers, designers, and
                  strategists determined to help businesses get more from their digital
                  presence. What began locally in Prayagraj has grown into a{" "}
                  <Link href="/services" className="text-[#40A2D8] hover:underline">
                    digital marketing agency
                  </Link>{" "}
                  serving businesses across India, the UK, the US, and beyond.
                </>
              ) : (
                <RichText text={storyParagraphTwo} />
              )}
            </p>
            <p className="leading-relaxed text-left max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line">
              {storyParagraphThreeIsDefault ? (
                <>
                  Today, we bring together strategy, creativity, technology,{" "}
                  <Link href="/search-engine-optimization" className="text-[#40A2D8] hover:underline">
                    SEO
                  </Link>
                  , and{" "}
                  <Link href="/paid-marketing" className="text-[#40A2D8] hover:underline">
                    performance marketing
                  </Link>{" "}
                  to help businesses build stronger brands, reach the right audiences, and
                  achieve meaningful digital growth.
                </>
              ) : (
                <RichText text={storyParagraphThree} />
              )}
            </p>
            <RichText
              as="p"
              text={storyParagraphFour}
              className="leading-relaxed text-left max-w-xl mx-auto mb-4 text-white/70 whitespace-pre-line"
            />
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="bg-black py-20 px-5">
        <div className="mx-auto 2xl:px-10 flex lg:flex-row flex-col justify-center items-start gap-15">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {missionVisionHeading}
          </h2>
          {/* Full-width, stacked on mobile (was grid-cols-2 side-by-side,
              which squeezed each card into a cramped, narrow half-width
              box on phones); side by side again from sm up where there's
              actually room for two comfortable columns. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-4 sm:gap-8">
            <div className="group relative flex flex-col items-center rounded-2xl border-2 border-white/10 bg-white/5 p-6 sm:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-2xl hover:shadow-black/40">
              <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                <Target size={28} className="sm:hidden" />
                <Target size={32} className="hidden sm:block" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center text-white">
                {missionTitle}
              </h3>
              <RichText
                as="p"
                text={missionText}
                className="text-base sm:text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60"
              />
            </div>
            <div className="group relative flex flex-col items-center rounded-2xl border-2 border-white/10 bg-white/5 p-6 sm:p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-2xl hover:shadow-black/40">
              <div className="mb-4 sm:mb-5 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                <Rocket size={28} className="sm:hidden" />
                <Rocket size={32} className="hidden sm:block" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-center text-white">
                {visionTitle}
              </h3>
              <RichText
                as="p"
                text={visionText}
                className="text-base sm:text-lg leading-relaxed text-center max-w-xl mx-auto mb-4 text-white/60"
              />
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-15 mb-10 text-center text-white">
            {coreValuesHeading}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, i) => (
              <div key={i} className="relative">
                {/* Mobile-only connector — sits only in the gap above this
                    card (never over its body/icon), so it reads as a
                    behind-the-scenes link between cards instead of a line
                    drawn on top of one. The card's own bg-white/5 is too
                    transparent to hide a line placed behind it via
                    z-index, which is why a full-height spine (the
                    previous approach) still showed through the icon. */}
                {i > 0 && (
                  <span
                    className="sm:hidden absolute left-1/2 -top-6 h-6 w-px -translate-x-1/2"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(64,162,216,0.4) 0px, rgba(64,162,216,0.4) 4px, transparent 4px, transparent 12px)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 pt-8 w-full h-full text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
                  {i > 0 && (
                    <span className="hidden lg:block absolute -left-6 top-[60px] w-6 h-0.5 bg-[#40A2D8]/30" aria-hidden="true" />
                  )}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B60B0] group-hover:text-white">
                    <value.Icon size={26} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-center text-white">
                    {value.title}
                  </h4>
                  <RichText
                    as="p"
                    text={value.description}
                    className="text-sm leading-relaxed text-center text-white/60"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Our Journey — 2022 to 2026 */}
      <OurJourney content={content} />

      {/* What Makes BizzBuzz Creations Different */}
      <div className="bg-black py-20 px-5">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            {differentiatorsHeading}
          </h2>
          <RichText
            as="p"
            text={differentiatorsSubtext}
            className="text-center max-w-4xl mx-auto mb-10 text-white/70"
          />
          <DifferentiatorsCarousel items={content?.differentiatorItems} />
        </div>
      </div>

      {/* Culture — real ownership, one team, growing together */}
      <AboutCulture content={content} />

      {/* The Roadmap Behind Every Digital Success */}
      <div className="bg-black py-20 px-5">
        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          {roadmapHeading}
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center text-[#40A2D8]">
          {roadmapSubheading}
        </h3>
        <RichText
          as="p"
          text={roadmapIntro}
          className="text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16 text-white/70"
        />

        {/* Desktop: flowing zig-zag timeline */}
        <div className="hidden lg:block">
          <RoadmapTimeline steps={roadmapSteps} dark />
        </div>

        {/* Mobile / tablet: stacked timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-white/15" />
          <div className="space-y-10">
            {roadmapSteps.map((step) => (
              <div key={step.number} className="relative flex gap-6 items-start">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#0B60B0] text-white font-bold shadow-lg shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 border border-white/10 rounded-xl bg-white/5 shadow-md p-5">
                  <h4 className="font-bold text-lg mb-2 text-white">
                    Step {step.number}: {step.title}
                  </h4>
                  <RichText as="p" text={step.desc} className="leading-relaxed text-white/60" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <RichText
          as="p"
          text={roadmapClosing}
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-16 font-medium text-white/70"
        />
      </div>

      {/* Why Businesses Across India Trust Us */}
      <div className="bg-black py-20 px-5">
        <h2 className="text-3xl font-bold mb-5 text-center text-white">
          {trustHeading}
        </h2>
        <RichText
          as="p"
          text={trustIntro}
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12 text-white/70"
        />

        <TrustAdvantage content={content} />

        <RichText
          as="p"
          text={trustClosing}
          className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-12 font-medium text-white/70"
        />
      </div>

      {/* FAQ's */}
      <AboutFAQ content={content} />

      <WhyChooseUs dark />
      <Reviews />
      <CTA content={content} />
    </>
  );
}
