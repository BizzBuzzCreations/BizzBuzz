// "We are:" numbered two-column list. Generic — pass title/description
// and up to 6 points so every service page can reuse this structure with
// its own real content (no invented stats — reuse facts already stated
// elsewhere on that page).
export default function BpoWeAre({ title, description, points = [] }) {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-white/70 leading-relaxed max-w-3xl mb-8">
        {description}
      </p>
      <p className="font-semibold text-white mb-8">We are:</p>

      <div className="grid sm:grid-cols-2 gap-x-12">
        {points.map(({ number, title: pointTitle, description: pointDescription }, i) => (
          <div
            key={number}
            className={`py-6 ${i < 2 ? "border-t-0" : "border-t border-white/15"} ${
              i % 2 === 1 ? "sm:mt-16" : ""
            }`}
          >
            <span className="text-xs font-bold text-[#40A2D8] tracking-widest">
              {number}
            </span>
            <h3 className="font-bold text-white mt-2 mb-2">{pointTitle}</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {pointDescription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
