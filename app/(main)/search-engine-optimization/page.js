import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, Sparkles, MessageCircleQuestion, Network, PenTool, MapPin } from "lucide-react";

export const metadata = {
  title: "SEO Services India | AI & Local SEO | BizzBuzz Creations",
  description:
    "Get expert SEO services in India with AI SEO, GEO, AEO, and local SEO by BizzBuzz Creations to boost rankings, organic traffic, visibility, and quality leads.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI Search Optimization",
    description:
      "AI is transforming how people search, and your business needs to adapt to stay visible. We optimize your website for AI-driven platforms so your content gets understood, trusted, and recommended.",
  },
  {
    icon: Sparkles,
    heading: "Generative Engine Optimization (GEO)",
    description:
      "Search engines are evolving into answer engines, where users get instant responses. Our GEO strategy ensures your business becomes part of those AI-generated answers.",
  },
  {
    icon: MessageCircleQuestion,
    heading: "Answer Engine Optimization (AEO)",
    description:
      "Modern users want quick answers without scrolling through pages. We optimize your content so it becomes the direct answer across search engines and AI tools.",
  },
  {
    icon: Network,
    heading: "Semantic SEO & Topical Authority",
    description:
      "Search engines now focus on meaning and expertise rather than just keywords. We build your website into a trusted authority within your niche.",
  },
  {
    icon: PenTool,
    heading: "AI Content Optimization",
    description:
      "Content must now work for both humans and AI systems. We create and refine content that ranks, gets cited, and drives real engagement.",
  },
  {
    icon: MapPin,
    heading: "High-Intent & Local SEO",
    description:
      "Driving traffic is not enough; you need customers ready to take action. We target high-intent and location-based searches to generate real business results.",
  },
];

const PROCESS_STEPS = [
  {
    title: "SEO & AI Visibility Audit",
    body: "We analyze your current rankings, technical health, and how visible you already are in AI search — Google AI Overviews, ChatGPT, and beyond.",
  },
  {
    title: "Strategy & Keyword Mapping",
    body: "We build a keyword strategy around high-intent terms and semantic topics, not just volume — mapped to what your actual customers search for.",
  },
  {
    title: "Content & Technical Implementation",
    body: "On-page fixes, technical SEO, and content built to be understood by both search engines and AI systems get shipped in focused sprints.",
  },
  {
    title: "Monitor, Report & Refine",
    body: "We track rankings, organic traffic, and AI-search visibility monthly, adjusting the strategy as search behavior and algorithms shift.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "AI-First Strategy",
    description:
      "We don't follow outdated SEO — every strategy is built for how search actually works in 2026, not five years ago.",
  },
  {
    number: "002",
    title: "Semantic SEO & Topical Authority",
    description:
      "We focus on meaning and expertise, building content clusters and entity-based SEO that establish real authority in your niche.",
  },
  {
    number: "003",
    title: "High-Intent Keyword Targeting",
    description:
      "We prioritize keywords that convert, not just ones that bring traffic — visibility that turns into leads and sales.",
  },
  {
    number: "004",
    title: "AI Search Visibility",
    description:
      "We optimize for Google AI Overviews, ChatGPT answers, and zero-click search, not just traditional blue-link rankings.",
  },
  {
    number: "005",
    title: "Data-Driven Execution",
    description:
      "Every recommendation is backed by real performance data and search behavior, not assumptions or industry guesswork.",
  },
  {
    number: "006",
    title: "Honest Reporting",
    description:
      "No ethical SEO agency can guarantee first-page rankings, and we won't pretend otherwise — you get transparent, honest progress reports instead.",
  },
];

const FAQS = [
  {
    question: "What is the best SEO service for my business?",
    answer:
      "The best SEO service combines AI SEO, content optimization, and high-intent keyword targeting. It should focus on generating leads, not just traffic.",
  },
  {
    question: "How much do SEO services cost in India?",
    answer:
      "SEO services in India typically range from affordable monthly plans to premium packages, depending on competition, goals, and strategy.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes 3 to 6 months for strong results, but AI SEO can improve visibility faster through featured snippets and AI answers.",
  },
  {
    question: "Can SEO guarantee first-page ranking on Google?",
    answer:
      "No ethical SEO agency can guarantee rankings. The right strategy improves visibility, authority, and long-term growth instead of false promises.",
  },
  {
    question: "Is SEO still worth it in 2026?",
    answer:
      "Yes, but modern SEO must include AI SEO, semantic SEO, and answer engine optimization to stay competitive in evolving search.",
  },
];

export default function SearchEngineOptimization() {
  return (
    <>
      <BpoHero
        heading="Be the Brand Google Ranks & AI Recommends"
        description="At BizzBuzz Creations, we build high-performance SEO strategies for businesses in Prayagraj and across India, helping you rank higher, get discovered in AI search, and attract customers ready to buy."
        img="/seO2.jpg"
      />

      {/* Intro — dark section, glow accents behind the copy */}
      <section className="relative overflow-hidden bg-black py-20">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative flex lg:flex-row flex-col px-5 lg:gap-20 gap-10 justify-center items-center max-w-6xl mx-auto">
          <div className="relative w-full lg:w-[440px] aspect-[4/5] shrink-0 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/BizzBuzz-Creations-5.png"
              alt="BizzBuzz Creations SEO team at work"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
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
            <h2 className="text-3xl font-bold mb-3 text-white">
              SEO Services in Prayagraj – Serving All of India
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your visibility on search engines is often the first
              interaction a customer has with your business, and most users
              decide which brand to trust within seconds of seeing search
              results. At BizzBuzz Creations, we don&rsquo;t just improve
              rankings; we help your business get discovered by the right
              audience at the right time.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you&rsquo;re a local business in Prayagraj or
              Allahabad looking for an SEO company near you, a small
              business owner in India searching for reliable SEO services,
              or a startup needing a data-driven SEO strategy to grow
              faster, our team builds customized SEO solutions that drive
              real traffic, leads, and sales — from Google rankings to AI
              search visibility.
            </p>
          </div>
        </div>
      </section>

      {/* "Our Core SEO Services" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Our Core SEO Services" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our SEO Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our SEO Process"
            description="Every SEO engagement starts with understanding where you actually stand today — in Google and in AI search — before we touch a single keyword. Our four-step process combines technical rigor with AI-search readiness, so rankings translate into real business results."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "SEO Company" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="SEO Services Company"
          description="BizzBuzz Creations is an SEO services company helping businesses in Prayagraj and across India rank higher, get discovered in AI search, and attract customers ready to buy. As a dedicated SEO partner, we build AI-first strategies designed for how search actually works today."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black py-10">
        <CTA />
      </div>
    </>
  );
}
