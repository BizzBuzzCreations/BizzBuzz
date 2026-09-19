import React from "react";
import Image from "next/image";
import RichText from "@/components/ui/richText";

const DEFAULT_FEATURES = [
  { title: "Transparent Reporting", description: "Know exactly where your marketing budget is invested with detailed reports and actionable insights." },
  { title: "Dedicated Marketing Experts", description: "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors." },
  { title: "Data-Driven Decision Making", description: "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions." },
  { title: "Long-Term Partnership", description: "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth." },
];

// `dark` is opt-in — homepage keeps the original light theme, only pages
// that pass dark (About) get the black-background version.
export default function WhyChooseUs({ dark = false, content }) {
  const heading = content?.whyChooseHeading || "Why Businesses Continue Working With Us";
  // Was "/why-choose-image.png", a file that doesn't exist in /public —
  // rendered as a permanently broken image icon. Swapped for a real,
  // already-used photo.
  const image = content?.whyChooseImage || "/team-images/team-5.webp";
  const features =
    content?.whyChooseFeatures?.length > 0 ? content.whyChooseFeatures : DEFAULT_FEATURES;

  const imageEl = <Image src={image} alt="banner" width={400} height={400} />;

  const headingEl = (
    <h2 className={`text-3xl md:text-4xl font-bold mb-10 max-w-2xl ${dark ? "text-white" : ""}`}>
      {heading}
    </h2>
  );

  const cardsEl = (
    <div className="flex flex-wrap justify-content items-center max-w-2xl gap-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className={`group max-w-xs p-5 rounded-lg mx-auto border shadow-md transition-all duration-300 hover:-translate-y-1 ${
            dark
              ? "bg-white/5 border-white/10 shadow-black/40 hover:bg-[#0B60B0] hover:border-[#0B60B0]"
              : "bg-gray-200 border-gray-300 shadow-gray-400 hover:bg-[#0B60B0] hover:border-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
          }`}
        >
          <h3 className={`font-bold mb-2 transition-colors duration-300 group-hover:text-white ${dark ? "text-white" : ""}`}>
            {feature.title}
          </h3>
          <RichText
            as="p"
            text={feature.description}
            className={`text-sm transition-colors duration-300 group-hover:text-white/80 ${dark ? "text-white/60" : ""}`}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className={`px-5 ${dark ? "bg-black py-20" : "mb-20"}`}>
      {/* Mobile: heading, then the image, then the cards — stacked in
          that order (was image-and-text as two side-by-side flex items,
          which on a single mobile column put the image ahead of the
          heading instead of under it). */}
      <div className="md:hidden max-w-md mx-auto text-center">
        {headingEl}
        <div className="flex justify-center mb-8">{imageEl}</div>
        {cardsEl}
      </div>

      {/* Desktop/tablet: original image-left, heading+cards-right layout,
          unchanged. */}
      <div className="hidden md:flex mx-10 flex-wrap justify-center gap-10 items-center mx-auto">
        {imageEl}
        <div className="text-left">
          {headingEl}
          {cardsEl}
        </div>
      </div>
    </div>
  );
}
