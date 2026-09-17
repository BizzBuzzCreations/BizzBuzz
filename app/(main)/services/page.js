import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Users,
  ShieldCheck,
  FileSignature,
  Layers,
  Unlock,
  LifeBuoy,
  Target,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import CTA from "@/components/sections/CTA";
import Particles from "@/components/ui/Particles";
import ServiceScenariosCarousel from "@/components/sections/serviceScenariosCarousel";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import HighlightCard from "@/components/ui/highlightCard";
import { SERVICES } from "@/lib/industriesData";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import RichText from "@/components/ui/richText";

// Real, short descriptions already used elsewhere on the site (the
// homepage's Categories showcase) — reused here rather than invented,
// so this index and that widget never say different things about the
// same service.
const DEFAULT_SERVICE_DETAILS = {
  seo: { description: "Improve search visibility, attract qualified organic traffic, and build sustainable growth with technical SEO, content, on-page optimization, and link-building strategies.", buttonText: "Explore SEO Services" },
  smm: { description: "Build your brand presence and engage the right audience with strategic content, social media management, paid campaigns, and platform-specific marketing strategies.", buttonText: "Explore Social Media Marketing" },
  paidAds: { description: "Reach high-intent customers faster with targeted Google Ads and paid campaigns designed to increase qualified traffic, generate leads, and maximize marketing performance.", buttonText: "Explore Paid Marketing" },
  webDev: { description: "Build fast, responsive, SEO-friendly websites that strengthen your online presence, deliver better user experiences, and turn visitors into meaningful business opportunities.", buttonText: "Explore Website Development" },
  bpo: { description: "Improve operational efficiency with reliable BPO and customer support solutions covering customer queries, order support, back-office operations, and business processes.", buttonText: "Explore BPO Services" },
  ai: { description: "Use AI-powered solutions, intelligent chatbots, workflow automation, and custom systems to reduce repetitive work, improve efficiency, and support smarter business operations.", buttonText: "Explore AI Solutions" },
  automation: { description: "Streamline lead nurturing and follow-ups with CRM workflows, email automation, customer journeys, and marketing systems that keep your sales process moving consistently.", buttonText: "Explore Marketing Automation" },
  consultancy: { description: "Get practical business guidance through strategic audits, workshops, market insights, and growth roadmaps designed to help you make better decisions with confidence.", buttonText: "Explore Business Consultancy" },
};

// Icons stay code-driven (design), matched positionally to whichever
// "Why Choose Us" cards are saved.
const WHY_CHOOSE_ICONS = [Layers, Target, TrendingUp, CheckCircle2];

// Services page FAQs — questions specific to choosing/working with our
// service lineup.
const SERVICES_FAQS = [
  {
    question: "What services does BizzBuzz Creations offer?",
    answer:
      "BizzBuzz Creations provides SEO, social media marketing, Google Ads and paid marketing, website development, BPO and customer support, AI solutions, marketing automation, and business consultancy.",
  },
  {
    question: "How much do digital marketing services cost?",
    answer:
      "Pricing depends on the services and scope you choose; there's no fixed package. A free consultation gets you a clear, upfront quote before any work begins.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "The right service depends on your goals, industry, audience, competition, budget, and current digital presence. Our team can evaluate your needs and recommend the most suitable services and priorities.",
  },
  {
    question: "How long does it take to see results from SEO or paid ads?",
    answer:
      "Paid ads typically show measurable traffic and leads within days to a few weeks. SEO is a longer-term investment; most businesses see meaningful ranking improvements in 3 to 6 months, depending on competition.",
  },
  {
    question: "Can BizzBuzz Creations handle both marketing and website development?",
    answer:
      "Yes. We provide digital marketing and website development under one team, allowing businesses to coordinate their online visibility, marketing campaigns, content, and website experience more efficiently.",
  },
  {
    question: "Do you provide services to businesses outside Prayagraj?",
    answer:
      "Yes. BizzBuzz Creations works with businesses in Prayagraj, across India, and worldwide, providing digital marketing, web development, BPO, AI, automation, and other business solutions.",
  },
];

