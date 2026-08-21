import BpoHero from "@/components/sections/bpoHero";
import React from "react";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Bot, PhoneCall, Workflow, FileText, UserCheck, Clock } from "lucide-react";

  export const metadata = {
    title: "BPO Services India | Call Center | BizzBuzz Creations",
    description:
      "Outsource call center, back office, and customer support with AI-powered BPO services by BizzBuzz Creations, serving Prayagraj and businesses across India.",
      alternates: {
    canonical: "https://bizzbuzzcreations.com/bpo-services",
  },
  };

const SERVICE_ITEMS = [
  {
    icon: Bot,
    heading: "AI-Powered BPO & Call Center Solutions",
    description:
      "We layer AI call center solutions on top of real agents' smart call routing, live transcription, and chatbot customer support services that pick up repetitive questions instantly. Your team only steps in for calls that truly need a human touch, so nothing slips through and nothing feels robotic.",
  },
  {
    icon: PhoneCall,
    heading: "Inbound & Outbound Call Center Services",
    description:
      "From answering customer queries to running outbound sales and collection calls, our inbound call center services and outbound call center services are staffed by agents trained on your scripts, tone, and product, not a generic script read out from a random floor.",
  },
  {
    icon: Workflow,
    heading: "Business Process Automation Services",
    description:
      "Manual, repetitive processes are where most companies quietly lose hours every week. Our business process automation services map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying.",
  },
  {
    icon: FileText,
    heading: "Data Entry & Back Office Outsourcing",
    description:
      "Invoices, records, CRM updates, reconciliations — our data entry outsourcing and back office outsourcing desks work with the same accuracy checks a large enterprise would demand, at a cost a small business can actually plan around, including finance and accounting outsourcing support.",
  },
  {
    icon: UserCheck,
    heading: "Virtual Assistant & Startup Outsourcing",
    description:
      "Not every business needs a 50-seat floor. Our virtual assistant services and startup outsourcing services let founders and small teams hand off scheduling, support and admin work through flexible remote team outsourcing, scaling up only when the workload genuinely demands it.",
  },
  {
    icon: Clock,
    heading: "24/7 & E-commerce Customer Support",
    description:
      "Online stores and growing brands can't afford support that sleeps. Our 24/7 support outsourcing services and e-commerce customer support outsourcing cover order queries, returns, and chat support round the clock, with chatbot support services handling the late-night rush.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Requirements",
    body: "We start by learning your current workflow, tools, and pain points, so the team we build actually fits how you operate — not a generic template.",
  },
  {
    title: "Team Setup & Training",
    body: "Agents are hired and trained specifically on your scripts, tone, and product, so they represent your brand from the first call, not a random floor.",
  },
  {
    title: "Launch & Live Monitoring",
    body: "Your outsourced team goes live with close oversight in the first weeks, so gaps get caught early instead of after they've cost you customers.",
  },
  {
    title: "Ongoing Optimization & Reporting",
    body: "Weekly reporting and regular check-ins keep the engagement improving long after launch — not just during onboarding.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Trained, Dedicated Teams",
    description:
      "Every account gets agents trained specifically on your scripts, tone, and product — not a generic script read out from a random floor.",
  },
  {
    number: "002",
    title: "Transparent Reporting",
    description:
      "Weekly performance reporting and call recordings on request, so you always know what's happening on your account, not just a monthly summary.",
  },
  {
    number: "003",
    title: "Data Security First",
    description:
      "NDA available before any project details or access are shared, with account access scoped to what's needed and handling built around India's DPDP Act, 2023.",
  },
  {
    number: "004",
    title: "AI-Assisted, Human-Led",
    description:
      "We use AI only where it genuinely helps — routing, transcription, first responses — while trained agents handle everything that needs real judgment.",
  },
  {
    number: "005",
    title: "Scalable Engagement",
    description:
      "We scale with your business, not ahead of it — start with what you need today and add capacity as your workload actually grows.",
  },
  {
    number: "006",
    title: "One Direct Point of Contact",
    description:
      "No ticket queues for active clients — you reach your point of contact directly by phone or email, not a rotating cast of agents.",
  },
];

const FAQS = [
  {
    question: "Do you provide BPO services outside Prayagraj?",
    answer:
      "Yes, we serve clients across India and internationally through offshore outsourcing.",
  },
  {
    question: "What is an AI-powered BPO?",
    answer:
      "It combines human agents with AI tools to deliver faster, cost-efficient support.",
  },
  {
    question: "Is outsourcing affordable for startups?",
    answer:
      "Yes, you can start small and scale your remote team as your business grows.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, we provide round-the-clock support with shift-based teams and AI backup.",
  },
  {
    question: "Is my data secure with you?",
    answer:
      "Yes, we follow NDAs, access control, and strict data protection practices.",
  },
];

export default function BPO() {
  return (
    <>
      <BpoHero
        heading="Outsourcing That Feels Like Your Own Team, Just Not On Your Payroll."
        description="Bizzbuzz Creations runs call center outsourcing, AI-powered support, and back-office operations from Prayagraj for businesses across India-no jargon, no black-box vendor, just a team that delivers"
        img="/BPO service.png"
      />

      {/* "More Than Outsourcing" — dark section, glow accents behind the
          copy so the black background doesn't feel flat/empty. */}
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
              src="/bpo.jpg"
              alt="BizzBuzz Creations support agent handling client work"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover"
            />
            {/* Dotted texture overlay — matches the hero treatment */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden="true"
            />
            {/* Gradient fade — matches the hero treatment */}
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
              More Than Outsourcing A Team That Thinks Like You Do
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Outsourcing often feels like handing your business to a stranger. You lose visibility into what's said to customers,
              how data is handled, and whether anyone actually cares about the outcome the way you do. Bizzbuzz Creations was built in Prayagraj to fix exactly that gap.
              We started as a small BPO services provider with one rule: every account should run like an extension of the client's own team,
              not a distant vendor relationship.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today, we work with startups taking their first step into outsourcing services, small businesses in Allahabad needing reliable support,
              and growing companies across India that need a full-scale BPO company for inbound and outbound calling, data entry, and 24/7 customer support outsourcing.
              Whatever the size of your business, the approach stays the same:  we learn your process first, then build a team around it,
              instead of forcing your business into a generic template.
            </p>
          </div>
        </div>
      </section>

      {/* "What We Handle" — fanned card deck over a half-circle badge,
          same dark treatment, continuous with the section above. */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="What We Handle" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our BPO Process" — heading + copy left, expandable steps right */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our BPO Process"
            description="As a BPO and customer support partner, we build every engagement around understanding your workflow first, then design a team and process around it. Our four-step approach combines transparent onboarding with hands-on training, so your outsourced team runs like an extension of your own from day one."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      {/* Divider, contained to content width (not edge-to-edge) so the
          two black sections still read as separate. */}
      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "We are:" — same numbered two-column structure as the reference */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="BPO & Customer Support Company"
          description="BizzBuzz Creations is a BPO and customer support company helping businesses across India run outsourced operations without losing visibility or control. As a dedicated outsourcing partner, we emphasize transparent processes and trained teams tailored to your specific workflows and goals."
          points={WE_ARE_POINTS}
        />
      </section>

      <DarkFAQSection faqs={FAQS} heading="Frequently Asked Question" />

      <BpoWhyChooseDark />
      <div className="bg-black py-10">
        <CTA />
      </div>
    </>
  );
}
