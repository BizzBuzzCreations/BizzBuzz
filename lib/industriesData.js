// Central data source for every /industries/[slug] page, and the
// homepage's IndustriesShowcase scroller — both should always list the
// same 15 sectors, so this is the one place that data lives.
import {
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
  Search,
  Share2,
  Megaphone,
  Globe,
  Headset,
  Bot,
  Workflow,
  Users,
} from "lucide-react";

// The 8 real services BizzBuzz offers — referenced by key from each
// industry below so pages link to the actual service pages.
export const SERVICES = {
  seo: {
    key: "seo",
    label: "Search Engine Optimization",
    href: "/search-engine-optimization",
    icon: Search,
  },
  smm: {
    key: "smm",
    label: "Social Media Marketing",
    href: "/social-media-marketing",
    icon: Share2,
  },
  paidAds: {
    key: "paidAds",
    label: "Google Ads & Paid Marketing",
    href: "/paid-marketing",
    icon: Megaphone,
  },
  webDev: {
    key: "webDev",
    label: "Website Development",
    href: "/web-development",
    icon: Globe,
  },
  bpo: {
    key: "bpo",
    label: "BPO & Customer Support",
    href: "/bpo-services",
    icon: Headset,
  },
  ai: {
    key: "ai",
    label: "AI Solutions",
    href: "/ai-solutions",
    icon: Bot,
  },
  automation: {
    key: "automation",
    label: "Marketing Automation",
    href: "/marketing-automation",
    icon: Workflow,
  },
  consultancy: {
    key: "consultancy",
    label: "Business Consultancy",
    href: "/business-consultancy",
    icon: Users,
  },
};

