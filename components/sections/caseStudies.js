"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Real BizzBuzz clients. Swap in the actual result/stat for each once you
// have it — these taglines are intentionally generic placeholders.
const CLIENTS = [
  {
    name: "Avondale Finance",
    logo: "/avondale-1.png",
    tagline:
      "Digital marketing partnership focused on stronger lead generation and online visibility.",
  },
  {
    name: "Fibernet",
    logo: "/fibernet.png",
    tagline:
      "A modern web presence built to handle a growing volume of customer inquiries.",
  },
  {
    name: "William",
    logo: "/WILLIAM.png",
    tagline:
      "Ongoing SEO and social media management to strengthen organic reach.",
  },
  {
    name: "Grand WeddinZ",
    logo: "/GRAND WEDDINZ1.png",
    tagline:
      "Brand identity and social media strategy built for a growing events business.",
  },
  {
    name: "La Pristine",
    logo: "/LA PRISTINE1.png",
    tagline: "Website design and digital marketing to elevate the brand online.",
  },
  {
    name: "Parivartan",
    logo: "/PARIVARTAN1.png",
    tagline: "Digital marketing support to expand outreach and visibility.",
  },
  {
    name: "Red Eagle",
    logo: "/RED EAGLE1.png",
    tagline: "Brand visibility and social media management for a growing local business.",
  },
  {
    name: "Neeel Kanth",
    logo: "/NEEEL KANTH.png",
    tagline: "Digital marketing and online presence built to reach more travelers.",
  },
];

// Visual offset (distance from the active card) -> position/scale/rotation.
// Covers every position from -3 to +4 so, with 8 total clients, the whole
// ring stays visible at once instead of a couple of cards hiding off-screen.
const OFFSET_STYLE = {
  0: { x: 0, rotate: 0, scale: 1, opacity: 1, zIndex: 30 },
  1: { x: 230, rotate: 10, scale: 0.86, opacity: 0.85, zIndex: 20 },
  "-1": { x: -230, rotate: -10, scale: 0.86, opacity: 0.85, zIndex: 20 },
  2: { x: 430, rotate: 16, scale: 0.72, opacity: 0.5, zIndex: 10 },
  "-2": { x: -430, rotate: -16, scale: 0.72, opacity: 0.5, zIndex: 10 },
  3: { x: 610, rotate: 20, scale: 0.6, opacity: 0.3, zIndex: 5 },
  "-3": { x: -610, rotate: -20, scale: 0.6, opacity: 0.3, zIndex: 5 },
  4: { x: 770, rotate: 24, scale: 0.5, opacity: 0.15, zIndex: 2 },
};

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const count = CLIENTS.length;

  // Shortest signed distance from `active` to `index`, wrapping around,
  // so the carousel always spins the short way. For an even `count`, the
  // card directly opposite the active one is exactly count/2 away in
  // *either* direction — normalize that tie to +count/2 consistently
  // (`<=` here, not `<`), so it always lands on the same defined
  // OFFSET_STYLE entry instead of occasionally resolving to the
  // (undefined) negative twin and silently disappearing.
  const offsetOf = (index) => {
    let diff = index - active;
    if (diff > count / 2) diff -= count;
    if (diff <= -count / 2) diff += count;
    return diff;
  };

  const go = (dir) => setActive((prev) => (prev + dir + count) % count);

  // Auto-play: keep drifting left-to-right on its own, but pause the moment
  // the user takes over (hover, drag, or touch), and resume once they let go.
  const [paused, setPaused] = useState(false);
  const AUTOPLAY_DELAY = 3000;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_DELAY);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, active, count]);

  // Drag-to-navigate: track the pointer manually instead of framer-motion's
  // `drag` prop, since cards need to stay click-able for direct selection.
  const dragRef = useRef({ startX: 0, dragging: false, moved: false });
  const DRAG_THRESHOLD = 50;

  const handlePointerDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true, moved: false };
    setPaused(true);
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.dragging) return;
    if (Math.abs(e.clientX - dragRef.current.startX) > 5) {
      dragRef.current.moved = true;
    }
  };

  const endDrag = (e) => {
    if (!dragRef.current.dragging) return;
    const dx = e.clientX - dragRef.current.startX;
    dragRef.current.dragging = false;
    if (dx <= -DRAG_THRESHOLD) go(1);
    else if (dx >= DRAG_THRESHOLD) go(-1);
    setPaused(false);
  };

  // Swallow the click that follows a drag so it doesn't also jump to
  // whichever card happened to be under the pointer on release.
  const handleCardClick = (index) => {
    if (dragRef.current.moved) return;
    setActive(index);
  };

  return (
    <section className="bg-black text-white pt-20 pb-10 overflow-hidden">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-3">
        Real Growth, Powered by BizzBuzz Creations
      </h2>
      <p className="text-center text-white/60 max-w-xl mx-auto mb-16 px-4">
        A few of the brands we&rsquo;ve partnered with to build, market, and grow
        their online presence.
      </p>

      {/* Card carousel */}
      <div
        className="relative h-[300px] md:h-80 cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {CLIENTS.map((client, index) => {
          const offset = offsetOf(index);
          const style = OFFSET_STYLE[offset];
          const isActive = offset === 0;

          if (!style) return null; // further than 2 away — stay hidden

          return (
            <motion.div
              key={client.name}
              onClick={() => handleCardClick(index)}
              animate={{
                x: style.x,
                rotate: style.rotate,
                scale: style.scale,
                opacity: style.opacity,
              }}
              style={{ zIndex: style.zIndex }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className={`absolute top-1/2 left-1/2 -mt-[135px] -ml-[140px] w-[280px] md:w-[300px] p-6 rounded-3xl border cursor-pointer ${
                isActive
                  ? "bg-linear-to-br from-[#0B60B0] to-[#40A2D8] border-white/20 shadow-2xl"
                  : "bg-white/6 border-white/10"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0 mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={40}
                  height={40}
                  className="object-contain w-9 h-9"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
              <p
                className={`text-sm mb-6 ${
                  isActive ? "text-white/90" : "text-white/50"
                }`}
              >
                {client.tagline}
              </p>

              {isActive && (
                <Link
                  href="/contact"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 bg-black/80 hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded-full transition"
                >
                  View Case Study
                  <ArrowUpRight size={15} />
                </Link>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
