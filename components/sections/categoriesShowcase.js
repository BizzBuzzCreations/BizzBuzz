"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/industriesData";

// Short, service-specific detail copy shown in the panel below the pills
// when that category is selected. Keyed by the same keys as SERVICES in
// lib/industriesData.js so this stays a thin presentation layer, not a
// second source of truth for service names/links/icons.
const SERVICE_DETAILS = {
  seo: "On-page fixes, technical audits, content, and link building focused on rankings that actually convert — not just traffic for the sake of it.",
  smm: "Content calendars, community management, and paid social campaigns across Instagram, Facebook, and LinkedIn built around your brand voice.",
  paidAds: "Google Ads and paid social campaigns built for ROAS, with transparent budgets and reporting — never a black box.",
  webDev: "Fast, responsive websites and web apps built on modern stacks, handed over with full ownership — no vendor lock-in.",
  bpo: "Trained support teams handling customer queries, order support, and back-office work so your core team can focus on growth.",
  ai: "AI chatbots, workflow copilots, and custom automations that cut manual work without replacing the judgment calls that need a human.",
  automation: "Email sequences, CRM workflows, and lifecycle automations that keep leads warm and follow-ups consistent, on autopilot.",
  consultancy: "Workshops, audits, and roadmaps for teams that need a clear strategic direction before committing budget to execution.",
};

export default function CategoriesShowcase() {
  const services = Object.values(SERVICES);
  const [active, setActive] = useState(services[0]?.key);
  const activeService = services.find((s) => s.key === active) || services[0];

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {services.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`text-sm font-medium rounded-full px-4 py-2 transition-all duration-300 border ${
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
              <h3 className="font-bold text-xl mb-2">{activeService.label}</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-2xl">
                {SERVICE_DETAILS[activeService.key]}
              </p>
            </div>
            <a
              href={activeService.href}
              className="shrink-0 inline-flex items-center gap-1.5 self-start sm:self-center bg-white hover:bg-gray-100 text-black text-sm font-semibold px-5 py-2.5 rounded-full transition"
            >
              Learn More
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
