import {
  Award,
  Search,
  Layers,
  HeartHandshake,
  Headset,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "90+ projects delivered across India with real, measurable business outcomes.",
    color: "#334155", // slate-700
  },
  {
    icon: Search,
    title: "Future-Focused SEO",
    desc: "We optimize for traditional search, AI search, and voice assistants — all at once.",
    color: "#1e40af", // blue-800
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    desc: "SEO, paid ads, content, social, and web design — everything under one roof.",
    color: "#2563eb", // blue-600
  },
  {
    icon: HeartHandshake,
    title: "Honest Partnerships",
    desc: "No inflated promises, just clear strategy, consistent effort, and steady growth.",
    color: "#0284c7", // sky-600
  },
  {
    icon: Headset,
    title: "Dedicated Account Support",
    desc: "You get a real team that knows your brand, not a ticket number.",
    color: "#0ea5e9", // sky-500
  },
  {
    icon: TrendingUp,
    title: "Growing Client Base",
    desc: "50+ businesses across India already trust us with their growth.",
    color: "#06b6d4", // cyan-500
  },
];

export default function TrustAdvantage() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-14">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="h-full flex flex-col items-center">
            <div
              className="z-10 -mb-12 flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[6px] bg-white shadow-md"
              style={{ borderColor: item.color }}
            >
              <Icon size={30} style={{ color: item.color }} />
            </div>
            <div
              className="w-full flex-1 rounded-2xl pt-16 pb-6 px-4 text-center shadow-md"
              style={{ backgroundColor: item.color }}
            >
              <h3 className="text-white font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
