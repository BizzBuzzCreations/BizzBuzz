"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Plus,
  Phone,
  Stethoscope,
  Watch,
  Dumbbell,
  LayoutGrid,
  ShoppingCart,
  HardHat,
  Landmark,
  PiggyBank,
  Film,
  GraduationCap,
  CalendarDays,
  Factory,
  Zap,
  Tv,
  UtensilsCrossed,
  Plane,
  Home as HomeIcon,
  Newspaper,
  ThumbsUp,
  PlaneTakeoff,
  HeartHandshake,
} from "lucide-react";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Core Team", href: "/our-team" },
  { label: "How We Work and Function", href: "/how-we-work" },
  { label: "Start Your Career with Us", href: "/career" },
  { label: "FAQ", href: "/faq" },
];

const SERVICE_LINKS = [
  { label: "BPO Service", href: "/bpo-services" },
  { label: "Website Development", href: "/web-development" },
  {
    label: "Search Engine Optimization (SEO)",
    href: "/search-engine-optimization",
  },
  { label: "Social Media Marketing (SMM)", href: "/social-media-marketing" },
  { label: "Google Ads & Paid Marketing", href: "/paid-marketing" },
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    // No dedicated sub-pages exist yet for these individually — all four
    // route to the main AI Solutions page until/unless standalone pages
    // are built for each.
    subItems: [
      { label: "Custom AI Agents & Chatbots", href: "/ai-solutions" },
      { label: "AI Content & Generative Engines", href: "/ai-solutions" },
      { label: "Workflow & Process Automation", href: "/ai-solutions" },
      { label: "GEO (Generative Engine Optimization)", href: "/ai-solutions" },
    ],
  },
  {
    label: "Marketing Automation",
    href: "/marketing-automation",
    // Same as above — all four route to the main Marketing Automation
    // page for now.
    subItems: [
      { label: "CRM Marketing Automation", href: "/marketing-automation" },
      { label: "Email Marketing Automation", href: "/marketing-automation" },
      { label: "WhatsApp Marketing Automation", href: "/marketing-automation" },
      { label: "Lead Nurturing Automation", href: "/marketing-automation" },
    ],
  },
  { label: "Business Consultancy", href: "/business-consultancy" },
];

const INDUSTRY_COLUMNS = [
  [
    { label: "Healthcare", href: "/industries/healthcare", icon: Stethoscope },
    { label: "Wearables", href: "/industries/wearables", icon: Watch },
    { label: "Fitness", href: "/industries/fitness", icon: Dumbbell },
    { label: "On-Demand", href: "/industries/on-demand", icon: LayoutGrid },
    { label: "ECommerce", href: "/industries/ecommerce", icon: ShoppingCart },
    { label: "Construction", href: "/industries/construction", icon: HardHat },
    { label: "Politics", href: "/industries/politics", icon: Landmark },
  ],
  [
    { label: "Finance", href: "/industries/finance", icon: PiggyBank },
    { label: "Entertainment", href: "/industries/entertainment", icon: Film },
    { label: "Education", href: "/industries/education", icon: GraduationCap },
    { label: "Events", href: "/industries/events", icon: CalendarDays },
    {
      label: "Manufacturing",
      href: "/industries/manufacturing",
      icon: Factory,
    },
    { label: "Energy", href: "/industries/energy", icon: Zap },
    { label: "OTT", href: "/industries/ott", icon: Tv },
  ],
  [
    {
      label: "Restaurant",
      href: "/industries/restaurant",
      icon: UtensilsCrossed,
    },
    { label: "Travel", href: "/industries/travel", icon: Plane },
    { label: "Real Estate", href: "/industries/real-estate", icon: HomeIcon },
    {
      label: "Magazine & Newspaper",
      href: "/industries/magazine-newspaper",
      icon: Newspaper,
    },
    { label: "Social Media", href: "/industries/social-media", icon: ThumbsUp },
    { label: "Aviation", href: "/industries/aviation", icon: PlaneTakeoff },
    { label: "CSR", href: "/industries/csr", icon: HeartHandshake },
  ],
];

const RESOURCE_LINKS = [
  { label: "Blogs", href: "/blog" },
  { label: "Guides", href: "/guides" },
  { label: "Press Release", href: "/press-release" },
];

