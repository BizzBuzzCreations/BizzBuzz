// Left: heading + intro copy. Right: an expandable steps list. Generic —
// pass title/description/steps so every service page can reuse this exact
// structure with its own real process.
export default function BpoProcess({ title, description, steps = [] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
          {title}
        </h2>
        <p className="text-white/70 leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className="divide-y divide-white/10">
        {steps.map((step, i) => (
          <details key={step.title} className="group py-5" open={i === 0}>
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
              <span className="font-bold text-[#40A2D8] group-open:text-white transition-colors duration-300">
                {step.title}
              </span>
              <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-open:rotate-180 group-open:bg-[#0B60B0]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <p className="text-white/60 text-sm leading-relaxed mt-3">
              {step.body}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