const DEFAULT_WHY_CHOOSE_ITEMS = [
  {
    title: "Everything Under One Roof",
    description:
      "SEO, paid advertising, social media, websites, AI, automation, BPO, and consultancy without coordinating multiple agencies.",
  },
  {
    title: "Built Around Your Business",
    description:
      "We consider your industry, audience, market, and requirements instead of forcing your business into a standard package.",
  },
  {
    title: "Flexible as You Grow",
    description:
      "Start with what you need today and add services as new opportunities, challenges, and business requirements emerge.",
  },
  {
    title: "Focused on Business Outcomes",
    description:
      "Our work is designed to support meaningful outcomes such as visibility, enquiries, customers, efficiency, and stronger digital operations.",
  },
];

// Real, company-wide facts about how an engagement actually works —
// already established elsewhere on the site (industry pages, how-we-work)
// — reused here instead of a fabricated testimonial/stat block.
// Icons stay code-driven (design), matched positionally to whichever
// engagement features are saved.
const ENGAGEMENT_ICONS = [Users, Unlock, FileSignature, Layers, ShieldCheck, LifeBuoy];

const DEFAULT_ENGAGEMENT_FEATURES = [
  { title: "One Point of Contact", desc: "Keep communication simple with a dedicated team that understands your business and ongoing requirements." },
  { title: "You Own Your Accounts", desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your ownership." },
  { title: "Clear Scope & Pricing", desc: "Know what's included, what's being delivered, and where your budget is going before work begins." },
  { title: "No Long-Term Lock-In", desc: "Choose the services you need without being pushed into unnecessary packages or complicated commitments." },
  { title: "Secure Information Handling", desc: "Your business information, account access, and project details are handled with appropriate confidentiality and care." },
  { title: "Support When You Need It", desc: "Get help when questions, changes, or new requirements come up instead of being left to figure them out alone." },
];

// Helps a visitor self-select a service based on their actual problem,
// rather than making them guess from a list of 8 labels. `service` keys
// stay code-driven (they drive routing/icon/label), matched positionally
// to whichever questions are saved.
const SCENARIO_SERVICE_KEYS = ["seo", "webDev", "paidAds", "smm", "ai", "bpo", "consultancy", "webDev"];

const DEFAULT_SERVICE_SCENARIOS = [
  { question: "Not Getting Enough Traffic?", detail: "Improve your online visibility and attract more qualified visitors through SEO and search-focused content." },
  { question: "Getting Traffic but Few Enquiries?", detail: "Strengthen your website experience, messaging, and conversion paths to turn more visitors into potential customers." },
  { question: "Need More Leads Quickly?", detail: "Reach customers with high purchase intent through targeted Google Ads and paid digital campaigns." },
  { question: "Struggling to Stay Consistent on Social Media?", detail: "Build a stronger presence with content planning, social media management, and audience-focused campaigns." },
  { question: "Too Many Repetitive Tasks?", detail: "Reduce manual work with AI-powered tools, automated workflows, and connected marketing systems." },
  { question: "Customer Support Taking Too Much Time?", detail: "Delegate customer queries and routine business operations to reliable BPO and support teams." },
  { question: "Not Sure What Your Business Needs Next?", detail: "Get an outside perspective on your digital presence, opportunities, and priorities before investing further." },
  { question: "Need a Better Online Foundation?", detail: "Create a fast, responsive website that gives your brand a stronger digital presence and supports customer acquisition." },
];

export async function generateMetadata() {
  return buildPageMetadata("services", {
  title: "Digital Marketing & Business Services | BizzBuzz Creations",
  description:
    "Explore SEO, social media, Google Ads, web development, BPO, AI, automation, and business consultancy services built for business growth.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/services",
  },
});
}

function ServiceCard({ service, description, buttonText }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
          <Icon size={22} />
        </span>
        <ArrowUpRight
          size={18}
          className="text-white/30 group-hover:text-white transition-colors"
        />
      </div>
      <h3 className="font-bold text-white mb-2">{service.label}</h3>
      {/* noLink — this whole card is already a <Link>; a link inside the
          description would nest an <a> inside an <a>, which every
          browser's HTML parser breaks (force-closes the outer one),
          making the card itself stop navigating. Bold still works. */}
      <RichText
        as="p"
        text={description}
        noLink
        className="text-sm text-white/60 leading-relaxed line-clamp-3 mb-4 transition-colors duration-300 group-hover:text-white/85"
      />
      {buttonText && (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] transition-colors duration-300 group-hover:text-white">
          {buttonText}
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </Link>
  );
}

