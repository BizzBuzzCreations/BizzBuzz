"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industriesData";

// Static three-column list of every industry — no scroll-jacking. Hover
// (or focus) any name to swap the visual + description; no more scrolling
// required to see every industry. Whole block sits centered inside a
// contained panel rather than sprawling edge-to-edge.
const COL_SIZE = Math.ceil(INDUSTRIES.length / 3);
const COLUMN_ONE = INDUSTRIES.slice(0, COL_SIZE);
const COLUMN_TWO = INDUSTRIES.slice(COL_SIZE, COL_SIZE * 2);
const COLUMN_THREE = INDUSTRIES.slice(COL_SIZE * 2);

export default function IndustriesShowcase() {
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];
  const Icon = current.icon;

  const renderColumn = (items, offset) => (
    <ul className="space-y-1.5">
      {items.map((industry, i) => {
        const index = offset + i;
        return (
          <li key={industry.label}>
            <button
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={`block w-full text-left py-1.5 text-[15px] font-medium transition-colors cursor-pointer ${
                index === active ? "text-[#40A2D8]" : "text-white/40 hover:text-white/70"
              }`}
            >
              {industry.label}
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="industries" className="relative overflow-hidden bg-black py-20 px-6 md:px-12 lg:px-24">
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            Solving Real Challenges Across Every Major Industry
          </h2>
        </div>

        <div className="grid md:grid-cols-[200px_1fr_1fr_1fr] lg:grid-cols-[200px_1fr_1fr_1fr_1.2fr] gap-x-8 lg:gap-x-10 gap-y-10 items-start">
          {/* Active industry visual */}
          <div className="relative h-56 md:h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#0B60B0]/20 to-[#40A2D8]/10 flex items-center justify-center">
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

          {/* Three name columns, 7 each */}
          {renderColumn(COLUMN_ONE, 0)}
          {renderColumn(COLUMN_TWO, COL_SIZE)}
          {renderColumn(COLUMN_THREE, COL_SIZE * 2)}

          {/* Active industry description — back on the right, next to
              the industry columns. */}
          <div className="md:col-span-3 lg:col-span-1 flex flex-col justify-start lg:ml-6 lg:pl-8 lg:border-l lg:border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-bold text-white mb-1.5">{current.label}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {current.description}
                </p>
                <Link
                  href={`/industries/${current.slug}`}
                  className="inline-flex items-center gap-1.5 bg-[#0B60B0] hover:bg-[#0d72cf] text-white rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg shadow-[#0B60B0]/30 transition w-fit"
                >
                  Know More
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
