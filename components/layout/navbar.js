"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  Phone,
  Stethoscope,
  Watch,
  Dumbbell,
  ShoppingCart,
  HardHat,
  PiggyBank,
  Film,
  GraduationCap,
  CalendarDays,
  Factory,
  UtensilsCrossed,
  Plane,
  Home as HomeIcon,
  Gamepad2,
  Shirt,
} from "lucide-react";

const ABOUT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Core Team", href: "/our-team" },
  { label: "How We Work and Function", href: "/how-we-work" },
  { label: "Start Your Career with Us", href: "/career" },
  { label: "FAQ", href: "/faq" },
];

const SERVICE_LINKS = [
  {
    label: "BPO Service",
    href: "/bpo-services",
    subItems: [
      { label: "AI-Powered BPO & Call Center Solutions", href: "/bpo-services/ai-powered-bpo-call-center-solutions" },
      { label: "Inbound & Outbound Call Center Services", href: "/bpo-services/inbound-outbound-call-center-services" },
      { label: "Business Process Automation Services", href: "/bpo-services/business-process-automation-services" },
      { label: "Data Entry & Back Office Outsourcing", href: "/bpo-services/data-entry-back-office-outsourcing" },
      { label: "Virtual Assistant & Startup Outsourcing", href: "/bpo-services/virtual-assistant-startup-outsourcing" },
      { label: "24/7 & E-commerce Customer Support", href: "/bpo-services/24-7-ecommerce-customer-support" },
    ],
  },
  {
    label: "Website Development",
    href: "/web-development",
    subItems: [
      { label: "Custom Web Development & Design", href: "/web-development/custom-web-development" },
      { label: "Shopify & Ecommerce Development", href: "/web-development/shopify-ecommerce-development" },
      { label: "PHP Web Application Development", href: "/web-development/php-web-application-development" },
      { label: "React & Next.js Development", href: "/web-development/react-nextjs-development" },
      { label: "Website Redesign & Management", href: "/web-development/website-redesign-management" },
      { label: "WordPress Development", href: "/web-development/wordpress-development" },
    ],
  },
  {
    label: "Search Engine Optimization (SEO)",
    href: "/search-engine-optimization",
    subItems: [
      { label: "AI Search Optimization", href: "/search-engine-optimization/ai-search-optimization" },
      { label: "Generative Engine Optimization (GEO)", href: "/search-engine-optimization/generative-engine-optimization" },
      { label: "Answer Engine Optimization (AEO)", href: "/search-engine-optimization/answer-engine-optimization" },
      { label: "Semantic SEO & Topical Authority", href: "/search-engine-optimization/semantic-seo-topical-authority" },
      { label: "Agency Growth & White Label SEO", href: "/search-engine-optimization/ai-content-optimization" },
      { label: "High-Intent & Local SEO", href: "/search-engine-optimization/high-intent-local-seo" },
    ],
  },
  {
    label: "Social Media Marketing (SMM)",
    href: "/social-media-marketing",
    subItems: [
      { label: "Social Media Management Services", href: "/social-media-marketing/social-media-management-services" },
      { label: "Instagram Marketing Agency", href: "/social-media-marketing/instagram-marketing-agency" },
      { label: "Facebook & Meta Ads Agency", href: "/social-media-marketing/facebook-meta-ads-agency" },
      { label: "LinkedIn Marketing for B2B Growth", href: "/social-media-marketing/linkedin-marketing-b2b-growth" },
      { label: "AI Social Media Marketing", href: "/social-media-marketing/ai-social-media-marketing" },
      { label: "Reels & Short Video Marketing", href: "/social-media-marketing/reels-short-video-marketing" },
    ],
  },
  {
    label: "Google Ads & Paid Marketing",
    href: "/paid-marketing",
    subItems: [
      { label: "Google & Search Ads Management", href: "/paid-marketing/google-search-ads-management" },
      { label: "Meta & Social Ads Management", href: "/paid-marketing/meta-social-ads-management" },
      { label: "Performance Marketing & ROI Campaigns", href: "/paid-marketing/performance-marketing-roi-campaigns" },
      { label: "Lead Generation Campaigns", href: "/paid-marketing/lead-generation-campaigns" },
      { label: "E-commerce & Retargeting Ads", href: "/paid-marketing/ecommerce-retargeting-ads" },
      { label: "ChatGPT & AI Platform Ads Service", href: "/paid-marketing/local-city-based-ad-campaigns" },
    ],
  },
  {
    label: "AI Solutions",
    href: "/ai-solutions",

    subItems: [
      { label: "Custom AI Agents & Chatbots", href: "/ai-solutions/custom-ai-agents-chatbots" },
      { label: "AI Content & Generative Engines", href: "/ai-solutions/ai-content-generative-engines" },
      { label: "Workflow & Process Automation", href: "/ai-solutions/workflow-process-automation" },
      { label: "AI Strategy & Implementation Consulting", href: "/ai-solutions/generative-engine-optimization" },
    ],
  },
  {
    label: "Marketing Automation",
    href: "/marketing-automation",
    subItems: [
      { label: "CRM Marketing Automation", href: "/marketing-automation/crm-marketing-automation" },
      { label: "Email Marketing Automation", href: "/marketing-automation/email-marketing-automation" },
      { label: "WhatsApp Marketing Automation", href: "/marketing-automation/whatsapp-marketing-automation" },
      { label: "Lead Nurturing Automation", href: "/marketing-automation/lead-nurturing-automation" },
    ],
  },
  {
    label: "Business Consultancy",
    href: "/business-consultancy",
    subItems: [
      { label: "Business Strategy Consulting", href: "/business-consultancy/business-strategy-consulting" },
      { label: "Startup & New Business Consulting", href: "/business-consultancy/startup-new-business-consulting" },
      { label: "Business Growth & Scaling Consulting", href: "/business-consultancy/business-growth-scaling-consulting" },
      { label: "Operations & Process Consulting", href: "/business-consultancy/operations-process-consulting" },
      { label: "Business Development & Marketing Consulting", href: "/business-consultancy/business-development-marketing-consulting" },
      { label: "Local & City-Based Business Advisory", href: "/business-consultancy/local-city-based-business-advisory" },
    ],
  },
];