export const INDUSTRIES = [
  {
    slug: "healthcare",
    label: "Healthcare",
    icon: Stethoscope,
    image: "/homehealthcare.png",
    description:
      "We help clinics and healthcare providers build patient trust online — local SEO so you show up when it matters, and appointment-focused campaigns that turn searches into bookings.",
    challenges: [
      "Patients search locally, often urgently — if you're not visible on Google Maps and local search, they book with a competitor.",
      "Clinical credibility is hard to convey online, and outdated or thin websites undermine patient trust before they even call.",
      "Front-desk staff get overloaded with routine inquiries that could be handled without tying up phone lines.",
    ],
    services: ["seo", "paidAds", "webDev", "bpo"],
  },
  {
    slug: "wearables",
    label: "Wearables",
    icon: Watch,
    image: "/wearables home.png",
    description:
      "From product launches to retargeting, we market wearable-tech brands with content and paid campaigns built for e-commerce conversion, not just impressions.",
    challenges: [
      "A crowded category where product specs alone don't win — the brand story and content have to carry the sale.",
      "High ad-spend competition from big players makes efficient retargeting and audience segmentation essential.",
      "Launch spikes need to convert into sustained sell-through, not just a one-week traffic bump.",
    ],
    services: ["paidAds", "smm", "automation", "seo"],
  },
  {
    slug: "fitness",
    label: "Fitness",
    icon: Dumbbell,
    image: "/fitness home.png",
    description:
      "Gyms and fitness studios need steady sign-ups, not just followers. We build local SEO, social content, and membership-focused lead campaigns that fill classes.",
    challenges: [
      "Follower counts don't pay rent — studios need a steady pipeline of trial sign-ups and membership conversions.",
      "Local competition is dense, and most searches happen within a few kilometers of home or work.",
      "Member retention depends on consistent engagement between sign-up and renewal, not just the initial ad.",
    ],
    services: ["seo", "smm", "paidAds", "automation"],
  },
  {
    slug: "ecommerce",
    label: "ECommerce",
    icon: ShoppingCart,
    image: "/ecommerce home.png",
    description:
      "SEO, paid ads, and retargeting built around your product catalog — we focus on the metrics that matter for online stores: conversion rate and repeat purchases.",
    challenges: [
      "Traffic without conversion is just a vanity metric — cart abandonment and checkout friction quietly bleed revenue.",
      "Paid ad costs keep climbing, so every rupee of spend needs to be tied to a measurable return.",
      "Repeat purchase rate matters more than most stores realize, and it's rarely actively managed.",
    ],
    services: ["seo", "paidAds", "automation", "webDev"],
  },
  {
    slug: "construction",
    label: "Construction",
    icon: HardHat,
    image: "/construction home.png",
    description:
      "We generate qualified leads for contractors and builders through local SEO, project portfolio marketing, and campaigns targeted at people actively planning to build.",
    challenges: [
      "Big-ticket decisions mean long sales cycles — leads need nurturing, not just a one-time ad click.",
      "A weak or missing project portfolio online makes it hard for serious buyers to judge your work.",
      "Referral-driven businesses often have no real digital pipeline to fall back on when referrals slow down.",
    ],
    services: ["seo", "webDev", "consultancy", "paidAds"],
  },
  {
    slug: "finance",
    label: "Finance",
    icon: PiggyBank,
    image: "/finance home.png",
    description:
      "Trust is everything in finance. We build content and lead-generation campaigns for financial services that stay compliant while actually converting.",
    challenges: [
      "Trust has to be earned before a click ever turns into a lead — vague or generic content doesn't cut it.",
      "Regulatory and compliance concerns limit what campaigns can claim, which trips up generic marketing playbooks.",
      "High-value leads need real follow-up, not just an inbox full of unqualified form fills.",
    ],
    services: ["seo", "paidAds", "consultancy", "bpo"],
  },
  {
    slug: "entertainment",
    label: "Entertainment",
    icon: Film,
    image: "/entertainment home.png",
    description:
      "We create social-first content and buzz campaigns for entertainment brands — built to grow audiences and keep them engaged between releases.",
    challenges: [
      "Attention spikes around a release and then drops off, with no plan to keep the audience engaged in between.",
      "Standing out in an oversaturated content feed takes more than reposting a trailer.",
      "Audience data from campaigns often goes unused for the next release cycle.",
    ],
    services: ["smm", "paidAds", "seo", "ai"],
  },
  {
    slug: "education",
    label: "Education",
    icon: GraduationCap,
    image: "/education home.png",
    description:
      "Enrollment-focused digital marketing for schools, coaching centers, and institutes — SEO and social outreach that reaches students and parents when they're deciding.",
    challenges: [
      "Enrollment decisions are made by two audiences at once — students and parents — who search differently.",
      "Admission season is seasonal and unforgiving; a slow-starting campaign misses the window entirely.",
      "Inquiry volume during peak season can overwhelm front-office staff without dedicated support.",
    ],
    services: ["seo", "smm", "paidAds", "bpo"],
  },
  {
    slug: "events",
    label: "Events",
    icon: CalendarDays,
    image: "/events home.png",
    description:
      "From awareness to ticket sales, we run event promotion campaigns across social and search that build hype before doors even open.",
    challenges: [
      "Ticket sales live on a hard deadline — momentum has to build fast, well before the event date.",
      "Awareness campaigns often fail to convert into actual registrations without a clear paid-ads push.",
      "Post-event content and follow-up are usually an afterthought, wasting the audience already built.",
    ],
    services: ["smm", "paidAds", "seo", "webDev"],
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    image: "/manufacturing home.png",
    description:
      "B2B lead generation and industrial SEO for manufacturers — getting your business found by the buyers and partners actually searching for what you make.",
    challenges: [
      "B2B buyers research extensively before ever making contact — an outdated or thin website loses them early.",
      "Industrial search terms are specific and low-volume, requiring real technical SEO, not generic content.",
      "Long procurement cycles mean leads need consistent nurturing, not a single ad campaign.",
    ],
    services: ["seo", "consultancy", "webDev", "paidAds"],
  },
  {
    slug: "restaurant",
    label: "Restaurant",
    icon: UtensilsCrossed,
    // "real estate home.png" actually contains the restaurant/food photo
    // (the 3 files were mislabeled by one position on upload) — wired by
    // actual photo content, not filename, per explicit confirmation.
    image: "/real estate home.png",
    description:
      "Local SEO, social content, and footfall-driven campaigns for restaurants and cafes — helping people nearby find you and come back for more.",
    challenges: [
      "Most diners decide where to eat based on what shows up in local search and Maps right now.",
      "A weak or inconsistent social presence makes even great food look forgettable online.",
      "Repeat visits and reviews compound over time, but only if someone's actively managing them.",
    ],
    services: ["seo", "smm", "paidAds", "bpo"],
  },
  {
    slug: "travel",
    label: "Travel",
    icon: Plane,
    image: "/travel home.png",
    description:
      "Destination marketing and booking-focused paid campaigns for travel businesses — content that inspires and ads that convert intent into bookings.",
    challenges: [
      "Travel decisions start with inspiration content, long before someone's ready to book — most campaigns skip that stage.",
      "Booking intent is highly seasonal and time-sensitive, and slow campaigns miss peak windows.",
      "Trust signals (reviews, real photos, clear pricing) matter more in travel than almost any other category.",
    ],
    services: ["seo", "paidAds", "smm", "webDev"],
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    icon: HomeIcon,
    // Was borrowing the real-estate photo (house model + keys) that used
    // to live inside "manufacturing home.png" before that file got
    // replaced with an actual manufacturing photo — reverted to the
    // original stock photo since no correct real-estate "home" photo has
    // been provided yet.
    image: "/Real estate.png",
    description:
      "Property listing marketing and local SEO for real estate businesses — connecting your listings with buyers and renters actively searching.",
    challenges: [
      "Listings that aren't optimized for local search sit unseen while competitors' properties get found first.",
      "High-value decisions mean buyers research extensively — a bare-bones listing page loses serious prospects.",
      "Lead volume from portals often isn't qualified, wasting agent time on unlikely buyers.",
    ],
    services: ["seo", "paidAds", "webDev", "bpo"],
  },
  {
    slug: "gaming",
    label: "Gaming",
    icon: Gamepad2,
    image: "/gaming home.png",
    description:
      "Player acquisition and community-building campaigns for gaming studios and platforms — content and paid strategies built to grow and retain an engaged player base.",
    challenges: [
      "Player acquisition costs keep climbing, and installs mean little without a plan to keep players engaged past day one.",
      "Community sentiment can shift fast around updates and patches, and studios without an active social presence lose the narrative.",
      "Launch-week hype is easy to generate — sustaining engagement between content drops is the harder, ongoing problem.",
    ],
    services: ["smm", "paidAds", "ai", "automation"],
  },
  {
    slug: "fashion-apparel",
    label: "Fashion & Apparel",
    icon: Shirt,
    image: "/fashion apparel home.png",
    description:
      "We help fashion and apparel brands turn attention into sales — social-first content, e-commerce SEO, and paid campaigns built for trend-driven buying behavior.",
    challenges: [
      "Trends move fast, and content calendars planned months in advance can't keep up with what's actually driving purchases right now.",
      "Fashion is a highly visual, impulse-driven category — a slow or cluttered checkout experience quietly bleeds sales.",
      "Standing out in a saturated social feed takes more than product photos — brand story and styling content carry the sale.",
    ],
    services: ["smm", "paidAds", "seo", "webDev"],
  },
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
