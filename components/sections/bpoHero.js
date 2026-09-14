import Image from "next/image";
import Link from "next/link";

// Full-bleed photo hero — same layout language as reference agency sites
// (large background photo, dark-to-transparent gradient so the headline
// stays legible on the left). Uses the same /bpo.jpg photo already in
// the repo; no new image, no changed copy.
//
// On mobile, the full-bleed background version is hidden entirely
// (`hidden md:block` below) — same reasoning as the industry pages' hero:
// at narrow widths the photo mostly just sat dimmed behind the gradient
// with the text stacked over it, hard to make out. Instead, mobile gets
// its own boxed copy of the same image as a plain in-flow block between
// the paragraph and the CTA button (`md:hidden` further down).
// min-h-[85vh]/-mt/pt-36 only kick in from md up now — that combo existed
// to pull the hero under the sticky navbar so the full-bleed photo could
// bleed up behind it, plus a tall forced height so the photo had room to
// breathe. Mobile no longer shows that photo (see the boxed copy below
// instead), so there's nothing to bleed under the nav for and no reason to
// reserve 85vh — it was just leaving a large empty gap between the nav and
// the heading. Mobile now gets a plain, modest pt-10 with no negative
// margin or forced height.
export default function BpoHero({ heading, description, img, ctaText = "Start Now" }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-10 md:-mt-[72px] md:pt-44 pb-12 md:pb-20 px-6 md:px-12 lg:px-24">
      <div className="hidden md:block">
        <Image
          src={img}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
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
      </div>
      {/* Mobile background — plain, no photo, so the section reads as a
          simple dark hero rather than an empty gradient with nothing
          behind it once the full-bleed photo above is hidden. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "radial-gradient(circle at top, #0d1b2e, #000000)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-2xl">
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          {heading}
        </h1>
        <p className="text-white/80 leading-relaxed mb-9 max-w-xl">
          {description}
        </p>
        <div className="md:hidden relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-9">
          <Image src={img} alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="flex flex-wrap gap-4">
          {/* whitespace-nowrap only from sm up — on mobile a long CTA
              like "Get a Free Business Consulting Session" forced this
              button (and, since nothing here constrained its width, the
              entire hero section) wider than the viewport, cutting the
              heading/paragraph/button off at the screen edge instead of
              wrapping. Letting it wrap on narrow screens fixes that. */}
          <Link href="/contact" className="inline-block max-w-full">
            <button className="animated-button animated-button-lg whitespace-normal text-center sm:whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{ctaText}</span>
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
        </div>
      </div>
    </section>
  );
}
