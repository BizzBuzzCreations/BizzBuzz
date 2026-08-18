import Link from "next/link";
import {
  Target,
  Sparkles,
  TrendingUp,
  Globe,
  Headset,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const STAGES = [
  {
    icon: Target,
    title: "Own the Market",
    description:
      "Already have visibility? We sharpen it further with data-backed SEO and paid strategies built to outpace local competitors.",
  },
  {
    icon: Sparkles,
    title: "Brand as You Build",
    description:
      "Starting from scratch? We build your digital identity — website, social presence, and messaging — so you launch strong.",
  },
  {
    icon: TrendingUp,
    title: "The Growth Pivot",
    description:
      "Hit a plateau? We ignite the marketing engine needed to turn steady business into a dominant local presence.",
  },
  {
    icon: Globe,
    title: "Web Presence That Converts",
    description:
      "Need a site that actually sells? We design and build fast, SEO-ready websites engineered to turn visitors into leads.",
  },
  {
    icon: Headset,
    title: "Round-the-Clock Support",
    description:
      "Can't keep up with customer queries? Our BPO team handles calls and chats so you never miss a lead.",
  },
  {
    icon: BarChart3,
    title: "Smarter With Data",
    description:
      "Guessing what works? We track, measure, and optimize every campaign so your budget goes where it performs best.",
  },
];

export default function MarketingCTA() {
  return (
    <section className="w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Left — dark blue panel */}
        <div
          className="relative p-10 sm:p-14 lg:p-20 text-white flex flex-col justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(150deg, #050d1c 0%, #0B60B0 75%, #40A2D8 130%)",
          }}
        >
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl"
            style={{ background: "rgba(64,162,216,0.35)" }}
          />
          <div className="relative">   
            <p className="text-xs font-bold uppercase tracking-widest text-[#8fd0f2] mb-4">
              BizzBuzz Creations
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Get Groundbreaking
              <br />
              Marketing Services
            </h2>
            <p className="text-white/70 mb-10 max-w-md leading-relaxed">
              Leverage our marketing expertise to turn your business into a
              market-leading brand. No matter where you are in your growth
              journey, we have a specialized solution for you:
            </p>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#0B60B0] hover:text-white text-[#0B60B0] text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 self-start w-fit shadow-lg"
            >
              Explore Our Services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right — 3 stage cards */}
        <div className="flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-3 flex-1 bg-[#eaf4fb]">
            {STAGES.map(({ icon: Icon, title, description }, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              // Mobile stacks everything in one column, so every card but
              // the first gets a top divider. At sm+ it's a 3x2 grid: only
              // the second row picks the top divider back up, and only
              // non-first-in-row columns get a left divider.
              const borderTop =
                i === 0 ? "" : row === 0 ? "border-t sm:border-t-0" : "border-t sm:border-t";
              const borderLeft = col === 0 ? "" : "sm:border-l";

              return (
                <div
                  key={title}
                  className={`group p-6 sm:p-8 border-black ${borderTop} ${borderLeft} transition-colors duration-300 hover:bg-white`}
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#0B60B0] mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2.5">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
