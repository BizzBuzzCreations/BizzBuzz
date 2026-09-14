import Link from "next/link";
import Image from "next/image";
import RichText from "@/components/ui/richText";

// Real team photo as a full-bleed backdrop, with the same dark
// gradient laid over it so the copy stays readable — same treatment
// already used on the career page hero.
export default function TeamHero({ content } = {}) {
  const heading = content?.teamHeroHeading || "The Humans Behind the Hustle";
  const subheading =
    content?.teamHeroSubheading || "Strategy. Creativity. Technology. One Team.";
  const paragraph =
    content?.teamHeroParagraph ||
    "Meet the marketers, strategists, designers, developers, and digital specialists behind BizzBuzz Creations. Our team brings together diverse expertise to build smarter digital strategies and meaningful growth for businesses across Prayagraj, India, and worldwide.";
  const ctaText = content?.teamHeroCtaText || "Meet the Team";
  const heroImage = content?.teamHeroImage || "/team-images/team-hero.png";

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-10 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 lg:px-24 text-white">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(5,11,22,0.92) 0%, rgba(11,96,176,0.75) 30%, rgba(5,11,22,0.92) 75%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight max-w-2xl">
          {heading}
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-[#8fd0f2] mb-8">
          {subheading}
        </h2>

        <div className="flex flex-col gap-6">
          <RichText as="p" text={paragraph} className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed" />
          <Link href="#meet-our-team" className="inline-block w-fit">
            <button className="animated-button animated-button-lg whitespace-nowrap">
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
