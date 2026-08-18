"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  Globe,
  Search,
  Share2,
  Megaphone,
  Bot,
  Workflow,
  Handshake,
} from "lucide-react";

// Same real numbers already used in the Counter / TrustBar sections —
// kept consistent site-wide rather than inventing new stats.
const STATS = [
  {
    tag: "Our Work",
    value: "50+",
    label: "Projects Delivered",
    description:
      "Website builds, SEO campaigns, and full-funnel marketing programs delivered for businesses across Prayagraj and India.",
    visual: { type: "image", src: "/teamPic.webp", alt: "BizzBuzz Creations team at work" },
  },
  {
    tag: "Real Results",
    value: "10,000+",
    label: "Leads Generated",
    description:
      "Qualified leads generated for our clients through targeted SEO, paid ads, and social media campaigns.",
    visual: { type: "logos" },
  },
  {
    tag: "Client Trust",
    value: "4.9",
    label: "Google Rating",
    description:
      "Average client rating on Google, built on transparent reporting and consistent, measurable results.",
    visual: {
      type: "image",
      src: "/About-Us-Collage-scaled.webp",
      alt: "BizzBuzz Creations client work",
    },
  },
  {
    tag: "Our Journey",
    value: "3+",
    label: "Years of Experience",
    description:
      "Years spent helping Indian businesses grow online across digital marketing, web development, and BPO services.",
    visual: { type: "icons" },
  },
];

const CLIENT_LOGOS = [
  { src: "/avondale-1.png", alt: "Avondale Finance" },
  { src: "/fibernet.png", alt: "Fibernet" },
  { src: "/WILLIAM.png", alt: "William" },
  { src: "/GRAND WEDDINZ1.png", alt: "Grand WeddinZ" },
  { src: "/LA PRISTINE1.png", alt: "La Pristine" },
  { src: "/PARIVARTAN1.png", alt: "Parivartan" },
];

const SERVICE_ICONS = [
  Headphones,
  Globe,
  Search,
  Share2,
  Megaphone,
  Bot,
  Workflow,
  Handshake,
];

function Visual({ visual }) {
  if (visual.type === "image") {
    return (
      <div className="relative w-full h-full">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="320px"
          className="object-cover"
          draggable={false}
        />
      </div>
    );
  }

  if (visual.type === "logos") {
    return (
      <div className="w-full h-full bg-linear-to-br from-[#0B60B0] to-[#40A2D8] p-5 flex items-center">
        <div className="grid grid-cols-3 gap-3 w-full">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.alt}
              className="bg-white rounded-xl aspect-square flex items-center justify-center p-2"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={60}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // icons grid
  return (
    <div className="w-full h-full bg-linear-to-br from-[#0B60B0] to-[#40A2D8] p-5 flex items-center justify-center">
      <div className="grid grid-cols-4 gap-3">
        {SERVICE_ICONS.map((Icon, index) => (
          <div
            key={index}
            className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-[#0B60B0]"
          >
            <Icon size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

// The scalloped edge where the white text panel meets the image below it —
// same idea as the site's WavyDivider, but filled (not just stroked) so it
// masks the top of the image with a wavy white edge instead of a hard line.
function buildWaveMaskPath(waves, width, height) {
  const segment = width / waves;
  const base = height * 0.55;
  const amplitude = height * 0.45;
  let path = `M 0 ${base}`;

  for (let i = 0; i < waves; i++) {
    const x0 = i * segment;
    const xEnd = x0 + segment;
    const peakY = i % 2 === 0 ? base - amplitude : base + amplitude;
    const c1x = x0 + segment / 4;
    const c2x = xEnd - segment / 4;
    path += ` C ${c1x} ${peakY}, ${c2x} ${peakY}, ${xEnd} ${base}`;
  }

  path += ` L ${width} 0 L 0 0 Z`;
  return path;
}

const WAVE_MASK_HEIGHT = 28;
const WAVE_MASK_PATH = buildWaveMaskPath(3, 1000, WAVE_MASK_HEIGHT);

function WaveMask({ position = "top" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 1000 ${WAVE_MASK_HEIGHT}`}
      preserveAspectRatio="none"
      className={`absolute left-0 w-full ${
        position === "top" ? "top-0" : "bottom-0 -scale-y-100"
      }`}
      style={{ height: WAVE_MASK_HEIGHT }}
    >
      <path d={WAVE_MASK_PATH} fill="white" />
    </svg>
  );
}

// Card + gap width, in px — kept as plain numbers (not Tailwind classes) so
// the marquee math below can compute exact loop distances.
const CARD_WIDTH = 300;
const GAP = 20;
const SET_WIDTH = STATS.length * (CARD_WIDTH + GAP);
const SPEED = 0.6; // px per frame, roughly matching the site's other marquees

// Wrap `value` into the range (-width, 0] so the strip can scroll infinitely
// in either direction without ever visibly jumping.
function wrap(value, width) {
  let v = value % width;
  if (v > 0) v -= width;
  return v;
}

export default function StatsShowcase() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const hoveringRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, offset: 0 });

  // Auto-scrolling marquee, driven by our own rAF loop (rather than a
  // third-party carousel lib) so drag + hover-pause + autoplay all stay in
  // one predictable place.
  useEffect(() => {
    let raf;
    const tick = () => {
      if (!draggingRef.current && !hoveringRef.current) {
        offsetRef.current -= SPEED;
      }
      offsetRef.current = wrap(offsetRef.current, SET_WIDTH);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    dragStartRef.current = { x: e.clientX, offset: offsetRef.current };
  };

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return;
    offsetRef.current = dragStartRef.current.offset + (e.clientX - dragStartRef.current.x);
  };

  const endDrag = () => {
    draggingRef.current = false;
  };

  return (
    <section
      className="bg-black pb-20 overflow-hidden"
      aria-label="BizzBuzz Creations by the numbers"
      onMouseEnter={() => {
        hoveringRef.current = true;
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
        endDrag();
      }}
    >
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: `${GAP}px`, willChange: "transform" }}
        >
          {/* The set is repeated 3x so there's always a full extra set of
              cards on either side of the visible window to scroll into,
              regardless of drag distance or viewport width. */}
          {[...STATS, ...STATS, ...STATS].map((stat, i) => (
            <div
              key={`${stat.label}-${i}`}
              className="flex flex-col h-[460px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-xl"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              {/* Image — on top, with a wavy white mask along its bottom
                  edge flowing into the text panel below */}
              <div className="relative flex-1 min-h-0">
                <Visual visual={stat.visual} />
                <WaveMask position="bottom" />
              </div>

              {/* Text — below */}
              <div className="p-5 shrink-0">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0B60B0] mb-2">
                  {stat.tag}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {stat.value} {stat.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {stat.description}
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-semibold px-4 py-2 rounded-full transition"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
