"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// "A Decade of Digital Excellence" style timeline, scoped to BizzBuzz's
// actual span (2022–2026). Copy here is deliberately general — it reuses
// only facts already established elsewhere on the site (90+ projects,
// 50+ clients, 20+ industries, real Clutch/Google certifications) rather
// than inventing precise per-year numbers, award names, or hiring counts
// that aren't verified.
const YEARS = [
  {
    year: "2022",
    title: "Our Beginning",
    body: "BizzBuzz Creations started in Prayagraj as a small team of marketers, designers, and strategists, taking on our first local projects with one rule: build for outcomes, not vanity metrics.",
    img: "/image-7.jpg",
    alt: "Early BizzBuzz Creations team strategy session",
  },
  {
    year: "2023",
    title: "Building the Core Team",
    body: "We built out dedicated SEO, paid media, web development, and BPO capabilities, training every new hire on the same standards we held ourselves to from day one.",
    img: "/image-2.jpg",
    alt: "BizzBuzz Creations team working in the office",
  },
  {
    year: "2024",
    title: "Growing Beyond Prayagraj",
    body: "Referrals started coming in from across India, and our client roster grew to span multiple industries — from D2C startups to established enterprises.",
    img: "/image-5.webp",
    alt: "BizzBuzz Creations team celebrating together",
  },
  {
    year: "2025",
    title: "A Wider Reach",
    body: "Our footprint expanded to include clients across the UK and US, alongside continued growth of our team and services here in India.",
    img: "/image-4.webp",
    alt: "BizzBuzz Creations team celebrating a milestone",
  },
  {
    year: "2026",
    title: "Where We Are Today",
    body: "With 90+ projects delivered for 50+ clients across 20+ industries, and real certifications from Clutch and Google, we keep building the same way we started: hands-on, transparent, and outcome-focused.",
    img: "/teamPic.webp",
    alt: "The BizzBuzz Creations team",
  },
];

const SLIDE_DURATION = 2800;

export default function OurJourney() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % YEARS.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  const current = YEARS[active];

  return (
    <section className="bg-black py-20 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-16">
          Our Journey So Far
        </h2>

        {/* Year showcase */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 min-h-[260px] sm:min-h-[240px]">
          {/* Rotated photo — bigger */}
          <div className="relative shrink-0 w-[260px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl -rotate-6">
            <Image
              key={current.img}
              src={current.img}
              alt={current.alt}
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>

          {/* Giant year number on top, copy below it and shifted toward
              the right so it never sits under the number. */}
          <div className="flex-1 min-w-0 text-center sm:text-left">
            <span
              key={current.year}
              className="block font-black leading-none text-[#0B60B0] text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] tracking-tight"
            >
              {current.year}
            </span>
            <div className="max-w-md mt-8 mx-auto sm:mx-0 sm:ml-auto text-center sm:text-left">
              <h3 className="text-white font-bold text-xl mb-3">{current.title}</h3>
              <p className="text-base text-white/60 leading-relaxed">
                {current.body}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-3 h-px bg-white/15" aria-hidden="true" />
          <div className="relative flex justify-between">
            {YEARS.map((y, i) => (
              <button
                key={y.year}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-3 group"
              >
                <span
                  className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    i === active
                      ? "bg-[#0B60B0] border-[#0B60B0]"
                      : "bg-black border-white/30 group-hover:border-[#40A2D8]"
                  }`}
                >
                  {i === active && <span className="h-2 w-2 rounded-full bg-white" />}
                </span>
                <span
                  className={`text-xs sm:text-sm transition-colors duration-300 ${
                    i === active ? "text-white font-bold" : "text-white/40"
                  }`}
                >
                  {y.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
