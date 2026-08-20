import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import {
  LayoutTemplate,
  ShoppingCart,
  Server,
  Atom,
  RefreshCw,
  Newspaper,
} from "lucide-react";

export const metadata = {
  title: "Website Development India | Design | BizzBuzz Creations",
  description:
    "Get fast, secure, and high-converting websites with custom web development, WordPress, and eCommerce solutions by BizzBuzz Creations in India.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development",
  },
};

const SERVICE_ITEMS = [
  {
    icon: LayoutTemplate,
    heading: "Custom Web Development & Design",
    description:
      "Off-the-shelf templates only get you so far. Our custom web development team builds mobile-first, responsive websites around your specific goals — lead generation, bookings, or online sales — combining clean design with solid, maintainable code.",
  },
  {
    icon: ShoppingCart,
    heading: "Shopify & Ecommerce Development",
    description:
      "As specialist Shopify website developers, we build fast-loading, conversion-focused online stores with smooth checkout experiences, designed for speed, mobile shoppers, and global scalability — from 20 products to 20,000.",
  },
  {
    icon: Server,
    heading: "PHP Web Application Development",
    description:
      "For businesses with complex backend needs, our full-stack PHP developers build and modernize custom web applications, from internal tools to customer-facing platforms, updating legacy systems for better security and speed.",
  },
  {
    icon: Atom,
    heading: "React & Next.js Development",
    description:
      "Our React and Next.js developers build high-performing, AI-integrated frontends using server-side rendering to boost load speed and Google ranking, integrating seamlessly with your existing backend and team.",
  },
  {
    icon: RefreshCw,
    heading: "Website Redesign & Management",
    description:
      "An outdated website quietly costs you customers every day. Our redesign services modernize UI/UX for higher conversions and fix Core Web Vitals, followed by ongoing monitoring, security updates, and backups.",
  },
  {
    icon: Newspaper,
    heading: "WordPress Development",
    description:
      "Our WordPress developers build high-performance, SEO-ready websites with strong security, including protection against common vulnerabilities and AI-assisted threat monitoring.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Discovery & Strategy",
    body: "We start with your goals — lead generation, bookings, or online sales — and map out the structure and features your site actually needs.",
  },
  {
    title: "Design & Development",
    body: "Mobile-first design and clean, maintainable code get built in tandem, so your site looks sharp and scales with your business.",
  },
  {
    title: "Launch & SEO Optimization",
    body: "We handle the technical launch with Core Web Vitals and search optimization built in from day one, not bolted on afterward.",
  },
  {
    title: "Ongoing Management & Support",
    body: "Monitoring, security updates, performance checks, and backups keep your site fast and online 24/7 after launch.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Custom-Built, Not Templated",
    description:
      "Every site is built around your specific goals and how your business actually works, not squeezed into a generic template.",
  },
  {
    number: "002",
    title: "Mobile-First & Fast-Loading",
    description:
      "We design for speed and mobile shoppers first, handling real-world traffic reliably rather than just looking good in a demo.",
  },
  {
    number: "003",
    title: "Built to Rank",
    description:
      "Strong Core Web Vitals and technical SEO are built in from the start — our sites are built to rank, not just launch and be forgotten.",
  },
  {
    number: "004",
    title: "Full-Stack Capability",
    description:
      "PHP, React, Next.js, WordPress, and Shopify — we pick the right stack for your project instead of forcing one tool on everything.",
  },
  {
    number: "005",
    title: "Ongoing Management & Security",
    description:
      "Monitoring, updates, performance checks, and AI-assisted threat monitoring keep your site secure and online long after launch.",
  },
  {
    number: "006",
    title: "Prayagraj-Based, Globally Trusted",
    description:
      "A full-service web development team in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
  },
];

const FAQS = [
  {
    question: "How much does a website cost in 2026?",
    answer:
      "Costs vary based on features, but we offer affordable, tailored pricing.",
  },
  {
    question: "Why does my business need a website?",
    answer: "It builds trust and generates consistent leads online.",
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes, all our websites are fully responsive and mobile-friendly.",
  },
  {
    question: "Can you add AI features to my website?",
    answer:
      "Yes, we integrate AI tools like chatbots and automation where useful.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and security support.",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <BpoHero
        heading="Top Website Development Company in India"
        description="Custom, high-performance websites for businesses in Prayagraj and across India. First impressions happen fast — we build fast, secure websites that actually bring in customers."
        img="/web-dev.webp"
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
              src="/Web-Development-Promotion-Instagram-Post-3.webp"
              alt="BizzBuzz Creations web development team at work"
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
              Web Development Services in Prayagraj - Serving All of India
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Your website is usually the first conversation you have with a
              customer, and most people decide whether to trust a business
              within seconds of landing on it. At BizzBuzz Creations, we
              build websites that don&rsquo;t just look sharp; they convert
              visitors into customers, tailored to how your business
              actually works.
            </p>
            <p className="text-white/70 leading-relaxed">
              We&rsquo;re a full-service web development company in
              Prayagraj, proudly serving clients locally across Allahabad
              and Uttar Pradesh, as well as businesses across the UK, USA,
              and India. From your first idea to a fully launched,
              search-optimized website, we handle strategy, design, and
              code so you don&rsquo;t have to juggle five freelancers.
            </p>
          </div>
        </div>
      </section>

      {/* "Web Development Services We Offer" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Web Development Services We Offer" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our Web Development Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Web Development Process"
            description="We follow a results-driven approach — not just building websites that look good, but ones that sell. Our four-step process combines strong Core Web Vitals and technical SEO so sites are built to rank, not just launch and be forgotten."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Website Development Company" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Website Development Company"
          description="BizzBuzz Creations is a website development company in Prayagraj, building fast, secure, and scalable websites for businesses across India and beyond. As a full-stack development partner, we handle strategy, design, and code so your website actually works for your business."
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
