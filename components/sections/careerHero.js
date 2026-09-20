"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/ui/richText";

// Real BizzBuzz office/team photos (same assets already used elsewhere on
// the site) auto-advancing behind the hero text, instead of one static
// background image.
const DEFAULT_SLIDES = [
  "/team-images/team-5.jpeg",
  "/team-images/team-13.jpeg",
  "/team-images/team-8.jpeg",
  "/team-images/team-2.jpeg",
];

const SLIDE_DURATION = 4500;

export default function CareerHero({ content } = {}) {
  const heading = content?.careerHeroHeading || "Work Where Your Ideas Matter";
  const subheading = content?.careerHeroSubheading || "Learn by Doing. Grow by Owning.";
  const paragraph =
    content?.careerHeroParagraph ||
    "At BizzBuzz Creations, we believe great work comes from trust, ownership, and collaboration. Our flat structure means fewer layers, faster decisions, and more room to turn your ideas into real outcomes.";
  const ctaText = content?.careerHeroCtaText || "Apply Now";
  const slidesRaw = content?.careerHeroSlides?.length > 0 ? content.careerHeroSlides : null;
  const SLIDES = slidesRaw ? slidesRaw.map((s) => s.image) : DEFAULT_SLIDES;

  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [SLIDES.length]);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-10 md:pt-20">
      {SLIDES.map((src, i) => (
        <div
          // Index, not src — slides can (and now do, by request) repeat the
          // same image, and a duplicate key across siblings is what React
          // was warning about ("two children with the same key, /image-7.jpg").
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,11,22,0.92) 0%, rgba(5,11,22,0.75) 45%, rgba(5,11,22,0.35) 75%, rgba(5,11,22,0.15) 100%)",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
        </p>
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          {heading}
        </h1>
        <h2 className="text-white/90 text-lg sm:text-xl font-semibold mb-4">
          {subheading}
        </h2>
        <RichText as="p" text={paragraph} className="text-white/70 max-w-lg leading-relaxed mb-8" />
        <Link href="/contact" className="inline-block">
          <button className="animated-button animated-button-lg whitespace-nowrap">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">{ctaText}</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-6 md:left-12 lg:left-24 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
