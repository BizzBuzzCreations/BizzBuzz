import { Rocket, Users, Star, Clock } from "lucide-react";

const stats = [
  { icon: Rocket, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "10,000+", label: "Leads Generated" },
  { icon: Star, value: "4.9", label: "Google Rating" },
  { icon: Clock, value: "3+", label: "Years Experience" },
];

// Floating trust-badge strip shown right under the hero, so visitors see
// credibility signals before they even scroll. The bigger gradient Counter
// section further down repeats these numbers at higher visual weight.
export default function TrustBar() {
  return (
    <div className="relative z-10 -mt-10 md:-mt-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 py-6 px-4 text-center"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0B60B0]/10 text-[#0B60B0]">
              <Icon size={20} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-xs md:text-sm text-gray-600">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
