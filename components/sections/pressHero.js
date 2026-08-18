import Link from "next/link";

// Colorful gradient hero (blue → purple, diagonal light streaks) instead
// of the site's usual plain black hero — a press/news page reads better
// with a bit more visual energy up top.
export default function PressHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 px-6 text-center text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #050b16 0%, #0B60B0 35%, #4c2f91 65%, #050b16 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "conic-gradient(from 200deg at 70% 15%, transparent, rgba(64,162,216,0.55), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "conic-gradient(from 20deg at 20% 90%, transparent, rgba(124,58,237,0.5), transparent 35%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          BizzBuzz Creations in News
        </h1>
        <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Stay updated with our most recent announcements, certifications,
          and milestones — see how BizzBuzz Creations is growing across
          India and the UK.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-white hover:bg-gray-100 text-black text-sm font-semibold px-7 py-3.5 rounded-lg transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
