import React from "react";
import Image from "next/image";
import Link from "next/link";
import RichText from "@/components/ui/richText";

export default function HomeAbout({ content }) {
  const eyebrow = content?.aboutEyebrow || "About Us";
  const heading = content?.aboutHeading || "We Are BizzBuzz Creations";
  const paragraph =
    content?.aboutParagraph ||
    "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence. We understand that every business has different goals, audiences, and challenges, so we focus on practical solutions rather than one-size-fits-all marketing. Our expertise covers SEO, local SEO, Google Ads, social media marketing, website development, content marketing, AI solutions, and marketing automation. From improving search visibility and generating qualified leads to building better websites and streamlining business processes, we bring multiple digital capabilities under one team. Our goal is simple: help businesses reach the right audience, create meaningful opportunities, and build a digital presence that supports long-term growth.";
  const buttonText = content?.aboutButtonText || "Learn More";
  const backgroundImage = content?.aboutBackgroundImage || "/bbc-building.png";

  const button = (
    <Link href="/about" aria-label="Learn more about BizzBuzz Creations" className="inline-block">
      <button className="animated-button animated-button-lg whitespace-nowrap">
        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="text">{buttonText}</span>
        <span className="circle"></span>
        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </Link>
  );

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Desktop/tablet only. The gradient and the photo are drawn as
          plain siblings sized to the SAME container (not two independent
          CSS background layers — that's what broke the fade earlier: a
          gradient's `background-size: contain` just fills the whole
          positioning area since gradients have no intrinsic size, so it
          never actually matched the photo's own contain-computed box).
          The image box is now full-bleed to the right edge of the
          viewport (`flex-1`, no right padding/max-width, no rounded
          corners on that edge) instead of sitting in a padded, capped
          column with black space to its right — only the text column on
          the left keeps its own padding. */}
      <div className="hidden md:flex relative min-h-[620px] lg:min-h-[700px] items-stretch">
        <div className="relative z-10 flex items-center max-w-2xl shrink-0 pl-12 lg:pl-24 pr-10">
          <div>
            <p className="text-white/60">{eyebrow}</p>
            <h2 className="text-4xl font-bold mb-4 text-[#40A2D8]">{heading}</h2>
            <RichText as="p" text={paragraph} className="max-w-xl mb-6 text-white/80" />
            {button}
          </div>
        </div>

        <div className="relative flex-1">
          {/* New front-on, symmetric shot of the building — the BBC/
              BizzBuzz signage sits centered rather than off to one side,
              so this goes back to plain center cropping (no left/right
              position nudging needed like the previous angled photo). */}
          <Image
            src={backgroundImage}
            alt="BizzBuzz Creations office"
            fill
            sizes="60vw"
            className="object-cover"
          />
          {/* Left-edge fade, smoothed into many more stops instead of a
              few big jumps — the old 4-stop version read as a flat block
              of black with a visible "edge" where it cut off into the
              photo. This eases through gradually (roughly matching an
              ease-out curve) and finishes later, at 52%, so the
              black-to-photo transition looks like a natural falloff
              rather than a hard wall. No right-side fade needed — this
              shot doesn't have a neighbouring building crowding that
              edge like the previous photo did. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(0,0,0,0.98) 6%, rgba(0,0,0,0.94) 12%, rgba(0,0,0,0.85) 18%, rgba(0,0,0,0.7) 24%, rgba(0,0,0,0.52) 30%, rgba(0,0,0,0.35) 36%, rgba(0,0,0,0.2) 42%, rgba(0,0,0,0.09) 47%, rgba(0,0,0,0) 52%)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Mobile only — plain stacked layout: heading, paragraph, button.
          No photo here — the building photo is desktop-only now (it was
          a boxed block between the heading and paragraph before, by
          request removed for mobile so only the heading and paragraph
          carry the section). */}
      <div className="md:hidden px-6 py-16 text-center">
        <p className="text-white/60">{eyebrow}</p>
        <h2 className="text-3xl font-bold mb-6 text-[#40A2D8]">{heading}</h2>
        <RichText as="p" text={paragraph} className="max-w-lg mx-auto mb-6 text-white/80" />
        {button}
      </div>
    </section>
  );
}
