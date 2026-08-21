import Image from "next/image";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
import CTA from "@/components/sections/CTA";
import { FAQSection } from "@/components/ui/faq-accordion";
import OnboardingCarousel from "@/components/sections/onboardingCarousel";
import CategoriesShowcase from "@/components/sections/categoriesShowcase";
import {
  Eye,
  Users,
  Zap,
  Unlock,
  ShieldCheck,
  Lightbulb,
  FileSignature,
  Lock,
  KeyRound,
  FileX,
  Wallet,
  Clock,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "How We Work | BizzBuzz Creations",
  description:
    "See how BizzBuzz Creations runs an engagement — from onboarding and consultation to execution, reporting, security, and flexible engagement models.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/how-we-work",
  },
};

const PRINCIPLES = [
  {
    icon: Eye,
    title: "Transparency",
    desc: "You'll always know what's happening, why it's happening, and what comes next.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We build with you, not just for you. Every decision is shaped together.",
  },
  {
    icon: Zap,
    title: "Speed",
    desc: "Focused sprints and clear priorities keep momentum high without cutting corners.",
  },
  {
    icon: Unlock,
    title: "No Lock-In",
    desc: "Your Google Ads, Analytics, and website accounts stay owned by you — always.",
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    desc: "Access is scoped to what's needed, and an NDA is available before any details are shared.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We build for AI-driven search, not just today's algorithm — so strategies hold up.",
  },
];

