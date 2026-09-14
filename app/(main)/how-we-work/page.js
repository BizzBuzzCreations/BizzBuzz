import Link from "next/link";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
import { FAQSection } from "@/components/ui/faq-accordion";
import OnboardingCarousel from "@/components/sections/onboardingCarousel";
import CategoriesShowcase from "@/components/sections/categoriesShowcase";
import { INDUSTRIES } from "@/lib/industriesData";
import RichText from "@/components/ui/richText";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import {
  Eye,
  Users,
  Zap,
  Unlock,
  ShieldCheck,
  Lightbulb,
  FileSignature,
  BarChart3,
  Megaphone,
  Workflow,
  Bot,
  MessageCircle,
  RefreshCw,
} from "lucide-react";

export async function generateMetadata() {
  return buildPageMetadata("how-we-work", {
  title: "How We Work | Our Process | BizzBuzz Creations",
  description:
    "No guesswork, just a structured process. See how BizzBuzz Creations plans, executes, and optimizes every campaign step by step.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/how-we-work",
  },
});
}

const PRINCIPLE_ICONS = [Eye, Users, Zap, Unlock, ShieldCheck, Lightbulb];
const DEFAULT_PRINCIPLES = [
  {
    title: "Transparency",
    tagline: "Clear From Start to Finish",
    desc: "You'll always know what we're doing, why we're doing it, and what comes next through clear communication and honest reporting.",
  },
  {
    title: "Collaboration",
    tagline: "Better Work, Built Together",
    desc: "We combine your business knowledge with our digital expertise, keeping communication open and every important decision collaborative.",
  },
  {
    title: "Speed",
    tagline: "Momentum Without Compromise",
    desc: "Focused priorities and efficient workflows help us move quickly, stay organised, and keep progress moving without sacrificing quality.",
  },
  {
    title: "Ownership",
    tagline: "Your Business Stays Yours",
    desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your control, giving you complete ownership at every stage.",
  },
  {
    title: "Security",
    tagline: "Your Data, Handled Responsibly",
    desc: "We use controlled access and responsible data practices to protect sensitive information, with NDAs available when additional confidentiality is required.",
  },
  {
    title: "Innovation",
    tagline: "Ready for What Comes Next",
    desc: "We continuously explore SEO, AI search, automation, and emerging digital trends to build strategies that adapt as technology evolves.",
  },
];

