"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import { SpiralAnimation } from "@/components/ui/spiral-animation";

const reveal = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

// Module-scoped (not React state, not sessionStorage): stays true across
// client-side route changes within the same page load, but resets to false
// on every real navigation/reload — exactly the "once per site visit" rule
// we want, since sessionStorage/localStorage would survive a reload too.
let introHasPlayed = false;

// A handful of real Bizzbuzz clients (same roster used in the LogoSlider
// section further down the page) for the corner trust-carousel.
const featuredClients = [
  { img: "/avondale-1.png", text: "Avondale Finance" },
  { img: "/fibernet.png", text: "Fibernet" },
  { img: "/WILLIAM.png", text: "William" },
  { img: "/PARIVARTAN1.png", text: "Parivartan" },
  { img: "/GRAND WEDDINZ1.png", text: "Grand WeddinZ" },
];

export default function HomeHero() {
  const [introDone, setIntroDone] = useState(introHasPlayed);
  const [showOverlay, setShowOverlay] = useState(!introHasPlayed);

  const handleIntroComplete = () => {
    introHasPlayed = true;
    setIntroDone(true);
  };

  return (
    <>
      {showOverlay && (
        <div
          className={`fixed inset-0 z-100 bg-black transition-opacity duration-700 ease-out ${
            introDone ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onTransitionEnd={() => introDone && setShowOverlay(false)}
        >
          <SpiralAnimation duration={2.4} onComplete={handleIntroComplete} />
        </div>
      )}

      <div className="relative overflow-hidden min-h-[90vh] text-white flex flex-col justify-center pb-30 -mt-14 pt-14 md:-mt-[72px] md:pt-[72px]">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero (1).webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Sequence 01 1.mp4" type="video/mp4" />
        </video>

        {/* Dark scrim so text stays readable over any video/image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 20% 10%, rgba(120, 180, 255, 0.25), transparent 70%), linear-gradient(to right, rgba(0,0,0,0.88) 35%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div className="relative z-10 2xl:px-20 px-5 md:pt-20 pt-24 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={reveal}
            className="md:text-3xl xl:text-4xl text-xl font-bold mb-4"
          >
            India&rsquo;s Trusted Digital Marketing Agency
          </motion.h1>
          <motion.svg
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ ...reveal, delay: 0.15 }}
            className={introDone ? "animated-text" : ""}
            viewBox="0 0 1320 220"
          >
            <text x="0" y="50%" dy=".35em" textAnchor="start">
              BizzBuzz Creations
            </text>
          </motion.svg>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ ...reveal, delay: 0.3 }}
            className="max-w-xl mb-10"
          >
            Looking for a trusted digital marketing agency in Prayagraj that
            helps your business generate more leads, increase website
            traffic, and grow revenue? Welcome to BizzBuzz Creations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={introDone ? { opacity: 1, y: 0 } : {}}
            transition={{ ...reveal, delay: 0.45 }}
          >
            <Link href="/contact" className="inline-block">
              <button className="animated-button">
                <svg
                  viewBox="0 0 24 24"
                  className="arr-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Get Free Consultation</span>
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
          </motion.div>
        </div>

        {/* Bottom-right corner trust carousel — real Bizzbuzz clients */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={introDone ? { opacity: 1, y: 0 } : {}}
          transition={{ ...reveal, delay: 0.6 }}
          className="absolute z-10 hidden md:block bottom-28 right-10 w-fit max-w-[280px]"
        >
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2 pl-1">
            Trusted By
          </p>
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              autoWidth: true,
              gap: "1rem",
              arrows: false,
              pagination: false,
              drag: false,
              autoScroll: {
                speed: 0.6,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {featuredClients.map((client) => (
              <SplideSlide key={client.text}>
                <div className="inline-flex items-center gap-3 bg-black/60 backdrop-blur border border-white/10 rounded-xl px-4 py-3">
                  <Image
                    src={client.img}
                    alt={client.text}
                    width={36}
                    height={36}
                    className="object-contain shrink-0"
                  />
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {client.text}
                  </span>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </div>
    </>
  );
}
