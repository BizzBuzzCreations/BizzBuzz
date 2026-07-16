import AboutHero from "@/components/sections/aboutHero";
import LogoSlider from "@/components/sections/logoSlider";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import Reviews from "@/components/sections/reviews";
import React from "react";
import Image from "next/image";
import {
  Target,
  Rocket,
  BarChart3,
  Eye,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutFAQ from "@/components/sections/AboutFAQ";

const roadmapSteps = [
  {
    number: 1,
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    number: 2,
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals.",
  },
  {
    number: 3,
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content.",
  },
  {
    number: 4,
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    number: 5,
    title: "Report & Grow",
    desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

export const metadata = {
  title: "Bizz Buzz Creations: BPO | Digital Marketing | Website Services",
  description:
    "At Bizz Buzz Creation, we know how quickly things change in business—and we’re built to keep up. Know More",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/about",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />

      {/* Who we are */}
      <div className="">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Story</h2>
        <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-center gap-15 mb-20">
          <Image src="/banner.png" alt="team" width={500} height={500} />
          <div className="text-gray-900">
          <h2><b>How Bizzbuzz Creations Began</b></h2>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4">
              Every big brand starts with a small idea — ours was simple: marketing shouldn't feel like guesswork.
              <br></br>
              Bizzbuzz Creations was founded by a small team of marketers, designers, and strategists who were tired of watching businesses waste money on campaigns that looked good but didn't perform. 
              We wanted to build a digital marketing agency that actually cared about outcomes — not vanity metrics.
              <br></br>
              What started as a handful of local projects in India quickly grew into something bigger. Word spread. Clients returned. Referrals came in from the UK and the US. 
              Today, we've delivered <b>90+ successful projects</b> for <b>50+ clients</b> spanning multiple industries — from D2C startups to established enterprises — and our footprint continues to grow across India, the UK, and the United States.
            </p>
            <p className="leading-relaxed lg:text-left text-center max-w-xl mx-auto mb-4">
              We're still the same team at heart: hands-on, curious, and obsessed with results. The only thing that's changed is scale.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="mx-auto 2xl:px-15 px-5 flex lg:flex-row flex-col justify-center items-start gap-15 mb-25">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Our Mission, Vision & Core Values
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="bg-gray-200 flex flex-col items-center p-5 rounded-xl max-w-lg shadow-lg shadow-gray-400 border border-gray-300">
              <Target size={40} className="mb-2" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
                To help every business unlock measurable growth through smart, ethical, 
                and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-5 rounded-xl max-w-lg shadow-lg shadow-gray-400 border border-gray-300">
              <Rocket size={40} className="mb-2" />
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed text-center max-w-xl mx-auto mb-4">
                To become India's most trusted digital marketing partner, 
                known for turning ambitious brands into industry leaders through innovation and consistency.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-15 mb-10 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl w-full shadow-lg shadow-gray-400 border border-gray-300">
              <BarChart3 size={32} className="mb-2" />
              <h4 className="text-lg font-semibold mb-2 text-center">
                Results Over Reports
              </h4>
              <p className="text-sm leading-relaxed text-center">
                We measure success in real growth, not just polished monthly
                PDFs.
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl w-full shadow-lg shadow-gray-400 border border-gray-300">
              <Eye size={32} className="mb-2" />
              <h4 className="text-lg font-semibold mb-2 text-center">
                Transparency First
              </h4>
              <p className="text-sm leading-relaxed text-center">
                Clear communication, honest timelines, and zero hidden
                agendas, always.
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl w-full shadow-lg shadow-gray-400 border border-gray-300">
              <Lightbulb size={32} className="mb-2" />
              <h4 className="text-lg font-semibold mb-2 text-center">
                Innovation-Led Thinking
              </h4>
              <p className="text-sm leading-relaxed text-center">
                We track algorithm shifts and AI search trends before they
                trend.
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl w-full shadow-lg shadow-gray-400 border border-gray-300">
              <Users size={32} className="mb-2" />
              <h4 className="text-lg font-semibold mb-2 text-center">
                Client-Centric Culture
              </h4>
              <p className="text-sm leading-relaxed text-center">
                Every strategy is built around your business, never a generic
                template.       
              </p>
            </div>
            <div className="bg-gray-200 flex flex-col items-center p-4 rounded-xl w-full shadow-lg shadow-gray-400 border border-gray-300">
              <ShieldCheck size={32} className="mb-2" />
              <h4 className="text-lg font-semibold mb-2 text-center">
                Integrity in Execution
              </h4>
              <p className="text-sm leading-relaxed text-center">
                Ethical, white-hat practices that protect your brand&apos;s
                reputation long-term.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What Makes BizzBuzz Creations Different */}
      <div className="mx-auto 2xl:px-15 px-5 gap-15 mb-25">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            Built Different, Built to Perform
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-10">
            In a market flooded with agencies promising &quot;guaranteed
            rankings,&quot; we chose a different path — building sustainable
            digital growth systems instead of chasing quick wins.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-6xl mx-auto">
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">Data Over Guesswork</h3>
              <p className="leading-relaxed">
                Every decision is backed by real performance data, not
                assumptions or industry &quot;best guesses.&quot;
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">
                AI & Search-Ready Strategy
              </h3>
              <p className="leading-relaxed">
                We optimize for how India searches today — voice assistants,
                AI tools, and answer engines, not just Google.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">Full-Funnel Marketing</h3>
              <p className="leading-relaxed">
                From brand awareness to final conversion, we manage the
                entire customer journey under one roof.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">
                Custom Roadmaps, Not Templates
              </h3>
              <p className="leading-relaxed">
                Every client gets a strategy built around their industry,
                competitors, and specific business goals.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">Radical Transparency</h3>
              <p className="leading-relaxed">
                Live performance dashboards, not vague monthly summaries — you
                see exactly where your budget goes.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
              <h3 className="font-bold text-lg mb-2">Proven Delivery</h3>
              <p className="leading-relaxed">
                90+ projects and 50+ clients trust us to turn strategy into
                measurable, repeatable growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Roadmap Behind Every Digital Success */}
      <div className="mx-auto 2xl:px-15 px-5 mb-25">
        <h2 className="text-3xl font-bold mb-2 text-center">
          The Roadmap Behind Every Digital Success
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
          The Bizzbuzz Growth Blueprint
        </h3>
        <p className="text-lg leading-relaxed text-center max-w-2xl mx-auto mb-16">
          We follow a structured, repeatable process that has helped us
          deliver consistent results across 90+ projects.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-blue-200" />
          <div className="space-y-10">
            {roadmapSteps.map((step) => (
              <div key={step.number} className="relative flex gap-6 items-start">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 bg-gray-100 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 p-5">
                  <h4 className="font-bold text-lg mb-2">
                    Step {step.number}: {step.title}
                  </h4>
                  <p className="leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-16 font-medium">
          This roadmap is the reason our clients don&apos;t just get
          short-term spikes — they get compounding, long-term digital growth.
        </p>
      </div>

      {/* Why Businesses Across India Trust Us */}
      <div className="mx-auto 2xl:px-15 px-5 mb-25">
        <h2 className="text-3xl font-bold mb-5 text-center">
          Why Businesses Across India Trust Us
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          If you&apos;re looking for a digital marketing agency that treats
          your business like a long-term partnership — not a one-off project
          — Bizzbuzz Creations is built for that.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
            <p className="leading-relaxed">
              90+ projects delivered across India with real, measurable
              business outcomes.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">Future-Focused SEO</h3>
            <p className="leading-relaxed">
              We optimize for traditional search, AI search, and voice
              assistants — all at once.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">End-to-End Services</h3>
            <p className="leading-relaxed">
              SEO, paid ads, content, social, and web design — everything
              under one roof.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">Honest Partnerships</h3>
            <p className="leading-relaxed">
              No inflated promises, just clear strategy, consistent effort,
              and steady growth.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">
              Dedicated Account Support
            </h3>
            <p className="leading-relaxed">
              You get a real team that knows your brand, not a ticket number.
            </p>
          </div>
          <div className="p-6 border border-gray-300 rounded-lg shadow-lg shadow-gray-400 bg-gray-100">
            <h3 className="font-bold text-lg mb-2">Growing Client Base</h3>
            <p className="leading-relaxed">
              50+ businesses across India already trust us with their growth.
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mt-12 font-medium">
          If you&apos;re looking for a digital marketing agency that treats
          your business like a long-term partnership — not a one-off project
          — Bizzbuzz Creations is built for that.
        </p>
      </div>

      {/* FAQ's */}
      <AboutFAQ />

      <WhyChooseUs />
      <CTA2 />
      <div className="mb-5">
        <LogoSlider />
      </div>
      <Reviews />
      <Counter />
      <CTA />
    </>
  );
}
