import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Target, Rocket, TrendingUp, Settings, Users, MapPin } from "lucide-react";

export const metadata = {
  title: "Business Consulting India | Strategy | BizzBuzz Creations",
  description:
    "Expert business consulting services in India for startups and companies. Get strategy, growth, and operations support by BizzBuzz Creations across India.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/business-consultancy",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Target,
    heading: "Business Strategy Consulting",
    description:
      "Every strong business runs on a clear plan, not guesswork. As a dedicated strategy consulting partner, we help you define your goals, map your market, and build a roadmap that turns big ambitions into practical, executable steps.",
  },
  {
    icon: Rocket,
    heading: "Startup & New Business Consulting",
    description:
      "Starting up is exciting and overwhelming. Our startup consulting guides first-time founders through everything from business models to go-to-market strategy, from a partner who's done it before.",
  },
  {
    icon: TrendingUp,
    heading: "Business Growth & Scaling Consulting",
    description:
      "Ready to grow but not sure how to scale without breaking what's working? Our growth consulting builds systems and processes designed to help you expand sustainably, not just quickly.",
  },
  {
    icon: Settings,
    heading: "Operations & Process Consulting",
    description:
      "Inefficiency quietly eats into profit every single day. Through focused operations consulting, we identify the bottlenecks in your day-to-day running and streamline them.",
  },
  {
    icon: Users,
    heading: "Business Development & Marketing Consulting",
    description:
      "Growth isn't just about strategy on paper — it's about winning customers too. Our combined business development and marketing consulting helps you build pipeline and brand visibility.",
  },
  {
    icon: MapPin,
    heading: "Local & City-Based Business Advisory",
    description:
      "Looking for guidance that understands your local market? As a trusted business consultant in Prayagraj and Allahabad, we offer hands-on advisory grounded in the local landscape.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Business Audit & Discovery",
    body: "We start with a clear-eyed look at what's actually working in your business and what's holding it back, before recommending anything.",
  },
  {
    title: "Strategy & Roadmap",
    body: "Goals, market position, and a practical roadmap get mapped out — built around your industry and real numbers, not a generic playbook.",
  },
  {
    title: "Hands-On Implementation",
    body: "We stay involved through execution, not just handing over a strategy deck and disappearing after the first meeting.",
  },
  {
    title: "Ongoing Review & Course Correction",
    body: "We're direct about what's working and honest about what isn't, adjusting the plan as real results come in.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "No Generic Playbooks",
    description:
      "Every recommendation is built around your industry, your team, and your real numbers — not a template pulled off a shelf.",
  },
  {
    number: "002",
    title: "We Stay Involved",
    description:
      "From the first audit to final execution, we stay by your side long after the first meeting, not just handing over a strategy deck.",
  },
  {
    number: "003",
    title: "Direct & Honest",
    description:
      "We're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
  },
  {
    number: "004",
    title: "Outcomes You Can Measure",
    description:
      "Every engagement is focused on results you can point to, not just reports and recommendations that sit unread.",
  },
  {
    number: "005",
    title: "A Team, Not Outside Consultants",
    description:
      "Think of us less like outside consultants and more like a hired team that's genuinely invested in your growth.",
  },
  {
    number: "006",
    title: "Local Roots, India-Wide Reach",
    description:
      "Born and based in Prayagraj, we understand what it takes to build a business here as well as in the metros.",
  },
];

const FAQS = [
  {
    question: "What does a business consultant do?",
    answer:
      "A business consultant helps you understand what's working in your business and what's not. They guide you with simple, practical strategies to improve growth, save costs, and run things more efficiently.",
  },
  {
    question: "How is this different from hiring staff?",
    answer:
      "Instead of hiring full-time employees, a consultant gives expert advice when you need it without long-term costs. They also bring a fresh, unbiased perspective to solve problems faster.",
  },
  {
    question: "Is it useful for small businesses or startups?",
    answer:
      "Absolutely. A consultant helps you avoid common mistakes, plan better, and grow faster especially when you're just starting out or trying to scale.",
  },
  {
    question: "How much does it cost in India?",
    answer:
      "It depends on what you need. Some businesses need a one-time strategy, while others need ongoing support. Good consultants usually offer flexible pricing based on your goals and budget.",
  },
  {
    question: "Can I find a consultant in Prayagraj/Allahabad?",
    answer:
      "Yes, there are local options like BizzBuzz Creations that understand the market well and can even work with you in person when needed.",
  },
];

export default function BusinessConsultancy() {
  return (
    <>
      <BpoHero
        heading="Turn Your Business Potential Into Real Profit Growth"
        description="Most businesses don't fail — they get stuck. We identify what's holding you back and build actionable strategies that drive real results, not just reports."
        img="/businesscons.webp"
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
              src="/bc-img.png"
              alt="BizzBuzz Creations business consultants at work"
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
              Business Consulting Services Across India
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              BizzBuzz Creations is a full-service business consulting firm
              offering business consulting services to founders, small
              business owners, and growing companies right across India.
            </p>
            <p className="text-white/70 leading-relaxed">
              Whether you&rsquo;re scaling a manufacturing unit in
              Ahmedabad, launching a D2C brand in Delhi, or fixing
              operations for a family business in Chennai, our team steps
              in as your management consultant, bringing structure,
              strategy, and clarity to every decision.
            </p>
          </div>
        </div>
      </section>

      {/* "Our Core Business Consulting Services" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Our Core Business Consulting Services" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our Consulting Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Consulting Process"
            description="Anyone can hand you a strategy deck. Not everyone will sit with you and make sure it actually works. Our four-step process stays involved from the first audit to final execution."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Business Consulting Firm" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Business Consulting Firm"
          description="BizzBuzz Creations is a business consulting firm based in Prayagraj, helping founders and growing companies across India turn strategy into real, measurable results — not just reports."
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
