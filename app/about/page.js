import ClientLogo from "@/components/sections/clientLogo";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import CTA2 from "@/components/sections/CTA-2";
import Reviews from "@/components/sections/reviews";
import React from "react";

export default function About() {
  return (
    <>
      <div
        className="container  py-40 max-w-7xl mx-auto"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #fff 30%, #000 100%)",
        }}
      >
        <h1 className="text-center text-transparent about-sec text-5xl sm:text-6xl md:text-7xl font-serif font-bold uppercase animate-text bg-[url('/StoryBlocks_903844.jpg')] bg-contain bg-clip-text opacity-80">
          INNOVATE AND INTEGRATE EVERYDAY
        </h1>
      </div>
      <CTA2/>
      <ClientLogo/>
      <Reviews/>
      <Counter/>
      <CTA/>
    </>
  );
}
