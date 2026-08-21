import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { Mail, Filter, Contact, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Marketing Automation Services in India | Bizzbuzz Creations",
  description:
    "Automate emails, CRM, and WhatsApp with marketing automation services. Get more leads and sales with smart workflows across India & Prayagraj.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/marketing-automation",
  },
};

const SERVICE_ITEMS = [
  {
    icon: Mail,
    heading: "Email Marketing Automation",
    description:
      "We set up email automation that sends the right message at the right moment: welcome sequences, abandoned cart reminders, and re-engagement campaigns, every email timed, tested, and tracked.",
  },
  {
    icon: Filter,
    heading: "Lead Nurturing Automation",
    description:
      "A lead that isn't ready to buy today doesn't mean a lost sale. Our lead nurturing automation keeps prospects warm with timed content, reminders, and offers until they're ready to talk to your team.",
  },
  {
    icon: Contact,
    heading: "CRM Marketing Automation",
    description:
      "Your CRM shouldn't be a place where leads go to be forgotten. We connect automation directly to your campaigns, so every call, form fill, or reply automatically updates lead status and triggers the next action.",
  },
  {
    icon: MessageCircle,
    heading: "WhatsApp Marketing Automation",
    description:
      "With open rates far higher than email, WhatsApp automation lets you send order updates, offers, and reminders where your customers already are, plus chatbot replies for common questions.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Mapping Your Customer Journey",
    body: "We look at where leads actually stall — a form filled and never followed up, a cart abandoned and forgotten — before building anything.",
  },
  {
    title: "Building the Workflow & Messaging",
    body: "We design the actual workflow and write the messaging ourselves, rather than handing you a generic tool template.",
  },
  {
    title: "Connecting to Your CRM & Launch",
    body: "Every campaign gets connected to your CRM so your sales team wakes up to warm leads, not cold silence, once it goes live.",
  },
  {
    title: "Monthly Review & Optimization",
    body: "Every workflow is reviewed and improved monthly — not left running on autopilot and forgotten after setup.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "One Connected System",
    description:
      "We treat email, WhatsApp, and lead nurturing as one connected system, not separate campaigns running blind.",
  },
  {
    number: "002",
    title: "We Build the Workflow Ourselves",
    description:
      "We don't sell you a tool subscription and walk away — we build the workflow and write the messaging ourselves.",
  },
  {
    number: "003",
    title: "CRM-Connected, Not Manual",
    description:
      "Every call, form fill, or reply automatically updates lead status and triggers the next action — no manual data entry required.",
  },
  {
    number: "004",
    title: "Scales With Real Volume",
    description:
      "Startups get plans that scale with real volume, not enterprise pricing from day one.",
  },
  {
    number: "005",
    title: "Reviewed Monthly",
    description:
      "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
  },
  {
    number: "006",
    title: "Built Around Real Behavior",
    description:
      "We build the system around how your customers actually behave, not a generic funnel template.",
  },
];

const FAQS = [
  {
    question:
      "What's the difference between marketing automation and email marketing?",
    answer:
      "Email automation is one part; marketing automation includes CRM, lead nurturing, and multi-channel workflows.",
  },
  {
    question: "Can startups afford marketing automation?",
    answer:
      "Yes, you can start with a single workflow and scale as your business grows.",
  },
  {
    question: "Do you offer WhatsApp marketing automation?",
    answer:
      "Yes, we automate replies, reminders, updates, and customer interactions on WhatsApp.",
  },
  {
    question: "Will automation replace my sales team?",
    answer:
      "No, it supports your team by handling follow-ups while they focus on closing deals.",
  },
  {
    question: "How are you different from other agencies?",
    answer:
      "We build, track, and optimize complete workflows — not just set up tools.",
  },
];

export default function MarketingAutomation() {
  return (
    <>
      <BpoHero
        heading="Stop Chasing Leads Manually, Let Marketing Automation Do It While You Sleep"
        description="Bizzbuzz Creations builds marketing automation systems that run your email campaigns, nurture leads, update your CRM, and reply on WhatsApp automatically — no more missed follow-ups, no more manual grunt work."
        img="/digitalmarketing.webp"
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
              src="/digital.webp"
              alt="BizzBuzz Creations marketing automation team at work"
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
              One Automation Partner, Every Channel Your Customers Actually Use
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Most businesses don&rsquo;t lose customers because their
              product is wrong; they lose them because nobody followed up
              in time. At Bizzbuzz Creations, we set up marketing
              automation that handles the follow-up, the reminders, and
              the repetitive campaigns for you, so every lead gets a
              timely response.
            </p>
            <p className="text-white/70 leading-relaxed">
              As a marketing automation agency, we don&rsquo;t just install
              software and walk away; we design the actual workflow, write
              the messaging, and connect it to your CRM so your sales team
              wakes up to warm leads, not cold silence.
            </p>
          </div>
        </div>
      </section>

      {/* "Four Systems That Keep Working After Your Team Clocks Out" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid
            title="Four Systems That Keep Working After Your Team Clocks Out"
            items={SERVICE_ITEMS}
          />
        </div>
      </section>

      {/* "Our Marketing Automation Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Marketing Automation Process"
            description="Automation that's actually set up to sell, not just send. Our four-step process treats email, WhatsApp, and lead nurturing as one connected system, not separate campaigns running blind."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Marketing Automation Agency" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Marketing Automation Agency"
          description="BizzBuzz Creations is a marketing automation agency helping businesses across India close the follow-up gap — email, CRM, WhatsApp, and lead nurturing built into one connected system around how your customers actually behave."
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