const roadmapSteps = [
  {
    number: 1,
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    number: 2,
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget.",
  },
  {
    number: 3,
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars.",
  },
  {
    number: 4,
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    number: 5,
    title: "Report & Grow",
    desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

const CONSULTING_ITEMS = [
  {
    title: "Workshops That Unlock Clarity",
    body: "A focused working session with your team to align on goals, constraints, and what a win actually looks like.",
  },
  {
    title: "Market & Audience Research",
    body: "We study your industry, competitors, and target audience so strategy is grounded in real data, not guesswork.",
  },
  {
    title: "Technical & SEO Audits",
    body: "A full audit of your current site and digital presence — what's working, what's costing you visibility, and why.",
  },
  {
    title: "A Roadmap You Can Trust",
    body: "Everything above rolls into one clear, sequenced plan — so you know exactly what happens, and when.",
  },
];

const SECURITY_PRACTICES = [
  { icon: KeyRound, text: "Account access scoped to user-level permissions — never shared master logins" },
  { icon: Unlock, text: "Your Google Ads, Analytics, Meta Business Manager, and website accounts stay in your name" },
  { icon: FileSignature, text: "NDA available before any project details or access are shared, on request" },
  { icon: FileX, text: "Access revoked and your files/reports handed over if an engagement ends" },
  { icon: Lock, text: "Data handling practices built around India's DPDP Act, 2023" },
  { icon: ShieldCheck, text: "Only team members actively working on your account get access" },
];

const ENGAGEMENT_MODELS = [
  {
    icon: Wallet,
    title: "Fixed Price Model",
    desc: "Best for clearly scoped projects with specific deliverables and timelines — a set budget and complete clarity from the start.",
  },
  {
    icon: Users,
    title: "Dedicated Team Model",
    desc: "For long-term or evolving needs — a team works exclusively on your account, with faster iterations and deeper context over time.",
  },
  {
    icon: Clock,
    title: "Time & Material Model",
    desc: "Ideal for dynamic scopes — you pay for actual time and effort spent, keeping things adaptable as priorities shift.",
  },
  {
    icon: Layers,
    title: "Hybrid Model",
    desc: "A mix of fixed and flexible, suited to businesses that want structure with room to scale as the project grows.",
  },
];

const FAQS = [
  {
    question: "How long does onboarding take before work actually starts?",
    answer:
      "Typically a few days — a free consultation call, then a proposal back within 2-3 business days of that call. Work starts once you approve the scope.",
  },
  {
    question: "Do you sign an NDA before discussing our project?",
    answer:
      "Yes, we're happy to sign an NDA before any project details or account access are shared, if your business requires one.",
  },
  {
    question: "Will we own our own ad accounts and analytics?",
    answer:
      "Yes — your Google Ads, Analytics, Meta Business Manager, and website accounts remain owned by you. We work as authorized users, not owners.",
  },
  {
    question: "Can we switch engagement models later?",
    answer:
      "Yes — plans are reviewed regularly, and you can move between fixed-price, dedicated-team, or time-and-material models as your needs change.",
  },
  {
    question: "What happens if we want to pause or end the engagement?",
    answer:
      "Access to your accounts is revoked, and any reports, creative files, or documentation we've produced for you are handed over — the work product is yours.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[440px] sm:min-h-[500px] flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24"
        style={{ background: "#050b16" }}
      >
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "conic-gradient(from 200deg at 75% 10%, transparent, rgba(64,162,216,0.6), transparent 35%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "conic-gradient(from 30deg at 15% 95%, transparent, rgba(124,58,237,0.5), transparent 30%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            The Architecture of <span className="italic text-[#8fd0f2]">Execution</span>
          </h1>
          <p className="text-white/70 leading-relaxed mb-8 max-w-xl">
            Real growth isn&rsquo;t a matter of chance — it&rsquo;s a matter
            of process. Ours is a repeatable system that combines clear
            communication, honest reporting, and a relentless focus on
            outcomes over vanity metrics.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-lg transition"
          >
            Consult Our Experts
          </a>
        </div>
      </section>

      {/* Our principles */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            The Principles That Power Every Client Partnership
          </h2>
          <p className="text-white/70 max-w-2xl mb-14">
            No complicated playbooks or hidden processes — a handful of
            principles we don&rsquo;t compromise on, no matter the project.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-black/20"
              >
                <span className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 transition-colors duration-300 group-hover:text-black">
                    {title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable impact — real numbers and certifications only */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Real Numbers Behind the Process
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 leading-relaxed">
            Not vanity metrics — the actual scale of work behind how we
            operate.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[170px]"
              style={{ background: "linear-gradient(160deg, #0B60B0, #050b16)" }}
            >
              <p className="text-4xl font-bold mb-1">90+</p>
              <p className="text-white/70 text-sm">Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[170px]">
              <p className="text-4xl font-bold mb-1">50+</p>
              <p className="text-white/70 text-sm">Clients Across India &amp; the UK</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[170px]">
              <p className="text-4xl font-bold mb-1">2</p>
              <p className="text-white/70 text-sm">Offices — Prayagraj &amp; London</p>
            </div>
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[170px]"
              style={{ background: "linear-gradient(160deg, #4c2f91, #050b16)" }}
            >
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-white/70 text-sm">Industries Served</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-semibold text-white/70 mb-6">
              Certified &amp; Recognized By
            </p>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {[
                { src: "/clutch.png", alt: "Clutch" },
                { src: "/CDL.png", alt: "Google Ads Partner" },
                { src: "/GA.png", alt: "Google Analytics Partner" },
                { src: "/ISO.png", alt: "ISO Certified" },
              ].map((badge) => (
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

      {/* How we onboard new clients */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-2xl">
            Building Trust from Day One: How We Onboard New Clients
          </h2>
          <p className="text-white/60 max-w-2xl mb-14 leading-relaxed">
            Every great partnership starts with alignment. That&rsquo;s why
            onboarding focuses on clarity and trust from the very
            beginning.
          </p>

          <OnboardingCarousel />
        </div>
      </section>

      {/* Engagement roadmap (existing component) */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-16">
            Our 5-Step Engagement Roadmap
          </h2>
          <RoadmapTimeline steps={roadmapSteps} dark />
        </div>
      </section>

      {/* Consulting-first approach */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Our Consulting-First Approach
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-md">
              Every successful project starts with understanding — asking
              the right questions before a single ad is launched or a line
              of copy is written. By the time execution starts, the
              direction is already validated.
            </p>
            <a
              href="/business-consultancy"
              className="inline-flex items-center gap-1.5 border border-white/50 hover:bg-white/10 text-white text-sm font-semibold rounded-full px-6 py-3 transition"
            >
              View Our Consulting Services
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="divide-y divide-white/15">
            {CONSULTING_ITEMS.map((item) => (
              <details key={item.title} className="group py-5" open={item.title === CONSULTING_ITEMS[1].title}>
                <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                  {item.title}
                  <span className="text-xl text-white/50 group-open:hidden">+</span>
                  <span className="text-xl text-white/50 hidden group-open:inline">−</span>
                </summary>
                <p className="text-white/70 text-sm leading-relaxed mt-3">
                  {item.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Categories we work across */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            Categories We Work Across
          </h2>
          <p className="text-white/60 max-w-2xl mb-10 leading-relaxed">
            Every choice — channel, platform, or tool — is made to fit your
            business goals, not the other way around.
          </p>

          <CategoriesShowcase />
        </div>
      </section>

      {/* Data security & privacy — real practices, no unverified certification claims */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-2xl">
            Data Security &amp; Privacy
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 leading-relaxed">
            When trust is on the line, shortcuts aren&rsquo;t an option —
            here&rsquo;s exactly how account access and data are handled.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECURITY_PRACTICES.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B60B0] hover:border-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white">
                  <Icon size={16} />
                </span>
                <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible engagement models */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
            Flexible Engagement Models Built Around Your Needs
          </h2>
          <p className="text-white/70 max-w-2xl mb-14 leading-relaxed">
            Every project is different, and so are the ways we work — pick
            whichever fits your goals, timeline, and budget.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGAGEMENT_MODELS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-black/20"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/15 mb-5 transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                  <Icon size={24} />
                </span>
                <h3 className="font-bold text-lg mb-3 transition-colors duration-300 group-hover:text-black">
                  {title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-600">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black pt-20 pb-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <FAQSection
          faqs={FAQS}
          defaultValue="item-0"
          className="max-w-4xl mx-auto"
          headingClassName="text-2xl md:text-3xl font-bold text-center mb-12 text-white"
          heading="Frequently Asked Questions"
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

      {/* CTA — just above the footer */}
      <div className="bg-black pt-4 pb-16">
        <CTA />
      </div>
    </>
  );
}
