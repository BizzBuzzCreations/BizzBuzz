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
import Particles from "@/components/ui/Particles";

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

const TRUST_STATS = [
  { value: "90+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "20+", label: "Industries Served" },
];

export default function MarketingCTA() {
  return (
    <section className="w-full overflow-hidden bg-black">
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Left — dark blue panel */}
        <div
          className="relative p-10 sm:p-14 lg:p-20 text-white flex flex-col justify-center overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(150deg, rgba(5,13,28,0.94) 0%, rgba(11,96,176,0.9) 75%, rgba(64,162,216,0.85) 130%), url('/building.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
              className="inline-flex items-center gap-2 bg-white hover:bg-[#0B60B0] hover:text-white text-[#0B60B0] text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 self-start w-fit shadow-lg mb-12"
            >
              Explore Our Services
              <ArrowUpRight size={16} />
            </Link>

            {/* Real numbers, not vanity metrics — same figures used
                elsewhere on the site — for extra credibility right where
                the pitch is made. */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-white/15">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — 3x2 stage cards, dark glass-card grid */}
        <div className="relative flex flex-col justify-center bg-[#050505] p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, #0B60B0, transparent 70%)" }}
            aria-hidden="true"
          />
          {/* Same particle backdrop as the rest of the page — cards sit
              semi-transparent on top so it shows through subtly. */}
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <Particles
              particleColors={["#40A2D8", "#0B60B0", "#8fd0f2", "#ffffff"]}
              particleCount={150}
              particleSpread={14}
              speed={0.08}
              particleBaseSize={100}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
          <p className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-6">
            Wherever You Are, We Have a Path
          </p>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STAGES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={19} />
                </div>
                <h3 className="font-bold text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
