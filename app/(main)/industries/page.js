import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Stethoscope,
  PiggyBank,
  UtensilsCrossed,
  Watch,
  Film,
  Plane,
  Dumbbell,
  GraduationCap,
  Home as HomeIcon,
  ShoppingCart,
  CalendarDays,
  Factory,
  Shirt,
  Gamepad2,
  HardHat,
} from "lucide-react";
import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/caseStudies";
import CertificationsCarousel from "@/components/sections/certificationsCarousel";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import RichText from "@/components/ui/richText";

// Icons stay code-driven (design), matched positionally to whichever
// industry cards are saved — same order as the default list below.
const INDUSTRY_ICONS = [
  Stethoscope,
  PiggyBank,
  UtensilsCrossed,
  Watch,
  Film,
  Plane,
  Dumbbell,
  GraduationCap,
  HomeIcon,
  ShoppingCart,
  CalendarDays,
  Factory,
  Shirt,
  Gamepad2,
  HardHat,
];

// Each card links straight to that industry's own dedicated /industries
// page (not a generic service page), so clicking "Healthcare" lands on
// the Healthcare industry page, and so on for all 15. `image` is each
// industry's own real photo (the same ones used on that industry's own
// hero section) — was previously a generic pool of 11 photos cycled
// across all 15 cards via index modulo, unrelated to which industry a
// card actually was, and two of those 11 (/banner.png, /teamPic.webp)
// don't even exist in /public, so a couple of cards always rendered a
// broken image regardless of which industry landed on that slot.
const DEFAULT_INDUSTRY_CARDS = [
  { title: "Healthcare", description: "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.", linkText: "Learn More", linkHref: "/industries/healthcare", image: "/Healthcare.png" },
  { title: "Finance", description: "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.", linkText: "Learn More", linkHref: "/industries/finance", image: "/Finance.png" },
  { title: "Restaurant", description: "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.", linkText: "Learn More", linkHref: "/industries/restaurant", image: "/Restaurant.png" },
  { title: "Wearables", description: "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.", linkText: "Learn More", linkHref: "/industries/wearables", image: "/wearables.png" },
  { title: "Entertainment", description: "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.", linkText: "Learn More", linkHref: "/industries/entertainment", image: "/Entertainment.png" },
  { title: "Travel", description: "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.", linkText: "Learn More", linkHref: "/industries/travel", image: "/Travel.png" },
  { title: "Fitness", description: "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.", linkText: "Learn More", linkHref: "/industries/fitness", image: "/fitness.png" },
  { title: "Education", description: "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.", linkText: "Learn More", linkHref: "/industries/education", image: "/Education.png" },
  { title: "Real Estate", description: "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.", linkText: "Learn More", linkHref: "/industries/real-estate", image: "/Real estate.png" },
  { title: "E-commerce", description: "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.", linkText: "Learn More", linkHref: "/industries/ecommerce", image: "/ecommerce.png" },
  { title: "Events", description: "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.", linkText: "Learn More", linkHref: "/industries/events", image: "/Events.png" },
  { title: "Manufacturing", description: "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.", linkText: "Learn More", linkHref: "/industries/manufacturing", image: "/Manufacturing.png" },
  { title: "Fashion & Apparel", description: "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.", linkText: "Learn More", linkHref: "/industries/fashion-apparel", image: "/Fashion.png" },
  { title: "Gaming", description: "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.", linkText: "Learn More", linkHref: "/industries/gaming", image: "/Gaming.png" },
  { title: "Construction", description: "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.", linkText: "Learn More", linkHref: "/industries/construction", image: "/Construction.png" },
];

// Industries page FAQs — questions specific to working across industries.
const INDUSTRIES_FAQS = [
  {
    question: "What industries does BizzBuzz Creations serve?",
    answer:
      "BizzBuzz Creations works with businesses across healthcare, finance, restaurants, travel, education, real estate, ecommerce, manufacturing, gaming, and other growing industries.",
  },
  {
    question: "Do you provide industry-specific digital marketing services?",
    answer:
      "Yes. We create digital marketing strategies based on each industry's audience, competition, customer journey, business goals, and market requirements.",
  },
  {
    question: "Can you help my industry improve its online visibility?",
    answer:
      "Yes. Our SEO, digital marketing, social media, Google Ads, and website development solutions help businesses strengthen visibility and reach potential customers.",
  },
  {
    question: "Do you create websites for different industries?",
    answer:
      "Yes. We develop industry-focused websites designed around your business objectives, audience needs, user experience, and conversion goals.",
  },
  {
    question: "Can BizzBuzz Creations work with businesses outside Prayagraj?",
    answer:
      "Yes. We work with businesses in Prayagraj, across India, and worldwide, providing digital marketing, BPO, web development, and other digital solutions.",
  },
  {
    question: "How do I choose the right digital marketing strategy for my industry?",
    answer:
      "Our team can evaluate your industry, audience, competition, goals, and current digital presence to recommend the most suitable marketing and technology solutions.",
  },
];

