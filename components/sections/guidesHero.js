import Link from "next/link";
import RichText from "@/components/ui/richText";

// Full-bleed photo hero (same treatment as the FAQ/Services/Industries/How
// We Work heroes): the image is already designed with a dark-to-photo
// gradient built in, laid down as a plain background with a matching
// black overlay, text sitting in the solid-black portion on the left.
// Replaces the previous coded gradient + two conic-gradient blobs.
export default function GuidesHero({ content } = {}) {
  const heading = content?.guidesHeroHeading || "Digital Marketing Guides & Resources";
  const paragraph =
    content?.guidesHeroParagraph ||
    "Practical, no-fluff guides and insights on SEO, paid ads, social media, websites, content, AI, and digital growth.";
  const primaryCtaText = content?.guidesHeroPrimaryCtaText || "Explore Our Guides";
  const secondaryCtaText = content?.guidesHeroSecondaryCtaText || "Need Help With Marketing?";
  const heroImage = content?.guidesHeroImage || "/guide.jpg";

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center py-24 md:py-28 px-5 md:px-10 lg:px-16 text-white bg-black">
      {/* Full-bleed background — desktop/tablet only. On mobile this used
          to cover the entire hero behind the heading/paragraph/buttons,
          making the text hard to read against a busy photo; mobile now
          gets a plain dark background instead, with its own boxed copy of
          the same image placed between the paragraph and the buttons
          (same treatment as the industries/services/BPO hero sections). */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url('${heroImage}')`,
          // "contain" left ugly black bars down the sides on most real
          // viewports (this section's min-h-screen height rarely matches
          // the image's own ratio exactly). Back to "cover" — edge to
          // edge, no bars — but anchored to the right edge instead of
          // centered: the graphic's subject (globe, "GUIDE" text, gear
          // icons) all sit in the right two-thirds of the source photo,
          // so pinning the crop to the right keeps all of that on screen
          // and only ever trims the plain blurred bokeh on the left.
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, #000000 0%, #000000 38%, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Mobile background — plain, no photo, so the section reads as a
          simple dark hero rather than a busy image with nothing readable
          behind the text once the full-bleed photo above is hidden. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "radial-gradient(circle at top, #1c1c1c, #000000)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          {heading}
        </h1>
        <RichText as="p" text={paragraph} className="text-white/80 max-w-xl mb-8 leading-relaxed" />
        <div className="md:hidden relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${heroImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#all-guides" className="inline-block">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{primaryCtaText}</span>
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
          <Link href="/contact" className="inline-block">
            <button className="animated-button animated-button-lg whitespace-nowrap">
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">{secondaryCtaText}</span>
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
