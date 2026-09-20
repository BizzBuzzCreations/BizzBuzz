import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import NumberedDeliverablesCarousel from "@/components/sections/numberedDeliverablesCarousel";
import ServiceBreakdownGrid from "@/components/sections/serviceBreakdownGrid";
import RoadmapCarousel from "@/components/sections/roadmapCarousel";
import CapabilityCard from "@/components/ui/capabilityCard";
import RichText from "@/components/ui/richText";

// Shared template every /industries/<slug> dedicated page renders through
// — the exact structure originally built for Healthcare, now generic so
// every industry gets the same rich layout with its own real content
// plugged in via lib/industryPageContent.js. Keeps 15 pages from drifting
// out of sync with each other since they all render through one file.
const CERTIFICATIONS = [
  { src: "/clutch.png", alt: "Clutch — Verified Partner" },
  { src: "/CDL.png", alt: "Certified Google Ads Partner" },
  { src: "/GA.png", alt: "Certified Google Analytics Partner" },
  { src: "/iso.png", alt: "ISO Certified" },
];

export default function IndustryDetailPage({
  label,
  icon: Icon,
  description,
  // Optional hero overrides — every industry falls back to the generic
  // "{label} Digital Marketing Services" / description / CTA below, so
  // only industries with dedicated hero copy (via
  // lib/industryPageContent.js) need to pass these.
  heroTitle,
  heroDescription,
  heroCtaText,
  // Optional hero image — real per-industry photos, all a uniform
  // 1440x504 (~2.86:1) crop, sourced from lib/industryPageContent.js.
  heroImage,
  capabilities,
  // Optional override for the capabilities section's small eyebrow
  // heading — defaults to "Built for Every Corner of {label}".
  capabilitiesHeading,
  // When true, each capability card shows only its title by default and
  // reveals the description on hover (with the usual color change) —
  // used for Healthcare's 12-card grid so it doesn't read as a wall of
  // text. Off by default so every other industry's 6-card grid keeps
  // showing its description plainly.
  capabilitiesHoverReveal = false,
  // Optional "How We Turn Searches Into [Outcome]" breakdown — an array
  // of { number, title, desc, ctaText, services[] }. Only industries that
  // pass this via lib/industryPageContent.js get the section.
  serviceBreakdownHeading,
  serviceBreakdown,
  // When true, clicking "Know Our Services" 3D-flips the card to reveal
  // its services on the back face, instead of expanding downward.
  // Currently only Healthcare uses this.
  serviceBreakdownFlip = false,
  // Optional "What Makes Us Different" section — an array of
  // { number, title, desc }, rendered as an alternating timeline instead
  // of another card grid.
  differentiatorsHeading,
  differentiators,
  // Optional "Roadmap" section — an array of { number, title, desc },
  // rendered as an auto-scrolling carousel instead of a static grid.
  roadmapCarouselHeading,
  roadmapCarouselSteps,
  // Stats + certifications strip — on by default; pass showStats: false
  // (e.g. Healthcare, by request) to omit it.
  showStats = true,
  spectrumHeading,
  spectrumSubtitle,
  spectrumServices,
  whoWeHelpSubtitle,
  whoWeHelp,
  deliverables,
  faqs,
  faqsHeading,
  trustPoints,
  // Optional override for the "Why [Industry] Businesses Choose Us"
  // section — when whyChooseUsText is supplied, it replaces the generic
  // trustPoints checklist with a single custom heading + paragraph (e.g.
  // Healthcare's local-market positioning copy).
  whyChooseUsHeading,
  whyChooseUsText,
  // Optional override for the closing CTA — when ctaHeading is supplied,
  // it replaces the shared site-wide email-form CTA with a page-local
  // heading + paragraph + two buttons (e.g. Healthcare's dedicated CTA).
  ctaHeading,
  ctaText,
  ctaPrimaryText,
  ctaSecondaryText,
}) {
  return (
    <>
      {/* Hero — full-bleed background photo (same treatment used for the
          sub-service pages' heroImage) when supplied; otherwise the plain
          gradient hero. These industry photos are all a uniform 1440x504
          (~2.86:1) crop — desktop's aspect-ratio matches that closely so
          object-fit: cover needs almost no vertical crop.

          On mobile, the full-bleed background version is hidden entirely
          (`hidden md:block` below) — at narrow widths the photo mostly
          just sat dimmed behind the gradient with the text stacked over
          it, hard to make out. Instead, mobile gets its own boxed copy of
          the same image as a plain in-flow block between the paragraph
          and the CTA button (`md:hidden` further down). */}
      {/* pt-10 on mobile (was pt-28) — that much top padding under a
          sticky nav that already occupies its own space in the flow was
          just leaving a large empty gap before the heading; md keeps its
          original spacing. */}
      <section
        className={
          heroImage
            ? "relative min-h-screen flex items-center overflow-hidden pt-10 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white"
            : "relative min-h-screen flex items-center overflow-hidden pt-10 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white"
        }
        style={
          heroImage
            ? undefined
            : { background: "radial-gradient(circle at top, #0d1b2e, #000000)" }
        }
      >
        {heroImage && (
          <div className="hidden md:block">
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(5,11,22,0.94) 0%, rgba(11,96,176,0.85) 42%, rgba(11,96,176,0.25) 70%, transparent 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        )}
        {/* Mobile background — plain, no photo, so the section reads as a
            simple dark hero rather than an empty gradient with nothing
            behind it once the full-bleed photo above is hidden. */}
        {heroImage && (
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
            aria-hidden="true"
          />
        )}

        <div className="relative max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {heroTitle || `${label} Digital Marketing Services`}
          </h1>
          {heroImage && (
            <div className="md:hidden relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-9">
              <Image src={heroImage} alt="" fill sizes="100vw" className="object-cover object-top" />
            </div>
          )}
          <RichText
            as="p"
            text={heroDescription || description}
            className="text-white/70 leading-relaxed mb-9 max-w-2xl"
          />
          <Link href="/contact" className="inline-block max-w-full">
            {/* whitespace-nowrap only from sm up — on mobile the long,
                per-industry CTA text (e.g. "Get a Free Entertainment
                Marketing Audit") was forcing the button wider than the
                viewport and getting cut off at the screen edge. Letting it
                wrap to two lines on narrow screens fixes that; nowrap stays
                on larger screens where the text always fits on one line
                anyway (and where :hover — the reason nowrap was added — is
                actually reachable with a mouse). */}
            <button className="animated-button animated-button-lg whitespace-normal text-center sm:whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{heroCtaText || "Book Your Free Consultation"}</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Core capabilities */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Flanking lines hidden on mobile — at a fixed 80px each, they
              squeezed a multi-word uppercase heading into a much narrower
              column (forcing extra wrapping) and sat vertically centered
              against the resulting 3-line block instead of framing it
              cleanly. Reappear from sm up, where there's room for them
              beside a heading that mostly stays on one or two lines. */}
          <div className="flex items-center justify-center gap-4 mb-14 text-center">
            <span className="hidden sm:block h-px w-20 bg-white/20" />
            <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white">
              {capabilitiesHeading || `Built for Every Corner of ${label}`}
            </p>
            <span className="hidden sm:block h-px w-20 bg-white/20" />
          </div>

          {/* items-start: without it, CSS grid stretches every card in a
              row to match the tallest one, so hovering a card to expand
              its description (capabilitiesHoverReveal) visibly stretches
              its row-neighbors too, even though nothing about them
              actually changed. Since that rules out stretch-based equal
              heights, the title itself gets a fixed min-h (below) so a
              one-line title and a two-line title still produce the same
              collapsed card height across every industry (all 15 use
              capabilitiesHoverReveal). */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {capabilities.map(({ icon: CapIcon, title, desc }) => (
              <CapabilityCard
                key={title}
                icon={<CapIcon size={20} />}
                title={title}
                desc={desc}
                hoverReveal={capabilitiesHoverReveal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service breakdown — optional, only rendered when the industry
          supplies it via lib/industryPageContent.js. Each card expands on
          click to reveal its full list of specific services. */}
      {serviceBreakdown && serviceBreakdown.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
              {serviceBreakdownHeading}
            </h2>
            <ServiceBreakdownGrid items={serviceBreakdown} flip={serviceBreakdownFlip} />
          </div>
        </section>
      )}

      {/* What Makes Us Different — optional, only rendered when the
          industry supplies it. Deliberately not another card grid: an
          alternating timeline down a center spine, so this differentiator
          list reads as a distinct visual moment on the page. */}
      {differentiators && differentiators.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-16 md:mb-20">
              {differentiatorsHeading}
            </h2>

            <div className="relative">
              {/* Center spine, desktop only — a dotted line (not a faint
                  solid gradient) so it actually reads as a connector. */}
              <div
                className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 4px, transparent 4px, transparent 12px)",
                }}
                aria-hidden="true"
              />

              <div className="space-y-12 md:space-y-0">
                {differentiators.map(({ number, title, desc }, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div
                      key={title}
                      className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${
                        i > 0 ? "md:mt-16" : ""
                      }`}
                    >
                      {/* Center dot, desktop only */}
                      <span
                        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#40A2D8] ring-4 ring-black"
                        aria-hidden="true"
                      />
                      <div
                        className={
                          isEven
                            ? "md:text-right md:pr-14"
                            : "md:col-start-2 md:pl-14"
                        }
                      >
                        <span className="block text-4xl md:text-5xl font-bold text-[#0B60B0]/40 mb-2">
                          {number}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {title}
                        </h3>
                        <RichText as="p" text={desc} className="text-white/60 text-sm leading-relaxed" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Roadmap — optional, only rendered when the industry supplies it.
          Auto-scrolling carousel (left-to-right, pauses on hover) instead
          of a static grid, so the step-by-step process reads as motion
          rather than another block of cards. */}
      {roadmapCarouselSteps && roadmapCarouselSteps.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-14">
              {roadmapCarouselHeading}
            </h2>
            <RoadmapCarousel steps={roadmapCarouselSteps} />
          </div>
        </section>
      )}

      {/* Real numbers + real certifications — optional, shown by default;
          set showStats: false in an industry's lib/industryPageContent.js
          entry to omit it (e.g. Healthcare, by request). */}
      {showStats && (
        <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5 mb-6">
              <div
                className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
                style={{
                  background: "linear-gradient(160deg, #0B60B0, #050b16)",
                }}
              >
                <p className="text-3xl font-bold text-white mb-1">90+</p>
                <p className="text-white/70 text-sm">Projects Delivered</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[150px]">
                <p className="text-3xl font-bold text-white mb-1">50+</p>
                <p className="text-white/70 text-sm">
                  Clients Across India &amp; the UK
                </p>
              </div>
              <div
                className="rounded-2xl p-6 flex flex-col justify-end min-h-[150px]"
                style={{
                  background: "linear-gradient(160deg, #4c2f91, #050b16)",
                }}
              >
                <p className="text-3xl font-bold text-white mb-1">20+</p>
                <p className="text-white/70 text-sm">Industries Served</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-sm font-semibold text-white/70 mb-6">
                Certified &amp; Recognized By
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-12">
                {CERTIFICATIONS.map((badge) => (
                  <Image
                    key={badge.alt}
                    src={badge.src}
                    alt={badge.alt}
                    width={80}
                    height={80}
                    className="object-contain h-14 w-auto opacity-90"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Full-spectrum services — optional; omitted for industries whose
          content doesn't supply spectrumServices (e.g. Healthcare, by
          request). */}
      {spectrumServices && spectrumServices.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              {spectrumHeading}
            </h2>
            <RichText as="p" text={spectrumSubtitle} className="text-white/60 max-w-2xl mb-14 leading-relaxed" />

            <div className="grid md:grid-cols-3 gap-6">
              {spectrumServices.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <RichText as="p" text={item.desc} className="text-sm text-white/60 leading-relaxed" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who we help — optional; omitted for industries whose content
          doesn't supply whoWeHelp (e.g. Healthcare, by request). */}
      {whoWeHelp && whoWeHelp.length > 0 && (
        <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              Who We Help
            </h2>
            <RichText as="p" text={whoWeHelpSubtitle} className="text-white/60 max-w-2xl mb-14 leading-relaxed" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whoWeHelp.map(({ icon: WhoIcon, title, desc }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
                >
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                    <WhoIcon size={20} />
                  </span>
                  <h3 className="font-bold text-white mb-2 text-sm">{title}</h3>
                  <RichText
                    as="p"
                    text={desc}
                    className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What you get — numbered deliverables carousel; optional, omitted
          for industries whose content doesn't supply deliverables (e.g.
          Healthcare, by request). */}
      {deliverables && deliverables.length > 0 && (
        <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
              What You Get
            </h2>
            <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
              Concrete pieces that work together — not a vague bundle of
              &ldquo;digital marketing services.&rdquo;
            </p>

            <NumberedDeliverablesCarousel items={deliverables} />
          </div>
        </section>
      )}

      {/* FAQ */}
      <DarkFAQSection faqs={faqs} heading={faqsHeading || "Frequently Asked Questions"} />

      {/* Why choose us — replaced with a single custom heading + paragraph
          when whyChooseUsText is supplied (e.g. Healthcare's local-market
          positioning copy); otherwise the generic trustPoints checklist
          every other industry still gets. When whyChooseUsText is set,
          this is a plain two-column layout — content on the left, the
          same per-industry heroImage as its own boxed photo on the right
          (not a full-bleed background behind the text anymore).

          On mobile the photo instead renders inline between the heading
          and the paragraph (heading -> image -> paragraph), matching the
          hero section's mobile order above — so the desktop-only image
          block further down is hidden on mobile (`hidden md:block`) and a
          second, mobile-only copy (`md:hidden`) sits right after the
          heading. */}
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div
          className={
            whyChooseUsText
              ? "max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center"
              : "max-w-4xl mx-auto text-center"
          }
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {whyChooseUsHeading || `Why ${label} Businesses Choose Us`}
            </h2>
            {whyChooseUsText && heroImage && (
              <div className="md:hidden relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-6">
                <Image
                  src={heroImage}
                  alt={whyChooseUsHeading || `Why ${label} businesses choose BizzBuzz Creations`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}
            {whyChooseUsText ? (
              <RichText as="p" text={whyChooseUsText} className="text-white/70 leading-relaxed max-w-xl" />
            ) : (
              <>
                <p className="text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto">
                  The same standards we hold ourselves to on every engagement,{" "}
                  {label.toLowerCase()} included.
                </p>
                <ul className="grid sm:grid-cols-2 gap-5 text-left">
                  {trustPoints.map((point) => (
                    <li
                      key={point}
                      className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#40A2D8] shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white"
                      />
                      <span className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          {whyChooseUsText && heroImage && (
            <div className="hidden md:block relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={heroImage}
                alt={whyChooseUsHeading || `Why ${label} businesses choose BizzBuzz Creations`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {ctaHeading ? (
        <>
          {/* Page-local CTA — heading + paragraph + two buttons, both
              pointing to /contact, instead of the shared email-form CTA. */}
          <div className="bg-black px-5 py-10 scroll-mt-34" id="CTA">
            <div
              className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
              }}
            >
              <div className="py-8 md:py-10 px-6 md:px-10 z-10 text-white">
                <h2 className="md:text-3xl text-2xl font-bold mb-5">
                  {ctaHeading}
                </h2>
                <RichText as="p" text={ctaText} className="max-w-3xl text-white/70 mb-8" />
                {/* Stacked, full-width buttons on mobile (was flex-wrap,
                    which — squeezed by the card's own padding — wrapped
                    the two pills into an untidy layout) instead of forcing
                    two side-by-side pills into too little width; back to
                    a normal side-by-side row from sm up. */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-full transition"
                  >
                    {ctaPrimaryText}
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border border-white/50 hover:bg-white/10 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
                  >
                    {ctaSecondaryText}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Same full-width divider the shared CTA ends with, so this
              page still transitions into the footer the same way. */}
          <div className="w-full bg-black pt-8 md:pt-10">
            <div className="w-full border-t border-white" />
          </div>
        </>
      ) : (
        <CTA />
      )}
    </>
  );
}
