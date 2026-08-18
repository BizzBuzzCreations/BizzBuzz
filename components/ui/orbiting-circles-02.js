"use client";

import React from "react";
import { Search, Share2, Megaphone, MessageCircle, Mail, BarChart3, Bot, Globe } from "lucide-react";
import ParticleSphereAnimation from "@/components/ui/orbiting-circles-02-utils/particalsphear";

// The services BizzBuzz actually runs — swapped in for the original
// component's third-party dev-tool logos (Figma/Slack/Supabase/etc.),
// which had nothing to do with a digital marketing agency.
const orbits = [
  {
    size: "w-110 h-110 md:w-180 md:h-180",
    duration: 18,
    icons: [
      { icon: Search, label: "SEO", angle: -60 },
      { icon: Share2, label: "Social Media", angle: 0 },
      { icon: Megaphone, label: "Paid Ads", angle: 60 },
    ],
  },
  {
    size: "w-150 h-150 md:w-220 md:h-220",
    duration: 24,
    icons: [
      { icon: MessageCircle, label: "BPO & Support", angle: 0 },
      { icon: Mail, label: "Email Marketing", angle: -90 },
    ],
  },
  {
    size: "w-180 h-180 md:w-265 md:h-265",
    duration: 30,
    icons: [
      { icon: BarChart3, label: "Analytics", angle: -60 },
      { icon: Bot, label: "AI Solutions", angle: 0 },
      { icon: Globe, label: "Web Development", angle: 60 },
    ],
  },
];

export default function OrbitingCirclesGlobeDemo() {
  return (
    <div className="relative w-full h-110 md:h-160 overflow-hidden flex justify-center">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Center particle globe */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 aspect-square pointer-events-none w-75 md:w-145 z-10">
        <ParticleSphereAnimation />
      </div>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            label: `${ic.label}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border border-white/15 ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => {
              const Icon = iconData.icon;
              return (
                <div
                  key={iconIndex}
                  className="absolute top-0 left-1/2 h-1/2 -ml-8 origin-bottom flex flex-col justify-start items-center"
                  style={{
                    "--start-angle": `${iconData.angle}deg`,
                    animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                  }}
                >
                  <div
                    className="p-3 sm:p-4 border border-white/15 rounded-full bg-black -mt-8 relative z-10"
                    style={{
                      "--counter-offset": `${-iconData.angle}deg`,
                      animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                    }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#40A2D8]" />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
