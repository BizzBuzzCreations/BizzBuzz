import Image from "next/image";
import Link from "next/link";

// Full-bleed photo hero — same layout language as reference agency sites
// (large background photo, dotted texture overlay, dark-to-transparent
// gradient so the headline stays legible on the left). Uses the same
// /bpo.jpg photo already in the repo; no new image, no changed copy.
export default function BpoHero({ heading, description, img }) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden -mt-14 md:-mt-[72px] pt-36 md:pt-44 pb-20 px-6 md:px-12 lg:px-24">
      <Image
        src={img}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dotted texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
        aria-hidden="true"
      />

      {/* Gradient — dark/legible on the left, image visible on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,11,22,0.94) 0%, rgba(11,96,176,0.85) 42%, rgba(11,96,176,0.25) 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h1>
        <p className="text-white/80 leading-relaxed mb-9 max-w-xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-7 py-3.5 rounded-full transition"
          >
            Start Now
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
