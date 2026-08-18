"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Layers,
  Award,
  Cpu,
  ShieldCheck,
  Workflow,
  Wallet,
  Rocket,
  Headset,
} from "lucide-react";
import { FAQSection } from "@/components/ui/faq-accordion";

// Real, BizzBuzz-specific answers — reusing facts already established
// elsewhere on the site (free consultation flow on /contact, the
// 90+ projects / 50+ clients figure from AboutFAQ, the real Clutch/Google
// Ads/Google Analytics/ISO badges from Recognitions, the India + UK
// offices) rather than inventing anything new.
const TOPICS = [
  {
    id: "about",
    label: "About BizzBuzz Creations",
    icon: Building2,
    description: "Who we are, where we work, and what we've delivered.",
    faqs: [
      {
        question: "What does BizzBuzz Creations do?",
        answer:
          "We're a digital marketing and BPO agency — SEO, paid ads, social media marketing, website development, AI solutions, marketing automation, and business consultancy, all under one roof, so you're not juggling five different vendors.",
      },
      {
        question: "How experienced is the BizzBuzz Creations team?",
        answer:
          "We've delivered 90+ projects for 50+ clients across India, working with everyone from local shops to growing enterprises expanding across the country.",
      },
      {
        question: "Where is BizzBuzz Creations based? Do you have offices outside India?",
        answer:
          "Our main office is in Prayagraj, Uttar Pradesh, India, and we also have an office in London, United Kingdom — so we work with clients in both regions.",
      },
      {
        question: "What makes BizzBuzz Creations different from other agencies?",
        answer:
          "We build for both traditional search and AI-driven search — not just Google rankings, but how AI tools and voice assistants recommend brands too. We also treat every engagement like a long-term partnership, not a one-off project.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "Local businesses, growing enterprises, and brands expanding their digital footprint — from finance and healthcare to e-commerce, real estate, and hospitality. See our Client Portfolio for real examples.",
      },
    ],
  },
  {
    id: "services",
    label: "Services & Industries We Serve",
    icon: Layers,
    description: "What we do, and who we do it for.",
    faqs: [
      {
        question: "What services does BizzBuzz Creations offer?",
        answer:
          "BPO & customer support, website development, SEO, social media marketing, Google Ads & paid marketing, AI solutions, marketing automation, and business consultancy.",
      },
      {
        question: "Do you offer BPO and customer support services alongside marketing?",
        answer:
          "Yes — our BPO team can handle calls, chats, and customer support so you never miss a lead, running alongside whatever marketing services you have with us.",
      },
      {
        question: "Which industries do you work with?",
        answer:
          "We work across 20+ industries including healthcare, finance, e-commerce, real estate, education, construction, travel, and more — see the Industries section on our homepage for the full list.",
      },
      {
        question: "Can you handle multiple services together, like SEO + paid ads + a new website?",
        answer:
          "That's exactly how most of our clients work with us — a combined strategy tends to perform better than running each channel in isolation, and it's simpler for you to manage with a single point of contact.",
      },
      {
        question: "Do you offer one-off projects or only long-term retainers?",
        answer:
          "Both. Website development and one-time consultancy work well as standalone projects; SEO, paid ads, and social media marketing are typically ongoing since they compound over time.",
      },
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio, Certifications & Recognition",
    icon: Award,
    description: "Proof of work — client results, badges, and references.",
    faqs: [
      {
        question: "Can I see examples of your past work?",
        answer:
          "Yes — check the Client Portfolio and Client Testimonials pages linked from our About section for real client work and results.",
      },
      {
        question: "Are you a certified Google Ads / Google Analytics partner?",
        answer:
          "Yes, we hold both — certified Google Ads & Marketing Partner status and certified Google Analytics Partner status.",
      },
      {
        question: "Do you have any other certifications?",
        answer:
          "We're a verified partner on Clutch, and our business processes are ISO certified for quality.",
      },
      {
        question: "Can you share client references or testimonials?",
        answer:
          "Absolutely — real client feedback is on our Client Testimonials page, and we're happy to share direct references during your free consultation.",
      },
    ],
  },
  {
    id: "technology",
    label: "Technology, Tools & AI",
    icon: Cpu,
    description: "The stack, automation, and AI behind the work.",
    faqs: [
      {
        question: "Do you use AI in your marketing campaigns?",
        answer:
          "Yes — AI-assisted campaign optimization is built into how we run paid ads and SEO, and we also offer AI Solutions as a standalone service for businesses that want AI-driven tools of their own.",
      },
      {
        question: "What marketing automation tools do you use?",
        answer:
          "We set up and manage automation workflows for email, lead nurturing, and CRM follow-ups as part of our Marketing Automation service — the exact stack is tailored to what your business already uses.",
      },
      {
        question: "What technologies do you build websites with?",
        answer:
          "Our web development team builds fast, SEO-ready sites using modern frameworks — the specific stack depends on your project's needs, from simple business sites to more complex web apps.",
      },
      {
        question: "Do you offer custom AI solutions for businesses?",
        answer:
          "Yes — beyond using AI in our own campaigns, we build AI-driven tools and chatbots for clients who want to bring automation into their own customer-facing operations.",
      },
    ],
  },
  {
    id: "security",
    label: "Data Security & Compliance",
    icon: ShieldCheck,
    description: "How we handle access, ownership, and your data.",
    faqs: [
      {
        question: "How do you handle our business data and login credentials?",
        answer:
          "Access to your ad accounts, analytics, and website is granted through proper user-level permissions wherever the platform supports it, rather than shared master logins, and is limited to the team members actively working on your account.",
      },
      {
        question: "Will our marketing account ownership stay with us?",
        answer:
          "Yes — your Google Ads, Analytics, Meta Business Manager, and website accounts remain owned by you. We work as authorized users, not owners.",
      },
      {
        question: "Do you sign an NDA before starting work?",
        answer:
          "Yes, we're happy to sign an NDA before any project details or account access are shared, if your business requires one.",
      },
      {
        question: "What happens to our data if we stop working together?",
        answer:
          "Access is revoked from your accounts, and any reports, creative files, or documentation we've produced for you are handed over — the work product is yours.",
      },
    ],
  },
  {
    id: "process",
    label: "Our Process & Methodology",
    icon: Workflow,
    description: "How an engagement actually runs, start to finish.",
    faqs: [
      {
        question: "What does the onboarding process look like?",
        answer:
          "Three steps: you tell us your vision through our contact form, our team reaches out for a free consultation to walk through your requirements and budget, then we send back a clear, straightforward proposal with scope, timeline, and pricing.",
      },
      {
        question: "How do you decide which strategy is right for our business?",
        answer:
          "We start by understanding your business first and marketing it second — auditing your current digital presence, competitors, and goals before recommending a specific mix of services.",
      },
      {
        question: "How often will we get updates or reports?",
        answer:
          "Reporting frequency is agreed during onboarding based on the service — typically monthly performance reports, with more frequent check-ins during the first weeks of a new campaign or project.",
      },
      {
        question: "Who will be our point of contact?",
        answer:
          "You're assigned a dedicated point of contact from our team who coordinates across whichever services (SEO, ads, dev, BPO) you're using, so you're not chasing different specialists yourself.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing, Timelines & Deliverables",
    icon: Wallet,
    description: "What things cost, and how long they take.",
    faqs: [
      {
        question: "How much do your services cost?",
        answer:
          "Pricing depends on the service, scope, and your goals — there's no one-size-fits-all number. Book a free consultation and we'll send back transparent, itemized pricing before any work begins.",
      },
      {
        question: "How long before we see results?",
        answer:
          "Paid ads typically show results within weeks; SEO and content marketing build momentum over roughly 3–6 months, since organic growth compounds rather than spikes instantly.",
      },
      {
        question: "What's included in a typical monthly report?",
        answer:
          "Performance against your key metrics (traffic, leads, rankings, or ad spend/ROI depending on the service), what we worked on that month, and what's planned next.",
      },
      {
        question: "Do you offer custom packages for specific budgets?",
        answer:
          "Yes — we scope proposals around your budget and priorities rather than pushing a fixed package, so smaller businesses and larger enterprises both get a plan that fits.",
      },
    ],
  },
  {
    id: "engagement",
    label: "Getting Started & Engagement",
    icon: Rocket,
    description: "The easiest way to kick things off with us.",
    faqs: [
      {
        question: "How do I get started with BizzBuzz Creations?",
        answer:
          "Fill out the form on our Contact page or drop us an email — we typically respond within 24 business hours to schedule your free consultation.",
      },
      {
        question: "Is the initial consultation free?",
        answer:
          "Yes, completely free with no obligation. We'll go over your goals and share a plan before you commit to anything.",
      },
      {
        question: "What information do you need from us to begin?",
        answer:
          "Just your business name, current website (if you have one), and what you're hoping to achieve — more visibility, leads, sales, or support. We'll take it from there.",
      },
      {
        question: "Can we start with a small project before committing long-term?",
        answer:
          "Yes — a lot of clients start with a single service like a website build or an SEO audit, and expand into a broader retainer once they've seen how we work.",
      },
    ],
  },
  {
    id: "support",
    label: "Support & Ongoing Services",
    icon: Headset,
    description: "What happens after launch, and how to reach us.",
    faqs: [
      {
        question: "Do you provide ongoing support after a website launches?",
        answer:
          "Yes — we offer post-launch support for updates, fixes, and improvements, and can continue managing hosting-related needs depending on your plan.",
      },
      {
        question: "What if we need urgent help outside business hours?",
        answer:
          "Our standard business hours are Mon–Sat, 12:00 PM–8:00 PM, but urgent issues on active campaigns or live sites are flagged to your dedicated contact as a priority.",
      },
      {
        question: "Can we scale services up or down as our business grows?",
        answer:
          "Yes — plans are reviewed regularly, and you can add services like BPO support or paid ads, or scale back, as your business needs change.",
      },
      {
        question: "How do we reach the support team?",
        answer:
          "Through your dedicated point of contact, or via the phone, email, and office details on our Contact page.",
      },
    ],
  },
];

// A blue-tinted hover instead of the accordion's default gray, just for
// this page's questions.
const TRIGGER_HOVER =
  "hover:bg-[#eaf4fb] hover:border-[#40A2D8]/40";

const SCROLL_SPY_OFFSET = 140; // px from the top of the viewport

export default function FaqTopics() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  // Scroll-spy: every topic's FAQs are on the page at once (stacked), and
  // the sidebar highlights whichever one the user has scrolled past —
  // walking down the list one topic at a time as they scroll, rather than
  // only reacting to clicks. Driven directly by scroll position (not
  // IntersectionObserver) so it stays accurate even with tall cards.
  useEffect(() => {
    let ticking = false;

    const updateActive = () => {
      let current = 0;
      for (let i = 0; i < sectionRefs.current.length; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        if (el.getBoundingClientRect().top - SCROLL_SPY_OFFSET <= 0) {
          current = i;
        }
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTopic = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[300px_1fr] lg:gap-6 px-4 md:px-6 py-10 md:py-16">
        {/* TOC sidebar — stays put (sticky) while the page scrolls; only
            the active highlight moves between topics via scroll-spy. */}
        <div className="lg:sticky lg:top-24 lg:self-start bg-black px-2 md:px-4 py-4 lg:py-0">
          <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6 px-2">
            Topics
          </p>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
            {TOPICS.map((t, i) => {
              const Icon = t.icon;
              const isActive = active === i;
              return (
                <button
                  key={t.id}
                  onClick={() => scrollToTopic(i)}
                  className={`group shrink-0 flex items-center gap-3 text-left pl-4 pr-4 py-3.5 rounded-xl text-sm font-medium whitespace-nowrap lg:whitespace-normal transition-all duration-300 border ${
                    isActive
                      ? "bg-[#0B60B0] text-white border-[#40A2D8] shadow-lg shadow-[#0B60B0]/30"
                      : "text-white/60 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10"
                  }`}
                >
                  <span
                    className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
                      isActive
                        ? "bg-white/15"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon size={16} />
                  </span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* All topics, stacked — no shared wrapper background anymore;
            each topic is just its own card floating directly on the
            section's black backdrop. */}
        <div className="relative px-2 md:px-4 py-10 md:py-16 space-y-12 md:space-y-16">
          {TOPICS.map((topic, i) => (
            <motion.div
              key={topic.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              id={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative scroll-mt-28 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0B60B0] text-white shrink-0">
                  <topic.icon size={18} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#0B60B0]">
                  {topic.faqs.length} Questions
                </p>
              </div>
              <p className="text-gray-500 mb-8 max-w-lg">{topic.description}</p>

              <FAQSection
                heading={topic.label}
                faqs={topic.faqs}
                defaultValue="item-0"
                headingClassName="text-2xl md:text-3xl font-bold text-black mb-8"
                triggerClassName={TRIGGER_HOVER}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
