"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industriesData";

// How much page-scroll (in px) is dedicated to stepping through one
// industry. Bigger = slower, more deliberate scroll through the list.
const SCROLL_PER_ITEM = 70;
const SCROLL_DISTANCE = INDUSTRIES.length * SCROLL_PER_ITEM;

export default function IndustriesShowcase() {
  const [active, setActive] = useState(0);
  const wrapperRef = useRef(null);
  const listContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const current = INDUSTRIES[active];
  const Icon = current.icon;

  // The section is pinned (sticky) for an extra SCROLL_DISTANCE worth of
  // page-scroll. While the user scrolls through that runway, we're still
  // inside this section's tall wrapper, so the next section can't come
  // into view yet — only once every industry has been stepped through does
  // the wrapper run out and the sticky panel release, letting the page move
  // on normally. Driven by scroll *position* (not by hijacking wheel
  // events), so trackpad/touch/wheel all keep their native feel.
  useEffect(() => {
    const handleScroll = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const scrolledPast = -wrapper.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolledPast / SCROLL_DISTANCE));
      const index = Math.min(
        INDUSTRIES.length - 1,
        Math.floor(progress * INDUSTRIES.length),
      );
      setActive(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the active row scrolled into view inside the (scrollbar-hidden)
  // list panel as the active index changes. Deliberately set the list
  // container's own scrollTop directly instead of item.scrollIntoView() —
  // scrollIntoView walks up to ANY ancestor that needs to move, including
  // the page itself if this section isn't in view yet (e.g. right on
  // mount), which was yanking the whole page down to this section on load.
  useEffect(() => {
    const container = listContainerRef.current;
    const item = itemRefs.current[active];
    if (!container || !item) return;
    const target =
      item.offsetTop - container.clientHeight / 2 + item.offsetHeight / 2;
    container.scrollTo({ top: target, behavior: "smooth" });
  }, [active]);

  return (
    <section
      id="industries"
      ref={wrapperRef}
      className="relative bg-black"
      style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center text-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold max-w-xl">
              Solving Real Challenges Across Every Major Industry
            </h2>
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 border border-white/30 hover:bg-white/10 rounded-full px-5 py-2.5 text-sm font-semibold transition shrink-0"
            >
              Check All Industries
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-[minmax(0,280px)_minmax(0,260px)_1fr] gap-8 items-stretch">
            {/* Active industry visual */}
            <div className="relative h-56 md:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#0B60B0]/20 to-[#40A2D8]/10 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 border border-white/15 flex items-center justify-center"
                >
                  <Icon size={44} className="text-[#40A2D8]" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Industry list — position driven by scroll progress above,
                still hoverable for a quick manual jump. */}
            <div
              ref={listContainerRef}
              className="h-56 md:h-[420px] overflow-y-auto no-scrollbar pr-2"
            >
              <ul>
                {INDUSTRIES.map((industry, i) => (
                  <li key={industry.label} ref={(el) => (itemRefs.current[i] = el)}>
                    <button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={`block w-full text-left py-3 text-lg font-medium transition-colors cursor-pointer ${
                        i === active ? "text-white" : "text-white/35 hover:text-white/60"
                      }`}
                    >
                      {industry.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active industry description */}
            <div className="h-56 md:h-[420px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-white/70 leading-relaxed mb-6">
                    {current.description}
                  </p>
                  <Link
                    href={`/industries/${current.slug}`}
                    className="inline-flex items-center gap-1.5 border border-white/30 hover:bg-white/10 rounded-full px-5 py-2.5 text-sm font-semibold transition"
                  >
                    Know More
                    <ArrowUpRight size={16} />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-center text-white/30 text-xs mt-8 animate-pulse">
            {active < INDUSTRIES.length - 1
              ? "Keep scrolling to see every industry ↓"
              : "That's all of them ↓"}
          </p>
        </div>
      </div>
    </section>
  );
}