export async function generateMetadata() {
  return buildPageMetadata("industries", {
  title: "Digital Marketing Services by Industry | BizzBuzz Creations",
  description:
    "Explore industry-specific digital marketing, SEO, social media, web development, and BPO solutions for businesses in India and worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/industries",
  },
});
}

export default async function IndustriesIndexPage() {
  const content = await getPageContent("industries");

  const heroEyebrow = content?.industriesHeroEyebrow || "Industries";
  const heroHeading = content?.industriesHeroHeading || "Digital Growth Solutions for Every Industry";
  const heroParagraph =
    content?.industriesHeroParagraph ||
    "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works.";
  const heroButtonText = content?.industriesHeroButtonText || "Explore Our Solutions";
  const heroImage = content?.industriesHeroImage || "/industries.png";

  const gridEyebrow = content?.industriesGridEyebrow || "";
  const gridHeading = content?.industriesGridHeading || "Delivering Value Across Every Major Industry";
  const gridSubtext = content?.industriesGridSubtext || "Real challenges, real solutions — pick your industry below to see how we approach it.";

  const certHeading = content?.industriesCertHeading || "Certified & Recognized By";
  const certSubtext = content?.industriesCertSubtext || "Real credentials that back up how we work, not just what we say.";

  const industryCardsRaw = content?.industryCards?.length > 0 ? content.industryCards : DEFAULT_INDUSTRY_CARDS;
  const industryCards = industryCardsRaw.map((card, i) => ({
    ...card,
    icon: INDUSTRY_ICONS[i % INDUSTRY_ICONS.length],
  }));

  return (
    <>
      {/* Hero — full-bleed photo (same treatment as the FAQ hero): the
          image is already designed with a dark-to-photo gradient built
          in, laid down as a plain background with a matching black
          overlay, text sitting in the solid-black portion on the left.
          Replaces the previous radial-gradient background + coded
          icon-badge cluster. */}
      {/* pt-10 on mobile (was pt-28) — that much top padding under a
          sticky nav that already occupies its own space in the flow was
          just leaving a large empty gap before the heading; md keeps its
          original spacing. */}
      <section className="relative overflow-hidden md:min-h-[560px] flex items-center pt-10 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white bg-black">
        {/* Full-bleed version — desktop/tablet only. On mobile this sat
            dimmed behind the gradient with text stacked on top, hard to
            actually see; mobile instead gets its own boxed copy of the
            same image between the paragraph and the CTA button below. */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, #000000 38%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="relative max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
            {heroEyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            {heroHeading}
          </h1>
          <p className="text-white/70 leading-relaxed mb-9 max-w-lg">
            {heroParagraph}
          </p>
          <div
            className="md:hidden relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-9"
            style={{
              backgroundImage: `url('${heroImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Link href="/services" className="inline-block">
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
        </div>
      </section>

      {/* Industries grid */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            {gridEyebrow}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mb-4">
            {gridHeading}
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            {gridSubtext}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.title}
                  href={card.linkHref}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    <span className="absolute top-3 right-3 text-[11px] font-bold text-white/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute bottom-3 left-3 flex items-center gap-2">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#0B60B0] text-white shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={16} />
                      </span>
                      <span className="font-bold text-white">{card.title}</span>
                    </span>
                  </div>
                  <div className="p-5">
                    {/* noLink — the whole card is already a <Link>; a link
                        inside the description would nest an <a> inside an
                        <a>, which every browser breaks (force-closes the
                        outer one), so the card would stop navigating. */}
                    <RichText
                      as="p"
                      text={card.description}
                      noLink
                      className="text-sm text-white/60 leading-relaxed line-clamp-2"
                    />
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] mt-3 transition-colors duration-300 group-hover:text-white">
                      {card.linkText}
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case studies — real BizzBuzz clients */}
      <div className="border-t border-white/10">
        <CaseStudies />
      </div>

      {/* Certifications carousel */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {certHeading}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-14 leading-relaxed">
            {certSubtext}
          </p>
          <CertificationsCarousel />
        </div>
      </section>

      {/* FAQs — questions specific to working across industries */}
      <DarkFAQSection
        faqs={content?.industriesFaqItems?.length > 0 ? content.industriesFaqItems : INDUSTRIES_FAQS}
        heading={content?.industriesFaqHeading || "Frequently Asked Questions"}
      />

      <CTA content={content} />
    </>
  );
}
