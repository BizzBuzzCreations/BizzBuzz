// FAQ page hero — same full-bleed-photo treatment as HomeAbout's building
// shot: the question-mark graphic spans the whole section as a background
// image, fading from solid black (behind the text) into the photo on the
// right. Dark-theme version of that pattern (black fade instead of white).
export default function FaqHero() {
  return (
    <section className="relative overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[560px] flex items-center bg-black">
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/question-mark.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Fades from solid black (behind the text, left) into the photo
          (right) — no dot texture. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #000000 0%, #000000 42%, rgba(0,0,0,0.82) 58%, rgba(0,0,0,0.3) 82%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative w-full px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-xl">
          <h1 className="text-white leading-[1.05]">
            <span className="block text-4xl sm:text-5xl md:text-6xl font-light">
              Frequently Asked
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl font-bold">
              Questions
            </span>
          </h1>
          <p className="mt-6 text-white/60 max-w-lg leading-relaxed">
            Choosing a growth partner raises a lot of questions, and that's
            fair. This page offers clear, transparent answers to business
            questions around BizzBuzz Creations' services, process,
            pricing, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
