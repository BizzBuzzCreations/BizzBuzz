"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/industriesData";
import AnimatedButton from "@/components/ui/animatedButton";

// Short, service-specific detail copy shown in the panel below the pills
// when that category is selected. Keyed by the same keys as SERVICES in
// lib/industriesData.js so this stays a thin presentation layer, not a
// second source of truth for service names/links/icons.
const SERVICE_DETAILS = {
  bpo: {
    tagline: "Support That Keeps Business Moving",
    desc: "Reliable customer support, lead management, and operational assistance designed around your business needs.",
  },
  webDev: {
    tagline: "Websites Built for Growth",
    desc: "Fast, responsive, and conversion-focused websites designed to create better digital experiences.",
  },
  seo: {
    tagline: "Get Found by the Right Audience",
    desc: "Strategic SEO that improves search visibility, attracts qualified traffic, and builds long-term organic growth.",
  },
  smm: {
    tagline: "Turn Attention Into Connection",
    desc: "Strategic social media management and content designed to build brand presence and meaningful audience engagement.",
  },
  paidAds: {
    tagline: "Reach Customers Ready to Act",
    desc: "Targeted paid campaigns designed to drive qualified traffic, generate leads, and improve advertising performance.",
  },
  ai: {
    tagline: "Put AI to Work for Your Business",
    desc: "Practical AI solutions that improve efficiency, automate tasks, and create smarter digital workflows.",
  },
  automation: {
    tagline: "Automate the Work That Slows You Down",
    desc: "Connected marketing workflows that streamline repetitive tasks, nurture leads, and improve operational efficiency.",
  },
  consultancy: {
    tagline: "Turn Business Challenges Into Direction",
    desc: "Practical consulting that helps businesses identify opportunities, solve challenges, and make smarter growth decisions.",
  },
};

export default function CategoriesShowcase() {
  const services = Object.values(SERVICES);
  const [active, setActive] = useState(services[0]?.key);
  const activeService = services.find((s) => s.key === active) || services[0];
  const activeDetail = SERVICE_DETAILS[activeService.key];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {services.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`text-sm font-medium rounded-full px-4 py-2.5 text-center transition-all duration-300 border ${
              active === key
                ? "bg-[#0B60B0] border-[#0B60B0] text-white shadow-lg shadow-[#0B60B0]/30"
                : "border-white/15 text-white/70 hover:border-white/40 hover:text-white hover:bg-white/5"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeService && (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 mb-8 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
            <span className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-[#0B60B0] text-white">
              <activeService.icon size={26} />
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-1">{activeService.label}</h3>
              {activeDetail?.tagline && (
                <p className="text-sm font-semibold text-[#40A2D8] mb-2">
                  {activeDetail.tagline}
                </p>
              )}
              <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                {activeDetail?.desc}
              </p>
            </div>
            <div className="shrink-0 self-start sm:self-center">
              <AnimatedButton href={activeService.href} size="sm">
                Learn More
              </AnimatedButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
