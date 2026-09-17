import Link from "next/link";
import RichText from "@/components/ui/richText";

// Horizontal cards — icon left, content right, solid blue gradient card
// with a small decorative outline icon in the top-right corner that moves
// on hover (same flourish as ServiceCard.js), and a color-swap hover on
// the whole card. Generic: pass your own title + items so every service
// page can reuse this exact structure with its own real content. Pass an
// `href` on an item to make that card a link to its own dedicated page
// (used on the Website Development hub to point at each of the 6
// individual service pages); cards without one stay plain, non-clickable
// divs exactly as before.
export default function BpoServicesGrid({
  title = "What We Handle",
  subheading,
  items = [],
}) {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-white">
        {title}
      </h2>
      {subheading && (
        <RichText as="p" text={subheading} className="text-white/60 text-center max-w-2xl mx-auto mt-3 mb-10" />
      )}
      {!subheading && <div className="mb-10" />}
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map(({ icon: Icon, heading, description, href }) => {
          const Wrapper = href ? Link : "div";
          const wrapperProps = href ? { href } : {};
          return (
          <Wrapper
            key={heading}
            {...wrapperProps}
            className="group relative flex gap-4 overflow-hidden rounded-2xl p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            style={{ background: "linear-gradient(155deg, #1a5da3 0%, #0B2F52 60%, #08152b 100%)" }}
          >

            {/* Hover color swap — crossfades to a brighter blue */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "linear-gradient(155deg, #40A2D8 0%, #0B60B0 60%, #08152b 100%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
              <Icon size={26} />
            </div>
            <div className="relative z-10 min-w-0">
              <h3 className="mb-2 font-bold text-white leading-snug">
                {heading}
              </h3>
              {/* noLink when href is set — that makes the whole card a
                  <Link>, so a link inside the description would nest an
                  <a> inside an <a> (invalid HTML that breaks the outer
                  one). Cards without an href aren't links themselves, so
                  a description link there is completely safe. */}
              <RichText
                as="p"
                text={description}
                noLink={Boolean(href)}
                className="text-sm text-white/70 leading-relaxed"
              />
              {href && (
                <span className="inline-block mt-3 text-sm font-semibold text-[#40A2D8] group-hover:text-white transition-colors duration-300">
                  Learn more →
                </span>
              )}
            </div>
            {/* Same corner-icon flourish used on the service pages'
                ServiceCard component */}
            <Icon
              size={18}
              className="absolute z-10 top-5 right-5 text-white/25 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
              aria-hidden="true"
            />
          </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
