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
    badge: "/iso.png",
    alt: "ISO Certified",
  },
];

const DEFAULT_HEADING = "Proven Expertise. Real Recognition.";

export default function Recognitions({ content }) {
  const [active, setActive] = useState(0);

  const recognitions = RECOGNITIONS.map((item) => {
    if (item.org === "Clutch")
      return { ...item, badge: content?.clutchBadgeImage || item.badge, title: content?.clutchTitle || item.title };
    if (item.org === "Google Partner")
      return { ...item, badge: content?.googleAdsBadgeImage || item.badge, title: content?.googleAdsTitle || item.title };
    if (item.org === "Google Analytics")
      return { ...item, badge: content?.googleAnalyticsBadgeImage || item.badge, title: content?.googleAnalyticsTitle || item.title };
    if (item.org === "ISO")
      return { ...item, badge: content?.isoBadgeImage || item.badge, title: content?.isoTitle || item.title };
    return item;
  });

  const current = recognitions[active];
  const eyebrow = content?.recognitionsEyebrow || "";
  const heading = content?.recognitionsHeading || DEFAULT_HEADING;
  const isDefaultHeading = heading === DEFAULT_HEADING;

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4 text-center lg:text-left">
            {eyebrow}
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
            <Award className="text-[#40A2D8] shrink-0" size={44} />
            <h2 className="text-4xl md:text-5xl font-bold text-center lg:text-left leading-tight">
              {isDefaultHeading ? (
                <>
                  Proven Expertise. <br className="hidden sm:block" />
                  Real Recognition.
                </>
              ) : (
                heading
              )}
            </h2>
            <Award className="text-[#40A2D8] shrink-0 scale-x-[-1]" size={44} />
          </div>

          <ul className="space-y-3">
            {recognitions.map((item, i) => (
              <li
                key={item.org}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                // onClick (not just onMouseEnter) — the featured badge on
                // the right is desktop-only now (see below); the item's
                // own logo already shows inline, but the tap still keeps
                // this row's :active/border state showing which one was
                // last picked, on both touch and mouse.
                className={`group flex items-center justify-between gap-3 sm:gap-6 rounded-2xl border px-4 sm:px-6 py-4 sm:py-5 cursor-pointer sm:cursor-default transition-all duration-300 ${
                  active === i
                    ? "border-[#40A2D8]/50 bg-[#0B60B0]/[0.08] shadow-lg shadow-[#0B60B0]/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {/* Real badge logo, always visible — on mobile there's no
                    hover to reveal the featured panel on the right (that
                    panel is hidden below lg entirely now), so this is the
                    only place a mobile visitor ever sees the actual
                    Clutch/Google/ISO badge rather than a generic trophy
                    icon standing in for all four. */}
                <span className="flex items-center gap-3 min-w-0">
                  <span
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white p-1.5 transition-colors duration-300 ${
                      active === i ? "ring-2 ring-[#40A2D8]" : ""
                    }`}
                  >
                    <Image src={item.badge} alt={item.alt} fill sizes="40px" className="object-contain p-1.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-white leading-snug">
                      {item.org}{" "}
                      <span className="text-white/40 font-medium">— {item.status}</span>
                    </span>
                    {/* Description sits directly under the name on mobile
                        (was a separate right-aligned column that only made
                        sense once the row was wide enough for sm:flex-row —
                        below that it just added extra wrapped lines with no
                        clear relationship to the name above it). */}
                    <span className="block sm:hidden text-sm text-white/60 leading-relaxed mt-0.5">
                      {item.title}
                    </span>
                  </span>
                </span>
                <span className="hidden sm:block text-base text-white/70 text-right leading-relaxed shrink-0 max-w-[45%]">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Featured badge — desktop only now. On mobile this relied on
            :hover to switch, which touch devices never trigger, so it
            just sat frozen on the first item; the real per-item logos in
            the list above (added for mobile) make this panel redundant
            screen space there anyway. */}
        <div className="relative hidden lg:flex justify-center items-center h-[260px] sm:h-[340px] px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.org}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-52 h-52 sm:w-72 sm:h-72 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(64,162,216,0.3), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <Image
                src={current.badge}
                alt={current.alt}
                width={170}
                height={170}
                className="relative object-contain w-[120px] h-[120px] sm:w-[170px] sm:h-[170px]"
              />

              {/* Smaller + closer-in on mobile (-top-3/-right-3 instead of
                  -top-7/-right-7) so the trophy badge never pokes past the
                  section's own padding and gets clipped at the screen
                  edge — it only needed the bigger offset on wider screens
                  where there's room to spare. */}
              <motion.div
                key={`trophy-${current.org}`}
                initial={{ opacity: 0, scale: 0.4, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -top-3 -right-3 sm:-top-7 sm:-right-7 bg-[#0B60B0] text-white rounded-full p-2.5 sm:p-4 shadow-xl"
              >
                <Trophy size={22} className="sm:hidden" />
                <Trophy size={30} className="hidden sm:block" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
