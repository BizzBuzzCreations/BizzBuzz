"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";

// Real certifications/partnerships already vetted and used elsewhere on the
// site (the popup consultation form) — no invented awards or fabricated
// years, since BizzBuzz hasn't actually won press-level industry awards.
const RECOGNITIONS = [
  {
    org: "Clutch",
    status: "Verified Partner",
    title: "Listed among trusted digital marketing agencies on Clutch",
    badge: "/clutch.png",
    alt: "Clutch Partner",
  },
  {
    org: "Google Partner",
    status: "Certified",
    title: "Certified Google Ads & Marketing Partner",
    badge: "/CDL.png",
    alt: "Google Partner",
  },
  {
    org: "Google Analytics",
    status: "Certified",
    title: "Certified Google Analytics Partner",
    badge: "/GA.png",
    alt: "Google Analytics Partner",
  },
  {
    org: "ISO",
    status: "Certified",
    title: "Quality-certified business processes",
    badge: "/ISO.png",
    alt: "ISO Certified",
  },
];

export default function Recognitions() {
  const [active, setActive] = useState(0);
  const current = RECOGNITIONS[active];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
            <Award className="text-yellow-400 shrink-0" size={36} />
            <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
              Proven Expertise. <br className="hidden sm:block" />
              Real Recognition.
            </h2>
            <Award className="text-yellow-400 shrink-0 scale-x-[-1]" size={36} />
          </div>

          <ul className="divide-y divide-white/10">
            {RECOGNITIONS.map((item, i) => (
              <li
                key={item.org}
                onMouseEnter={() => setActive(i)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 py-4 cursor-default transition-opacity duration-300 ${
                  active === i ? "opacity-100" : "opacity-55 hover:opacity-90"
                }`}
              >
                <span className="flex items-center gap-2 font-semibold shrink-0">
                  {active === i && (
                    <Trophy size={16} className="text-yellow-400" />
                  )}
                  {item.org} — {item.status}
                </span>
                <span className="text-sm text-white/70 sm:text-right">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured badge — grows and gets a trophy pop-in whenever a row
            above is hovered. */}
        <div className="relative flex justify-center items-center h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.org}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-56 h-56 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Image
                src={current.badge}
                alt={current.alt}
                width={140}
                height={140}
                className="object-contain"
              />

              <motion.div
                key={`trophy-${current.org}`}
                initial={{ opacity: 0, scale: 0.4, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -top-6 -right-6 bg-yellow-400 text-black rounded-full p-3 shadow-xl"
              >
                <Trophy size={26} />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
