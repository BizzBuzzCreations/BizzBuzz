import Link from "next/link";
import {
  Search,
  Globe,
  Share2,
  MonitorSmartphone,
  Sparkles,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import Particles from "@/components/ui/Particles";
import RichText from "@/components/ui/richText";

// Icons and hrefs stay code-driven (design/routing), matched positionally
// to whichever cards are saved.
const STAGE_LAYOUT = [
  { icon: Search, href: "/search-engine-optimization" },
  { icon: Globe, href: "/services" },
  { icon: Share2, href: "/social-media-marketing" },
  { icon: MonitorSmartphone, href: "/web-development" },
  { icon: Sparkles, href: "/business-consultancy" },
  { icon: BarChart3, href: "/industries" },
];

const DEFAULT_TRUST_LINES = [
  { text: "Trusted by growing businesses across Prayagraj, India, and the UK — no long-term lock-in, just a team focused on measurable results." },
  { text: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs." },
  { text: "Transparent reporting and clear communication, so you always know exactly what's happening and why." },
];

const DEFAULT_STAGES = [
  { title: "Get Found on Google", description: "Boost visibility and attract the right audience with smarter SEO.", ctaText: "Explore SEO Services" },
  { title: "Own Your Digital Space", description: "Build a stronger online presence with strategies made for growth.", ctaText: "Explore Digital Marketing Services" },
  { title: "Make Social Work Harder", description: "Turn attention and engagement into meaningful business growth.", ctaText: "Explore Social Media Marketing" },
  { title: "Build a Website That Sells", description: "Create a website that engages visitors and drives conversions.", ctaText: "Explore Web Development Services" },
  { title: "Make Your Brand Stand Out", description: "Build a memorable identity that makes your business impossible to ignore.", ctaText: "Explore Branding Services" },
  { title: "See Growth in Action", description: "Explore our work, strategies, and results for growing businesses.", ctaText: "View Our Industries" },
];

export default function MarketingCTA({ content }) {
  const eyebrow = content?.marketingCtaEyebrow || "BizzBuzz Creations";
  const heading = content?.marketingCtaHeading || "Let’s Put Your Brand on the Map";
  const paragraph =
    content?.marketingCtaParagraph ||
    "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward.";
  const buttonText = content?.marketingCtaButtonText || "Get Free Consultation Now";
  const trustLinesRaw = content?.marketingCtaTrustLines?.length > 0 ? content.marketingCtaTrustLines : DEFAULT_TRUST_LINES;
  const trustLines = trustLinesRaw.map((t) => t.text);
  const backgroundImage = content?.marketingCtaBackgroundImage || "/building.jpg";
  const stagesEyebrow = content?.stagesEyebrow || "Wherever You Are, We Have a Path";
  const stagesRaw = content?.stages?.length > 0 ? content.stages : DEFAULT_STAGES;
  const STAGES = stagesRaw.map((s, i) => ({ ...s, ...STAGE_LAYOUT[i % STAGE_LAYOUT.length] }));

  return (
    <section className="w-full overflow-hidden bg-black">
      <div className="grid lg:grid-cols-2 items-stretch">
        {/* Left — dark blue panel */}
        <div
          className="relative p-10 sm:p-14 lg:p-20 text-white flex flex-col justify-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(150deg, rgba(5,13,28,0.94) 0%, rgba(11,96,176,0.9) 75%, rgba(64,162,216,0.85) 130%), url('${backgroundImage}')`,
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
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {heading}
            </h2>
            <RichText as="p" text={paragraph} className="text-white/70 mb-10 max-w-md leading-relaxed" />
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-white hover:bg-black text-[#0B60B0] text-sm font-semibold px-6 py-3.5 rounded-full transition-colors duration-300 self-start w-fit shadow-lg mb-12"
            >
              {buttonText}
              <ArrowUpRight size={16} />
            </Link>

            <div className="flex flex-col gap-4 max-w-sm pt-8 border-t border-white/15">
              {trustLines.map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ShieldCheck size={18} className="text-[#8fd0f2] shrink-0 mt-0.5" />
                  <RichText as="p" text={line} className="text-sm text-white/70 leading-relaxed" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — 3x2 stage cards, dark glass-card grid */}
        <div className="relative flex flex-col justify-center bg-[#050505] p-6 sm:p-10 lg:p-12 overflow-hidden">
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
            {stagesEyebrow}
          </p>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STAGES.map(({ icon: Icon, title, description, ctaText, href }) => (
              <Link
                key={title}
                href={href}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:bg-black hover:shadow-xl hover:shadow-[#0B60B0]/20"
              >
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={19} />
                </div>
                <h3 className="font-bold text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <RichText
                  as="p"
                  text={description}
                  className="text-sm text-white/60 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-white/85"
                />
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#40A2D8] transition-colors duration-300 group-hover:text-white">
                  {ctaText}
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
