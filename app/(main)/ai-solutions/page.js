import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, Sparkles, Workflow, Radar } from "lucide-react";

export const metadata = {
  title: "AI Solutions Company in India | Bizzbuzz Creations",
  description:
    "Get custom AI solutions, chatbots, automation & GEO services. Bizzbuzz Creations helps businesses in India & Prayagraj scale with AI.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "Custom AI Agents & Chatbots",
    description:
      "We design AI agents that do more than answer FAQs — they qualify leads, book calls, and resolve real customer queries, trained on your actual business so every chat feels like talking to your team.",
  },
  {
    icon: Sparkles,
    heading: "AI Content & Generative Engines",
    description:
      "Our generative AI content engines draft, structure, and personalize copy at scale, including blog posts, product descriptions, and ad variations, trained on your brand voice.",
  },
  {
    icon: Workflow,
    heading: "Workflow & Process Automation",
    description:
      "Our AI workflow automation connects your tools together, so approvals, reports, follow-ups, and data entry run without anyone chasing them manually.",
  },
  {
    icon: Radar,
    heading: "GEO (Generative Engine Optimization)",
    description:
      "Our GEO service structures your content and website so AI engines like ChatGPT, Perplexity, and Google AI Overviews actually cite and recommend your business.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Workflow",
    body: "We start by learning where your team spends repetitive hours, where leads go cold, and where content bottlenecks actually slow you down.",
  },
  {
    title: "Building the Right Solution",
    body: "A custom agent, content engine, or automation gets built around that exact gap — not a generic AI tool pulled off a shelf.",
  },
  {
    title: "Testing With Your Team",
    body: "Every solution is tested with the people who'll actually use it before it goes live, so it fits real workflows, not a demo.",
  },
  {
    title: "Launch, Refine & Monitor",
    body: "We stay involved after launch, refining based on real usage instead of leaving the system running blind.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Practical, Not Generic",
    description:
      "We don't sell generic AI software off a shelf — every solution is built for what your specific business actually needs.",
  },
  {
    number: "002",
    title: "Built Around Your Real Workflow",
    description:
      "We start by understanding how your business actually runs before building any agent, automation, or content engine.",
  },
  {
    number: "003",
    title: "Tested With Your Team",
    description:
      "Every AI agent or automation is tested with your team before launch, not handed over as an untested demo.",
  },
  {
    number: "004",
    title: "GEO From Day One",
    description:
      "We combine AI integration with GEO from the start, so you're visible wherever customers search, including inside AI answers.",
  },
  {
    number: "005",
    title: "Refined After Launch",
    description:
      "We don't disappear after handoff — every system is refined based on real usage, not left running blind.",
  },
  {
    number: "006",
    title: "Scales From Startup to Enterprise",
    description:
      "Whether you're automating your first support inbox or scaling AI across an established company, the approach stays practical.",
  },
];

const FAQS = [
  {
    question:
      "What's the difference between an AI solutions company and a developer?",
    answer:
      "A developer builds a tool; an AI solutions company builds a complete system with automation, agents, and strategy.",
  },
  {
    question: "Can small businesses afford AI solutions?",
    answer:
      "Yes, you can start with one use case (like a chatbot) and scale as needed.",
  },
  {
    question: "What is GEO, and do I need it?",
    answer:
      "GEO helps AI tools recommend your business in search results, making it essential alongside SEO.",
  },
  {
    question: "Will an AI chatbot sound robotic?",
    answer:
      "No, it's trained on your business tone to deliver natural, human-like responses.",
  },
  {
    question: "How long does it take to build an AI agent?",
    answer:
      "Most AI agents are ready within 2 to 4 weeks, depending on complexity.",
  },
];

export default function AISolutions() {
  return (
    <>
      <BpoHero
        heading="Your Business, Running on AI That Actually Understands It"
        description="Bizzbuzz Creations builds custom AI agents, generative content engines, and workflow automation plus GEO, so your brand shows up when people ask AI for answers, not just Google."
        img="/aiservice.webp"
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
              src="/hero (1).webp"
              alt="BizzBuzz Creations AI team at work"
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
              AI That Fits Your Business, Not the Other Way Around
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Most businesses hear &ldquo;AI solutions&rdquo; and picture
              something complicated, expensive, or built for companies ten
              times their size. That&rsquo;s not how we work. Bizzbuzz
              Creations makes artificial intelligence practical for a
              startup automating its first support inbox or a growing
              brand that needs a full AI development partner.
            </p>
            <p className="text-white/70 leading-relaxed">
              We start by understanding how your business actually runs —
              where your team spends the most repetitive hours, where
              leads go cold, and where content bottlenecks slow you down —
              and build custom AI solutions around exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* "Four Ways We Put AI to Work" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Four Ways We Put AI to Work in Your Business" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our AI Solutions Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our AI Solutions Process"
            description="We're not a company that hands you a demo and disappears. Every AI agent, content engine, or automation is built around your real workflow, tested with your team, and refined after launch."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "AI Solutions Company" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="AI Solutions Company"
          description="BizzBuzz Creations is an AI solutions company helping businesses in Prayagraj and across India put practical AI to work — custom agents, content engines, automation, and GEO, built around how your business actually runs."
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
