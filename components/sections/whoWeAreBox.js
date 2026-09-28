import Link from "next/link";
import { Search, Users, Briefcase, ArrowRight } from "lucide-react";
import Particles from "@/components/ui/Particles";
import AnimatedButton from "@/components/ui/animatedButton";
import RichText from "@/components/ui/richText";

// Same "Who We Are" blurb, stats, and quick-links as
// components/sections/scrollZoomReveal.js (the homepage's pinned
// 400vh scroll-zoom section), but as one plain static card instead of a
// scroll-jacking animation — used only on the Outside Location page
// (app/(main)/en-uk/digital-marketing-services-in-uk/page.js), sitting
// right after StatsShowcase, same spot ScrollZoomReveal used to sit on
// this page. The real homepage keeps the scroll-zoom version untouched.
//
// Every piece of text below is editable in the dashboard (Outside
// Location Page → "Who We Are Card"); these are the fallbacks used until
// something is saved. Quick-link icons are picked by position (a saved
// link list has only label + href), cycling if more links are added.
const QUICK_LINK_ICONS = [Briefcase, Users, Search];

const DEFAULT_STATS = [
  { value: "90+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "20+", label: "Industries Served" },
];

const DEFAULT_QUICK_LINKS = [
  { label: "Our Services", href: "/services" },
  { label: "Meet The Team", href: "/our-team" },
  { label: "How We Work", href: "/how-we-work" },
];

const DEFAULT_PARAGRAPH =
  "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence. We understand that every business has different goals, audiences, and challenges, so we focus on practical solutions rather than one-size-fits-all marketing.";

export default function WhoWeAreBox({ content }) {
  const heading = content?.whoWeAreHeading || "Who We Are";
  const paragraph = content?.whoWeAreParagraph || DEFAULT_PARAGRAPH;
  const buttonText = content?.whoWeAreButtonText || "Learn Our Story";
  const buttonLink = content?.whoWeAreButtonLink || "/about";
  const tagline =
    content?.whoWeAreTagline || "One team, every capability — built to help your business grow.";
  const STATS = content?.whoWeAreStats?.length ? content.whoWeAreStats : DEFAULT_STATS;
  const QUICK_LINKS = (
    content?.whoWeAreLinks?.length ? content.whoWeAreLinks : DEFAULT_QUICK_LINKS
  ).map((l, i) => ({ ...l, icon: QUICK_LINK_ICONS[i % QUICK_LINK_ICONS.length] }));

  return (
    <section className="bg-black py-16 px-6 md:px-12">
      {/* The entire block — text, stats, quick-links — sits inside this
          one bordered card, full width (no max-w cap), per the request. */}
      <div className="relative w-full rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden p-8 md:p-12">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={160}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={100}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#0B60B0]/25 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#40A2D8]/20 blur-3xl pointer-events-none" aria-hidden="true" />

        {/* The center stats row is naturally wider than an equal third of
            the box (three big numbers + labels, none of which wrap) — a
            plain `grid-cols-3` squeezed it into a fixed-width track
            anyway, so on real content it overflowed sideways and sat on
            top of the left/right columns instead of pushing them apart.
            `[1fr_auto_1fr]` gives the center column exactly the width its
            content needs first, then splits whatever's left evenly
            between the other two — the middle column can never overflow
            its track since it defines the track's own width. */}
        <div className="relative grid gap-10 xl:grid-cols-[1fr_auto_1fr] xl:items-center">
          {/* Left — heading + blurb + CTA */}
          <div className="text-center xl:text-left">
            <h3 className="text-lg font-bold text-white mb-3">{heading}</h3>
            <RichText
              as="p"
              text={paragraph}
              className="block text-sm text-white leading-relaxed mb-5 max-w-sm mx-auto xl:mx-0"
            />
            <div className="flex justify-center xl:justify-start">
              <AnimatedButton href={buttonLink} size="sm">
                {buttonText}
              </AnimatedButton>
            </div>
          </div>

          {/* Center — stats + tagline */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-8 sm:gap-14">
              {STATS.map(({ value, label }, i) => (
                <div key={`${label}-${i}`} className="text-center">
                  <p className="text-2xl sm:text-4xl font-bold text-[#40A2D8]">
                    {value}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white mt-1 whitespace-nowrap">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <RichText
              as="p"
              text={tagline}
              className="block text-sm sm:text-base text-white max-w-md text-center px-4"
            />
          </div>

          {/* Right — quick-link buttons, stacked */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto xl:mx-0 xl:ml-auto">
            {QUICK_LINKS.map(({ icon: Icon, label, href }, i) => (
              <Link
                key={`${label}-${i}`}
                href={href}
                className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:text-white"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={15} />
                </span>
                {label}
                <ArrowRight
                  size={14}
                  className="ml-auto opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
