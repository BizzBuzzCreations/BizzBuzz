import React from "react";
import Link from "next/link";
import { Search, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";
import RichText from "@/components/ui/richText";

// Same 4 steps, same copy — laid out as a plain horizontal stepper (each
// step in its own grid column, connected by a static arrow between
// columns) instead of the old absolutely-positioned zigzag, which let the
// curved connector lines drift into and overlap the description text
// below neighboring cards on real screen sizes. A grid can't do that —
// every step's text stays fully inside its own column, arrows stay in
// theirs. First and last steps keep the solid accent "bookend" treatment,
// the two in between stay neutral.
const steps = [
  {
    icon: Search,
    title: "Free Consultation & Business Audit",
    description:
      "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
    accent: true,
  },
  {
    icon: PenTool,
    title: "Custom Strategy Design",
    description:
      "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
    accent: false,
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
    accent: false,
  },
  {
    icon: BarChart3,
    title: "Reporting & Continuous Optimization",
    description:
      "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
    accent: true,
  },
];

export default function WhatMAkesUs({ content }) {
  const heading = content?.processHeading || "Our Process";
  const subtext = content?.processSubtext || "A Proven Framework for Measurable Digital Growth.";

  // Icon + accent stay fixed (structural); title/description come from
  // the saved override, matched by position.
  const displaySteps = steps.map((step, i) => {
    const override = content?.processSteps?.[i];
    return override ? { ...step, ...override } : step;
  });

  return (
    <div className="relative overflow-hidden bg-black container py-20 mx-auto p-4 flex flex-col justify-center gap-5 items-center max-w-none">



      <div className="relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 max-w-4xl text-white">
          {heading}
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-10">
          <b className="text-[#40A2D8]">{subtext}</b>
        </p>
      </div>

      {/* Desktop: horizontal stepper — every step lives in its own grid
          column (icon, card, description all inside one bordered panel),
          so nothing can ever drift over neighboring text. A slight
          alternating vertical offset keeps some zigzag energy without
          resorting to absolute positioning. Whole card lights up blue
          on hover — not just the title bar. */}
      <div className="hidden md:grid w-full max-w-6xl grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-x-2">
        {displaySteps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;
          const offsetDown = i % 2 === 1; // steps 2 & 4 sit a bit lower

          return (
            <React.Fragment key={step.title}>
              <div
                className={`group relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-6 pb-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B60B0] hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/30 ${offsetDown ? "mt-10" : ""}`}
              >
                <span
                  className={`absolute -top-4 right-4 flex items-center justify-center w-7 h-7 rounded-full text-[11px] font-bold transition-colors duration-300 ${
                    step.accent
                      ? "bg-[#40A2D8] text-white"
                      : "bg-white/10 text-white/60 group-hover:bg-white group-hover:text-[#0B60B0]"
                  }`}
                >
                  {i + 1}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-sm leading-snug text-white mb-2">
                  {step.title}
                </h3>
                <RichText
                  as="p"
                  text={step.description}
                  className="text-xs text-white/50 leading-relaxed transition-colors duration-300 group-hover:text-white/85"
                />
              </div>

              {!isLast && (
                <div className={`flex justify-center pt-5 ${offsetDown ? "" : "mt-10"}`}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black border border-[#40A2D8]/50 text-[#40A2D8] shrink-0">
                    <ArrowRight size={14} />
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Mobile / tablet: 2-per-row grid — same card + hover treatment */}
      <div className="relative w-full max-w-xl grid grid-cols-2 gap-4 md:hidden">
        {displaySteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 pt-7 pb-5 transition-all duration-300 hover:border-[#0B60B0] hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/30"
            >
              <span className="absolute -top-3 right-4 flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-[11px] font-bold text-white/60">
                {i + 1}
              </span>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-2 text-white">{step.title}</h3>
              <RichText
                as="p"
                text={step.description}
                className="text-xs text-white/50 transition-colors duration-300 group-hover:text-white/85"
              />
            </div>
          );
        })}
      </div>

      <Link href="/contact" className="relative inline-block mt-10">
        <button
          className="animated-button mx-auto"
          style={{ backgroundColor: "#0B60B0" }}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Book Your Free Audit</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
