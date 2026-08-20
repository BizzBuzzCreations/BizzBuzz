import Image from "next/image";

// Same content as the shared WhyChooseUs.js, restyled dark. Generic —
// every dark-themed service page reuses this same company-wide "why
// choose us" pitch (it isn't service-specific content), so the cards
// default here rather than needing to be passed on every page.
const DEFAULT_CARDS = [
  {
    title: "Transparent Reporting",
    desc: "Know exactly where your marketing budget is invested with detailed reports and actionable insights.",
  },
  {
    title: "Dedicated Marketing Experts",
    desc: "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors.",
  },
  {
    title: "Data-Driven Decision Making",
    desc: "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.",
  },
];

export default function BpoWhyChooseDark({ cards = DEFAULT_CARDS }) {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap justify-center gap-10 items-center px-5 max-w-6xl mx-auto">
        <div className="relative w-[280px] sm:w-[340px] shrink-0 rounded-2xl overflow-hidden">
          <Image
            src="/why-choose-image.png"
            alt="banner"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        <div className="lg:text-left text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-2xl text-white">
            Why Businesses Continue Working With Us
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start items-stretch max-w-2xl gap-4">
            {cards.map(({ title, desc }) => (
              <div
                key={title}
                className="group max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 mx-auto transition-colors duration-300 hover:bg-[#0B60B0] hover:border-[#0B60B0]"
              >
                <h3 className="font-bold mb-2 text-white">{title}</h3>
                <p className="text-sm text-white/60 transition-colors duration-300 group-hover:text-white/90">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