const DEFAULT_ROADMAP_STEPS = [
  {
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget.",
  },
  {
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars.",
  },
  {
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    title: "Report & Grow",
    desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

const TOOL_ICONS = [BarChart3, Megaphone, Workflow, Bot];
const DEFAULT_TOOLS = [
  {
    title: "Research & Analytics",
    desc: "Google Analytics, Google Search Console, SEMrush, and Ahrefs power our audits, keyword research, and performance tracking.",
  },
  {
    title: "Advertising & Campaigns",
    desc: "Google Ads, Meta Ads Manager, and conversion tracking tools help us run and optimise every paid campaign with real data.",
  },
  {
    title: "Automation & CRM",
    desc: "We build and use our own CRM and workflow automation systems — the same infrastructure that runs our clients' campaigns and our own operations.",
  },
  {
    title: "AI & Emerging Tech",
    desc: "We work with AI-powered content, chatbot, and search optimisation tools to keep strategies ahead of how search and customer behaviour are evolving.",
  },
];

const EXPECTATION_ICONS = [MessageCircle, BarChart3, Users, RefreshCw];
const DEFAULT_EXPECTATIONS = [
  {
    title: "Clear Communication",
    desc: "Regular updates, accessible communication, and straightforward explanations keep everyone aligned.",
  },
  {
    title: "Transparent Reporting",
    desc: "Understand your performance, progress, priorities, and opportunities without confusing marketing jargon.",
  },
  {
    title: "Dedicated Expertise",
    desc: "Your work is supported by specialists across strategy, marketing, creative, technology, and performance.",
  },
  {
    title: "Continuous Optimisation",
    desc: "We keep analysing, testing, learning, and improving as your business and digital landscape evolve.",
  },
];

// Same industry list as lib/industriesData.js, just reordered to match the
// display order requested for this section — icons/slugs stay sourced from
// that single data file so this isn't a second source of truth.
const INDUSTRY_ORDER = [
  "healthcare",
  "finance",
  "real-estate",
  "ecommerce",
  "education",
  "restaurant",
  "travel",
  "fitness",
  "fashion-apparel",
  "manufacturing",
  "construction",
  "gaming",
  "events",
  "entertainment",
  "wearables",
];
const INDUSTRY_LINKS = INDUSTRY_ORDER.map((slug) =>
  INDUSTRIES.find((industry) => industry.slug === slug),
).filter(Boolean);

const DEFAULT_FAQS = [
  {
    question: "How long does it take to see results with BizzBuzz Creations?",
    answer:
      "Timelines vary by service — paid campaigns can show results within days, while SEO typically takes 3 to 6 months for measurable ranking growth.",
  },
  {
    question: "Do I get reports on how my campaigns are performing?",
    answer:
      "Yes. Every client receives transparent monthly reporting along with regular strategy calls to review progress and next steps.",
  },
  {
    question: "Will I own my website, ad accounts, and data?",
    answer:
      "Yes. Your website, advertising accounts, analytics, and digital assets remain fully under your ownership and control at every stage.",
  },
  {
    question: "What happens after the strategy is created?",
    answer:
      "Our specialists execute the strategy across the relevant channels — SEO, content, paid ads, or website — then continuously optimise based on real performance data.",
  },
  {
    question: "Do you follow this same process for every industry?",
    answer:
      "Yes. The core process stays consistent, but strategy, channels, and priorities are adapted to fit each industry's audience and goals.",
  },
  {
    question: "What if my business needs change halfway through?",
    answer:
      "Our process is built to adapt — strategy, priorities, and services can be adjusted at any stage as your goals or market conditions evolve.",
  },
];

export default async function HowWeWorkPage() {
  const content = await getPageContent("how-we-work");

  const heroHeading =
    content?.hwwHeroHeading || "We Don't Wing It. Here's Our Process";
  const heroSubheading =
    content?.hwwHeroSubheading ||
    "A Clear, Repeatable System Behind Every Campaign We Run";
  const heroParagraph =
    content?.hwwHeroParagraph ||
    "No vague promises, no \"we'll figure it out as we go.\" Every project at BizzBuzz Creations follows the same structured process of audit, strategy, execution, and reporting — so you always know what's happening, why it's happening, and what results to expect.";
  const heroCtaText = content?.hwwHeroCtaText || "See How It Works";
  const heroImage = content?.hwwHeroImage || "/how we work and function.png";

  const principlesHeading =
    content?.principlesHeading ||
    "The Principles That Power Every Client Partnership";
  const principlesParagraph =
    content?.principlesParagraph ||
    "No complicated playbooks or hidden processes. Just six principles that shape how we communicate, collaborate, execute, and grow with every client.";
  const principlesRaw =
    content?.principles?.length > 0 ? content.principles : DEFAULT_PRINCIPLES;
  const principles = principlesRaw.map((p, i) => ({
    ...p,
    icon: PRINCIPLE_ICONS[i % PRINCIPLE_ICONS.length],
  }));

  const roadmapHeading =
    content?.hwwRoadmapHeading || "Our 5-Step Engagement Roadmap";
  const roadmapStepsRaw =
    content?.hwwRoadmapSteps?.length > 0
      ? content.hwwRoadmapSteps
      : DEFAULT_ROADMAP_STEPS;
  const roadmapSteps = roadmapStepsRaw.map((s, i) => ({
    number: i + 1,
    title: s.title,
    desc: s.desc,
  }));

  const toolsHeading =
    content?.toolsHeading || "The Tools Behind Every Strategy";
  const toolsParagraph =
    content?.toolsParagraph ||
    "We combine industry-leading platforms with our own in-house systems to plan, execute, and track every campaign with precision.";
  const toolsRaw = content?.tools?.length > 0 ? content.tools : DEFAULT_TOOLS;
  const tools = toolsRaw.map((t, i) => ({
    ...t,
    icon: TOOL_ICONS[i % TOOL_ICONS.length],
  }));

  const onboardingHeading =
    content?.onboardingHeading || "What to Expect, and When";
  const onboardingParagraph =
    content?.onboardingParagraph ||
    "Every business is different, but here's a realistic timeline for how our process typically unfolds.";

  const expectationsHeading =
    content?.expectationsHeading || "What You Can Expect";
  const expectationsSubheading =
    content?.expectationsSubheading ||
    "Clear Communication. Accountable Execution. Continuous Improvement.";
  const expectationsParagraph =
    content?.expectationsParagraph ||
    "Working with BizzBuzz Creations means knowing where your project stands, what we're working toward, and how we're improving it along the way.";
  const expectationsRaw =
    content?.expectations?.length > 0
      ? content.expectations
      : DEFAULT_EXPECTATIONS;
  const expectations = expectationsRaw.map((e, i) => ({
    ...e,
    icon: EXPECTATION_ICONS[i % EXPECTATION_ICONS.length],
  }));

  const industriesHeading =
    content?.hwwIndustriesHeading || "Industries We Apply This Process To";
  const industriesSubheading =
    content?.hwwIndustriesSubheading || "One Process. Every Industry.";
  const industriesParagraph =
    content?.hwwIndustriesParagraph ||
    "This same structured process — discover, strategize, execute, optimize, and report — powers digital growth across every industry we work with, from healthcare and real estate to e-commerce, education, and beyond.";

  const categoriesHeading =
    content?.categoriesHeading ||
    "Everything Your Business Needs to Grow Digitally";
  const categoriesParagraph =
    content?.categoriesParagraph ||
    "One connected team across marketing, technology, automation, and business growth.";

  const faqHeading = content?.hwwFaqHeading || "Frequently Asked Questions";
  const faqs =
    content?.hwwFaqItems?.length > 0 ? content.hwwFaqItems : DEFAULT_FAQS;

  const ctaHeading =
    content?.ctaHeading || "Ready to See This Process Work for Your Business?";
  const ctaParagraph =
    content?.ctaParagraph ||
    "No guesswork, no vague timelines — just a clear process built to turn strategy into measurable growth. Book a free consultation and see exactly how we'd approach your business.";
  const ctaButtonText = content?.ctaButtonText || "Book Your Free Consultation";

  return (
    <>
      {/* Hero — full-bleed photo (same treatment as the FAQ hero): the
          image is already designed with a dark-to-photo gradient built
          in, laid down as a plain background with a matching black
          overlay, text sitting in the solid-black portion on the left.
          Replaces the previous two conic-gradient decorative blobs. */}
      <section className="relative overflow-hidden min-h-[440px] sm:min-h-[500px] flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24 bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #000000 38%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="relative max-w-3xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
            {heroHeading}
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-6">
            {heroSubheading}
          </h2>
          <RichText
            as="p"
            text={heroParagraph}
            className="text-white/70 leading-relaxed mb-8 max-w-xl"
          />
          <a href="/contact" className="inline-block">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{heroCtaText}</span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </a>
        </div>
      </section>

      {/* Our principles */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            {principlesHeading}
          </h2>
          <RichText
            as="p"
            text={principlesParagraph}
            className="text-white/70 max-w-2xl mb-14"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map(({ icon: Icon, title, tagline, desc }, i) => (
              <div key={i} className="relative">
                {/* Mobile-only connector — sits only in the gap above this
                    card (never over its body/icon). A full-height spine
                    behind the cards (the previous approach) still showed
                    through the icon since the card's bg-white/5 is too
                    transparent to hide anything placed behind it. */}
                {i > 0 && (
                  <span
                    className="sm:hidden absolute left-[42px] -top-5 h-5 w-px"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(64,162,216,0.4) 0px, rgba(64,162,216,0.4) 4px, transparent 4px, transparent 12px)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-black/20">
                  <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-1.5 transition-colors duration-300 group-hover:text-[#0B60B0]">
                      {title}
                    </p>
                    <h3 className="font-bold text-lg mb-1.5 transition-colors duration-300 group-hover:text-black">
                      {tagline}
                    </h3>
                    <RichText
                      as="p"
                      text={desc}
                      className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement roadmap */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-16">
            {roadmapHeading}
          </h2>
          <RoadmapTimeline steps={roadmapSteps} dark />
        </div>
      </section>

      {/* The Tools Behind Every Strategy */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {toolsHeading}
          </h2>
          <RichText
            as="p"
            text={toolsParagraph}
            className="text-white/70 leading-relaxed max-w-2xl mb-14"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold text-white mb-2">{title}</h3>
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

      {/* How we onboard new clients */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-2xl">
            {onboardingHeading}
          </h2>
          <RichText
            as="p"
            text={onboardingParagraph}
            className="text-white/60 max-w-2xl mb-14 leading-relaxed"
          />

          <OnboardingCarousel content={content} />
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {expectationsHeading}
          </h2>
          <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
            {expectationsSubheading}
          </h3>
          <RichText
            as="p"
            text={expectationsParagraph}
            className="text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {expectations.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={20} />
                </span>
                <h4 className="font-bold text-white mb-2">{title}</h4>
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

      {/* Industries we apply this process to */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {industriesHeading}
          </h2>
          <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
            {industriesSubheading}
          </h3>
          <RichText
            as="p"
            text={industriesParagraph}
            className="text-white/60 max-w-2xl mx-auto mb-2 leading-relaxed"
          />
          <p className="text-white/50 text-sm mb-10"></p>

          {/* Mobile: a strict 3-column grid (5 rows for 15 industries)
              instead of flex-wrap, which let differently-sized pills wrap
              unevenly (2, then 1, then 2...) into a ragged layout. Desktop
              keeps the original centered flex-wrap flow. */}
          <div className="grid grid-cols-3 justify-items-center gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3">
            {INDUSTRY_LINKS.map(({ slug, label, icon: Icon }) => (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="group inline-flex min-w-0 items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-sm font-medium text-white/80 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:text-white hover:shadow-lg hover:shadow-black/40"
              >
                <Icon
                  size={14}
                  className="shrink-0 text-[#40A2D8] transition-colors duration-300 group-hover:text-white"
                />
                <span className="truncate">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories we work across */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            {categoriesHeading}
          </h2>
          <RichText
            as="p"
            text={categoriesParagraph}
            className="text-white/60 max-w-2xl mb-10 leading-relaxed"
          />

          <CategoriesShowcase />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black pt-20 pb-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <FAQSection
          faqs={faqs}
          defaultValue="item-0"
          className="max-w-4xl mx-auto"
          headingClassName="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
          heading={faqHeading}
          triggerClassName="bg-white/5 border-[#0B60B0]/50 hover:border-[#0B60B0] text-white hover:bg-white/10 hover:shadow-none"
          iconClassName="text-[#40A2D8]"
          questionTextClassName="text-white"
          chevronWrapClassName="bg-white/10"
          chevronClassName="text-white"
          answerClassName="bg-white/5 border border-[#0B60B0]/30 shadow-none"
          answerTextClassName="text-white/70"
          answerIconWrapClassName="bg-white/10"
          answerIconClassName="text-[#40A2D8]"
        />
      </section>

      {/* CTA — page-specific content (not the shared site-wide CTA), same
          visual treatment as it, with a button instead of an email form. */}
      <div className="bg-black px-5 pt-4 pb-10 scroll-mt-34" id="CTA">
        <div
          className="rounded-3xl border-2 border-[#0B60B0] shadow-lg shadow-black md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto container"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        >
          <div className="py-8 md:py-10 px-6 md:px-10 z-10 text-white">
            <h3 className="md:text-3xl text-2xl font-bold mb-5">
              {ctaHeading}
            </h3>
            <RichText
              as="p"
              text={ctaParagraph}
              className="max-w-3xl text-white/70 mb-8"
            />
            {/* Full width on mobile (was inline-flex sized to content,
                which — combined with the card's own padding — left so
                little room the label wrapped mid-phrase onto two lines);
                back to its normal auto-width pill from sm up. */}
            <Link
              href="/contact"
              className="flex sm:inline-flex items-center justify-center w-full sm:w-auto whitespace-nowrap bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-lg transition"
            >
              {ctaButtonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Full-width white divider before the footer — same as the shared
          CTA's divider, so this page still ends the same way. */}
      <div className="w-full bg-black pt-8 md:pt-10">
        <div className="w-full border-t border-white" />
      </div>
    </>
  );
}
