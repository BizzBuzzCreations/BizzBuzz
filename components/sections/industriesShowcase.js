"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/industriesData";
import RichText from "@/components/ui/richText";

// Static three-column list of every industry — no scroll-jacking. Hover
// (or focus) any name to swap the visual + description; clicking a name on
// desktop/tablet opens that industry's page (mobile has no hover, so a tap
// only previews it and the "Know More" button does the navigating). Whole block sits centered inside a
// contained panel rather than sprawling edge-to-edge.
const COL_SIZE = Math.ceil(INDUSTRIES.length / 3);
const COLUMN_ONE = INDUSTRIES.slice(0, COL_SIZE);
const COLUMN_TWO = INDUSTRIES.slice(COL_SIZE, COL_SIZE * 2);
const COLUMN_THREE = INDUSTRIES.slice(COL_SIZE * 2);

// Mobile gets its own 2-column split (8 + 7) instead of the desktop's
// 3-column layout stacking into one long undifferentiated list on narrow
// screens.
const MOBILE_COL_SIZE = Math.ceil(INDUSTRIES.length / 2);
const MOBILE_COLUMN_ONE = INDUSTRIES.slice(0, MOBILE_COL_SIZE);
const MOBILE_COLUMN_TWO = INDUSTRIES.slice(MOBILE_COL_SIZE);

// Short hover descriptions specific to this homepage showcase — kept
// separate from each industry's own page description (industriesData.js),
// which also drives the hero paragraph on /industries/<slug>.
const HOVER_DESCRIPTIONS = {
  healthcare: "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.",
  finance: "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.",
  restaurant: "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.",
  wearables: "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.",
  entertainment: "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.",
  travel: "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.",
  fitness: "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.",
  education: "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.",
  "real-estate": "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.",
  ecommerce: "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.",
  events: "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.",
  manufacturing: "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.",
  "fashion-apparel": "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.",
  gaming: "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.",
  construction: "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.",
};

export default function IndustriesShowcase({ content }) {
  const eyebrow = content?.industriesEyebrow || "";
  const heading = content?.industriesHeading || "Digital Solutions for Businesses Across Industries";
  const subtext =
    content?.industriesSubtext ||
    "From healthcare and finance to e-commerce, travel, education, and manufacturing, we deliver digital marketing, SEO, web development, and technology solutions tailored to how your industry works.";
  const [active, setActive] = useState(0);
  const current = INDUSTRIES[active];
  const Icon = current.icon;
  const currentDescription = HOVER_DESCRIPTIONS[current.slug] || current.description;

  const renderColumn = (items, offset, navigate = false) => (
    <ul className="space-y-2">
      {items.map((industry, i) => {
        const index = offset + i;
        const itemClass = `block w-full text-left py-1.5 text-lg font-medium transition-colors cursor-pointer ${
          index === active ? "text-[#40A2D8]" : "text-white/40 hover:text-white/70"
        }`;
        return (
          <li key={industry.label}>
            {navigate ? (
              <Link
                href={`/industries/${industry.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={itemClass}
              >
                {industry.label}
              </Link>
            ) : (
              <button
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={itemClass}
              >
                {industry.label}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="industries" className="relative overflow-hidden bg-black py-20 px-6 md:px-12 lg:px-24">

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            {heading}
          </h2>
          <RichText as="p" text={subtext} className="text-white/60 max-w-2xl mx-auto mt-4" />
        </div>

        {/* Mobile: a clean 2-column name grid (8 + 7) instead of the
            desktop's 3-column layout, which on a single-column mobile grid
            stacked into one long, undifferentiated list of 15 names. Tap
            (not just hover) a name to preview it. */}
        <div className="md:hidden">
          <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#0B60B0]/20 to-[#40A2D8]/10 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image src={current.image} alt={current.label} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[#40A2D8]">
                  <Icon size={20} />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
            {renderColumn(MOBILE_COLUMN_ONE, 0)}
            {renderColumn(MOBILE_COLUMN_TWO, MOBILE_COL_SIZE)}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-white text-sm leading-relaxed mb-6">
                {currentDescription}
              </p>
              <Link
                href={`/industries/${current.slug}`}
                className="inline-flex items-center gap-1.5 border border-white text-white hover:bg-white hover:text-black rounded-full px-5 py-2.5 text-sm font-semibold transition w-fit"
              >
                Know More
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop / tablet: original 3-column layout, unchanged. */}
        <div className="hidden md:grid md:grid-cols-[260px_1fr_1fr_1fr] lg:grid-cols-[280px_140px_140px_140px_minmax(300px,1fr)] gap-x-8 lg:gap-x-10 gap-y-10 items-center">
          {/* Active industry visual — the real photo for whichever
              industry is hovered/focused, crossfading in on change (was
              just a generic icon in a circle before, the same for every
              industry). */}
          <div className="relative w-full h-56 md:h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-[#0B60B0]/20 to-[#40A2D8]/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.label}
                  fill
                  sizes="(max-width: 1024px) 260px, 280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-[#40A2D8]">
                  <Icon size={20} />
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Three name columns, 5 each */}
          {renderColumn(COLUMN_ONE, 0, true)}
          {renderColumn(COLUMN_TWO, COL_SIZE, true)}
          {renderColumn(COLUMN_THREE, COL_SIZE * 2, true)}

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
                <p className="text-white text-sm leading-relaxed mb-6">
                  {currentDescription}
                </p>
                <Link
                  href={`/industries/${current.slug}`}
                  className="inline-flex items-center gap-1.5 border border-white text-white hover:bg-white hover:text-black rounded-full px-5 py-2.5 text-sm font-semibold transition w-fit"
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
