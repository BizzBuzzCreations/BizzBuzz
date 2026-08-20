import BpoHero from "@/components/sections/bpoHero";
import Image from "next/image";
import BpoServicesGrid from "@/components/sections/bpoServicesGrid";
import BpoProcess from "@/components/sections/bpoProcess";
import BpoWeAre from "@/components/sections/bpoWeAre";
import BpoWhyChooseDark from "@/components/sections/bpoWhyChooseDark";
import CTA from "@/components/sections/CTA";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { TrendingUp, Camera, Users, Linkedin, Sparkles, Video } from "lucide-react";

export const metadata = {
  title: "Social Media Marketing India | SMM Ads | BizzBuzz Creations",
  description:
    "Get expert social media marketing in India. SMM ads, Instagram & Facebook marketing by BizzBuzz Creations to boost traffic, leads & brand growth.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/social-media-marketing",
  },
};

const SERVICE_ITEMS = [
  {
    icon: TrendingUp,
    heading: "Social Media Management Services",
    description:
      "We handle your daily posting, content calendar, and audience engagement so your brand stays active and consistent — professional, on-brand, and always ready to convert visitors into loyal followers.",
  },
  {
    icon: Camera,
    heading: "Instagram Marketing Agency",
    description:
      "From reels to story strategy, our Instagram marketing team builds real engagement, not just likes. We create scroll-stopping content and run targeted Instagram ads that turn followers into genuine paying customers.",
  },
  {
    icon: Users,
    heading: "Facebook & Meta Ads Agency",
    description:
      "As a performance-focused Facebook and Meta ads agency, we run high-converting campaigns backed by data. Every rupee you spend is tracked and optimized for real leads, not just clicks and impressions.",
  },
  {
    icon: Linkedin,
    heading: "LinkedIn Marketing for B2B Growth",
    description:
      "Our LinkedIn marketing strategy is built for B2B lead generation. We help you connect with decision-makers, build authority in your industry, and turn LinkedIn into a steady source of business leads.",
  },
  {
    icon: Sparkles,
    heading: "AI Social Media Marketing",
    description:
      "We use AI marketing tools and social media automation to plan smarter content, predict trends early, and post at the best time for engagement — faster results, lower cost per lead.",
  },
  {
    icon: Video,
    heading: "Reels & Short Video Marketing",
    description:
      "Short-form video drives the most reach in 2026. Our reels and video marketing team scripts, shoots, and edits scroll-stopping reels that bring your brand in front of new audiences daily.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Understanding Your Brand & Audience",
    body: "We learn your brand's story, audience, and goals first — no one-size-fits-all packages, since every brand's platform mix looks different.",
  },
  {
    title: "Content & Campaign Strategy",
    body: "We combine creative content, targeted ad strategy, and AI-powered planning tools into a calendar built around your specific platforms.",
  },
  {
    title: "Creative Production & Ad Launch",
    body: "Reels, posts, and ad creatives get produced and launched across Instagram, Facebook, and LinkedIn as one coordinated campaign, not separate silos.",
  },
  {
    title: "Performance Tracking & Optimization",
    body: "We track real engagement and lead numbers, not vanity metrics, and adjust targeting and content to keep cost per lead moving down.",
  },
];

const WE_ARE_POINTS = [
  {
    number: "001",
    title: "Platform-Specific Strategy",
    description:
      "Instagram, Facebook, and LinkedIn each get their own strategy — we don't run the same content everywhere and call it a campaign.",
  },
  {
    number: "002",
    title: "AI-Backed Campaign Planning",
    description:
      "AI marketing tools help us plan smarter content and predict trends early, paired with human strategy for judgment calls.",
  },
  {
    number: "003",
    title: "Local Roots, National Reach",
    description:
      "Being based in Prayagraj means we understand Indian audiences closely, while our strategies scale brands nationally too.",
  },
  {
    number: "004",
    title: "No Copy-Paste Templates",
    description:
      "Every campaign is shaped around your audience, budget, and goals — not a bloated, generic package.",
  },
  {
    number: "005",
    title: "Full-Funnel Content",
    description:
      "From daily social media management to reels production and paid ads, everything runs under one roof, one coordinated strategy.",
  },
  {
    number: "006",
    title: "Real Engagement Over Vanity Metrics",
    description:
      "We combine creative content, sharp ad targeting, and AI-backed strategy to get you real results, not just likes and impressions.",
  },
];

