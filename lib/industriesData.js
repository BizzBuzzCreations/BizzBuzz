// Central data source for every /industries/[slug] page, and the
// homepage's IndustriesShowcase scroller — both should always list the
// same 21 sectors, so this is the one place that data lives.
import {
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
    slug: "on-demand",
    label: "On-Demand",
    icon: LayoutGrid,
    description:
      "For on-demand platforms, visibility and trust decide adoption. We run local SEO and performance ad campaigns that get your service found and downloaded.",
    challenges: [
      "New on-demand services face a trust gap — people hesitate to try an unfamiliar app for something urgent.",
      "Acquisition costs can spiral without tight performance-ad targeting and conversion tracking.",
      "Support volume scales fast with user growth, and slow response times kill repeat usage.",
    ],
    services: ["seo", "paidAds", "webDev", "bpo"],
  },
  {
    slug: "ecommerce",
    label: "ECommerce",
    icon: ShoppingCart,
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
    slug: "politics",
    label: "Politics",
    icon: Landmark,
    description:
      "Digital outreach and social media strategy for public campaigns and civic organizations — clear messaging, amplified to the right audience.",
    challenges: [
      "Messages need to reach the right constituency segments, not just rack up broad impressions.",
      "Public sentiment shifts fast, and campaigns without an active social presence lose the narrative.",
      "Compliance and tone matter — outreach has to be amplified without looking manufactured.",
    ],
    services: ["smm", "seo", "consultancy", "paidAds"],
  },
  {
    slug: "finance",
    label: "Finance",
    icon: PiggyBank,
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
    slug: "energy",
    label: "Energy",
    icon: Zap,
    description:
      "We build corporate digital presence and B2B lead campaigns for energy businesses, with content that communicates scale and reliability.",
    challenges: [
      "Energy buyers evaluate reliability and scale — a thin corporate presence undercuts credibility fast.",
      "Complex offerings (grid, renewables, industrial supply) need to be explained clearly, not buried in jargon.",
      "B2B decision-makers are hard to reach through generic consumer-style marketing.",
    ],
    services: ["seo", "webDev", "consultancy", "smm"],
  },
  {
    slug: "ott",
    label: "OTT",
    icon: Tv,
    description:
      "Subscriber growth and content marketing for streaming and OTT platforms — campaigns built to drive sign-ups and keep audiences coming back.",
    challenges: [
      "Subscriber acquisition costs are high, and churn quietly erases growth if retention isn't actively managed.",
      "Content marketing needs to build anticipation continuously, not just around big releases.",
      "Personalization and automated re-engagement are expected by users, not optional extras.",
    ],
    services: ["smm", "paidAds", "ai", "automation"],
  },
  {
    slug: "restaurant",
    label: "Restaurant",
    icon: UtensilsCrossed,
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
    slug: "magazine-newspaper",
    label: "Magazine & Newspaper",
    icon: Newspaper,
    description:
      "Digital subscriber growth and SEO for publishers — helping your newsroom's content get discovered and read in a crowded feed.",
    challenges: [
      "Discoverability in search and social feeds has replaced the newsstand as the main distribution channel.",
      "Subscriber growth and retention need active campaigns, not just a paywall and a hope.",
      "Editorial teams rarely have time to also handle SEO structure and technical publishing best practices.",
    ],
    services: ["seo", "smm", "ai", "automation"],
  },
  {
    slug: "social-media",
    label: "Social Media",
    icon: ThumbsUp,
    description:
      "Community management and content strategy for social-first brands — building engaged audiences with a consistent, recognizable voice.",
    challenges: [
      "Growing an audience is one problem; keeping them engaged with a consistent voice is a harder, ongoing one.",
      "Platform algorithms shift constantly, and strategies built around last year's tactics quietly stop working.",
      "Community management at scale needs real process, not ad-hoc replies whenever someone has time.",
    ],
    services: ["smm", "paidAds", "ai", "consultancy"],
  },
  {
    slug: "aviation",
    label: "Aviation",
    icon: PlaneTakeoff,
    description:
      "Corporate digital presence and B2B marketing for aviation businesses — clear, professional content that builds credibility with the right audience.",
    challenges: [
      "Aviation buyers and partners expect a polished, credible digital presence before they'll take a meeting.",
      "Technical and regulatory complexity needs to be communicated clearly without diluting accuracy.",
      "The audience is niche and B2B — broad consumer marketing tactics mostly miss the mark.",
    ],
    services: ["seo", "webDev", "consultancy", "smm"],
  },
  {
    slug: "csr",
    label: "CSR",
    icon: HeartHandshake,
    description:
      "Cause-awareness campaigns and storytelling content for CSR and social-impact initiatives — digital outreach that helps your message actually spread.",
    challenges: [
      "Cause-driven messages often struggle for reach without genuine storytelling and a distribution plan behind them.",
      "Impact needs to be communicated in a way people actually connect with, not just reported in a PDF.",
      "Awareness campaigns need a clear next step (donate, volunteer, share) or the attention goes nowhere.",
    ],
    services: ["smm", "seo", "webDev", "consultancy"],
  },
];

export function getIndustryBySlug(slug) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
