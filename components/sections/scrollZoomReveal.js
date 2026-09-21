"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Users, Briefcase, ArrowRight } from "lucide-react";
import Particles from "@/components/ui/Particles";

// Quick-link buttons for the right panel, and the "Who We Are" blurb for
// the left panel — real destinations already on the site, not filler.
const QUICK_LINKS = [
  { icon: Briefcase, label: "Our Services", href: "/services" },
  { icon: Users, label: "Meet The Team", href: "/our-team" },
  { icon: Search, label: "How We Work", href: "/how-we-work" },
];

// Scroll-pinned zoom-text transition — sits between "Powered by What We
// Build" (CaseStudies) and the rest of the homepage. The outer wrapper is
// tall enough to give a generous amount of scroll distance to animate
// through (was only 5vh of pinned scroll — the whole zoom played out in
// one quick wheel-flick, reading as "appears and vanishes instantly"
// instead of an actual slow-motion effect; now there's real distance for
// it to play out over); the inner panel is `sticky top-0 h-screen`, so it
// stays pinned filling the viewport while the user scrolls past it, and
// the text scales up purely as a function of how far they've scrolled.
// The pin releases right as the zoom finishes, so the next section
// scrolls straight in on top of it with no dead gap in between.
export default function ScrollZoomReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slow build then a fast rush — but critically, the growth now finishes
  // by 40% of the scroll, the same point the headline hits opacity 0
  // below. Previously scale kept climbing all the way to 22x, and blur
  // kept climbing too, clear through to 100% of scroll — meaning that
  // whole back half of the scroll was spent continuously recomputing and
  // repainting a massive (up to ~22x), GPU-heavy blurred layer that was
  // fully invisible (opacity 0) the entire time. That's exactly what was
  // reading as the stats content "gradually disappearing": the browser
  // straining to composite that invisible layer every frame was dragging
  // the whole frame's brightness/render down along with it. Once scale
  // and blur stop changing (clamped after 0.4, same as opacity), there's
  // nothing left animating in that invisible layer for the rest of the
  // scroll, so the stats block renders clean and undisturbed.
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 4, 10]);
  // Hidden at the very top of the section, fades in as the user scrolls
  // (growing at the same time via `scale` above), then fades back out
  // early — by 40% of the scroll — so the remaining 60% of this (now
  // longer, 400vh) container is free for the stats block below to sit
  // fully visible and static for a good long stretch, instead of only
  // flashing on right before the pin releases.
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.4], [0, 1, 1, 0]);

  // Side panels + stats block now share this ONE opacity value instead of
  // each running on its own separate timeline. They used to be staggered
  // (panels visible early then fading out by 30%, stats fading in later
  // around 35-45%) which made it possible for the two to independently
  // drift out of sync — panels reading as "gone"/non-interactive at
  // exactly the moment the stats content was on screen. Sharing one
  // value means they always appear and stay together: fades in right as
  // the headline fades out (0.3-0.4), then holds at full opacity with no
  // further keyframe all the way to the end — nothing left to make it
  // (or the panel buttons) fade or stop responding to clicks afterward.
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    // Skipped entirely on mobile (`hidden md:block`) — the WhatsApp-sized
    // 400vh scroll-jack + particle canvas reads as a lot of empty
    // scrolling on a small screen, so this section is desktop/tablet only.
    <div ref={containerRef} className="relative h-[400vh] bg-black hidden md:block">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Same moving-particle backdrop used behind the contact form. */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Particles
            particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
            particleCount={220}
            particleSpread={14}
            speed={0.08}
            particleBaseSize={110}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Corner glow — soft ambient light, not the focal content. */}
        <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#0B60B0]/25 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-[#40A2D8]/20 blur-3xl pointer-events-none" aria-hidden="true" />

        {/* Right panel — quick-link buttons, stacked. Hidden below lg since
            there isn't room next to the centered heading on narrower
            screens without the two colliding. */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden lg:flex absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 flex-col gap-3 w-56"
        >
          {QUICK_LINKS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:text-white"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-[#40A2D8] transition-colors duration-300 group-hover:bg-white group-hover:text-[#0B60B0]">
                <Icon size={15} />
              </span>
              {label}
              <ArrowRight size={14} className="ml-auto opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
            </Link>
          ))}
        </motion.div>

        {/* Left panel — heading + short blurb. Same lg-and-up visibility
            as the right panel. */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="hidden lg:block absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 w-72 text-left"
        >
          <h3 className="text-lg font-bold text-white mb-3">Who We Are</h3>
          <p className="text-sm text-white/60 leading-relaxed mb-5">
            BizzBuzz Creations is a digital marketing and business solutions
            agency helping businesses in Prayagraj (Allahabad), across India,
            and international markets build a stronger digital presence. We
            understand that every business has different goals, audiences,
            and challenges, so we focus on practical solutions rather than
            one-size-fits-all marketing.
          </p>
          <Link href="/about" className="inline-block">
            <button className="animated-button whitespace-nowrap">
              <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Learn Our Story</span>
              <span className="circle"></span>
              <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </Link>
        </motion.div>

        {/* Center — the zooming headline: hidden at scroll position zero,
            fading in and growing together as the user scrolls, then
            fading back out right as it finishes zooming past frame. */}
        <div className="relative flex flex-col items-center text-center px-6">
          <motion.p
            style={{ opacity: contentOpacity }}
            className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3 lg:hidden"
          >
            Who We Are
          </motion.p>

          <motion.div
            style={{ scale, opacity: textOpacity }}
            className="relative will-change-transform pointer-events-none"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 leading-tight whitespace-nowrap">
              Know More
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#40A2D8] leading-tight whitespace-nowrap">
              About Us
            </h2>
          </motion.div>

          {/* A CSS `scale()` transform enlarges an element's actual
              hit-testing area along with its visual size, not just how it
              looks — so once this headline scaled up (to 4x-10x), its
              invisible bounding box was silently covering a huge portion
              of the screen, including the left/right panels, and
              swallowing every click aimed at them even though nothing was
              visible there. `pointer-events-none` above stops it from
              ever intercepting clicks, fixing the panel buttons.

              This block sits in the exact same centered spot, absolutely
              positioned so it doesn't push into the headline's own layout
              flow — fades in together with the side panels (both on
              `contentOpacity` now) right as the headline finishes fading
              out, then holds there, static, for the rest of the scroll. */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 sm:gap-10 pointer-events-none"
          >
            <div className="flex items-center gap-8 sm:gap-14">
              {[
                { value: "90+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "20+", label: "Industries Served" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl sm:text-4xl font-bold text-[#40A2D8]">{value}</p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mt-1 whitespace-nowrap">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm sm:text-base text-white/70 max-w-md text-center px-4">
              One team, every capability — built to help your business grow.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