const FAQS = [
  {
    question: "What does a social media marketing agency do?",
    answer:
      "A social media marketing agency creates content, manages social platforms, runs ads, and builds strategies to increase brand visibility, engagement, and leads.",
  },
  {
    question: "How much do social media marketing services cost in India?",
    answer:
      "Social media marketing services in India vary based on goals, platforms, content, and ad budget. BizzBuzz Creations provides customized packages for businesses of all sizes.",
  },
  {
    question:
      "Which is better for business growth — Instagram or Facebook ads?",
    answer:
      "Instagram is ideal for brand awareness and visual content, while Facebook ads are effective for lead generation. BizzBuzz Creations combines both for better results.",
  },
  {
    question: "Does AI help in social media marketing in 2026?",
    answer:
      "Yes, AI improves content planning, audience analysis, automation, and ad optimization. BizzBuzz Creations uses AI-powered tools with human strategy for smarter campaigns.",
  },
  {
    question:
      "Why choose BizzBuzz Creations as a social media marketing agency in Prayagraj?",
    answer:
      "BizzBuzz Creations helps businesses grow through customized social media strategies, creative content, paid ads, and data-driven marketing solutions.",
  },
];

export default function SocialMediaMarketing() {
  return (
    <>
      <BpoHero
        heading="Your Social Media Marketing Partner - Growing Brands Across India"
        description="BizzBuzz Creations builds smart social media marketing strategies for brands across India, with the personal touch of a Prayagraj-based team that understands your business. Instagram, Facebook, and AI-powered marketing — all working together to bring you real growth."
        img="/socialmedia 02.jpg"
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
              src="/smm1 (1).webp"
              alt="BizzBuzz Creations social media team at work"
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
              Social Media Marketing Agency in Prayagraj, Trusted Across India
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              BizzBuzz Creations is a social media marketing agency based
              in Prayagraj, proudly serving businesses across all of India.
              We understand that every brand has a different story,
              audience, and goal, which is why we don&rsquo;t believe in
              one-size-fits-all packages. Our team builds result-driven
              strategies that combine creative content, targeted Facebook
              and Instagram ads, LinkedIn marketing for B2B growth, and
              AI-powered tools to keep your brand ahead.
            </p>
            <p className="text-white/70 leading-relaxed">
              From social media management and reels marketing to Meta ads
              and lead generation, BizzBuzz Creations offers complete
              social media marketing services under one roof, helping your
              brand grow steadily across India, one smart campaign at a
              time.
            </p>
          </div>
        </div>
      </section>

      {/* "Our Core Social Media Services" */}
      <section className="bg-black py-20">
        <div className="container max-w-6xl mx-auto px-5">
          <BpoServicesGrid title="Our Core Social Media Services" items={SERVICE_ITEMS} />
        </div>
      </section>

      {/* "Our Social Media Process" */}
      <section className="bg-black py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <BpoProcess
            title="Our Social Media Process"
            description="Whether you're a local business in Prayagraj or a growing brand anywhere in India, we shape every campaign around your audience, budget, and goals. No bloated packages, no copy-paste templates — our four-step process is built around what actually works for you."
            steps={PROCESS_STEPS}
          />
        </div>
      </section>

      <div className="bg-black px-5">
        <div className="max-w-5xl mx-auto border-t border-white" />
      </div>

      {/* "Social Media Marketing Agency" */}
      <section className="bg-black pt-20 pb-20 px-5">
        <BpoWeAre
          title="Social Media Marketing Agency"
          description="BizzBuzz Creations is a social media marketing agency based in Prayagraj, helping brands across India grow through Instagram, Facebook, LinkedIn, and AI-powered strategy. Being rooted locally gives us a strong understanding of Indian audiences, while our approach scales brands nationally."
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
