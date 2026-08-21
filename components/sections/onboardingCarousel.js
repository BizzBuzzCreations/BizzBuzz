"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { MessageCircle, FileSignature, Users, FileCheck2 } from "lucide-react";

const ONBOARDING_STEPS = [
  {
    step: "STEP 01",
    icon: MessageCircle,
    title: "Understanding Your Requirements",
    desc: "We start by listening — your goals, your challenges, your budget. Everything is captured so we know what success looks like.",
  },
  {
    step: "STEP 02",
    icon: FileSignature,
    title: "Protecting Your Idea",
    desc: "Your business details stay yours. We're happy to sign an NDA before any project details or account access are shared.",
  },
  {
    step: "STEP 03",
    icon: Users,
    title: "A Free Consultation",
    desc: "Our team walks through your requirements, goals, and budget — completely free, with no obligation.",
  },
  {
    step: "STEP 04",
    icon: FileCheck2,
    title: "A Clear Proposal",
    desc: "You get a straightforward plan back — scope, timeline, and transparent, itemized pricing before any work begins.",
  },
];

export default function OnboardingCarousel() {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        drag: "free",
        focus: "center",
        pauseOnHover: true,
        pauseOnFocus: false,
        autoWidth: false,

        autoScroll: {
          speed: 0.8,
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
        },

        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }}
      extensions={{ AutoScroll }}
      className="max-w-6xl mx-auto"
    >
      {ONBOARDING_STEPS.map(({ step, icon: Icon, title, desc }) => (
        <SplideSlide key={step} className="h-auto py-2">
          <div className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
            <span className="inline-block self-start text-xs font-bold text-[#40A2D8] bg-white/10 rounded-full px-3 py-1 mb-4">
              {step}
            </span>
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B60B0] text-white">
              <Icon size={19} />
            </div>
            <h3 className="font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#40A2D8]">
              {title}
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}