const INDUSTRY_COLUMNS = [
  [
    { label: "Healthcare", href: "/industries/healthcare", icon: Stethoscope },
    { label: "Wearables", href: "/industries/wearables", icon: Watch },
    { label: "Fitness", href: "/industries/fitness", icon: Dumbbell },
    { label: "ECommerce", href: "/industries/ecommerce", icon: ShoppingCart },
    { label: "Construction", href: "/industries/construction", icon: HardHat },
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
  ],
  [
    {
      label: "Restaurant",
      href: "/industries/restaurant",
      icon: UtensilsCrossed,
    },
    { label: "Travel", href: "/industries/travel", icon: Plane },
    { label: "Real Estate", href: "/industries/real-estate", icon: HomeIcon },
    { label: "Fashion & Apparel", href: "/industries/fashion-apparel", icon: Shirt },
    { label: "Gaming", href: "/industries/gaming", icon: Gamepad2 },
  ],
];

const RESOURCE_LINKS = [
  { label: "Blogs", href: "/blog" },
  { label: "Guides", href: "/guides" },
];

function DesktopDropdown({ label, items, width = "w-72", href }) {
  // JS-driven open state (not plain CSS group-hover) so every item link
  // can close the panel immediately on click, on top of navigating —
  // otherwise a click that doesn't move the mouse off the trigger leaves
  // the dropdown visually open over the destination page.
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250);
  };
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
  };

  return (
    // h-[72px] matches the navbar's own desktop height exactly, so this
    // wrapper's box spans the full navbar row instead of shrinking to
    // just the trigger text's line-height. That was the actual bug: a
    // shrunk wrapper made `top-full` land partway up the navbar instead
    // of at its true bottom edge, so the panel opened overlapping into
    // the navbar rather than sitting flush below it.
    <div
      className="relative h-[72px] flex items-center"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      {href ? (
        <Link
          href={href}
          onClick={closeNow}
          className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition"
        >
          {label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </Link>
      ) : (
        <div className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition">
          {label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      )}
      {/* top-full sits the panel flush against the navbar's true bottom
          edge — no gap, no overlap. */}
      {open && (
        <div className="z-20 absolute left-1/2 -translate-x-1/2 top-full">
          <div
            className={`bg-white border border-gray-200 rounded-xl shadow-xl ${width}`}
          >
            <ul className="p-2 text-sm text-black font-medium">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeNow}
                    className="inline-flex items-center w-full p-2.5 rounded transition-colors duration-150 hover:bg-[#0B60B0] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function ServicesMegaMenu() {
  // Left sidebar lists all 8 service categories; hovering (or clicking)
  // one shows its sub-services on the right, IBM-menu style. Defaults to
  // the first service so the panel is never empty on open.
  const [active, setActive] = useState(SERVICE_LINKS[0]);

  // The panel is `fixed` (see below) so it's no longer inside the
  // trigger's own layout box — plain CSS group-hover briefly loses
  // "hover" the instant the cursor leaves the small trigger link on its
  // way down to the panel, closing the menu before it ever gets there.
  // Tracking open state in JS with a short close-delay (cleared if the
  // cursor lands on the panel in time) bridges that gap reliably.
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => {
      setOpen(false);
      setActive(SERVICE_LINKS[0]);
    }, 250);
  };
  // Closes immediately on click (on top of navigating), instead of
  // leaving the panel visually open over the destination page until the
  // mouse happens to leave the trigger/panel area.
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
    setActive(SERVICE_LINKS[0]);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/services"
        onClick={closeNow}
        className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition py-4 -my-4"
      >
        Services
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {/* Outer wrapper: `fixed` (not `absolute`) so this wide panel centers
          on the header's full width — the header's own transform makes it
          the containing block for fixed children — instead of centering
          under this one trigger, which is what was pushing it past the
          right edge of the screen and getting it clipped. top-full sits
          it flush against the navbar's bottom edge — no gap. Shifted a
          bit right of dead-center (translate-x-[calc(50%-110px)]) since
          the Services trigger itself sits right of the nav's center. */}
      {open && (
        <div
          className="z-20 fixed left-1/2 -translate-x-[calc(50%-110px)] top-full"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="flex bg-white border border-gray-200 rounded-xl shadow-xl w-[960px] max-w-[95vw] overflow-hidden">
          {/* Left column — the 8 categories */}
          <ul className="w-56 shrink-0 border-r border-gray-200 p-2 text-sm font-medium text-black">
            {SERVICE_LINKS.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  onMouseEnter={() => setActive(service)}
                  onClick={closeNow}
                  className={`flex items-center w-full p-2.5 rounded transition-colors duration-150 ${
                    active.href === service.href
                      ? "bg-[#0B60B0] text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right panel — the active category's sub-services, spans the
              full remaining width. Sub-services are split into two columns
              with a vertical divider between them and a horizontal divider
              between each row, so every service's flyout reads as one
              connected grid rather than floating text. */}
          <div className="flex-1 min-w-0 w-full p-6">
            <Link
              href={active.href}
              onClick={closeNow}
              className="inline-flex items-center gap-1.5 text-lg font-semibold text-[#0B60B0] hover:underline mb-5"
            >
              {active.label}
              <ArrowRight size={17} />
            </Link>
            {active.subItems && (
              <div className="flex divide-x divide-gray-200 w-full">
                {[0, 1].map((col) => (
                  <ul
                    key={col}
                    className={`flex-1 min-w-0 divide-y divide-gray-200 ${
                      col === 0 ? "pr-6" : "pl-6"
                    }`}
                  >
                    {active.subItems
                      .filter((_, i) => i % 2 === col)
                      .map((sub) => (
                        <li key={sub.label} className="py-3 first:pt-0">
                          <Link
                            href={sub.href}
                            onClick={closeNow}
                            className="block text-sm font-medium text-black hover:text-[#0B60B0] transition-colors duration-150 leading-snug"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

function IndustriesMegaMenu() {
  // Same fixed-panel + JS-driven hover-bridge fix as ServicesMegaMenu —
  // see the comment there for why plain CSS group-hover isn't enough
  // once the panel is `fixed` and no longer sits inside the trigger's own
  // layout box.
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 250);
  };
  // Closes immediately on click (on top of navigating), instead of
  // leaving the panel visually open over the destination page until the
  // mouse happens to leave the trigger/panel area.
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <Link
        href="/industries"
        onClick={closeNow}
        className="text-white flex justify-center items-center gap-1 cursor-pointer hover:text-[#40A2D8] transition py-4 -my-4"
      >
        Industries
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </Link>
      {/* Outer wrapper: `fixed` (not `absolute`) so this wide panel centers
          on the header's full width — the header's own transform makes it
          the containing block for fixed children — instead of centering
          under this one trigger, which is what was pushing it past the
          right edge of the screen and getting it clipped. top-full sits
          it flush against the navbar's bottom edge — no gap. Shifted a
          bit right of dead-center (translate-x-[calc(50%-110px)]) since
          the Industries trigger itself sits right of the nav's center. */}
      {open && (
        <div
          className="z-20 fixed left-1/2 -translate-x-[calc(50%-110px)] top-full"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          <div className="bg-white border border-gray-200 rounded-xl shadow-xl w-[960px] max-w-[95vw] overflow-hidden">
            <div className="grid grid-cols-3 gap-x-8 p-6">
              {INDUSTRY_COLUMNS.map((column, i) => (
                <ul key={i} className="space-y-1 text-sm text-black font-medium">
                  {column.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeNow}
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

            {/* Bottom CTA strip — doesn't touch the 15 industries above,
                just a way out for visitors whose industry isn't listed. */}
            <div className="flex items-center justify-between gap-4 bg-amber-50 px-6 py-4 border-t border-amber-100">
              <p className="text-sm text-black/70 max-w-md">
                Didn&rsquo;t find what you&rsquo;re looking for? Let us
                know your needs, and we&rsquo;ll tailor a solution just
                for you.
              </p>
              <Link
                href="/contact"
                onClick={closeNow}
                className="shrink-0 inline-flex items-center bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
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
  href,
}) {
  const [subOpen, setSubOpen] = useState(null);

  return (
    <div>
      <div className="text-white flex items-center justify-between transition py-1">
        {href ? (
          <Link href={href} onClick={onNavigate} className="flex-1">
            {label}
          </Link>
        ) : (
          <span
            onClick={() => onToggle(id)}
            className="flex-1 cursor-pointer"
          >
            {label}
          </span>
        )}
        <ChevronDown
          size={20}
          onClick={() => onToggle(id)}
          className={`cursor-pointer shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
                  {/* Label navigates straight to the service's hub page
                      (e.g. /bpo-services) — only the chevron toggles the
                      sub-services accordion, instead of the whole row
                      doing that and leaving the hub page unreachable from
                      the mobile menu. */}
                  <div className="flex items-center justify-between w-full hover:bg-white/10 rounded">
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className="flex-1 p-2"
                    >
                      {item.label}
                    </Link>
                    <ChevronDown
                      size={14}
                      onClick={() => setSubOpen(isSubOpen ? null : item.label)}
                      className={`shrink-0 mr-2 cursor-pointer transition-transform duration-300 ${isSubOpen ? "rotate-180" : ""}`}
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
            src="/bbc logo white.png"
            alt="BizzBuzz Creations logo"
            className="h-8 md:h-10 w-auto"
            width={836}
            height={189}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          <DesktopDropdown label="About" items={ABOUT_LINKS} width="w-72" />
          <ServicesMegaMenu />
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
              href="/services"
            />
            <MobileAccordion
              id="industries"
              label="Industries"
              items={industriesFlat}
              open={openSection === "industries"}
              onToggle={toggleSection}
              onNavigate={closeAll}
              columns={2}
              href="/industries"
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
