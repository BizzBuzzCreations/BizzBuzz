import Image from "next/image";

// Zig-zag culture section — real BizzBuzz facts and real office/team
// photos already used elsewhere on the site (career page, homepage
// shuffle grid), not stock photography or another company's people/awards.
const ROWS = [
  {
    title: "We Build With Real Ownership",
    body: "BizzBuzz Creations runs on flat hierarchies, clear communication, and real ownership — you're not waiting on five layers of sign-off to get things done. Good ideas win regardless of title, and every account runs like an extension of the client's own team.",
    img: "/image-2.jpg",
    alt: "The BizzBuzz Creations team working in the office",
    imageSide: "right",
    imageSize: "large",
  },
  {
    title: "We Work As One Team",
    body: "We're a growing agency working out of Prayagraj, India and London, UK — and it shows in how we work. No walled-off departments, no siloed specialists; strategy, design, and execution happen together, in the same room.",
    img: "/image-4.webp",
    alt: "The BizzBuzz Creations team celebrating together",
    imageSide: "left",
    imageSize: "small",
  },
  {
    title: "We Grow Together",
    body: "Everyone works on real client campaigns from day one, learns from a hands-on team, and takes on as much responsibility as they're ready for. We're always looking for people who want to level up their own skills, not just tick boxes on someone else's roadmap.",
    img: "/teamPic.webp",
    alt: "The BizzBuzz Creations team",
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
      <p className="text-white/70 leading-relaxed">{body}</p>
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

export default function AboutCulture() {
  return (
    <section className="bg-black py-20 px-5">
      <div className="max-w-6xl mx-auto space-y-10">
        {ROWS.map((row) => (
          <div key={row.title} className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            {row.imageSide === "left" ? (
              <>
                <Photo img={row.img} alt={row.alt} size={row.imageSize} />
                <TextPanel title={row.title} body={row.body} />
              </>
            ) : (
              <>
                <TextPanel title={row.title} body={row.body} />
                <Photo img={row.img} alt={row.alt} size={row.imageSize} />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
