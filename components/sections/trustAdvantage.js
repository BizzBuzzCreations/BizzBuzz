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

const NODE_Y = [40, 120, 40, 120, 40, 120];
const NODE_X = [50, 150, 250, 350, 450, 550];
const PATH = NODE_X.map((x, i) => `${i === 0 ? "M" : "L"}${x},${NODE_Y[i]}`).join(" ");

export default function TrustAdvantage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop: zig-zag connected roadmap */}
      <div className="hidden lg:block">
        <div className="relative h-40 mb-8">
          <svg
            viewBox="0 0 600 160"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d={PATH}
              fill="none"
              stroke="#bfdbfe"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={PATH}
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="14 10"
              vectorEffect="non-scaling-stroke"
              className="animate-dash-flow"
            />
          </svg>
          <div className="absolute inset-0 grid grid-cols-6">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex justify-center">
                  <div
                    style={{ marginTop: NODE_Y[i] - 32 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg ring-4 ring-blue-100"
                  >
                    <Icon size={28} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={item.title} className="text-center px-1">
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
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col items-center text-center p-6 border border-black rounded-xl bg-white shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg ring-4 ring-blue-100">
                <Icon size={26} />
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
