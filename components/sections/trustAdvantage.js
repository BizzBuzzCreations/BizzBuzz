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
  },
  {
    icon: Search,
    title: "Future-Focused SEO",
    desc: "We optimize for traditional search, AI search, and voice assistants — all at once.",
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    desc: "SEO, paid ads, content, social, and web design — everything under one roof.",
  },
  {
    icon: HeartHandshake,
    title: "Honest Partnerships",
    desc: "No inflated promises, just clear strategy, consistent effort, and steady growth.",
  },
  {
    icon: Headset,
    title: "Dedicated Account Support",
    desc: "You get a real team that knows your brand, not a ticket number.",
  },
  {
    icon: TrendingUp,
    title: "Growing Client Base",
    desc: "50+ businesses across India already trust us with their growth.",
  },
];

const RING_COLOR = ["#2563eb", "#9ca3af"]; // blue, gray — alternating
const DIAMETER = 230; // wider than the grid column so neighbors overlap naturally
const INNER = 166;

export default function TrustAdvantage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop: overlapping connected ring chain */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 mb-6" style={{ height: DIAMETER }}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative flex items-center justify-center"
                style={{ zIndex: i + 1 }}
              >
                <div
                  className="flex items-center justify-center rounded-full border-10 bg-white"
                  style={{
                    width: DIAMETER,
                    height: DIAMETER,
                    borderColor: RING_COLOR[i % 2],
                  }}
                >
                  <div
                    className="flex items-center justify-center rounded-full bg-slate-800"
                    style={{ width: INNER, height: INNER }}
                  >
                    <Icon className="text-white" size={30} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-6">
          {items.map((item) => (
            <div key={item.title} className="text-center px-2">
              <h3 className="font-bold text-base mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile / tablet fallback: simple stacked cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 border border-black rounded-xl bg-white shadow-md"
            >
              <div
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-8 bg-white"
                style={{ borderColor: RING_COLOR[i % 2] }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                  <Icon className="text-white" size={18} />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
