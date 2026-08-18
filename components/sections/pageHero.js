// Generic dark hero — reused across the smaller "About" sub-pages (Our
// Team, How We Work, Portfolio, Testimonials, CSR, Awards) instead of a
// bespoke hero per page, so they all open consistently with the rest of
// the site's dark sections.
export default function PageHero({ label, title, subtitle }) {
  return (
    <section
      className="pt-24 md:pt-28 pb-16 md:pb-20 px-6 text-center text-white"
      style={{ background: "radial-gradient(circle at top, #1c1c1c, #000000)" }}
    >
      {label && (
        <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-4">
          {label}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </section>
  );
}
