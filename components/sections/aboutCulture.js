import Image from "next/image";
import RichText from "@/components/ui/richText";

// Zig-zag culture section — real BizzBuzz facts and real office/team
// photos already used elsewhere on the site (career page, homepage
// shuffle grid), not stock photography or another company's people/awards.
const DEFAULT_ROWS = [
  {
    title: "We Build With Real Ownership",
    body: "At BizzBuzz Creations, clear communication and accountability drive everything we do. Our digital marketing team in Prayagraj takes ownership from strategy to execution, turning ideas into marketing that creates real business impact.",
    img: "/team-images/team-13.jpeg",
    imageSide: "right",
    imageSize: "large",
  },
  {
    title: "We Work As One Team",
    body: "Our teams work together across strategy, design, technology, SEO, and digital marketing. Based in Prayagraj, India, with an international outlook, we bring different skills together to build smarter digital solutions for businesses.",
    img: "/team-images/team-12.jpeg",
    imageSide: "left",
    imageSize: "small",
  },
  {
    title: "We Grow Together",
    body: "We believe great work comes from continuous learning and shared growth. Our team works on real campaigns, explores new digital strategies, and keeps developing the skills needed to deliver better marketing results for businesses in India and worldwide.",
    img: "/team-images/team-7.jpeg",
    imageSide: "right",
    imageSize: "small",
  },
];

function TextPanel({ title, body }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0]/10 hover:shadow-xl hover:shadow-black/40">
      <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300 group-hover:text-[#40A2D8]">
        {title}
      </h3>
      <RichText as="p" text={body} className="text-white/70 leading-relaxed" />
    </div>
  );
}

function Photo({ img, alt, size }) {
  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl ${
        size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
      }`}
    >
      <Image src={img} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function AboutCulture({ content }) {
  // imageSide/imageSize control layout, not content — kept in code and
  // matched positionally to whichever rows are saved.
  const LAYOUT = [
    { imageSide: "right", imageSize: "large" },
    { imageSide: "left", imageSize: "small" },
    { imageSide: "right", imageSize: "small" },
  ];
  const savedRows = content?.cultureRows?.length > 0 ? content.cultureRows : DEFAULT_ROWS;
  const ROWS = savedRows.map((row, i) => ({ ...row, ...LAYOUT[i % LAYOUT.length] }));

  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* order-1/order-2 (reset via lg:order-none) puts the photo above
            the text panel on mobile for every row, regardless of
            imageSide — imageSide only controls left/right placement once
            the 2-column desktop layout kicks in. Previously, whichever
            element came first in the JSX for a given imageSide (text, for
            "right" rows) also came first on a single-column mobile
            screen, so 2 of the 3 rows showed text before photo. */}
        {ROWS.map((row, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {row.imageSide === "left" ? (
              <>
                <div className="order-1 lg:order-none">
                  <Photo img={row.img} alt={row.title} size={row.imageSize} />
                </div>
                <div className="order-2 lg:order-none">
                  <TextPanel title={row.title} body={row.body} />
                </div>
              </>
            ) : (
              <>
                <div className="order-2 lg:order-none">
                  <TextPanel title={row.title} body={row.body} />
                </div>
                <div className="order-1 lg:order-none">
                  <Photo img={row.img} alt={row.title} size={row.imageSize} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
