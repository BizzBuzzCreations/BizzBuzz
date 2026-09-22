import Link from "next/link";

const ARROW_PATH =
  "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z";

function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d={ARROW_PATH} />
    </svg>
  );
}

// The home hero's CTA button ("Learn Our Story" / the arrow-slide +
// expanding-circle hover effect, driven by the .animated-button rules in
// app/globals.css) — reused everywhere else on the site a button wants
// that same effect, instead of each place hand-rolling its own hover
// treatment.
//
// `variant`: "white" (default) is the hero's own colors — a white ring
// that fills white on hover with the text/icons turning dark — meant for
// a dark or colorful background. "blue" is the same mechanic recolored
// for a light/white background (brand-blue ring/fill, white text on
// hover) — see .animated-button-blue.
// `size`: "sm" for a compact in-card/in-row button (default is the
// hero's own larger padding), "lg" for an even bigger hover-fill (only
// the home hero itself currently needs that).
export default function AnimatedButton({
  href,
  external,
  onClick,
  type = "button",
  variant = "white",
  size,
  className = "",
  children,
}) {
  const classes = [
    "animated-button",
    variant === "blue" ? "animated-button-blue" : "",
    size === "sm" ? "animated-button-sm" : "",
    size === "lg" ? "animated-button-lg" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const button = (
    <button type={href ? undefined : type} onClick={onClick} className={classes}>
      <ArrowIcon className="arr-2" />
      <span className="text">{children}</span>
      <span className="circle" />
      <ArrowIcon className="arr-1" />
    </button>
  );

  if (!href) return button;

  return (
    <Link
      href={href}
      className="inline-block"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {button}
    </Link>
  );
}
