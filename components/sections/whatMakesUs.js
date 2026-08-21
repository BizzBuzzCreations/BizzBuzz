import React from "react";
import Link from "next/link";
import { Search, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";

// Same 4 steps, same copy — laid out as a staggered zigzag flowchart
// (boxes at alternating heights, connected by curved arrows) instead of
// the earlier rounded track. First and last steps get the solid accent
// "bookend" treatment, the two in between stay neutral — same idea as the
// reference's blue-first/orange-last pattern, using the site's own blues.
const steps = [
  {
    icon: Search,
    title: "Free Consultation & Business Audit",
    description:
      "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
    pos: { x: 11, y: 68 },
    accent: true,
  },
  {
    icon: PenTool,
    title: "Custom Strategy Design",
    description:
      "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
    pos: { x: 38, y: 20 },
    accent: false,
  },
  {
    icon: Rocket,
    title: "Campaign Execution",
    description:
      "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
    pos: { x: 65, y: 68 },
    accent: false,
  },
  {
    icon: BarChart3,
    title: "Reporting & Continuous Optimization",
    description:
      "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
    pos: { x: 91, y: 20 },
    accent: true,
  },
];

// Curved connector between each consecutive pair, plus where to drop a
// small arrow chevron and which way it should point.
const CONNECTORS = [
  { from: steps[0].pos, to: steps[1].pos, rotate: -45 },
  { from: steps[1].pos, to: steps[2].pos, rotate: 45 },
  { from: steps[2].pos, to: steps[3].pos, rotate: -45 },
];

export default function WhatMAkesUs() {
  return (
    <div className="relative overflow-hidden bg-black container py-20 mx-auto p-4 flex flex-col justify-center gap-5 items-center max-w-none">
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #40A2D8, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 max-w-4xl text-white">
          Our Process
        </h2>
        <p className="text-lg text-white/60 max-w-2xl mb-10">
          <b className="text-[#40A2D8]">A Proven Framework for Measurable Digital Growth.</b>
        </p>
      </div>

      {/* Desktop: staggered zigzag flowchart — boxes at alternating
          heights, connected by curved arrows, matching the reference. */}
      <div
        className="relative hidden md:block w-full max-w-5xl"
        style={{ height: "clamp(360px, 34vw, 420px)" }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {CONNECTORS.map((c, i) => {
            const midX = (c.from.x + c.to.x) / 2;
            const d = `M ${c.from.x} ${c.from.y} C ${midX} ${c.from.y}, ${midX} ${c.to.y}, ${c.to.x} ${c.to.y}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke="#40A2D8"
                strokeOpacity="0.6"
                strokeWidth="0.6"
                strokeDasharray="3 2"
              />
            );
          })}
        </svg>

        {/* Arrow chevrons at each connector's midpoint */}
        {CONNECTORS.map((c, i) => (
          <div
            key={i}
            className="absolute z-10 flex items-center justify-center w-7 h-7 rounded-full bg-black border border-[#40A2D8]/50 text-[#40A2D8]"
            style={{
              left: `${(c.from.x + c.to.x) / 2}%`,
              top: `${(c.from.y + c.to.y) / 2}%`,
              transform: `translate(-50%, -50%) rotate(${c.rotate}deg)`,
            }}
          >
            <ArrowRight size={14} />
          </div>
        ))}

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="absolute z-20 flex flex-col items-center text-center"
              style={{
                left: `${step.pos.x}%`,
                top: `${step.pos.y}%`,
                transform: "translate(-50%, -50%)",
                width: "190px",
              }}
            >
              <Icon size={22} className="mb-2 text-[#40A2D8]" />
              <div
                className={`w-full rounded-xl px-4 py-3 shadow-lg ${
                  step.accent
                    ? "bg-[#0B60B0] text-white shadow-[#0B60B0]/40"
                    : "bg-white/8 border border-white/15 text-white shadow-black/40"
                }`}
              >
                <h3 className="font-bold text-sm">{step.title}</h3>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mt-3">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Mobile / tablet: simple stacked list */}
      <div className="relative w-full max-w-sm grid grid-cols-1 gap-10 md:hidden">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="flex flex-col items-center text-center px-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-white text-[#0B60B0] shadow-lg shadow-black/50">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-white/60 max-w-xs">{step.description}</p>
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
