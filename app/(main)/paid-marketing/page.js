import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Target, MessageCircle, TrendingUp, Users, ShoppingCart, MapPin } from "lucide-react";

export const metadata = {
  title:
    "Paid Marketing Services in India | Google & Meta Ads | BizzBuzz Creations",
  description:
    "Boost leads & sales with expert paid marketing services. Google Ads, Meta Ads & performance campaigns by BizzBuzz Creations in India & Prayagraj.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/paid-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Google & Search Ads Management",
    description:
      "Get found the moment someone is ready to buy. Our digital ads management services cover search, display, and shopping campaigns built around real buyer intent, so your business shows up when it matters most, not just when budgets allow.",
  },
  {
    icon: MessageCircle,
    heading: "Meta & Social Ads Management",
    description:
      "From Facebook to Instagram, our paid media services are designed to stop the scroll and start conversations. We craft ad creatives and targeting strategies that turn casual scrollers into genuine leads for your brand.",
  },
  {
    icon: TrendingUp,
    heading: "Performance Marketing & ROI Campaigns",
    description:
      "As a dedicated performance marketing agency, every campaign we run is tracked against one metric that matters: return on investment. No vanity numbers, no fluff, just campaigns built to hit your revenue targets.",
  },
  {
    icon: Users,
    heading: "Lead Generation Campaigns",
    description:
      "Our lead generation marketing services are engineered to fill your calendar, not just your inbox. We combine smart targeting, landing pages, and offers that convert visitors into genuine, sales-ready leads.",
  },
  {
    icon: ShoppingCart,
    heading: "E-commerce & Retargeting Ads",
    description:
      "Running an online store? Our team specializes in performance marketing for e-commerce needs, from product ads to retargeting shoppers who almost bought, helping you recover lost sales and boost repeat purchases.",
  },
  {
    icon: MapPin,
    heading: "Local & City-Based Ad Campaigns",
    description:
      "Need customers walking through your door? As a trusted paid marketing agency in Allahabad, we run hyper-local campaigns that put your business in front of nearby customers actively searching for what you offer.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Business & Goals",
    body: "We start by learning your industry, customers, and what a genuinely good lead looks like for you — not a generic campaign template.",
  },
  {
    title: "Campaign Strategy & Creative Setup",
    body: "Targeting, ad creatives, and landing pages get built around real buyer intent for your specific market and platform.",
  },
  {
    title: "Launch & Real-Time Optimization",
    body: "Campaigns go live with daily monitoring — budgets, bids, and creatives get adjusted as real performance data comes in, not on a fixed monthly cycle.",
  },
  {
    title: "Scale & Transparent Reporting",
    body: "Once a campaign proves itself, we scale spend into what's working and report honestly on cost per lead, every month.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Performance-First Campaigns",
    description:
      "Every campaign we run is tracked against one metric that matters: return on investment — no vanity numbers, no fluff.",
  },
  {
    number: "002",
    title: "Industry-Tailored Strategy",
    description:
      "We don't believe in one-size-fits-all packages — every campaign is built around your industry, your customers, and your goals.",
  },
  {
    number: "003",
    title: "Transparent Numbers",
    description:
      "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead every month.",
  },
  {
    number: "004",
    title: "Daily Optimization",
    description:
      "From strategy to daily optimisation, we handle it all — campaigns don't sit untouched between monthly check-ins.",
  },
  {
    number: "005",
    title: "Full-Funnel Ad Management",
    description:
      "Google, Meta, e-commerce retargeting, and hyper-local campaigns, all run from strategy through execution under one roof.",
  },
  {
    number: "006",
    title: "A Team, Not a Vendor",
    description:
      "Think of us less like a vendor and more like a hired paid marketing team sitting inside your business, pushing for growth every day.",
  },
];

const FAQS = [
  {
    question: "What does a paid marketing agency do?",
    answer:
      "A paid marketing agency runs and optimizes online ads to generate leads, calls, and sales through platforms like Google and Meta.",
  },
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing focuses on measurable results like leads and sales, not just clicks or impressions.",
  },
  {
    question: "Is paid marketing good for small businesses in India?",
    answer:
      "Yes, it helps small businesses generate targeted leads quickly with a controlled budget.",
  },
  {
    question: "What is the ideal budget for paid ads in India?",
    answer:
      "Budgets vary, but most businesses start small and scale once they see positive ROI.",
  },
  {
    question: "Which is the best paid marketing agency in Prayagraj?",
    answer:
      "BizzBuzz Creations is a trusted paid marketing agency in Prayagraj offering Google and Meta ad services.",
  },
];

export default function PaidMarketing() {
  return (
    <>
      <BpoHero
        heading="Turn Every Rupee You Spend On Ads Into A Paying Customer"
        description="Stop paying for clicks that go nowhere. BizzBuzz Creations, Prayagraj's paid marketing agency, turns your ad budget into real leads, real calls, and real sales."
        img="/ads.webp"
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
              src="/meta ads.webp"
              alt="BizzBuzz Creations paid ads team at work"
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
              Paid Marketing Services In India, Built For How India Buys
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              BizzBuzz Creations is a full-service digital advertising
              agency offering paid marketing services for small business
              owners, growing startups, and established brands right across
              India. Whether you&rsquo;re a clinic in Lucknow, a D2C brand
              in Mumbai, or a B2B company in Bangalore, our team runs your
              online advertising with one goal in mind: turning your ad
              spend into measurable business growth.
            </p>
            <p className="text-white/70 leading-relaxed">
              We work as a paid ads partner for clients in every major city
              and state, managing everything from strategy to execution, so
              you can focus on running your business while we focus on
              filling your pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* "Our Core Paid Marketing Services" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Our Core Paid Marketing Services" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our Paid Marketing Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Paid Marketing Process"
            description="Anyone can run an ad. Not everyone can run one that pays for itself. Our four-step process is built around your industry, your customers, and your goals — not a one-size-fits-all package."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Paid Marketing Agency" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Paid Marketing Agency"
          description="BizzBuzz Creations is a paid marketing agency based in Prayagraj, built for businesses done experimenting and ready to invest in results. As an established online advertising partner, we run Google Ads, Meta Ads, and performance campaigns for brands across India."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Questions" />

      <BpoWhyChooseDark />
      <div className="bg-black py-10">
        <CTA />
      </div>

      <div className="bg-black border-t border-white" />
    </>
  );
}
