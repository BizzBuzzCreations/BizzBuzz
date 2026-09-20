"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import RichText from "@/components/ui/richText";

// "A Decade of Digital Excellence" style timeline, scoped to BizzBuzz's
// actual span (2022–2026). Copy here is deliberately general — it reuses
// only facts already established elsewhere on the site (90+ projects,
// 50+ clients, 20+ industries, real Clutch/Google certifications) rather
// than inventing precise per-year numbers, award names, or hiring counts
// that aren't verified.
const DEFAULT_YEARS = [
  {
    year: "2022",
    title: "Building the Foundation",
    body: "We began our journey with a focus on digital marketing, creative branding, and online business growth, helping brands establish a stronger and more meaningful digital presence.",
    img: "/team-images/team-2.jpeg",
  },
  {
    year: "2023",
    title: "Expanding Digital Expertise",
    body: "We continued developing our expertise in SEO, social media marketing, content marketing, website solutions, and digital branding to create stronger online experiences for growing businesses.",
    img: "/image-5.webp",
  },
  {
    year: "2024",
    title: "Strengthening Our Approach",
    body: "Our focus evolved toward result-driven digital marketing strategies, combining SEO, content, social media, branding, and web solutions to help businesses build visibility and connect with their audiences.",
    img: "/team-images/team-13.jpeg",
  },
  {
    year: "2025",
    title: "Growing Digital Possibilities",
    body: "We continued refining our digital marketing and SEO strategies, focusing on stronger brand visibility, engaging content, effective online campaigns, and sustainable digital growth across different business needs.",
    img: "/image-6.jpg",
  },
  {
    year: "2026",
    title: "Where We Are Today",
    body: "Today, we continue building smarter digital marketing, SEO, branding, content, social media, and web strategies, helping businesses strengthen their online presence and grow with confidence.",
    img: "/team-images/team-5.jpeg",
  },
];

const SLIDE_DURATION = 2800;

export default function OurJourney({ content }) {
  const [active, setActive] = useState(0);
  const heading = content?.journeyHeading || "Our Journey So Far";
  const YEARS = content?.journeyYears?.length > 0 ? content.journeyYears : DEFAULT_YEARS;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % YEARS.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [YEARS.length]);

  useEffect(() => {
    if (active >= YEARS.length) setActive(0);
  }, [YEARS.length, active]);

  const current = YEARS[active] || YEARS[0];

  return (
    <section className="bg-black py-20 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-16">
          {heading}
        </h2>

        {/* Year showcase */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12 min-h-[260px] sm:min-h-[240px]">
          {/* Rotated photo — bigger */}
          <div className="relative shrink-0 w-[260px] sm:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl -rotate-6">
            <Image
              key={current.img}
              src={current.img}
              alt={current.title || "BizzBuzz Creations"}
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
              <RichText as="p" text={current.body} className="text-base text-white/60 leading-relaxed" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-3 h-px bg-white/15" aria-hidden="true" />
          <div className="relative flex justify-between">
            {YEARS.map((y, i) => (
              <button
                key={i}
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
