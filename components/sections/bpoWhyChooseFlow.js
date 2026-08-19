import Image from "next/image";
import { ArrowDown, ArrowUp, ArrowLeft } from "lucide-react";

// Same content as the shared WhyChooseUs section, restyled as a connected
// flow: the illustration feeds into the top box, then the four cards chain
// together (top-right -> bottom-right -> bottom-left -> top-left) instead
// of sitting in a plain unconnected grid. BPO-page-only — the shared
// WhyChooseUs.js component used on the other 9 pages is untouched.
const CARDS = {
  topLeft: {
    heading: "Transparent Reporting",
    desc: "Know exactly where your marketing budget is invested with detailed reports and actionable insights.",
  },
  topRight: {
    heading: "Dedicated Marketing Experts",
    desc: "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors.",
  },
  bottomRight: {
    heading: "Long-Term Partnership",
    desc: "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.",
  },
  bottomLeft: {
    heading: "Data-Driven Decision Making",
    desc: "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.",
  },
};

function Card({ heading, desc }) {
  return (
    <div className="w-full sm:w-64 bg-gray-100 p-5 rounded-2xl border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#0B60B0]/40 hover:shadow-xl">
      <h3 className="font-bold mb-2 text-gray-900">{heading}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function BpoWhyChooseFlow() {
  return (
    <div className="px-5 mb-20 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Why Businesses Continue Working With Us
      </h2>

      {/* Illustration feeding into the flow */}
      <div className="relative w-56 sm:w-64 mx-auto rounded-2xl overflow-hidden mb-2">
        <Image
          src="/why-choose-image.png"
          alt="banner"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <ArrowDown className="mx-auto mb-6 text-[#0B60B0]" size={22} />

      {/* Desktop: connected 2x2 loop */}
      <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] items-center gap-x-4 max-w-2xl mx-auto">
        <Card {...CARDS.topLeft} />
        <div />
        <Card {...CARDS.topRight} />

        <ArrowUp className="mx-auto text-[#0B60B0]" size={20} />
        <div />
        <ArrowDown className="mx-auto text-[#0B60B0]" size={20} />

        <Card {...CARDS.bottomLeft} />
        <ArrowLeft className="mx-auto text-[#0B60B0]" size={20} />
        <Card {...CARDS.bottomRight} />
      </div>

      {/* Mobile: simple stacked chain */}
      <div className="flex sm:hidden flex-col items-center gap-2">
        <Card {...CARDS.topRight} />
        <ArrowDown className="text-[#0B60B0]" size={18} />
        <Card {...CARDS.bottomRight} />
        <ArrowDown className="text-[#0B60B0]" size={18} />
        <Card {...CARDS.bottomLeft} />
        <ArrowDown className="text-[#0B60B0]" size={18} />
        <Card {...CARDS.topLeft} />
      </div>
    </div>
  );
}
