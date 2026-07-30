import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import { FAQSection } from "@/components/ui/faq-accordion";

export const metadata = {
  title: "SEO Services in India | AI SEO, GEO & Local SEO | BizzBuzz Creations",
  description:
    "Rank higher on Google & AI search with expert SEO services. AI SEO, GEO, AEO & local SEO by BizzBuzz Creations in Prayagraj & across India.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/search-engine-optimization",
  },
};

const faqs = [
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
      <ServicesHero
        heading="Be the Brand Google Ranks & AI Recommends"
        description="At BizzBuzz Creations, we build high-performance SEO strategies for businesses in Prayagraj and across India, helping you rank higher, get discovered in AI search, and attract customers ready to buy."
        img="/seO2.jpg"
      />

      <div className="flex lg:flex-row flex-col px-5 gap-5 lg:gap-20 justify-center items-center mb-10 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/BizzBuzz-Creations-5.png"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left"> 
          <h2 className="text-3xl font-bold mb-3">
            SEO Services in Prayagraj – Serving All of India
          </h2>
          <p>
            Your visibility on search engines is often the first interaction a customer has with your business, 
            and most users decide which brand to trust within seconds of seeing search results. At <b>BizzBuzz Creations</b>, 
            we don’t just improve rankings; we help your business get discovered by the right audience at the right time.
          </p>
          <br></br>
          <p>
            Whether you're a local business in Prayagraj or Allahabad looking for an SEO company near you, 
            a small business owner in India searching for reliable SEO services, or a startup needing a data-driven SEO strategy to grow faster, 
            our team builds customized SEO solutions that drive real traffic, leads, and sales.
          </p>
          <br></br>
          <p>
            From <b>Google rankings to AI search visibility</b>, we optimize your presence across search platforms so your business doesn’t just appear; it stands out and gets chosen.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Core SEO Services</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="AI Search Optimization"
            description="AI is transforming how people search, and your business needs to adapt to stay visible. We optimize your website for AI-driven platforms so your content gets understood, trusted, and recommended."
            points={[
              "AI search optimization",
              "AI search visibility",
              "AI ranking factors implementation",
              "Optimize website for ChatGPT",
            ]}
            imageUrl="/doc.svg"
          />
          <ServiceCard
            heading="Generative Engine Optimization (GEO)"
            description="Search engines are evolving into answer engines, where users get instant responses. Our GEO strategy ensures your business becomes part of those AI-generated answers."
            points={[
              "Generative engine optimization",
              "SEO strategy for generative AI",
              "LLM SEO optimization",
              "Google AI Overview optimization",
            ]}
            imageUrl="/link-round-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Answer Engine Optimization (AEO)"
            description="Modern users want quick answers without scrolling through pages. We optimize your content so it becomes the direct answer across search engines and AI tools."
            points={[
              "Answer engine optimization",
              "Featured snippet optimization",
              "Zero-click search SEO",
              "Ranking in AI-generated answers",
            ]}
            imageUrl="/setting-2-svgrepo-com.svg"
          />
          <ServiceCard
            heading="Semantic SEO & Topical Authority"
            description="Search engines now focus on meaning and expertise rather than just keywords. We build your website into a trusted authority within your niche."
            points={[
              "Semantic SEO strategies",
              "Topical authority SEO",
              "Entity-based SEO",
              "Content clustering & pillar pages",
            ]}
            imageUrl="/connect-svgrepo-com.svg"
          />
          <ServiceCard
            heading="AI Content Optimization"
            description="Content must now work for both humans and AI systems. We create and refine content that ranks, gets cited, and drives real engagement."
            points={[
              "AI content optimization",
              "Content optimization for AI search",
              "Semantic keyword targeting",
              "Topic cluster content strategy",
            ]}
            imageUrl="/map-point-wave-svgrepo-com.svg"
          />
          <ServiceCard
            heading="High-Intent & Local SEO"
            description="Driving traffic is not enough; you need customers ready to take action. We target high-intent and location-based searches to generate real business results."
            points={[
              "SEO services for small business",
              "Hire SEO expert India",
              "Ecommerce SEO services India",
              "Local SEO & voice search optimization",
            ]}
            imageUrl="/doc.svg"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center px-5 items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">Why Choose BizzBuzz Creations?</h2>
          <p>
            At BizzBuzz Creations, we don’t follow outdated SEO; we build <b>AI-first strategies designed for 2026 search trends</b>. 
            Our focus is on AI search optimization, semantic SEO, and high-intent keyword targeting to recover and grow your organic rankings. 
            We help your website get <b>visible in Google AI Overviews, ChatGPT answers, and zero-click searches</b>, not just traditional SERPs. 
            With data-driven execution, content built for AI understanding, and a strong focus on conversions, we turn declining traffic into consistent growth. 
            We don’t just improve rankings we make your brand <b>trusted, discoverable, and recommended across modern search platforms</b>.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/CLI-Caller-Line-Identification.webp"
            alt="image"
          />
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <FAQSection
        faqs={faqs}
        className="container max-w-4xl mx-auto px-5 py-16"
        headingClassName="text-3xl font-bold mb-10 text-center"
        heading="Frequently Asked Questions"
      />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}