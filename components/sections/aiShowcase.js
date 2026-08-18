import Link from "next/link";
import { Bot, Sparkles, Radar, ArrowUpRight, Check } from "lucide-react";

// Real categories from the /ai-solutions service page — kept consistent
// with what BizzBuzz Creations actually offers instead of inventing claims.
const FEATURES = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    points: ["Lead qualification", "24/7 customer support"],
  },
  {
    icon: Sparkles,
    title: "Content & Automation",
    points: ["Generative content engines", "Workflow automation"],
  },
  {
    icon: Radar,
    title: "GEO Optimization",
    points: ["AI search visibility", "ChatGPT & Perplexity citations"],
  },
];

export default function AiShowcase() {
  return (
    <section className="bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Video side */}
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/aiservice.webp"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 55%, 8% 50%, 0 45%)",
            }}
          >
            <source src="/Sequence 01 1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/40 lg:to-black/10" />
        </div>

        {/* Content side */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center gap-6 text-white">
          <p className="text-2xl font-bold">
            BizzBuzz<span className="italic font-light text-[#40A2D8]">AI</span>
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span className="block font-normal text-white/80">
              Building AI Systems
            </span>
            That Actually Grow Your Business
          </h2>

          <p className="text-white/60 max-w-xl">
            <strong className="text-white">BizzBuzzAI</strong> is our dedicated
            AI practice, helping businesses move beyond the hype into
            practical, revenue-generating AI implementation — from custom
            chatbots to automated workflows and generative content engines.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURES.map(({ icon: Icon, title, points }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-[#40A2D8]">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold mb-3">{title}</h3>
                <ul className="space-y-2">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <Check size={14} className="text-[#40A2D8] mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-full transition"
            >
              Book Your AI Advisory Session
            </Link>
            <Link
              href="/ai-solutions"
              className="inline-flex items-center justify-center gap-1.5 bg-white text-black hover:bg-white/90 text-sm font-semibold px-6 py-3 rounded-full transition"
            >
              Discover BizzBuzzAI
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
