import Image from "next/image";
import Link from "next/link";

// Real BizzBuzz team photo (same asset used elsewhere on the site), not a
// stock/placeholder image — paired with a dark gradient backdrop.
export default function TeamHero() {
  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-24 text-white"
      style={{
        background:
          "linear-gradient(120deg, #050b16 0%, #0B60B0 30%, #050b16 75%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight max-w-2xl">
          Meet the People Behind{" "}
          <span className="text-[#8fd0f2]">BizzBuzz Creations</span>
        </h1>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative w-full aspect-[16/8] sm:aspect-[16/6]">
            <Image
              src="/teamPic.webp"
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 45%)",
              }}
            />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <p className="text-sm sm:text-base text-white/85 max-w-xl leading-relaxed">
              We&rsquo;re not just running a company — we&rsquo;re a
              hands-on team of strategists, marketers, designers, and
              developers working out of Prayagraj, India and London, UK,
              focused on outcomes over output.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center shrink-0 bg-white hover:bg-gray-100 text-black text-sm font-semibold px-6 py-3 rounded-full transition w-fit"
            >
              Consult Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
