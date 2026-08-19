import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";
import { Bot, Sparkles, Workflow, Radar } from "lucide-react";
import AISolutionsFAQ from "@/components/sections/aiSolutionsFAQ";

const aiServices = [
  {
    icon: Bot,
    title: "Custom AI Agents & Chatbots",
    description:
      "We design AI agents for businesses that do more than answer FAQs; they qualify leads, book calls, and resolve real customer queries. Our AI chatbot development and AI customer support solutions run on conversational AI solutions trained on your actual business, so every chat feels like talking to your team, not a script stuck on repeat.",
  },
  {
    icon: Sparkles,
    title: "AI Content & Generative Engines",
    description:
      "Content shouldn't be your bottleneck. Our generative AI solutions build content engines that draft, structure, and personalize copy at scale, including blog posts and product descriptions and ad variations using machine learning solutions trained on your brand voice, so output stays fast without sounding automated or generic.",
  },
  {
    icon: Workflow,
    title: "Workflow & Process Automation",
    description:
      "Repetitive tasks quietly eat entire workdays. Our AI workflow automation services and AI automation services connect your tools together, so approvals, reports, follow-ups, and data entry run without anyone chasing them manually, freeing your team to focus on decisions instead of admin.",
  },
  {
    icon: Radar,
    title: "GEO (Generative Engine Optimization)",
    description:
      "Search is changing; people now ask AI tools directly instead of typing into Google. Our GEO service structures your content and website so AI engines like ChatGPT, Perplexity, and Google AI Overviews actually cite and recommend your business, keeping you visible as search itself moves toward AI answers.",
  },
];

export const metadata = {
  title: "AI Solutions Company in India | Bizzbuzz Creations",
  description:
    "Get custom AI solutions, chatbots, automation & GEO services. Bizzbuzz Creations helps businesses in India & Prayagraj scale with AI.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/ai-solutions",
  },
};

export default function AISolutions() {
  return (
    <>
      <ServicesHero
        heading="Your Business, Running on AI That Actually Understands It"
        description="Bizzbuzz Creations builds custom AI agents, generative content engines, 
        and workflow automation plus GEO, so your brand shows up when people ask AI for answers, not just Google."
        img="/aiservice.webp"
      />

      <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 justify-center items-center mb-20 mt-10">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/hero (1).webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">AI That Fits Your Business, Not the Other Way Around</h2>
          <p>
            Most businesses hear "AI solutions" and picture something complicated, expensive, or built for companies ten times their size. 
            That's not how we work. Bizzbuzz Creations is an AI services company built to make artificial intelligence solutions practical for a startup automating 
            its first support inbox or a growing brand that needs a full AI development services partner to build agents and practical automation from the ground up. 
            We don't sell you generic AI software solutions off a shelf.
          </p>
          <p>
            As an AI consulting services and AI integration systems partner, we start by understanding how your business actually runs, 
            where your team spends the most repetitive hours, where leads go cold, and where content bottlenecks slow you down, and build custom AI solutions around exactly that. 
            Whether you need AI automation for startups just getting off the ground or AI business solutions for an established company scaling fast, the goal stays the same: 
            technology that quietly does the heavy lifting so your people can focus on the work that actually needs them.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto mb-20 px-5">
        <h2 className="text-3xl font-bold mb-10 text-center">Four Ways We Put AI to Work in Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col px-5 gap-10 lg:gap-20 justify-center items-center mb-20 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-5">
            Why Choose Bizzbuzz Creations
          </h2>
          <p className="mb-5">
            We're not a custom AI solutions company that hands you a demo and disappears. Every AI agent, content engine, 
            or automation is built around your real workflow, tested with your team, and refined after launch, not left running blind.
          </p>
          <p>
             As an AI consulting services partner, we combine AI integration services with GEO from day one, 
             so you're both operationally efficient and visible wherever your customers are searching, including inside AI answers.
          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={400}
            height={400}
            src="/aiImg.webp"
            alt="image"
          />
        </div>
      </div>

      <AISolutionsFAQ />

      <CTA2 />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
