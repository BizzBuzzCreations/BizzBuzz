import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

// Same data as the navbar's dropdowns — duplicated here (rather than
// imported from navbar.js, which is a client component with its own
// unrelated state) so the footer always lists the same pages.
// Capped to 5 per column (full lists live on the navbar / respective
// pages) — "View More" sends people to see the rest.
const CATEGORY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Core Team", href: "/our-team" },
  { label: "How We Work and Function", href: "/how-we-work" },
  { label: "Start Your Career with Us", href: "/career" },
  { label: "FAQ", href: "/faq" },
];

const SERVICE_LINKS = [
  { label: "BPO Service", href: "/bpo-services" },
  { label: "Website Development", href: "/web-development" },
  { label: "Search Engine Optimization (SEO)", href: "/search-engine-optimization" },
  { label: "Social Media Marketing (SMM)", href: "/social-media-marketing" },
  { label: "Google Ads & Paid Marketing", href: "/paid-marketing" },
];

// First 5 of the full 21-industry list (same set the navbar's mega-menu
// and the homepage's Industries showcase use) — "View More" sends people
// to the full scrolling showcase instead of listing all 21 here.
const INDUSTRY_LINKS = [
  { label: "Healthcare", href: "/industries/healthcare" },
  { label: "Wearables", href: "/industries/wearables" },
  { label: "Fitness", href: "/industries/fitness" },
  { label: "On-Demand", href: "/industries/on-demand" },
  { label: "ECommerce", href: "/industries/ecommerce" },
];

const RESOURCE_LINKS = [
  { label: "Blogs", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "Press Release", href: "/press-release" },
];

// Emoji flags (🇮🇳/🇬🇧) render as plain two-letter codes on systems whose
// font has no color-flag glyphs (common on Windows) — drawn as small
// inline SVGs instead so the badge looks the same everywhere.
function IndiaFlag() {
  return (
    <svg viewBox="0 0 60 40" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="13.3" fill="#FF9933" />
      <rect width="60" height="13.4" y="13.3" fill="#FFFFFF" />
      <rect width="60" height="13.3" y="26.7" fill="#138808" />
      <circle cx="30" cy="20" r="5" fill="none" stroke="#000080" strokeWidth="1" />
      <circle cx="30" cy="20" r="1" fill="#000080" />
    </svg>
  );
}

function UKFlag() {
  return (
    <svg viewBox="0 0 60 36" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="60" height="36" fill="#00247D" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#FFFFFF" strokeWidth="7" />
      <path d="M0,0 L60,36 M60,0 L0,36" stroke="#CF142B" strokeWidth="2.5" />
      <path d="M30,0 V36 M0,18 H60" stroke="#FFFFFF" strokeWidth="11" />
      <path d="M30,0 V36 M0,18 H60" stroke="#CF142B" strokeWidth="6.5" />
    </svg>
  );
}

const OFFICES = [
  {
    Flag: IndiaFlag,
    country: "India",
    address: (
      <>
        43/33, Tej Bahdur Sapru Rd,
        <br />
        Agnipath Colony, Civil Lines,
        <br />
        Prayagraj, Uttar Pradesh 211001
      </>
    ),
  },
  {
    Flag: UKFlag,
    country: "United Kingdom",
    address: (
      <>
        3 Thornham St,
        <br />
        London SE10 9SA
      </>
    ),
  },
];

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/bizzbuzzcreations",
    path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bizzbuzzcreation/",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/bizzbuzzcreation",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@bizzbuzzcreations",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/bizz-buzz-creations",
    viewBox: "0 0 16 16",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
  },
];

function FooterColumn({ title, links, viewMoreHref }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 hover:text-[#40A2D8] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {viewMoreHref && (
        <Link
          href={viewMoreHref}
          className="inline-flex items-center gap-1 text-sm text-[#40A2D8] hover:text-white mt-4 underline underline-offset-4 transition-colors"
        >
          View More
          <ArrowUpRight size={14} />
        </Link>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8 px-6 md:px-8"
      style={{
        background: "linear-gradient(180deg, #000000 0%, #000000 70%, #0B60B0 130%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Brand + social row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="max-w-md">
            <Image
              src="/bbc-new-logo.png"
              alt="BizzBuzz Creations logo"
              width={220}
              height={67}
              className="mb-4 h-10 w-auto"
            />
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Digital marketing, branding, and BPO solutions built for
              business growth.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-[#40A2D8] hover:bg-white/5 transition-colors"
                >
                  <svg
                    role="img"
                    viewBox={social.viewBox || "0 0 24 24"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="w-4 h-4"
                  >
                    <title>{social.name}</title>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Real certifications/partnerships — same verified badges used
              in the homepage's Recognitions section, not invented ones. */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
              <Image
                src="/clutch.png"
                alt="Clutch — Verified Partner"
                width={32}
                height={32}
                className="object-contain shrink-0"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">Clutch</p>
                <p className="text-[11px] text-gray-400">Verified Partner</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
              <Image
                src="/CDL.png"
                alt="Certified Google Ads & Marketing Partner"
                width={32}
                height={32}
                className="object-contain shrink-0"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-white">Google Partner</p>
                <p className="text-[11px] text-gray-400">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office address cards — only 2 offices, so sized generously
            (rather than cramped like a 6-card grid would be) to still
            read as a deliberate, presentable layout. */}
        <div className="grid sm:grid-cols-2 max-w-3xl gap-6 mb-12">
          {OFFICES.map(({ Flag, country, address }) => (
            <div
              key={country}
              className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 hover:border-[#40A2D8]/50 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-1 ring-white/20">
                  <Flag />
                </span>
                <span className="font-semibold text-white text-base">
                  {country}
                </span>
              </div>
              <p className="text-sm text-[#8fd0f2] leading-relaxed flex gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[#40A2D8]" />
                <span>{address}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mb-12" />

        {/* Link columns + CTA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 items-start">
          <FooterColumn title="Our Category" links={CATEGORY_LINKS} viewMoreHref="/about" />
          <FooterColumn title="Services" links={SERVICE_LINKS} viewMoreHref="/#services" />
          <FooterColumn title="Industries" links={INDUSTRY_LINKS} viewMoreHref="/#industries" />
          <div>
            <FooterColumn title="Resources" links={RESOURCE_LINKS} />
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black text-sm font-semibold rounded-full px-6 py-3 w-fit transition"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                href="/privacy-policy"
                className="text-xs text-gray-300 hover:text-gray-200"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-xs text-gray-300">
              © {new Date().getFullYear()}, BizzBuzz Creations. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