function DesktopDropdown({ label, items, width = "w-72" }) {
  return (
    <div className="group relative">
      {/* py-4 -my-4 turns the trigger's own hit-area into the bridge down
          to the panel — no gap in between for the cursor to fall through
          on its way from the label to the menu (that gap was the bug:
          top-8 left a dead zone with no hoverable element under it, so
          group-hover switched off before the pointer ever reached the
          panel, closing it instantly). */}
      <div className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition py-4 -my-4">
        {label}
        <ChevronDown
          size={18}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </div>
      <div
        className={`z-10 absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-white border border-gray-200 rounded-xl shadow-lg ${width}`}
      >
        <ul className="p-2 text-sm text-black font-medium">
          {items.map((item) =>
            item.subItems ? (
              <li key={item.href} className="group/sub relative">
                <div className="flex items-center justify-between w-full p-2.5 rounded transition-colors duration-150 hover:bg-[#0B60B0] hover:text-white cursor-default">
                  <Link href={item.href} className="flex-1">
                    {item.label}
                  </Link>
                  <Plus size={14} className="shrink-0 ml-2" />
                </div>
                {/* Flyout — bridged with -ml-1/pl-1 so the cursor doesn't
                    fall through the gap between the row and the panel. */}
                <div className="hidden group-hover/sub:block absolute left-full top-0 -ml-1 pl-1 z-20">
                  <ul className="w-64 bg-white border border-gray-200 rounded-xl shadow-lg p-2 text-sm text-black font-medium">
                    {item.subItems.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block w-full p-2.5 rounded transition-colors duration-150 hover:bg-[#0B60B0] hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center w-full p-2.5 rounded transition-colors duration-150 hover:bg-[#0B60B0] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

function IndustriesMegaMenu() {
  return (
    <div className="group relative">
      <div className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition py-4 -my-4">
        Industries
        <ChevronDown
          size={18}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </div>
      <div className="z-10 absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block bg-white border border-gray-200 rounded-xl shadow-lg w-[820px] max-w-[90vw] p-6">
        <div className="grid grid-cols-3 gap-x-8">
          {INDUSTRY_COLUMNS.map((column, i) => (
            <ul key={i} className="space-y-1 text-sm text-black font-medium">
              {column.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group/item flex items-center gap-3 w-full p-2.5 rounded transition-colors duration-150 hover:bg-[#0B60B0] hover:text-white"
                    >
                      <Icon
                        size={18}
                        className="text-[#40A2D8] shrink-0 group-hover/item:text-white"
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  id,
  label,
  items,
  open,
  onToggle,
  onNavigate,
  columns = 1,
}) {
  const [subOpen, setSubOpen] = useState(null);

  return (
    <div>
      <div
        onClick={() => onToggle(id)}
        className="text-white flex items-center justify-between cursor-pointer transition py-1"
      >
        {label}
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && (
        <ul
          className={`mt-2 mb-2 bg-white/5 border border-white/10 rounded-lg p-2 text-sm text-white font-medium ${
            columns === 2 ? "grid grid-cols-2 gap-1" : "space-y-1"
          }`}
        >
          {items.map((item) => {
            const Icon = item.icon;

            if (item.subItems) {
              const isSubOpen = subOpen === item.label;
              return (
                <li key={item.href}>
                  <div
                    onClick={() => setSubOpen(isSubOpen ? null : item.label)}
                    className="flex items-center justify-between w-full p-2 hover:bg-white/10 rounded cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`shrink-0 transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  {isSubOpen && (
                    <ul className="ml-3 mt-1 mb-1 space-y-1 border-l border-white/15 pl-3">
                      {item.subItems.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            onClick={onNavigate}
                            className="block p-2 text-xs text-white/75 hover:bg-white/10 hover:text-white rounded"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-2 w-full p-2 hover:bg-white/10 rounded"
                >
                  {Icon && (
                    <Icon size={16} className="text-[#40A2D8] shrink-0" />
                  )}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const toggleSection = (name) =>
    setOpenSection((prev) => (prev === name ? null : name));

  const closeAll = () => {
    setOpen(false);
    setOpenSection(null);
  };

  const industriesFlat = INDUSTRY_COLUMNS.flat();

  // Hide the bar on scroll-down, bring it back on scroll-up. Skipped while
  // the mobile menu is open so it can't disappear mid-interaction.
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (open) return;
      const currentY = window.scrollY;
      const scrolledDown = currentY > lastScrollY.current;
      setHidden(scrolledDown && currentY > 80);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header
      className={`nav sticky top-0 z-50 w-full border-b border-white/10 transition-transform duration-300 ${
        hidden ? "-translate-y-[150%]" : "translate-y-0"
      }`}
    >
      <div className="px-6 md:px-10 md:h-[72px] h-14 flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-white shrink-0">
          <Image
            src="/bbc-new-logo.png"
            alt="BizzBuzz Creations logo"
            className="h-8 md:h-10 w-auto"
            width={198}
            height={60}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <DesktopDropdown label="About" items={ABOUT_LINKS} width="w-72" />
          <DesktopDropdown
            label="Services"
            items={SERVICE_LINKS}
            width="w-72"
          />
          <IndustriesMegaMenu />
          <DesktopDropdown
            label="Resources"
            items={RESOURCE_LINKS}
            width="w-56"
          />

          {/* CTA button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold rounded-full pl-4 pr-5 py-2.5 transition"
          >
            <Phone size={16} />
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-[5px]"
          aria-label="Toggle mobile menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-6 bg-white rounded transition-transform duration-300 ${
              open ? "rotate-45 translate-y-[9px]" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-white rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-[3px] w-6 bg-white rounded transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 w-full bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg animate-slideDown max-h-[70vh] overflow-y-auto z-40">
          <ul className="flex flex-col space-y-3 p-5 font-medium text-white">
            <MobileAccordion
              id="about"
              label="About"
              items={ABOUT_LINKS}
              open={openSection === "about"}
              onToggle={toggleSection}
              onNavigate={closeAll}
            />
            <MobileAccordion
              id="services"
              label="Services"
              items={SERVICE_LINKS}
              open={openSection === "services"}
              onToggle={toggleSection}
              onNavigate={closeAll}
            />
            <MobileAccordion
              id="industries"
              label="Industries"
              items={industriesFlat}
              open={openSection === "industries"}
              onToggle={toggleSection}
              onNavigate={closeAll}
              columns={2}
            />
            <MobileAccordion
              id="resources"
              label="Resources"
              items={RESOURCE_LINKS}
              open={openSection === "resources"}
              onToggle={toggleSection}
              onNavigate={closeAll}
            />
            <Link
              onClick={closeAll}
              href="/contact"
              className="flex items-center justify-center gap-2 bg-[#0B60B0] text-white text-sm font-semibold rounded-full py-2.5"
            >
              <Phone size={16} />
              Contact Us
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
