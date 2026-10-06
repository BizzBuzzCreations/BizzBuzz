"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneCall, CalendarCheck, UserRoundCheck, Gauge } from "lucide-react";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";

// Standalone copy of AiShowcase for pages (the UK landing page) whose own AI
// section carries different, page-specific copy. Clio AI (our voice sales agent) — features taken from its product docs
// (clio.praxistence.com/docs) rather than invented claims.
const FEATURES = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    description:
      "Handle inbound and outbound calls end to end, from greeting the caller to qualifying the lead.",
  },
  {
    icon: CalendarCheck,
    title: "Meetings Booked Automatically",
    description:
      "Book meetings straight into Google Calendar and send follow-up emails through Gmail.",
  },
  {
    icon: UserRoundCheck,
    title: "Smart Human Handoff",
    description:
      "Escalate to your team the moment a conversation needs a human touch.",
  },
  {
    icon: Gauge,
    title: "Live Cost & Team Control",
    description:
      "See what every call costs in real time and manage your team with role-based access.",
  },
];

export default function ClioShowcase({ content }) {
  const heading = content?.clioHeadingMain || "Meet Clio AI, Your AI Voice Agent";
  const paragraph =
    content?.clioParagraph ||
    "Clio AI is our intelligent voice agent that answers and makes sales calls for your business. It qualifies leads, books meetings, and hands over to your team when a human is needed, all in natural conversation.";
  // /aiservice.webp doesn't exist in /public — was a broken poster
  // reference (silently masked before by the video always loading fast
  // enough to cover it up); using an existing, on-brand AI photo instead.
  const posterImage = content?.clioPosterImage || "/AI solutions 2.webp";
  const videoSrc = content?.clioVideo || "/ai-vid.webm";
  const buttonLink = content?.clioButtonLink || "https://clio.praxistence.com/";
  const buttonText = content?.clioButtonText || "Explore Clio AI";

  // Icon stays fixed (structural); title + description come from the
  // saved override, matched by position.
  const features = FEATURES.map((feature, i) => {
    const override = content?.clioFeatures?.[i];
    return override ? { ...feature, ...override } : feature;
  });

  // This video is a large (~33MB), uncompressed source file. Loading it
  // unconditionally on every homepage visit — even for people who never
  // scroll this far — was a major contributor to the site feeling slow to
  // load. The poster image (already in place) covers the section
  // perfectly well on its own; the actual <source> (and therefore the
  // download) is only attached once the section scrolls near the
  // viewport, via IntersectionObserver, with a 400px rootMargin so it has
  // a head start before it's actually visible.
  const videoWrapRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const el = videoWrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setShouldLoadVideo(true), 0);
      return () => clearTimeout(t);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr]">
        {/* Mobile order is heading, then video, then the copy — so the heading
            is its own grid cell instead of living inside the content column.
            On lg the three cells go back to video-left, heading + copy-right. */}
        <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-2 px-8 sm:px-12 lg:px-16 pt-8 sm:pt-12 lg:pt-16 pb-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            {heading}
          </h2>
        </div>

        {/* Video side — order-1 (with lg:order-none to fall back to plain
            DOM order once the 2-column desktop layout kicks in) makes sure
            it renders above the text content on mobile explicitly, rather
            than relying only on JSX order. */}
        <div
          ref={videoWrapRef}
          className="relative order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-4 min-h-[420px] lg:min-h-[640px]"
        >
          {shouldLoadVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={posterImage}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} />
              <source src="/Sequence 01 1.mp4" type="video/mp4" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element -- this
            // section already ships the poster as a plain background
            // ahead of the (much heavier) video; no next/image benefit
            // here since it's swapped out immediately once observed.
            <img
              src={posterImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/40 lg:to-black/10" />
        </div>

        {/* Content side */}
        <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-3 px-8 sm:px-12 lg:px-16 pt-6 pb-8 sm:pb-12 lg:pt-0 lg:pb-16 flex flex-col gap-6 text-white">

          <RichText as="p" text={paragraph} className="text-white max-w-xl" />

          {/* 2x2 on every screen below lg (was sm:grid-cols-2, so phones
              narrower than 640px fell back to 1 card per row). */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3 sm:mb-4 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-white leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <AnimatedButton href={buttonLink} external size="sm">
              {buttonText}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
