// Content for every /<service-slug> hub page (rendered through the 5
// shared presentational components: BpoHero, BpoServicesGrid,
// RoadmapCarousel, BpoWeAre, DarkFAQSection, plus two inline-JSX sections
// with no dedicated component — "intro" and "trust/locality" — and a
// page-local CTA block). This mirrors lib/industryPageContent.js: real,
// already-live copy transcribed once here so lib/serviceContentRegistry.js
// can generate dashboard defaults from it and each app/(main)/<slug>/page.js
// can merge dashboard overrides on top of it, instead of two sources of
// truth drifting apart.
import {
  Bot,
  PhoneCall,
  Workflow,
  UserCheck,
  Clock,
  FileText,
  LayoutTemplate,
  Newspaper,
  ShoppingCart,
  Atom,
  Server,
  RefreshCw,
  Sparkles,
  MessageCircleQuestion,
  MapPin,
  Network,
  Users,
  TrendingUp,
  Camera,
  Linkedin,
  Video,
  Target,
  MessageCircle,
  Compass,
  Mail,
  Filter,
  Contact,
  Rocket,
  Settings,
} from "lucide-react";

export const SERVICE_PAGE_CONTENT = {
  "bpo-services": {
    heroHeading: "BPO Outsourcing That Adds Support, Not Payroll",
    heroDescription:
      "BPO and outsourcing services built to scale your support and operations without scaling headcount, for businesses in Prayagraj, across India and worldwide.",
    heroCtaText: "Get a Free BPO Consultation",
    heroImage: "/call center service 2.webp",

    introHeading: "Outsourcing Built to Scale You, Not Slow You Down",
    introTagline:
      "Who we support, and why outsourcing should scale you, not slow you down.",
    introParagraphOne:
      "Missed calls, overwhelmed support inboxes, and manual data entry are common outcomes of growth outpacing internal capacity. At BizzBuzz Creations, we run BPO and outsourcing judged on how much it genuinely takes off your plate, not just headcount added elsewhere. Whether you’re a local business in Prayagraj looking for a call center outsourcing company near me, a brand elsewhere in India searching for a bpo company that understands your specific volume, or a startup needing virtual assistant services without hiring in-house, our team builds support tailored to how your business actually operates.",
    introParagraphTwo:
      "We’re a full-service BPO company based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From call handling and automation to virtual assistants and back-office work, we handle the full outsourcing stack so you’re not coordinating five different vendors yourself.",
    introImage: "/BPO 2.webp",

    servicesGridHeading: "Six Ways We Support Your Operations",
    servicesGridSubheading:
      "Everything we offer, matched to what's actually taking up your team's time.",
    services: [
      {
        icon: Bot,
        heading: "AI-Powered BPO & Call Center Solutions",
        description:
          "As an ai powered call center company, we blend AI voice agents with trained human agents, delivering 24/7 coverage without 24/7 headcount costs.",
        href: "/bpo-services/ai-powered-bpo-call-center-solutions",
      },
      {
        icon: PhoneCall,
        heading: "Inbound & Outbound Call Center Services",
        description:
          "As a call center outsourcing company, we handle inbound support and outbound sales calling professionally, so missed calls stop costing you customers.",
        href: "/bpo-services/inbound-outbound-call-center-services",
      },
      {
        icon: Workflow,
        heading: "Business Process Automation Services",
        description:
          "As a business process automation company, we eliminate repetitive manual work through workflow automation and RPA, freeing your team for work that needs them.",
        href: "/bpo-services/business-process-automation-services",
      },
      {
        icon: UserCheck,
        heading: "Virtual Assistant & Startup Outsourcing",
        description:
          "As a virtual assistant agency, we provide dedicated, trained support for admin, ecommerce, and customer communication, matched to your specific startup needs.",
        href: "/bpo-services/virtual-assistant-startup-outsourcing",
      },
      {
        icon: Clock,
        heading: "24/7 & E-commerce Customer Support",
        description:
          "As an ecommerce customer support outsourcing partner, we provide genuine round-the-clock coverage across chat, email, and social, not just business-hours support.",
        href: "/bpo-services/24-7-ecommerce-customer-support",
      },
      {
        icon: FileText,
        heading: "Data Entry & Back-Office Outsourcing",
        description:
          "As a data entry outsourcing company, we handle bulk data processing and back-office work accurately at volume, without you hiring an in-house team.",
        href: "/bpo-services/data-entry-back-office-outsourcing",
      },
    ],

    roadmapHeading: "How We Take Work Off Your Plate",
    roadmapSubtext:
      "Our six-step process, from understanding your volume to ongoing support.",
    roadmapSteps: [
      {
        title: "Business & Volume Discovery",
        desc: "We start by understanding your current call, support, or data volume, and what's genuinely taking up your team's time.",
      },
      {
        title: "Process & Requirements Assessment",
        desc: "We assess your specific processes and requirements, identifying exactly what needs to be handled and how.",
      },
      {
        title: "Team & System Setup",
        desc: "We set up the team, systems, and any automation required, integrated with your existing tools.",
      },
      {
        title: "Training & Integration",
        desc: "We train the team on your specific business, products, and policies, ensuring accurate, on-brand support.",
      },
      {
        title: "Launch & Initial Monitoring",
        desc: "We launch with close monitoring in the early weeks, refining processes based on real interactions.",
      },
      {
        title: "Ongoing Reporting & Support",
        desc: "We provide regular reporting and continued support as your volume and requirements evolve.",
      },
    ],

    weAreHeading: "How We Run Every Outsourced Account",
    weAreDescription:
      "The specifics behind our BPO outsourcing and customer support delivery, not vague promises.",
    weArePoints: [
      {
        title: "Trained, Dedicated Teams",
        description:
          "Every account with our BPO company gets agents trained specifically on your scripts, tone, and product, not a generic script read out from a random floor.",
      },
      {
        title: "Transparent Reporting",
        description:
          "Our call center outsourcing services include weekly performance reporting and call recordings on request, so you always know what's happening on your account, not just a monthly summary.",
      },
      {
        title: "Data Security First",
        description:
          "Every business process outsourcing engagement starts with an NDA before any project details or access are shared, with account access scoped to what's needed and handling built around India's DPDP Act, 2023.",
      },
      {
        title: "AI-Assisted, Human-Led",
        description:
          "As an ai powered bpo and customer service outsourcing partner, we use AI only where it genuinely helps, routing, transcription, first responses, while trained agents handle everything that needs real judgment.",
      },
      {
        title: "Scalable Engagement",
        description:
          "Our outsourcing services scale with your business, not ahead of it, start with what you need today and add capacity as your workload actually grows.",
      },
      {
        title: "One Direct Point of Contact",
        description:
          "As an outsourced customer service company, we don't run ticket queues for active clients, you reach your point of contact directly by phone or email, not a rotating cast of agents.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much does BPO and outsourcing cost in India?",
        answer:
          "Cost depends on volume, service type, and coverage hours needed — call handling costs differently than data entry or virtual assistant support. We scope pricing after understanding your specific requirements, rather than a flat rate upfront.",
      },
      {
        question: "Is our data and customer information kept secure?",
        answer:
          "Yes, we follow proper data security and confidentiality practices across every service, treating this as a standard requirement rather than an optional add-on.",
      },
      {
        question: "How do you ensure quality when work is outsourced?",
        answer:
          "We monitor quality through training, call and interaction review, and regular reporting, adjusting processes based on real performance rather than assuming quality without verification.",
      },
      {
        question: "Can support scale up or down as our needs change?",
        answer:
          "Yes, flexible scaling is built into how we work, whether that's seasonal call volume, growing data entry needs, or expanding virtual assistant hours.",
      },
      {
        question: "Which BPO service actually fits what my business needs?",
        answer:
          "It depends on where you're losing the most time — calls, support tickets, manual data, or admin work. We help identify this during your initial consultation.",
      },
      {
        question: "How do you handle communication if something goes wrong?",
        answer:
          "We flag issues promptly with clear documentation, keeping you informed rather than letting problems go unnoticed until they become bigger issues.",
      },
    ],

    trustHeading:
      "Why Businesses Trust Us With Their Operations, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every engagement as an extension of your own team, not a distant vendor relationship with no real accountability. A well-run BPO company should be judged on how much time and stress it genuinely removes, which is exactly why businesses trust us as their outsourcing partner of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every engagement, with the same standard of work whether a client is nearby or across the world. We support operations locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a BPO company that understands how to build for real business results, not just added capacity.",
    trustImage: "/BPO 2.webp",

    ctaHeading: "Ready to Scale Without Scaling Headcount?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing company anywhere else in India, or a business overseas needing a partner that understands both cost and quality, outsourcing is only worth what it actually takes off your plate. Let’s talk about what’s currently taking up too much of your time.",
    ctaPrimaryText: "Get a Free BPO Consultation",
    ctaSecondaryText: "Talk to a BPO Solutions Specialist",
  },

  "web-development": {
    heroHeading: "Website Development That Actually Earns Its Keep",
    heroDescription:
      "Custom, high-performance websites for businesses in Prayagraj, across India and worldwide, built to load fast and convert visitors into paying customers.",
    heroCtaText: "Get a Free Consultation",
    heroImage: "/website development 1.webp",

    introHeading: "Built in Prayagraj, Built for Businesses Everywhere",
    introTagline:
      "Who we build for, and why local roots shape how we work.",
    introParagraphOne:
      "Your website is usually the first conversation you have with a customer, and most people decide whether to trust a business within seconds of landing on it. At BizzBuzz Creations, we build websites that don’t just look sharp — they convert visitors into customers. Whether you’re a local business in Prayagraj or Allahabad looking for a website development company near you, a small business owner elsewhere in India searching for a website developer you can rely on, or a startup needing a custom website developer built for how startups actually move, our team builds fast, secure, scalable websites tailored to how your business actually works.",
    introParagraphTwo:
      "We’re a full-service web development company based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From your first idea to a fully launched, search-optimized website, we handle the strategy, design, and code so you don’t have to juggle five different freelancers to get it right.",
    introImage: "/website development 2.webp",

    servicesGridHeading: "Six Ways We Build Websites That Actually Work",
    servicesGridSubheading:
      "Everything we build, matched to what your business actually needs to grow.",
    services: [
      {
        icon: LayoutTemplate,
        heading: "Custom Web Development & Design",
        description:
          "As a trusted custom web development company, we build mobile-first, responsive websites around your specific goals — leads, bookings, or sales — with code that scales as your business grows instead of going outdated in a year.",
        href: "/web-development/custom-web-development",
      },
      {
        icon: Newspaper,
        heading: "WordPress Development",
        description:
          "Our WordPress development company builds high-performance, SEO-ready WordPress sites with strong security and ongoing threat monitoring, ideal for businesses that want full control over updates without needing a developer for every change.",
        href: "/web-development/wordpress-development",
      },
      {
        icon: ShoppingCart,
        heading: "Shopify & Ecommerce Development",
        description:
          "As a specialist Shopify development agency and ecommerce website developer, we build fast-loading, conversion-focused online stores with smooth checkouts, designed for speed, mobile shoppers, and scalability — from 20 products to 20,000.",
        href: "/web-development/shopify-ecommerce-development",
      },
      {
        icon: Atom,
        heading: "React, Next.js & Frontend Development",
        description:
          "As a react js development company and next js development agency, we build high-performing frontends using server-side rendering to boost load speed and search visibility, plus pixel-perfect HTML, CSS, and JavaScript.",
        href: "/web-development/react-nextjs-development",
      },
      {
        icon: Server,
        heading: "PHP Web Application Development",
        description:
          "As a php web application development company, our full-stack PHP developers build and modernize custom web applications, from internal tools to customer-facing platforms, often improving security and speed dramatically.",
        href: "/web-development/php-web-application-development",
      },
      {
        icon: RefreshCw,
        heading: "Website Redesign & Management",
        description:
          "Our website redesign services modernize your UI/UX and fix Core Web Vitals without losing rankings you've earned, followed by ongoing website management, monitoring, updates, and backups so your site stays online 24/7.",
        href: "/web-development/website-redesign-management",
      },
    ],

    roadmapHeading: "How We Turn Your Website Into a Working Sales Tool",
    roadmapSubtext:
      "Our six-step process, from that first conversation to a fully live website.",
    roadmapSteps: [
      {
        title: "Discovery & Requirements",
        desc: "We start by understanding your business, goals, and what your website actually needs to do — generate leads, sell products, or showcase services — before any design or development begins.",
      },
      {
        title: "Planning & Platform Selection",
        desc: "We recommend the right platform for your specific needs — WordPress, Shopify, custom development, or a React-based frontend — based on what you're actually trying to achieve, not a default choice.",
      },
      {
        title: "Design & Prototyping",
        desc: "We design the look and structure of your site around your brand and users, creating a version you can review and refine before development starts.",
      },
      {
        title: "Development & Build",
        desc: "We build the site using clean, maintainable code, keeping mobile performance, security, and search visibility in mind throughout, not bolted on at the end.",
      },
      {
        title: "Testing & Launch",
        desc: "We test functionality, speed, and responsiveness across devices before launch, catching issues while they're still easy to fix rather than after going live.",
      },
      {
        title: "Ongoing Support & Growth",
        desc: "We provide ongoing maintenance, monitoring, and updates after launch, so your website keeps performing as your business and traffic grow.",
      },
    ],

    weAreHeading: "How We Build Every Website",
    weAreDescription:
      "What actually backs every website development project, not vague promises.",
    weArePoints: [
      {
        title: "Custom-Built, Not Templated",
        description:
          "As a custom web development company, every site is built around your specific goals and how your business actually works, not squeezed into a generic template.",
      },
      {
        title: "Mobile-First & Fast-Loading",
        description:
          "We design for speed and mobile shoppers first, handling real-world traffic reliably rather than just looking good in a demo.",
      },
      {
        title: "Built to Rank",
        description:
          "Strong Core Web Vitals and technical SEO are built in from the start, our sites are built to rank, not just launch and be forgotten.",
      },
      {
        title: "Full-Stack Capability",
        description:
          "As a php web application development company, wordpress development company, shopify development agency, and react js development company and next js development agency all under one roof, we pick the right stack for your project instead of forcing one tool on everything.",
      },
      {
        title: "Ongoing Management & Security",
        description:
          "Our website redesign and management services include monitoring, updates, performance checks, and AI-assisted threat monitoring to keep your site secure and online long after launch.",
      },
      {
        title: "Prayagraj-Based, Globally Trusted",
        description:
          "A full-service web development company based in Prayagraj, serving clients locally across Uttar Pradesh as well as businesses across the UK, USA, and India.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much does website development cost in India?",
        answer:
          "Cost depends on complexity — a simple brochure site costs far less than a custom web application or a full ecommerce store with integrations. We scope pricing after understanding your specific requirements, features, and platform — WordPress, Shopify, or custom development — rather than offering a flat rate that doesn't reflect what your project actually needs.",
      },
      {
        question: "Why does my business need a professional website?",
        answer:
          "A website is often the first interaction a potential customer has with your business, and most people decide whether to trust you within seconds of landing on it. Beyond credibility, a proper website gives you a lead-generating asset you fully own and control, unlike a social media profile where you're renting attention.",
      },
      {
        question: "Will my website work on all devices?",
        answer:
          "Yes, every website we build is fully responsive and tested across mobile, tablet, and desktop, since most visitors today arrive on a phone first. We also check Core Web Vitals and load speed specifically on mobile, since a slow or broken mobile experience quietly costs businesses real customers.",
      },
      {
        question: "Can you add AI features like chatbots to my website?",
        answer:
          "Yes, we integrate AI tools like chatbots, automated forms, and smart recommendations where they genuinely add value, not as a gimmick. We assess whether a specific AI feature actually helps your visitors and business goals before recommending it, rather than adding AI just for its own sake.",
      },
      {
        question: "Do you provide support and maintenance after launch?",
        answer:
          "Yes, ongoing website management is one of our core services, covering security updates, performance monitoring, backups, and bug fixes after launch. A website needs continued attention to stay fast and secure, so most clients work with us on an ongoing basis rather than a single one-time handoff.",
      },
      {
        question:
          "Which platform is right for my business — WordPress, Shopify, or custom development?",
        answer:
          "It depends on your goals — WordPress suits content-heavy sites needing easy updates, Shopify fits ecommerce stores needing built-in selling tools, and custom development suits businesses with specific functionality no template can provide. We help you choose the right fit during your free consultation, based on what you're actually trying to achieve.",
      },
    ],

    trustHeading: "Why Businesses Choose Us, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others, and where we’re actually rooted.",
    trustParagraphOne:
      "We follow a results-driven approach, building websites that don’t just look good — they sell. A well-built website often outperforms social media alone for building trust and driving consistent traffic, and gives you clearer insight into customer intent than any social platform can. Combined with strong Core Web Vitals and technical SEO, our sites are built to rank, which is exactly why businesses trust us as their website development company of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every project, with the same standard of work whether a client is nearby or across the world. We build for businesses locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a website development company that understands how to build for real business results, not just a working site.",
    trustImage: "/website development 1.webp",

    ctaHeading: "Ready for a Website Built to Actually Perform?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing company anywhere else in India, or a business overseas needing a team that understands both design and results, a website is only worth what it actually does for you. Let’s talk about what your website should be doing for your business.",
    ctaPrimaryText: "Get a Free Consultation",
    ctaSecondaryText: "Talk to a Web Development Specialist",
  },

  "search-engine-optimization": {
    heroHeading: "SEO That Gets You Ranked and Clicked",
    heroDescription:
      "SEO services built to grow real organic traffic and rankings for businesses in Prayagraj, across India and worldwide, not just vanity keyword positions.",
    heroCtaText: "Get a Free SEO Audit",
    heroImage: "/seo 1.webp",

    introHeading: "SEO Built Around Real Rankings, Not Just Reports",
    introTagline:
      "Who we build SEO for, and why it goes beyond keyword reports.",
    introParagraphOne:
      "Ranking for the wrong keywords, or ranking well with no traffic behind it, is a common outcome of SEO done without real strategy. At BizzBuzz Creations, we run SEO judged on organic traffic that actually converts, not just position tracking that looks good in a report. Whether you’re a local business in Prayagraj looking for an SEO agency near me, a brand elsewhere in India searching for an SEO company that understands your specific industry, or a business needing a dedicated SEO consultant without hiring an in-house team, our team builds strategy-led SEO tailored to how your business actually grows.",
    introParagraphTwo:
      "We’re a full-service SEO agency based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From technical SEO and content to local visibility and AI search readiness, we handle the full search engine optimization services stack so you’re not coordinating five different specialists yourself.",
    introImage: "/SEO 2.webp",

    servicesGridHeading: "Six Ways We Help Your Business Get Found",
    servicesGridSubheading:
      "Everything we offer is matched to how search is actually changing right now.",
    services: [
      {
        icon: Bot,
        heading: "AI Search Optimization",
        description:
          "As an ai search optimization services provider, we help your business stay visible as search shifts toward AI-generated answers, not just traditional blue-link results, across ChatGPT, Perplexity, and Google AI Overviews.",
        href: "/search-engine-optimization/ai-search-optimization",
      },
      {
        icon: Sparkles,
        heading: "Generative Engine Optimization (GEO)",
        description:
          "As a generative engine optimization agency, we get your brand cited inside AI-generated answers from tools like ChatGPT, not just ranked in traditional search results people increasingly skip past entirely.",
        href: "/search-engine-optimization/generative-engine-optimization",
      },
      {
        icon: MessageCircleQuestion,
        heading: "Answer Engine Optimization (AEO)",
        description:
          "As an answer engine optimization agency, we structure your content to win featured snippets and AI overviews directly, so you're the answer itself, not just another link below it.",
        href: "/search-engine-optimization/answer-engine-optimization",
      },
      {
        icon: MapPin,
        heading: "High-Intent & Local SEO",
        description:
          "As a local seo agency, we target ready-to-buy customers searching nearby with precise geo targeting and Google Business Profile optimization, not broad, wasteful traffic that never actually converts.",
        href: "/search-engine-optimization/high-intent-local-seo",
      },
      {
        icon: Network,
        heading: "Semantic SEO & Content Optimization",
        description:
          "As a content optimization agency, we build genuine topical authority through semantic SEO and entity optimization, not isolated keyword targeting that search engines increasingly see straight through.",
        href: "/search-engine-optimization/semantic-seo-topical-authority",
      },
      {
        icon: Users,
        heading: "Agency Growth & White Label SEO",
        description:
          "As a white label seo agency, we deliver SEO fulfillment under your own brand, letting agencies scale delivery for clients without the cost of hiring an in-house SEO team.",
        href: "/search-engine-optimization/ai-content-optimization",
      },
    ],

    roadmapHeading: "How We Turn Search Traffic Into Real Customers",
    roadmapSubtext:
      "Our six-step process, from auditing your site to ongoing optimization.",
    roadmapSteps: [
      {
        title: "SEO Audit & Discovery",
        desc: "We start by auditing your current site, rankings, and competitors, identifying exactly where you're losing visibility and why that's happening.",
      },
      {
        title: "Keyword & Opportunity Research",
        desc: "We research the specific keywords and search intent relevant to your business, prioritizing terms most likely to actually convert.",
      },
      {
        title: "Strategy & Content Planning",
        desc: "We build a strategy covering technical fixes, content, and authority building, mapped to your specific opportunities and industry.",
      },
      {
        title: "On-Page & Technical Implementation",
        desc: "We implement content and technical changes, fixing what's holding your site back while building out what's genuinely missing.",
      },
      {
        title: "Authority & Link Building",
        desc: "We build genuine authority through relevant links and mentions, strengthening how search engines and AI tools trust your site.",
      },
      {
        title: "Ongoing Reporting & Optimization",
        desc: "We track rankings and traffic closely, refining strategy as your site, competitors, and search itself continue to evolve.",
      },
    ],

    weAreHeading: "How We Actually Get You Ranked",
    weAreDescription:
      "What actually backs every SEO engagement, not vague promises.",
    weArePoints: [
      {
        title: "AI-First Strategy",
        description:
          "As an AI search optimization services provider, we don't follow outdated SEO; every strategy is built for how search actually works in 2026, not five years ago.",
      },
      {
        title: "Semantic SEO & Topical Authority",
        description:
          "As a semantic seo services and content optimization agency, we focus on meaning and expertise, building content clusters and entity-based SEO that establish real authority in your niche.",
      },
      {
        title: "High-Intent Keyword Targeting",
        description:
          "Our high-intent keyword seo strategy prioritizes keywords that convert, not just ones that bring traffic, visibility that turns into leads, and sales.",
      },
      {
        title: "AI Search Visibility",
        description:
          "We optimize for Google AI Overviews, ChatGPT answers, and zero-click search through generative engine optimization and answer engine optimization, not just traditional blue-link rankings.",
      },
      {
        title: "Data-Driven Execution",
        description:
          "Every recommendation from our search engine optimization services is backed by real performance data and search behavior, not assumptions or industry guesswork.",
      },
      {
        title: "Honest Reporting",
        description:
          "No ethical seo company can guarantee first-page rankings, and we won't pretend otherwise, you get transparent, honest progress reports instead.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much do SEO services cost in India?",
        answer:
          "Cost depends on scope, competition level, and whether technical, content, and link building work are all included. We scope pricing after understanding your specific website and goals, rather than offering a flat rate that doesn't reflect what your project actually needs.",
      },
      {
        question: "How long does SEO take to show results?",
        answer:
          "Timeline varies by competition and your site's current authority, but most businesses see initial movement within a few months, with meaningful, compounding results typically building over six months to a year of consistent work.",
      },
      {
        question: "What's the difference between local SEO and general SEO?",
        answer:
          "Local SEO focuses specifically on ranking for nearby searches and Google Business Profile visibility, while general SEO covers broader organic rankings across your whole site. Most local businesses need both working together for genuine visibility.",
      },
      {
        question: "Do you handle both technical SEO and content together?",
        answer:
          "Yes, technical fixes and content strategy are handled as one connected process, since strong content on a technically weak site, or a fast site with thin content, both underperform on their own.",
      },
      {
        question:
          "Can SEO help my business show up in AI search results like ChatGPT?",
        answer:
          "Yes, AI search and generative engine optimization are part of our core SEO services now, since search behavior is genuinely shifting toward AI-generated answers alongside traditional results.",
      },
      {
        question: "Do you offer white label SEO for agencies?",
        answer:
          "Yes, white label SEO fulfillment is one of our core services, letting agencies deliver SEO work under their own brand without building an in-house team themselves.",
      },
    ],

    trustHeading:
      "Why Businesses Trust Us to Rank, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others, and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every SEO engagement as a growth strategy, not a checklist of technical fixes and keyword reports. A well-run SEO agency should be judged on organic traffic that actually converts and rankings that actually hold, not just a monthly report full of numbers, which is exactly why businesses trust us as their SEO company of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every SEO project, with the same standard of work whether a client is nearby or across the world. We handle SEO locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as an SEO agency that understands how to build for real business results, not just improved rankings.",
    trustImage: "/seo 1.webp",

    ctaHeading: "Ready to Rank for What Actually Matters?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing brand anywhere else in India, or a business overseas needing an SEO partner that understands both technical work and results, rankings are only worth what they actually bring you. Let’s talk about what your SEO should be doing for your business.",
    ctaPrimaryText: "Get a Free SEO Audit",
    ctaSecondaryText: "Talk to an SEO Specialist",
  },

  "social-media-marketing": {
    heroHeading: "Social Media Marketing That Goes Beyond Posting",
    heroDescription:
      "Social media marketing is built to grow real engagement and sales for businesses in Prayagraj, across India and worldwide, not just follower counts.",
    heroCtaText: "Get a Free Social Media Audit",
    heroImage: "/social media management service 1.webp",

    introHeading:
      "Social Media Marketing Built Around Real Growth, Not Just Posts",
    introTagline:
      "Who we build social media marketing for, and why it goes beyond posting.",
    introParagraphOne:
      "Posting consistently isn’t the same as growing, and most businesses have learned that the hard way after months of content with little to show for it. At BizzBuzz Creations, we run social media marketing that’s judged on followers who actually engage, leads that actually convert, and sales that actually happen — not just a full content calendar. Whether you’re a local business in Prayagraj or Allahabad looking for a social media marketing agency near me, a brand elsewhere in India searching for a social media marketing company that understands your specific audience, or a business needing full social media management without hiring an in-house team, our team builds strategy-led marketing tailored to how your business actually grows.",
    introParagraphTwo:
      "We’re a full-service social media marketing agency based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From strategy and content to paid ads and reporting, we handle the full social media marketing plan so you don’t have to coordinate five different specialists yourself.",
    introImage: "/SMM 2.webp",

    servicesGridHeading: "Six Ways We Grow Your Social Media Presence",
    servicesGridSubheading:
      "Everything we offer, matched to what your specific brand actually needs to grow.",
    services: [
      {
        icon: TrendingUp,
        heading: "Social Media Management Service",
        description:
          "As a full-service social media management company, we plan, create, and post content consistently across your platforms, so your brand stays active and on-brand without demanding your daily attention.",
        href: "/social-media-marketing/social-media-management-services",
      },
      {
        icon: Camera,
        heading: "Instagram Marketing Agency",
        description:
          "As an Instagram marketing agency, we grow real followers and engagement through strategy, Reels, and ads, not just vanity numbers, matched to what your specific audience actually responds to.",
        href: "/social-media-marketing/instagram-marketing-agency",
      },
      {
        icon: Users,
        heading: "Facebook & Meta Ads Agency",
        description:
          "As a Meta ads agency, we run Facebook and Instagram ad campaigns tracked on ROAS, not just reach, built to turn ad spend into genuine leads and sales for your business.",
        href: "/social-media-marketing/facebook-meta-ads-agency",
      },
      {
        icon: Linkedin,
        heading: "LinkedIn Marketing for B2B Growth",
        description:
          "As a LinkedIn marketing agency, we build B2B content, outreach, and ads that reach real decision-makers, positioning your company as a category authority buyers actually trust before they ever call.",
        href: "/social-media-marketing/linkedin-marketing-b2b-growth",
      },
      {
        icon: Sparkles,
        heading: "AI Social Media Marketing",
        description:
          "As an AI social media marketing agency, we combine automation with human oversight, producing content faster without losing your brand voice or sacrificing the quality control your brand needs.",
        href: "/social-media-marketing/ai-social-media-marketing",
      },
      {
        icon: Video,
        heading: "Reels & Short Video Marketing",
        description:
          "As a Reels marketing agency, we script, film, and edit short-form video built to stop the scroll and actually drive engagement, not just views that go nowhere afterward.",
        href: "/social-media-marketing/reels-short-video-marketing",
      },
    ],

    roadmapHeading: "How We Turn a Content Calendar Into Real Growth",
    roadmapSubtext:
      "Our six-step process, from understanding your brand to ongoing scaling.",
    roadmapSteps: [
      {
        title: "Brand & Audience Discovery",
        desc: "We start by understanding your brand, audience, and current social media performance, identifying what's actually working and where the real growth opportunity is.",
      },
      {
        title: "Platform & Content Strategy",
        desc: "We decide which platforms genuinely matter for your audience and build a content strategy covering pillars, formats, and posting cadence around that.",
      },
      {
        title: "Content & Campaign Creation",
        desc: "We produce content, ad creative, and Reels according to the strategy, keeping quality consistent across every platform we manage for you.",
      },
      {
        title: "Posting, Ads & Community Management",
        desc: "We publish content on schedule, run any agreed ad campaigns, and manage community engagement as comments and messages come in daily.",
      },
      {
        title: "Performance Tracking",
        desc: "We track growth, engagement, and conversion metrics against your goals, reporting clearly on what's actually happening across every channel.",
      },
      {
        title: "Ongoing Optimization & Scaling",
        desc: "We refine strategy based on real performance data, scaling what's working and adjusting content and campaigns that aren't landing.",
      },
    ],

    weAreHeading: "How We Grow Every Social Media Account",
    weAreDescription:
      "What actually backs every social media marketing campaign, not vague promises.",
    weArePoints: [
      {
        title: "Platform-Specific Strategy",
        description:
          "As an Instagram marketing agency, Facebook ads agency, and LinkedIn marketing agency all in one, each platform gets its own strategy; we don't run the same content everywhere and call it a campaign.",
      },
      {
        title: "AI-Backed Campaign Planning",
        description:
          "As an ai social media marketing agency, we use AI tools to plan smarter content and predict trends early, paired with human strategy for judgment calls.",
      },
      {
        title: "Local Roots, National Reach",
        description:
          "Being based in Prayagraj as a social media marketing agency means we understand Indian audiences closely, while our strategies scale brands nationally too.",
      },
      {
        title: "No Copy-Paste Templates",
        description:
          "Every social media marketing plan we build is shaped around your audience, budget, and goals, not a bloated, generic package.",
      },
      {
        title: "Full-Funnel Content",
        description:
          "From daily social media management to reel production as a reel marketing agency and paid ads, everything runs under one roof, one coordinated strategy.",
      },
      {
        title: "Real Engagement Over Vanity Metrics",
        description:
          "We combine creative content, sharp social media advertising, and AI-backed strategy to get you real results, not just likes and impressions.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much does social media marketing cost in India?",
        answer:
          "Cost depends on scope, platforms managed, content volume, and whether paid ads are included alongside organic management. We scope pricing after understanding your specific goals and current presence, rather than offering a flat rate that doesn't reflect what your brand actually needs.",
      },
      {
        question:
          "What's the difference between social media management and social media marketing?",
        answer:
          "Social media management typically covers day-to-day content, posting, and community engagement, while social media marketing is the broader strategy — including paid ads, growth planning, and campaigns designed to hit specific business goals. Most brands need both working together, which is why we offer them as one connected service.",
      },
      {
        question: "Do you handle both organic content and paid ads together?",
        answer:
          "Yes, managing organic content and paid advertising together is a core part of our approach, since both channels perform better when coordinated under one strategy rather than run separately by disconnected teams with no shared plan.",
      },
      {
        question:
          "How long before we see real results from social media marketing?",
        answer:
          "Timeline depends on your starting point and goals — organic growth typically builds over a few months of consistent effort, while paid ads can show initial results within weeks. We set realistic expectations during your first strategy conversation based on your specific industry.",
      },
      {
        question:
          "Can you manage multiple platforms (Instagram, Facebook, LinkedIn) at once?",
        answer:
          "Yes, managing multiple platforms together through one coordinated team is a core part of what we do, keeping your brand voice and messaging consistent everywhere instead of fragmenting across separate people or agencies for each platform.",
      },
      {
        question:
          "Do we need a dedicated social media manager, or can an agency handle everything?",
        answer:
          "Most businesses find an agency more cost-effective than a full-time hire, since you get a full team — strategist, content creator, ads specialist — rather than one person handling every responsibility alone. We scope our involvement to match exactly what your brand needs.",
      },
    ],

    trustHeading: "Why Brands Choose Us, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every post and campaign as part of a larger strategy toward real growth, not consistent posting for its own sake. A well-run social media marketing agency should be judged on engagement that actually converts and ad spend that actually pays off, not just a busy content calendar, which is exactly why brands trust us as their social media marketing company of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every social media account, with the same standard of work whether a client is nearby or across the world. We manage social media locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a social media marketing agency that understands how to build for real business results, not just a working feed.",
    trustImage: "/social media management service 1.webp",

    ctaHeading: "Ready for Social Media That Actually Grows Your Business?",
    ctaTagline:
      "The next step is if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing brand anywhere else in India, or a business overseas needing a team that understands both content and results, social media is only worth what it actually does for you. Let’s talk about what your social media should be doing for your business.",
    ctaPrimaryText: "Get a Free Social Media Audit",
    ctaSecondaryText: "Talk to a Social Media Marketing Specialist",
  },

  "paid-marketing": {
    heroHeading: "Paid Marketing Built to Pay You Back",
    heroDescription:
      "Paid marketing campaigns built to turn ad spend into real leads and sales for businesses in Prayagraj, across India and worldwide, not just clicks.",
    heroCtaText: "Get a Free Paid Marketing Audit",
    heroImage: "/google ads and paid marketing 2 1.webp",

    introHeading: "Paid Marketing Built Around ROI, Not Just Reach",
    introTagline:
      "Who we run paid marketing for, and why reaching alone isn’t the goal.",
    introParagraphOne:
      "Ad spend that generates clicks without generating sales is a common outcome of campaigns run without real strategy behind them. At BizzBuzz Creations, we run paid marketing judged on leads and sales it actually produces, not vanity metrics like reach or impressions. Whether you’re a local business in Prayagraj looking for a ppc management company near me, a brand elsewhere in India searching for a digital advertising agency that understands your specific margins, or a business needing a performance marketing agency without hiring an in-house team, our team builds campaigns tailored to how your business actually converts customers.",
    introParagraphTwo:
      "We’re a full-service paid marketing agency based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From Google and Meta ads to ecommerce retargeting and local campaigns, we handle the full paid media stack so you’re not coordinating five different specialists yourself.",
    introImage: "/google ads and paid marketing 2 2.webp",

    servicesGridHeading: "Six Ways We Turn Ad Spend Into Sales",
    servicesGridSubheading:
      "Everything we offer, matched to what actually drives your specific business.",
    services: [
      {
        icon: Target,
        heading: "Google & Search Ads Management",
        description:
          "As a google ads management company, we run search and Shopping campaigns tracked on cost-per-result, not just clicks, keeping your budget focused on searches that actually convert.",
        href: "/paid-marketing/google-search-ads-management",
      },
      {
        icon: MessageCircle,
        heading: "Meta & Social Ads Management",
        description:
          "As a social media ads management agency, we run Facebook, Instagram, and TikTok campaigns tracked on ROAS, not just reach, built to turn ad spend into genuine sales.",
        href: "/paid-marketing/meta-social-ads-management",
      },
      {
        icon: TrendingUp,
        heading: "Performance & ROI Campaigns",
        description:
          "As a performance marketing agency, we manage every channel toward measurable ROI, connecting ads, landing pages, and conversion tracking into one accountable system.",
        href: "/paid-marketing/performance-marketing-roi-campaigns",
      },
      {
        icon: Users,
        heading: "Lead Generation Campaigns",
        description:
          "As a lead generation agency, we build funnels that deliver genuinely qualified leads, not just cheap form fills that waste your sales team's time following up.",
        href: "/paid-marketing/lead-generation-campaigns",
      },
      {
        icon: ShoppingCart,
        heading: "E-commerce & Retargeting Ads",
        description:
          "As an ecommerce ads agency, we run Shopping, social, and dynamic retargeting campaigns built to recover abandoned carts and turn browsers into buyers.",
        href: "/paid-marketing/ecommerce-retargeting-ads",
      },
      {
        icon: Bot,
        heading: "ChatGPT & AI Platform Ads",
        description:
          "As a chatgpt ads agency, we run campaigns inside ChatGPT conversations using context hints instead of keywords, reaching customers while they're actively researching, not scrolling past.",
        href: "/paid-marketing/local-city-based-ad-campaigns",
      },
    ],

    roadmapHeading: "How We Turn Ad Budget Into Real Customers",
    roadmapSubtext:
      "Our six-step process, from account discovery to ongoing scaling.",
    roadmapSteps: [
      {
        title: "Business & Account Discovery",
        desc: "We start by understanding your business goals and auditing any existing ad accounts, identifying where budget is currently being wasted.",
      },
      {
        title: "Audience & Channel Strategy",
        desc: "We define target audiences and identify which channels genuinely make sense for your specific business and budget.",
      },
      {
        title: "Campaign & Creative Development",
        desc: "We build campaigns, ad creative, and landing page alignment according to the strategy, with accurate tracking from day one.",
      },
      {
        title: "Launch & Initial Testing",
        desc: "Campaigns launch with A/B testing built in, comparing creative and targeting to identify what's actually resonating early.",
      },
      {
        title: "Optimization & Scaling",
        desc: "We optimize based on real performance data, reallocating budget toward what's delivering the strongest return.",
      },
      {
        title: "Ongoing Reporting & Refinement",
        desc: "We provide regular reporting on ROI and cost-per-result, continuing to refine campaigns as they mature.",
      },
    ],

    weAreHeading: "How We Make Every Ad Rupee Work",
    weAreDescription:
      "What actually backs every paid marketing engagement, not vague promises.",
    weArePoints: [
      {
        title: "Performance-First Campaigns",
        description:
          "As a performance marketing agency, every campaign we run is tracked against one metric that matters, return on investment, no vanity numbers, no fluff.",
      },
      {
        title: "Industry-Tailored Strategy",
        description:
          "We don't believe in one-size-fits-all packages, every campaign is built around your industry, your customers, and your goals.",
      },
      {
        title: "Transparent Numbers",
        description:
          "We're honest about what's working and what isn't, obsessed with getting you a better cost per lead through our lead generation approach every month.",
      },
      {
        title: "Daily Optimization",
        description:
          "From strategy to daily optimisation, our google ads management services handle it all, campaigns don't sit untouched between monthly check-ins.",
      },
      {
        title: "Full-Funnel Ad Management",
        description:
          "As a meta ads agency and ecommerce ads agency, we run Google, Meta, ecommerce retargeting, and hyper-local campaigns, all from strategy through execution under one roof.",
      },
      {
        title: "A Team, Not a Vendor",
        description:
          "Think of us less like a vendor and more like a hired performance marketing team sitting inside your business, pushing for growth every day.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much does paid marketing cost in India?",
        answer:
          "Cost typically includes both our management fee and your ad spend budget, kept separate. We scope management pricing after understanding your goals and channels, rather than offering a flat rate that doesn't reflect what your campaigns actually need.",
      },
      {
        question:
          "Which platform is right for my business — Google, Meta, or both?",
        answer:
          "It depends on where your specific customers actually search and browse, which we assess during strategy planning. Many businesses benefit from running both together rather than committing to just one channel.",
      },
      {
        question: "What's a good ROAS or cost-per-lead to expect?",
        answer:
          "Benchmarks vary significantly by industry and margin — there's no universal number that applies to every business. We help establish a realistic target based on your specific numbers, then optimize campaigns toward that goal.",
      },
      {
        question: "How long before paid marketing starts showing results?",
        answer:
          "Initial data usually comes in within one to two weeks, though meaningful optimization typically takes four to six weeks as campaigns gather enough data to perform efficiently.",
      },
      {
        question: "Can you manage ecommerce ads and lead generation together?",
        answer:
          "Yes, we run both ecommerce campaigns tracked on ROAS and lead generation campaigns tracked on cost-per-qualified-lead, since the strategy differs between the two but often needs to work together.",
      },
      {
        question: "Can you fix a paid ad account that isn't converting?",
        answer:
          "Yes, auditing and rebuilding underperforming accounts is a core part of what we do, reviewing targeting, creative, and tracking to find what's actually causing poor performance.",
      },
    ],

    trustHeading:
      "Why Businesses Trust Us With Their Ad Spend, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others, and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every campaign as accountable to real business outcomes, not just impressions or clicks that look busy in a dashboard. A well-run paid marketing agency should be judged on cost-per-result and actual ROI, not vanity metrics, which is exactly why businesses trust us as their performance marketing agency of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every ad account, with the same standard of work whether a client is nearby or across the world. We manage paid marketing locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a paid marketing agency that understands how to build for real business results, not just impressions.",
    trustImage: "/google ads and paid marketing 2 1.webp",

    ctaHeading: "Ready for Ad Spend That Actually Pays Off?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing brand anywhere else in India, or a business overseas needing a team that understands both campaigns and ROI, ad spend is only worth what it actually brings back. Let’s talk about what your paid marketing should be doing for your business.",
    ctaPrimaryText: "Get a Free Paid Marketing Audit",
    ctaSecondaryText: "Talk to a Paid Marketing Specialist",
  },

  "ai-solutions": {
    heroHeading: "AI Solutions That Actually Get Work Done",
    heroDescription:
      "AI solutions built around real business tasks, not AI for its own sake, for businesses in Prayagraj, across India and worldwide, backed by human oversight.",
    heroCtaText: "Get a Free AI Readiness Consultation",
    heroImage: "/ai solutions 1.webp",

    introHeading: "AI Built Around Real Tasks, Not Just Hype",
    introTagline:
      "Who we build AI for, and why hype alone isn’t a strategy.",
    introParagraphOne:
      "Adopting AI because it’s trending, without a genuine use case behind it, is a common way businesses waste time and budget. At BizzBuzz Creations, we build AI solutions judged on real tasks they actually complete, not generic AI features added for their own sake. Whether you’re a local business in Prayagraj looking for an ai solutions company near me, a brand elsewhere in India searching for a custom ai agent development company that understands your specific workflow, or a business needing ai strategy consulting before committing budget, our team builds AI tailored to how your business actually operates.",
    introParagraphTwo:
      "We’re a full-service AI solutions company based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From custom agents and content generation to workflow automation and strategy, we handle the full AI adoption journey so you’re not piecing it together yourself.",
    introImage: "/AI solutions 2.webp",

    servicesGridHeading: "Four Ways We Put AI to Work for Your Business",
    servicesGridSubheading:
      "Everything we offer, matched to where AI could genuinely help your business.",
    services: [
      {
        icon: Bot,
        heading: "Custom AI Agents & Chatbots",
        description:
          "As a custom ai agent development company, we build chatbots and voice agents that actually complete tasks, not just answer questions and hand off to a human anyway.",
        href: "/ai-solutions/custom-ai-agents-chatbots",
      },
      {
        icon: Sparkles,
        heading: "AI Content & Generative Engines",
        description:
          "As an ai content generation agency, we produce content at AI speed with human editorial review, so output never sounds generic or off-brand.",
        href: "/ai-solutions/ai-content-generative-engines",
      },
      {
        icon: Workflow,
        heading: "Workflow & Process Automation",
        description:
          "As an ai workflow automation company, we connect your tools and build AI decision steps into workflows, eliminating manual, repetitive work for good.",
        href: "/ai-solutions/workflow-process-automation",
      },
      {
        icon: Compass,
        heading: "AI Strategy & Implementation Consulting",
        description:
          "As an ai strategy consulting firm, we give you an honest readiness assessment and a realistic roadmap, not AI adoption for its own sake.",
        href: "/ai-solutions/generative-engine-optimization",
      },
    ],

    roadmapHeading: "How We Turn AI Interest Into Working Systems",
    roadmapSubtext:
      "Our six-step process, from readiness discovery to ongoing optimization.",
    roadmapSteps: [
      {
        title: "Business & Readiness Discovery",
        desc: "We start by understanding your business and honestly assessing your genuine readiness for the specific AI solution you need.",
      },
      {
        title: "Use Case Identification",
        desc: "We identify specific, realistic use cases relevant to your business, prioritizing based on feasibility and actual impact.",
      },
      {
        title: "Architecture & Strategy",
        desc: "We plan the technical architecture and approach, whether that's an AI agent, content workflow, or automation system.",
      },
      {
        title: "Development & Training",
        desc: "We build and train the AI solution on your specific business data, knowledge, and brand voice.",
      },
      {
        title: "Testing & Integration",
        desc: "We test thoroughly and integrate the solution with your existing systems before anything goes live.",
      },
      {
        title: "Ongoing Optimization",
        desc: "We monitor performance and continue refining the AI solution as your business and needs evolve.",
      },
    ],

    weAreHeading: "How We Make AI Actually Useful",
    weAreDescription: "What actually backs every AI project, not vague promises.",
    weArePoints: [
      {
        title: "Practical, Not Generic",
        description:
          "As a generative ai solutions company, we don't sell generic AI software off a shelf, every solution is built for what your specific business actually needs.",
      },
      {
        title: "Built Around Your Real Workflow",
        description:
          "As an ai workflow automation company, we start by understanding how your business actually runs before building any agent, automation, or content engine.",
      },
      {
        title: "Tested With Your Team",
        description:
          "Every custom ai agent from our ai agent development agency is tested with your team before launch, not handed over as an untested demo.",
      },
      {
        title: "GEO From Day One",
        description:
          "We combine AI integration with generative engine optimization from the start, so you're visible wherever customers search, including inside AI answers.",
      },
      {
        title: "Refined After Launch",
        description:
          "We don't disappear after handoff, every system from our ai implementation consulting company is refined based on real usage, not left running blind.",
      },
      {
        title: "Scales From Startup to Enterprise",
        description:
          "Whether you're automating your first support inbox or scaling AI across an established company, our ai strategy consulting services keep the approach practical.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much do AI solutions cost in India?",
        answer:
          "Cost depends heavily on complexity — a simple chatbot costs far less than a custom multi-agent system or a full content automation pipeline. We scope pricing after understanding your specific use case, rather than a flat rate upfront.",
      },
      {
        question: "How do we know if our business is actually ready for AI?",
        answer:
          "Readiness depends on your data, team, and processes, which we assess honestly during a readiness consultation. Being unprepared in some areas doesn't rule out AI — it often just means addressing specific gaps first.",
      },
      {
        question:
          "Will AI content or chatbots sound generic instead of like our brand?",
        answer:
          "Not when built correctly — we train AI on your specific brand voice and business data, with human review built into the process to catch anything that sounds off-brand.",
      },
      {
        question: "How long does it take to build a custom AI solution?",
        answer:
          "Timeline depends on complexity — a simple chatbot can take a few weeks, while a multi-agent system or full automation pipeline typically takes longer to build and test properly.",
      },
      {
        question:
          "Do you help with AI governance and risk, or just building the tools?",
        answer:
          "Yes, AI strategy consulting covers governance, risk, and responsible use guidelines, not just technical implementation, especially important for businesses adopting AI at scale.",
      },
      {
        question: "Can you help us choose between different AI tools and vendors?",
        answer:
          "Yes, independent AI vendor and tool evaluation is part of our strategy consulting service, assessed against your specific needs rather than any partnership bias.",
      },
    ],

    trustHeading: "Why Businesses Trust Us With AI, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others, and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every AI project as accountable to a real business outcome, not a feature added because it’s currently trending. A well-run AI solutions company should be judged on tasks genuinely completed and time genuinely saved, which is exactly why businesses trust us as their AI partner of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every AI project, with the same standard of work whether a client is nearby or across the world. We build AI solutions locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as an AI solutions company that understands how to build for real business results, not just impressive demos.",
    trustImage: "/ai solutions 1.webp",

    ctaHeading: "Ready to Put AI to Work for Your Business?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing company anywhere else in India, or a business overseas needing a partner that understands both AI capability and genuine business fit, AI is only worth what it actually does for you. Let’s talk about where AI could genuinely help.",
    ctaPrimaryText: "Get a Free AI Readiness Consultation",
    ctaSecondaryText: "Talk to an AI Solutions Specialist",
  },

  "marketing-automation": {
    heroHeading: "Marketing Automation That Sells While You Sleep",
    heroDescription:
      "Marketing automation built to nurture and convert customers automatically, not just fill a content calendar, for businesses in Prayagraj, across India and worldwide.",
    heroCtaText: "Get a Free Marketing Automation Audit",
    heroImage: "/marketing automation.webp",

    introHeading: "Automation Built to Work While You Focus Elsewhere",
    introTagline:
      "Who we automate for, and why manual follow-up isn’t the answer.",
    introParagraphOne:
      "Leads going cold, emails sent inconsistently, and a CRM that just sits there storing contacts are common signs of marketing that isn’t actually automated. At BizzBuzz Creations, we build marketing automation judged on genuine conversions it generates, not just workflows that exist for their own sake. Whether you’re a local business in Prayagraj looking for a marketing automation agency near me, a brand elsewhere in India searching for an email marketing automation company that understands your customer journey, or a business needing crm automation without hiring an in-house team, our team builds systems tailored to how your business actually sells.",
    introParagraphTwo:
      "We’re a full-service marketing automation agency based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From email and lead nurturing to CRM and WhatsApp, we handle the full automation stack so you’re not coordinating separate tools and vendors yourself.",
    introImage: "/Marketing automation 2.webp",

    servicesGridHeading: "Four Ways We Automate Your Marketing",
    servicesGridSubheading:
      "Everything we offer, matched to where your leads are actually going cold.",
    services: [
      {
        icon: Mail,
        heading: "Email Marketing Automation",
        description:
          "As an email marketing automation agency, we build sequences that nurture and convert automatically, from welcome flows to abandoned cart recovery, not just newsletters.",
        href: "/marketing-automation/email-marketing-automation",
      },
      {
        icon: Filter,
        heading: "Lead Nurturing Automation",
        description:
          "As a lead nurturing agency, we build automation that moves prospects toward a sale on their own, so leads stop going cold waiting for manual follow-up.",
        href: "/marketing-automation/lead-nurturing-automation",
      },
      {
        icon: Contact,
        heading: "CRM Marketing Automation",
        description:
          "As a crm automation agency, we turn your CRM into an active growth tool, triggering campaigns from real customer data instead of sitting idle.",
        href: "/marketing-automation/crm-marketing-automation",
      },
      {
        icon: MessageCircle,
        heading: "WhatsApp Marketing Automation",
        description:
          "As a whatsapp automation agency, we build chatbots and broadcast campaigns that reach customers on the app they actually check, not one they ignore.",
        href: "/marketing-automation/whatsapp-marketing-automation",
      },
    ],

    roadmapHeading: "How We Automate Without Losing Your Brand Voice",
    roadmapSubtext:
      "Our six-step process, from mapping your funnel to ongoing optimization.",
    roadmapSteps: [
      {
        title: "Business & Funnel Discovery",
        desc: "We start by understanding your business, customer journey, and where leads or customers are currently falling through the cracks.",
      },
      {
        title: "Automation Strategy & Mapping",
        desc: "We map out the specific sequences and triggers that make sense for your business, from welcome flows to CRM workflows.",
      },
      {
        title: "Sequence & Workflow Development",
        desc: "We build out the content, sequences, and workflows according to the strategy, keeping your brand voice consistent throughout.",
      },
      {
        title: "Setup & Integration",
        desc: "We configure the automation platforms and integrate them with your website, CRM, or e-commerce store as needed.",
      },
      {
        title: "Launch & Initial Testing",
        desc: "Automation launches with close monitoring in the early weeks, testing content and timing to identify what's resonating.",
      },
      {
        title: "Ongoing Optimization",
        desc: "We provide regular reporting and continue refining automation based on real subscriber and customer behavior.",
      },
    ],

    weAreHeading: "How We Close the Follow-Up Gap",
    weAreDescription:
      "What actually backs every marketing automation build, not vague promises.",
    weArePoints: [
      {
        title: "One Connected System",
        description:
          "As a marketing automation agency, we treat email marketing automation, WhatsApp marketing automation, and lead nurturing as one connected system, not separate campaigns running blind.",
      },
      {
        title: "We Build the Workflow Ourselves",
        description:
          "We don't sell you a tool subscription and walk away, as your marketing automation consultant, we build the workflow and write the messaging ourselves.",
      },
      {
        title: "CRM-Connected, Not Manual",
        description:
          "Every call, form fill, or reply through our crm marketing automation services automatically updates lead status and triggers the next action, no manual data entry required.",
      },
      {
        title: "Scales With Real Volume",
        description:
          "Startups get lead nurturing automation services that scale with real volume, not enterprise pricing from day one.",
      },
      {
        title: "Reviewed Monthly",
        description:
          "Every workflow is reviewed and improved monthly, not left running on autopilot and forgotten.",
      },
      {
        title: "Built Around Real Behavior",
        description:
          "We build the system around how your customers actually behave, not a generic funnel template.",
      },
    ],

    faqHeading: "Frequently Asked Questions",
    faqSubheading: "",
    faqs: [
      {
        question: "How much does marketing automation cost in India?",
        answer:
          "Cost depends on scope — a single email sequence costs less than a full automation suite covering email, CRM, and WhatsApp together. We scope pricing after understanding your specific requirements, rather than a flat rate upfront.",
      },
      {
        question: "Which platform or tool do you use for automation?",
        answer:
          "We work with major email, CRM, and WhatsApp automation platforms, either within tools you already use or recommending one if you haven't chosen yet, based on your specific needs.",
      },
      {
        question: "Will automated messages feel robotic or impersonal to customers?",
        answer:
          "Not if built correctly — we design sequences and triggers around genuine customer behavior and keep your brand voice consistent, rather than generic, one-size-fits-all automation.",
      },
      {
        question: "How long does it take to set up marketing automation?",
        answer:
          "Timeline depends on scope — a single sequence can take a couple of weeks, while a full suite across email, CRM, and WhatsApp typically takes longer to build and test properly.",
      },
      {
        question: "Can automation work with the tools we already use?",
        answer:
          "Yes, we build automation around your existing tech stack wherever possible, connecting platforms rather than requiring you to switch systems entirely.",
      },
      {
        question: "Do you provide ongoing management after automation is set up?",
        answer:
          "Yes, ongoing optimization is part of our standard approach, since automation needs continued refinement as customer behavior and your business evolve.",
      },
    ],

    trustHeading:
      "Why Businesses Trust Our Automation, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every automation build as accountable to real conversions, not workflows that exist just to look sophisticated. A well-run marketing automation agency should be judged on leads that actually convert, which is exactly why businesses trust us as their marketing automation partner of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every automation project, with the same standard of work whether a client is nearby or across the world. We build automation locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a marketing automation agency that understands how to build for real business results, not just active workflows.",
    trustImage: "/marketing automation.webp",

    ctaHeading: "Ready for Marketing That Works While You Don’t?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing brand anywhere else in India, or a business overseas needing a team that understands both automation and conversion, workflows are only worth what they actually generate. Let’s talk about where your leads are currently going cold.",
    ctaPrimaryText: "Get a Free Marketing Automation Audit",
    ctaSecondaryText: "Talk to a Marketing Automation Specialist",
  },

  "business-consultancy": {
    heroHeading: "Business Consulting That Leads to Real Action",
    heroDescription:
      "Business consulting built around decisions you can actually execute, not slide decks that sit unused, for businesses in Prayagraj, across India, and worldwide.",
    heroCtaText: "Get a Free Business Consulting Session",
    heroImage: "/business consultancy 1.webp",

    introHeading: "Consulting Built Around Decisions, Not Just Reports",
    introTagline:
      "Who we consult for, and why decisions matter more than presentations.",
    introParagraphOne:
      "A polished strategy deck that nobody actually follows afterward is a common outcome of consulting done without real accountability. At BizzBuzz Creations, we run consulting judged on decisions that actually get made and executed, not a report that gets filed away. Whether you’re a local business in Prayagraj looking for a business consultant near me, a founder elsewhere in India searching for a startup business consultant who understands early-stage decisions, or a company needing an operations consulting firm without hiring in-house, our team builds guidance tailored to how your business actually operates.",
    introParagraphTwo:
      "We’re a full-service business consulting firm based in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, nationally across India, and internationally across the UK, USA, and worldwide. From strategy and startup guidance to operations and growth planning, we handle the full advisory relationship so you’re not coordinating five different consultants yourself.",
    introImage: "/Business Consulting 2.webp",

    servicesGridHeading: "Six Ways We Help Your Business Move Forward",
    servicesGridSubheading:
      "Everything we offer, matched to the specific decision you're actually facing.",
    services: [
      {
        icon: Target,
        heading: "Business Strategy Consulting",
        description:
          "As a business strategy consulting firm, we build strategic plans you can actually execute, not a presentation that gets filed away after the meeting.",
        href: "/business-consultancy/business-strategy-consulting",
      },
      {
        icon: Rocket,
        heading: "Startup & New Business Consulting",
        description:
          "As a startup business consultant, we guide founders through validation, business planning, and early growth, not generic advice copied from a startup playbook.",
        href: "/business-consultancy/startup-new-business-consulting",
      },
      {
        icon: Settings,
        heading: "Operations & Process Consulting",
        description:
          "As an operations consulting firm, we fix the bottlenecks actually slowing your business down, redesigning processes built to scale as you grow.",
        href: "/business-consultancy/operations-process-consulting",
      },
      {
        icon: TrendingUp,
        heading: "Business Growth & Scaling Consulting",
        description:
          "As a business growth consultant, we build growth strategy that scales sustainably, planning operations and revenue together so growth doesn't outpace your team.",
        href: "/business-consultancy/business-growth-scaling-consulting",
      },
      {
        icon: MapPin,
        heading: "Local & City-Based Business Advisory",
        description:
          "As a local business advisor, we bring genuine, grounded knowledge of your specific market, not generic advice that could apply to any city anywhere.",
        href: "/business-consultancy/local-city-based-business-advisory",
      },
      {
        icon: Users,
        heading: "Business Development & Marketing Consulting",
        description:
          "As a business development consulting firm, we align sales and marketing into one connected growth strategy, not two departments working in isolation.",
        href: "/business-consultancy/business-development-marketing-consulting",
      },
    ],

    roadmapHeading: "How We Turn Advice Into Action",
    roadmapSubtext:
      "Our six-step process, from understanding your business to ongoing advisory.",
    roadmapSteps: [
      {
        title: "Business & Goal Discovery",
        desc: "We start by understanding your business, goals, and the specific decision or challenge you're actually facing right now.",
      },
      {
        title: "Assessment & Research",
        desc: "We assess your situation honestly, grounding recommendations in real data and market research, not assumption alone.",
      },
      {
        title: "Strategy Development",
        desc: "We build a plan tailored to your specific business, resources, and constraints, not a generic consulting framework.",
      },
      {
        title: "Alignment & Review",
        desc: "We review the strategy with your team, ensuring genuine buy-in and understanding before execution begins.",
      },
      {
        title: "Execution Support",
        desc: "We support your team through early implementation, staying involved rather than disappearing after the plan is delivered.",
      },
      {
        title: "Ongoing Advisory",
        desc: "We continue as an ongoing advisor, reviewing progress and adjusting strategy as your business situation evolves.",
      },
    ],

    weAreHeading: "How We Work With Every Client",
    weAreDescription:
      "What actually backs every business consulting engagement, not vague promises.",
    weArePoints: [
      {
        title: "No Generic Playbooks",
        description:
          "As a business strategy consulting firm, every recommendation is built around your industry, your team, and your real numbers, not a template pulled off a shelf.",
      },
      {
        title: "We Stay Involved",
        description:
          "From the first audit to final execution, our business consulting firm stays by your side long after the first meeting, not just handing over a strategy deck.",
      },
      {
        title: "Direct & Honest",
        description:
          "As your business consultant, we're direct about what's working, honest about what isn't, and focused on outcomes you can actually measure.",
      },
      {
        title: "Outcomes You Can Measure",
        description:
          "Every engagement with our business growth consultant team is focused on results you can point to, not just reports and recommendations that sit unread.",
      },
      {
        title: "A Team, Not Outside Consultants",
        description:
          "Think of us less like outside consultants and more like a hired business consulting team that's genuinely invested in your growth.",
      },
      {
        title: "Local Roots, India-Wide Reach",
        description:
          "Born and based in Prayagraj as a local business advisor, we understand what it takes to build a business here as well as in the metros.",
      },
    ],

    faqHeading: "Questions Before You Hire a Business Consultant",
    faqSubheading:
      "Straight answers to the questions businesses usually ask before starting.",
    faqs: [
      {
        question: "How much does business consulting cost in India?",
        answer:
          "Cost depends on scope — a focused strategic review costs less than ongoing advisory covering multiple areas of your business. We scope pricing after understanding your specific situation, rather than offering a flat rate upfront.",
      },
      {
        question:
          "What's the difference between a consultant and a business coach?",
        answer:
          "A consultant typically analyzes your specific business and market to develop a strategic plan, while a coach often focuses more broadly on leadership development. We combine strategic analysis with practical, ongoing support.",
      },
      {
        question: "How long does a typical consulting engagement take?",
        answer:
          "Timeline depends on scope — a focused review can take a few weeks, while ongoing advisory typically continues over several months as your business situation develops.",
      },
      {
        question: "Do you work with small businesses, or only larger companies?",
        answer:
          "We work with businesses of various sizes, scoping our approach to fit smaller businesses just as thoughtfully as larger engagements, rather than a one-size-fits-all package.",
      },
      {
        question: "Do you help with execution, or just the strategy itself?",
        answer:
          "We help with both, since a strategy that never gets executed provides little value. We build execution support directly into our engagements.",
      },
      {
        question:
          "Is this consulting only for established businesses, or startups too?",
        answer:
          "We work with both, covering everything from early-stage validation and business planning for startups through to growth and operations consulting for established companies.",
      },
    ],

    trustHeading: "Why Businesses Trust Our Advice, and Where We’re Rooted",
    trustSubtext:
      "What genuinely sets us apart from others, and where we’re actually rooted.",
    trustParagraphOne:
      "We treat every engagement as accountable to real decisions and outcomes, not a polished presentation that sits unused afterward. A well-run business consulting firm should be judged on advice that actually gets followed, which is exactly why businesses trust us as their business consultant of choice.",
    trustParagraphTwo:
      "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh — a city many still know as Allahabad — and that local grounding shapes how we approach every engagement, with the same standard of work whether a client is nearby or across the world. We advise businesses locally across Prayagraj and Allahabad, nationally across India, and internationally across the UK, USA, and worldwide, as a business consulting firm that understands how to build for real business results, not just recommendations.",
    trustImage: "/business consultancy 1.webp",

    ctaHeading: "Ready for Advice You’ll Actually Use?",
    ctaTagline:
      "The next step, if you’re ready to talk about what comes next.",
    ctaParagraph:
      "Whether you’re a local business in Prayagraj, a growing company anywhere else in India, or a business overseas needing a consultant who understands both strategy and execution, advice is only worth what you actually do with it. Let’s talk about the decision you’re facing right now.",
    ctaPrimaryText: "Get a Free Business Consulting Session",
    ctaSecondaryText: "Talk to a Business Consulting Specialist",
  },
};

export function getServicePageContent(slug) {
  return SERVICE_PAGE_CONTENT[slug];
}