export default async function ServicesIndexPage() {
  const content = await getPageContent("services");
  const services = Object.values(SERVICES);

  const heroHeading = content?.servicesHeroHeading || "Stop Juggling Agencies. Start Growing.";
  const heroParagraph =
    content?.servicesHeroParagraph ||
    "SEO, ads, web development and automation — one roof, one team, wherever your customers are.";
  const heroButtonText = content?.servicesHeroButtonText || "Explore Our Services";
  const heroSecondaryButtonText = content?.servicesHeroSecondaryButtonText || "Get a Free Consultation";
  const heroImage = content?.servicesHeroImage || "/services.png";

  const gridHeading = content?.servicesGridHeading || "Explore Our Digital Growth Services";
  const gridSubtext = content?.servicesGridSubtext || "Choose the services that match your goals, or combine multiple solutions to support different areas of your business.";
  const serviceDetailsList =
    content?.serviceDescriptions?.length > 0
      ? content.serviceDescriptions
      : Object.values(DEFAULT_SERVICE_DETAILS);
  const serviceDetailsByKey = {};
  Object.keys(SERVICES).forEach((key, i) => {
    serviceDetailsByKey[key] = serviceDetailsList[i] ?? DEFAULT_SERVICE_DETAILS[key];
  });

  const engagementEyebrow = content?.engagementEyebrow || "How We Work";
  const engagementHeading = content?.engagementHeading || "A Better Experience From Start to Finish";
  const engagementSubtext =
    content?.engagementSubtext || "Simple communication, clear ownership, and a straightforward experience without the usual agency complications.";
  const engagementFeaturesRaw = content?.engagementFeatures?.length > 0 ? content.engagementFeatures : DEFAULT_ENGAGEMENT_FEATURES;
  const engagementFeatures = engagementFeaturesRaw.map((f, i) => ({ ...f, icon: ENGAGEMENT_ICONS[i % ENGAGEMENT_ICONS.length] }));

  const scenariosEyebrow = content?.scenariosEyebrow || "Not Sure Where to Start?";
  const scenariosHeading = content?.scenariosHeading || "What Are You Trying to Fix?";
  const scenariosSubtext =
    content?.scenariosSubtext ||
    "Start with the challenge, not the service. We'll help you find the right digital solution.";
  const scenarioQuestionsRaw = content?.scenarioQuestions?.length > 0 ? content.scenarioQuestions : DEFAULT_SERVICE_SCENARIOS;
  const serviceScenarios = scenarioQuestionsRaw.map((s, i) => ({
    question: s.question,
    detail: s.detail,
    service: SCENARIO_SERVICE_KEYS[i % SCENARIO_SERVICE_KEYS.length],
  }));

  const whyChooseEyebrow = content?.servicesProcessEyebrow || "Why Choose Us?";
  const whyChooseHeading = content?.servicesProcessHeading || "Why Businesses Choose BizzBuzz Creations";
  const whyChooseSubtext = content?.servicesProcessSubtext || "More than individual services, you get one team that understands the bigger picture of your digital presence.";
  const whyChooseItemsRaw = content?.servicesProcessSteps?.length > 0 ? content.servicesProcessSteps : DEFAULT_WHY_CHOOSE_ITEMS;
  const whyChooseItems = whyChooseItemsRaw.map((s, i) => ({ ...s, icon: WHY_CHOOSE_ICONS[i % WHY_CHOOSE_ICONS.length] }));

  return (
    <>
      {/* Hero — full-bleed photo (same treatment as the FAQ hero): the
          image itself is already designed with a dark-to-photo gradient
          built in, so it's laid down as a plain background with a
          matching black-to-transparent overlay on top, text sitting in
          the solid-black portion on the left. Replaces the previous
          radial-gradient background + coded 6-icon floating grid.

          On mobile, the full-bleed background version is hidden entirely
          (`hidden md:block` below) — same treatment as the other hero
          sections across the site: at narrow widths the photo mostly just
          sat dimmed behind the gradient with the text stacked over it,
          hard to make out. Instead, mobile gets its own boxed copy of the
          same image as a plain in-flow block between the paragraph and
          the CTA buttons (`md:hidden` further down). */}
      {/* min-h now kicks in from md up and mobile's top padding is a much
          lighter pt-10 (was min-h-[520px] unconditional + pt-24) — that
          combo was forcing a tall, vertically-centered box on mobile too,
          leaving a large empty gap between the nav and the heading before
          any content appeared. */}
      <section className="relative overflow-hidden md:min-h-[520px] flex items-center pt-10 md:pt-28 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white bg-black">
        <div
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="hidden md:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #000000 38%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
        {/* Mobile background — plain, no photo, so the section reads as a
            simple dark hero rather than an empty gradient with nothing
            behind it once the full-bleed photo above is hidden. */}
        <div
          className="absolute inset-0 md:hidden"
          style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {heroHeading}
          </h1>
          <p className="text-white/70 leading-relaxed mb-9 max-w-lg">
            {heroParagraph}
          </p>
          {/* /services.png is a very wide (3.45:1), mostly-empty-on-the-
              left desktop background photo — the icon grid it actually
              shows sits only in its right ~35%. Cropping the box to that
              ratio (and object-cover to it) just squeezed the icons into
              a sliver or, matched 1:1, left a wall of dead black space.
              /services-hero-mobile.png is a pre-cropped copy showing only
              the icon-grid portion — full icons, no dead space, no
              cutoff — sized to its own real 680x550 aspect ratio here. */}
          <div className="md:hidden relative w-full max-w-sm mx-auto aspect-[680/550] rounded-2xl overflow-hidden shadow-lg mb-9">
            <Image src="/services-hero-mobile.png" alt="" fill sizes="100vw" className="object-contain" />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="#services-grid" className="inline-block">
              <button className="animated-button animated-button-lg whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">{heroButtonText}</span>
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
            <Link href="/contact" className="inline-block">
              <button className="animated-button animated-button-lg whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">{heroSecondaryButtonText}</span>
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
        </div>
      </section>

      {/* Services grid */}
      <section id="services-grid" className="relative bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10 overflow-hidden">
        {/* Same animated particle backdrop used on the contact page */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={200}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            {gridHeading}
          </h2>
          <p className="text-center text-white/60 max-w-xl mx-auto mb-14">
            {gridSubtext}
          </p>

          {/* 3 / 2 / 3 layout — the middle row's 2 cards sit centered
              instead of trailing off to one side. */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.key} service={service} description={serviceDetailsByKey[service.key]?.description} buttonText={serviceDetailsByKey[service.key]?.buttonText} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.slice(3, 5).map((service) => (
                <ServiceCard key={service.key} service={service} description={serviceDetailsByKey[service.key]?.description} buttonText={serviceDetailsByKey[service.key]?.buttonText} />
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.slice(5, 8).map((service) => (
                <ServiceCard key={service.key} service={service} description={serviceDetailsByKey[service.key]?.description} buttonText={serviceDetailsByKey[service.key]?.buttonText} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What every engagement includes — real, company-wide facts */}
      <section className="bg-[#050505] py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
            {engagementEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
            {engagementHeading}
          </h2>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-14 leading-relaxed">
            {engagementSubtext}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementFeatures.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="relative">
                {/* Mobile-only connector — sits only in the gap above this
                    card (never over its body/icon). A full-height spine
                    behind the cards (the previous approach) still showed
                    through the icon since the card's own background is
                    too transparent to hide anything placed behind it. */}
                {i > 0 && (
                  <span
                    className="sm:hidden absolute left-[46px] -top-6 h-6 w-px"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to bottom, rgba(64,162,216,0.4) 0px, rgba(64,162,216,0.4) 4px, transparent 4px, transparent 12px)",
                    }}
                    aria-hidden="true"
                  />
                )}
                <HighlightCard icon={<Icon size={20} />} title={title} desc={desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure where to start — self-select by problem, flowing carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            {scenariosEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {scenariosHeading}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
            {scenariosSubtext}
          </p>
        </div>

        <ServiceScenariosCarousel
          items={serviceScenarios.map(({ question, service: key, detail }) => ({
            question,
            service: key,
            detail: detail || serviceDetailsByKey[key]?.description,
          }))}
        />
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
            {whyChooseEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            {whyChooseHeading}
          </h2>
          <RichText as="p" text={whyChooseSubtext} className="text-center text-white/60 max-w-xl mx-auto mb-14" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseItems.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={20} />
                </span>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <RichText
                  as="p"
                  text={description}
                  className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs — questions specific to choosing/working with our services */}
      <DarkFAQSection
        faqs={content?.servicesFaqItems?.length > 0 ? content.servicesFaqItems : SERVICES_FAQS}
        heading={content?.servicesFaqHeading || "Frequently Asked Questions"}
      />

      <CTA content={content} />
    </>
  );
}
