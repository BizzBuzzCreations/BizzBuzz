// Single source of truth for which page sections/fields are editable from
// the admin dashboard's "Website Content" tab. Each field's `default` is
// the real copy the site already ships with — pages fall back to this
// when no override has been saved yet, so nothing breaks/blanks out
// before an admin edits anything.
//
// Field types: "text" (single line), "textarea" (multi-line), "image"
// (upload, stores a URL), "video" (upload, stores a URL), "list"
// (repeatable items — each item is an object whose own shape is given by
// `itemFields`, same type options).
//
// Deliberately NOT editable here: icons, hrefs/links, and anything that
// drives layout (which visual variant a card renders, column counts,
// etc.) — those are design/structure, not content, and stay in code.
//
// Adding a new editable page: add an entry here, then in that page's
// component read `content?.someKey || DEFAULT` instead of the hardcoded
// string. No schema changes needed — PageContent.fields is schemaless.
//
// The 15 /industries/<slug> pages are NOT hand-authored here — they all
// share one identical structure, so their registry entries are generated
// from lib/industryPageContent.js in lib/industryContentRegistry.js and
// merged in below via getPageMeta/getPageDefaults.
import { INDUSTRY_CONTENT_REGISTRY } from "./industryContentRegistry";
import { SERVICE_CONTENT_REGISTRY } from "./serviceContentRegistry";
import { SUB_SERVICE_CONTENT_REGISTRY } from "./subServiceContentRegistry";

export const PAGE_CONTENT_REGISTRY = [
  {
    key: "home",
    label: "Homepage",
    sections: [
      {
        key: "hero",
        label: "Hero Section",
        fields: [
          {
            key: "heroHeading",
            label: "Heading",
            type: "text",
            default: "India’s Trusted Digital Marketing Agency",
          },
          {
            key: "heroSubheading",
            label: "Sub-heading",
            type: "text",
            default:
              "Turn Clicks Into Customers With Data-Driven Digital Marketing",
          },
          {
            key: "heroSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Looking for a trusted digital marketing agency in Prayagraj that helps your business generate more leads, increase website traffic, and grow revenue? Welcome to BizzBuzz Creations.",
          },
          {
            key: "heroCtaText",
            label: "Button Text",
            type: "text",
            default: "Get Free Consultation",
          },
          {
            key: "heroPosterImage",
            label: "Background Poster Image (shown before the video loads)",
            type: "image",
            default: "/image-1.jpg",
          },
          {
            key: "heroVideo",
            label: "Background Video",
            type: "video",
            default: "/Sequence 01 1.mp4",
          },
        ],
      },
      {
        key: "about",
        label: "About Us",
        fields: [
          {
            key: "aboutEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "About Us",
          },
          {
            key: "aboutHeading",
            label: "Heading",
            type: "text",
            default: "We Are BizzBuzz Creations",
          },
          {
            key: "aboutParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "BizzBuzz Creations is a digital marketing and business solutions agency helping businesses in Prayagraj (Allahabad), across India, and international markets build a stronger digital presence. We understand that every business has different goals, audiences, and challenges, so we focus on practical solutions rather than one-size-fits-all marketing. Our expertise covers SEO, local SEO, Google Ads, social media marketing, website development, content marketing, AI solutions, and marketing automation. From improving search visibility and generating qualified leads to building better websites and streamlining business processes, we bring multiple digital capabilities under one team. Our goal is simple: help businesses reach the right audience, create meaningful opportunities, and build a digital presence that supports long-term growth.",
          },
          {
            key: "aboutButtonText",
            label: "Button Text",
            type: "text",
            default: "Learn More",
          },
          {
            key: "aboutBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "/bbc-building.png",
          },
        ],
      },
      {
        key: "services",
        label: "Digital Marketing & Business Solutions",
        fields: [
          {
            key: "servicesHeading",
            label: "Heading",
            type: "text",
            default: "Digital Marketing & Business Solutions",
          },
          {
            key: "servicesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "We don't believe in one-size-fits-all marketing. Our customized digital strategies help businesses attract qualified customers, increase conversions, and grow sustainably.",
          },
          {
            key: "serviceCards",
            label: "Service Cards",
            type: "list",
            itemFields: [
              { key: "heading", label: "Title", type: "text" },
              { key: "subheading", label: "Subheading", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "buttonText", label: "Button Text", type: "text" },
            ],
            default: [
              {
                heading: "BPO Service",
                subheading: "Reliable Support Teams Without the Overhead",
                description:
                  "Skip the cost and hassle of hiring in-house. Our trained BPO teams handle customer support, back-office operations, and order processing around the clock, so you get dependable service without the overhead of building a full internal team.",
                buttonText: "Explore BPO Services",
              },
              {
                heading: "Website Design & Development",
                subheading:
                  "Build a Website That Converts Visitors Into Customers",
                description:
                  "A slow website kills conversions. We build fast, responsive, and clean websites—from local business pages to custom platforms—designed to deliver a smooth user experience that turns visitors into buyers.",
                buttonText: "Build Your Website",
              },
              {
                heading: "Search Engine Optimization (SEO)",
                subheading:
                  "Increase Your Google Rankings & Drive Organic Traffic",
                description:
                  "Rank higher on Google and AI-driven search engines. We combine technical SEO, local relevance, and quality content to ensure your business in Allahabad, and across India gets found however customers search.",
                buttonText: "Explore SEO Services",
              },
              {
                heading: "Social Media Marketing",
                subheading: "Build a Strong Brand That People Trust",
                description:
                  "Stop the scroll and build a brand that sells. We create high-impact Instagram, Facebook, and YouTube Shorts campaigns, leveraging short-form video and social commerce to drive real customer engagement.",
                buttonText: "Grow Your Social Presence",
              },
              {
                heading: "Google Ads & Paid Marketing",
                subheading: "Reach Customers Ready to Buy",
                description:
                  "Stop wasting ad spend. We launch targeted, AI-optimized campaigns with smart audience segmentation and high-converting landing pages designed to turn clicks into genuine, scalable leads.",
                buttonText: "Start Google Ads",
              },
              {
                heading: "AI Automation",
                subheading: "Automate the Busywork, Scale Without Hiring",
                description:
                  "Free your team from repetitive tasks. We build AI chatbots, lead qualification flows, and workflow automations that respond to customers instantly and route the right leads to your team, 24/7.",
                buttonText: "Automate With AI",
              },
              {
                heading: "Marketing Automation",
                subheading:
                  "Nurture Leads Automatically, Convert While You Sleep",
                description:
                  "Stop letting leads go cold. We set up automated email and follow-up sequences that nurture prospects, qualify interest, and guide them through the buyer's journey without manual chasing.",
                buttonText: "Automate Your Marketing",
              },
              {
                heading: "Business Consulting",
                subheading: "Strategic Guidance for Sustainable Growth",
                description:
                  "Streamline operations and plan for sustainable growth. We bridge the gap between business fundamentals and digital strategy, giving Prayagraj businesses and scaling Indian brands a clear roadmap to success.",
                buttonText: "Speak With a Consultant",
              },
            ],
          },
        ],
      },
      {
        key: "caseStudies",
        label: "Powered by What We Build",
        fields: [
          {
            key: "caseStudiesHeading",
            label: "Heading",
            type: "text",
            default: "Powered by What We Build",
          },
          {
            key: "caseStudiesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "A closer look at the CRM systems, AI tools, and infrastructure driving real business operations, day in and day out.",
          },
          {
            key: "caseStudyClients",
            label: "Cards (leave Logo empty to use the built-in icon)",
            type: "list",
            itemFields: [
              { key: "name", label: "Title", type: "text" },
              { key: "logo", label: "Logo", type: "image" },
              { key: "tagline", label: "Description", type: "textarea" },
            ],
            default: [
              {
                name: "BizzBuzz CRM — Built for Call Centers",
                logo: "",
                tagline:
                  "A custom CRM & customer management portal built for BPO and call center teams — lead tracking, agent workflows, and reporting, all in one platform.",
              },
              {
                name: "AI Voice Calling System",
                logo: "",
                tagline:
                  "An in-house AI voice agent that qualifies leads, answers FAQs, and transfers calls to humans — built for real outbound call volume, not a demo.",
              },
              {
                name: "WhatsApp & n8n Sales Automation",
                logo: "",
                tagline:
                  "A self-hosted automation engine that runs our own cold-calling and lead pipeline — WhatsApp, workflows, and outreach, fully connected.",
              },
              {
                name: "Self-Hosted Cloud Infrastructure",
                logo: "",
                tagline:
                  "Our own servers, our own rules, and a self-managed Proxmox infrastructure powering every product we build, with zero third-party hosting dependency.",
              },
              {
                name: "This Website Built In-House",
                logo: "",
                tagline:
                  "Designed, developed, and deployed end-to-end by our own team — proof of the same web development we offer clients.",
              },
              {
                name: "Production-Grade DevOps Pipeline",
                logo: "",
                tagline:
                  "Automated CI/CD deployment, monitoring, and uptime management running our own products in production — the same discipline we bring to client projects.",
              },
              {
                name: "Custom Analytics & Reporting Dashboard",
                logo: "",
                tagline:
                  "An in-house dashboard that pulls campaign, CRM, and infrastructure data into one place — real numbers our team acts on, not scattered spreadsheets.",
              },
            ],
          },
        ],
      },
      {
        key: "stats",
        label: "Why Our Way of Working Is Different (scrolling cards)",
        fields: [
          {
            key: "statsHeading",
            label: "Heading",
            type: "text",
            default: "Here’s Why Our Way of Working Is Different",
          },
          {
            key: "statCards",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "tag", label: "Tag", type: "text" },
              { key: "value", label: 'Number (e.g. "01.")', type: "text" },
              { key: "label", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                tag: "Why It's Different",
                value: "01.",
                label: "One Team, Multiple Capabilities",
                description:
                  "Get SEO, Google Ads, social media marketing, web development, AI, automation, and BPO support from one connected digital team.",
              },
              {
                tag: "Why It's Different",
                value: "02.",
                label: "Solutions Built Around You",
                description:
                  "We consider your industry, audience, market, and business needs to recommend digital solutions that fit your objectives.",
              },
              {
                tag: "Why It's Different",
                value: "03.",
                label: "Clear From Day One",
                description:
                  "Know what's included, what we're working on, and what to expect through straightforward communication and practical recommendations.",
              },
              {
                tag: "Why It's Different",
                value: "04.",
                label: "Built to Adapt With You",
                description:
                  "Start with the services you need today and expand into SEO, advertising, technology, automation, or business support as your needs evolve.",
              },
            ],
          },
        ],
      },
      {
        key: "aiShowcase",
        label: "",
        fields: [
          {
            key: "aiHeadingMain",
            label: "Heading",
            type: "text",
            default: "Make AI Work for Your Business",
          },
          {
            key: "aiParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "From AI chatbots and intelligent agents to workflow automation, AI-powered content, and AI search optimization, we help businesses in Prayagraj, across India, and worldwide put practical AI solutions to work.",
          },
          {
            key: "aiPosterImage",
            label: "Video Poster Image",
            type: "image",
            default: "/aiservice.webp",
          },
          {
            key: "aiVideo",
            label: "Video",
            type: "video",
            default: "/ai-vid.webm",
          },
          {
            key: "aiButtonText",
            label: "Button Text (links to AI Solutions page)",
            type: "text",
            default: "Explore AI Solutions",
          },
          {
            key: "aiFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "AI Agents & Chatbots",
                description:
                  "Automate conversations, qualify leads, answer questions, and support customers 24/7.",
              },
              {
                title: "Smart Business Automation",
                description:
                  "Reduce repetitive work with AI-powered workflows, integrations, and process automation.",
              },
              {
                title: "AI-Powered Content",
                description:
                  "Create and manage content faster with intelligent systems built around your brand and marketing needs.",
              },
              {
                title: "AI Search Optimization",
                description:
                  "Improve your visibility across AI-powered search and emerging discovery platforms.",
              },
            ],
          },
        ],
      },
      {
        key: "process",
        label: "Our Process",
        fields: [
          {
            key: "processHeading",
            label: "Heading",
            type: "text",
            default: "Our Process",
          },
          {
            key: "processSubtext",
            label: "Subtext",
            type: "text",
            default: "A Proven Framework for Measurable Digital Growth.",
          },
          {
            key: "processSteps",
            label: "Process Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Free Consultation & Business Audit",
                description:
                  "We study your business, competitors, and current online presence to spot quick wins and growth gaps.",
              },
              {
                title: "Custom Strategy Design",
                description:
                  "We build a data-backed digital marketing plan — SEO, ads, content, or all three — matched to your goals and budget.",
              },
              {
                title: "Campaign Execution",
                description:
                  "Our team launches and manages your campaigns across Google, Meta, and search, optimized for real results, not vanity metrics.",
              },
              {
                title: "Reporting & Continuous Optimization",
                description:
                  "You get clear monthly reports, and we refine every campaign using performance data to keep growth compounding.",
              },
            ],
          },
        ],
      },
      {
        key: "whyChooseUs",
        label: "Why Businesses Continue Working With Us",
        fields: [
          {
            key: "whyChooseHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Continue Working With Us",
          },
          {
            key: "whyChooseImage",
            label: "Image",
            type: "image",
            default: "/team-images/team-5.jpeg",
          },
          {
            key: "whyChooseFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Transparent Reporting",
                description:
                  "Know exactly where your marketing budget is invested with detailed reports and actionable insights.",
              },
              {
                title: "Dedicated Marketing Experts",
                description:
                  "Our team continuously monitors industry trends, and emerging technologies to keep your business ahead of competitors.",
              },
              {
                title: "Data-Driven Decision Making",
                description:
                  "Every recommendation we make is backed by analytics, performance data, and business objectives, not assumptions.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "We focus on building lasting relationships by delivering consistent value, continuous optimization, and measurable growth.",
              },
            ],
          },
        ],
      },
      {
        key: "recognitions",
        label: "",
        fields: [
          {
            key: "recognitionsEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "",
          },
          {
            key: "recognitionsHeading",
            label: "Heading",
            type: "text",
            default: "Proven Expertise. Real Recognition.",
          },
          {
            key: "clutchBadgeImage",
            label: "Clutch Badge Image",
            type: "image",
            default: "/clutch.png",
          },
          {
            key: "clutchTitle",
            label: "Clutch Description",
            type: "text",
            default:
              "Listed among trusted digital marketing agencies on Clutch",
          },
          {
            key: "googleAdsBadgeImage",
            label: "Google Ads Partner Badge Image",
            type: "image",
            default: "/CDL.png",
          },
          {
            key: "googleAdsTitle",
            label: "Google Ads Partner Description",
            type: "text",
            default: "Certified Google Ads & Marketing Partner",
          },
          {
            key: "googleAnalyticsBadgeImage",
            label: "Google Analytics Badge Image",
            type: "image",
            default: "/GA.png",
          },
          {
            key: "googleAnalyticsTitle",
            label: "Google Analytics Description",
            type: "text",
            default: "Certified Google Analytics Partner",
          },
          {
            key: "isoBadgeImage",
            label: "ISO Badge Image",
            type: "image",
            default: "/iso.png",
          },
          {
            key: "isoTitle",
            label: "ISO Description",
            type: "text",
            default: "Quality-certified business processes",
          },
        ],
      },
      {
        key: "industries",
        label: "",
        fields: [
          {
            key: "industriesEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "",
          },
          {
            key: "industriesHeading",
            label: "Heading",
            type: "text",
            default: "Digital Solutions for Businesses Across Industries",
          },
          {
            key: "industriesSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "From healthcare and finance to e-commerce, travel, education, and manufacturing, we deliver digital marketing, SEO, web development, and technology solutions tailored to how your industry works.",
          },
        ],
      },
      {
        key: "reviews",
        label: "Customer Reviews",
        fields: [
          {
            key: "reviewsHeading",
            label: "Heading",
            type: "text",
            default: "Customer Reviews",
          },
          {
            key: "reviewsSubtext",
            label: "Subtext",
            type: "text",
            default: "See what our customers have to say about us.",
          },
          {
            key: "testimonials",
            label: "Reviews",
            type: "list",
            itemFields: [
              { key: "name", label: "Name", type: "text" },
              { key: "role", label: "Role / Source", type: "text" },
              { key: "text", label: "Review Text", type: "textarea" },
            ],
            default: [
              {
                name: "Sunayana Srivastava",
                role: "Verified Google Review",
                text: "Great Digital Marketing agency! Professional, creative & result oriented. Our campaigns have performed better than ever since partnering with BizzBuzz creations. Highly recommend their services.",
              },
              {
                name: "Raunak Tripathi",
                role: "Verified Google Review",
                text: "Great experience with Bizzbuzz Creations. Professional, responsive, and delivered quality work on time. Highly recommended for growing your business.",
              },
              {
                name: "Subhash Srivastava",
                role: "Verified Google Review",
                text: "Highly professional and competent team. Very cooperative and prompt their services. The city needs such a service providers. I would recommend this organisation highly to everyone.",
              },
              {
                name: "Sarthak Mishra",
                role: "Verified Google Review",
                text: "Awesome experience with bizz buzz creations. Great for people and companies looking out for digital marketing agency.",
              },
              {
                name: "Tariq Khan",
                role: "Verified Google Review",
                text: "Best digital marketing agency in prayagraj. They are very professional and cooperative. I am very happy with their services. I would recommend this organisation highly to everyone.",
              },
              {
                name: "Rudra Pratap Singh",
                role: "Verified Google Review",
                text: "One of the best digital marketing service providers in Prayagraj. The team is highly trustworthy and delivers outstanding SEO results. Great experience overall!",
              },
            ],
          },
        ],
      },
      {
        key: "faq",
        label: "FAQs",
        fields: [
          {
            key: "faqHeading",
            label: "Heading",
            type: "text",
            default: "FAQs",
          },
          {
            key: "faqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "What does BizzBuzz Creations do?",
                answer:
                  "We're a full-stack digital marketing and business solutions agency offering SEO, social media marketing, Google Ads, website development, AI automation, marketing automation, BPO support, and business consultancy under one team.",
              },
              {
                question: "Do you only work with businesses in Prayagraj?",
                answer:
                  "No. We work with businesses in Prayagraj, across India, and internationally with the same team and process, wherever you're based.",
              },
              {
                question:
                  "Do I have to hire you for everything, or can I pick one service?",
                answer:
                  "You can start with a single service — SEO, ads, or a website, for example — and add more later as your needs grow. Nothing is bundled or forced.",
              },
              {
                question:
                  "How much does it cost to work with BizzBuzz Creations?",
                answer:
                  "There's no fixed package pricing; it depends on the services and scope you need. Every engagement starts with a free consultation, so you get a clear quote before committing to anything.",
              },
              {
                question: "How do I get started?",
                answer:
                  "Book a free consultation. We'll look at your business, current online presence, and goals, then recommend the right starting point — no pressure, no obligation.",
              },
              {
                question:
                  "What makes BizzBuzz Creations different from other agencies?",
                answer:
                  "One team, one point of contact, and full ownership of your accounts and data — no vendor lock-in, no juggling five different agencies for one growth strategy.",
              },
            ],
          },
        ],
      },
      {
        key: "popup",
        label: "Consultation Popup",
        fields: [
          {
            key: "popupHeaderTitle",
            label: "Header Bar Title",
            type: "text",
            default: "Book Your Consultation Now",
          },
          {
            key: "popupTitle",
            label: "Left Panel Title",
            type: "text",
            default: "BizzBuzz Creations",
          },
          {
            key: "popupTagline",
            label: "Left Panel Tagline",
            type: "text",
            default: "Innovate and Integrate Everyday",
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "about",
    label: "About Us",
    sections: [
      {
        key: "aboutHero",
        label: "Hero Section",
        fields: [
          {
            key: "aboutHeroHeading",
            label: "Heading",
            type: "text",
            default: "India’s Digital Marketing Agency, Trusted Worldwide",
          },
          {
            key: "aboutHeroSubheading",
            label: "Tagline",
            type: "text",
            default: "Systems first. Campaigns second.",
          },
          {
            key: "aboutHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Built and based in India, BizzBuzz Creations helps businesses across India and worldwide grow through data-driven strategy, design, and technology, not just ads.",
          },
          {
            key: "aboutHeroStat1",
            label: "Highlight 1",
            type: "text",
            default: "Data-Driven Strategy, Not Guesswork",
          },
          {
            key: "aboutHeroStat2",
            label: "Highlight 2",
            type: "text",
            default: "Serving Businesses Across India & Worldwide",
          },
          {
            key: "aboutHeroButtonText",
            label: "Button Text (links to Services page)",
            type: "text",
            default: "Build Your Digital Growth Strategy",
          },
          {
            key: "aboutHeroImages",
            label: "Photo Grid Images",
            type: "list",
            itemFields: [{ key: "src", label: "Image", type: "image" }],
            default: [
              { src: "/team-images/team-11.jpeg" },
              { src: "/team-images/team-6.jpeg" },
              { src: "/team-images/team-1.jpeg" },
              { src: "/image-3.jpg" },
              { src: "/image-5.webp" },
              { src: "/image-9.jpg" },
              { src: "/team-images/team-12.jpeg" },
              { src: "/team-images/team-7.jpeg" },
              { src: "/team-images/team-14.jpeg" },
            ],
          },
        ],
      },
      {
        key: "story",
        label: "Our Story",
        fields: [
          {
            key: "storyHeading",
            label: "Heading",
            type: "text",
            default: "Our Story",
          },
          {
            key: "storySubheading",
            label: "Sub-heading",
            type: "text",
            default: "From Local Projects to Global Ambition",
          },
          {
            key: "storyImage",
            label: "Image",
            type: "image",
            default: "/team-images/team-5.jpeg",
          },
          {
            key: "storyParagraphOne",
            label: "Paragraph 1",
            type: "textarea",
            default:
              "Every big journey starts somewhere. Ours began in Prayagraj (Allahabad), India, with a simple belief: marketing shouldn't feel like guesswork.",
          },
          {
            key: "storyParagraphTwo",
            label:
              "Paragraph 2 (default text includes a link to the Services page — editing this replaces it with plain text)",
            type: "textarea",
            default:
              "BizzBuzz Creations started with a small team of marketers, designers, and strategists determined to help businesses get more from their digital presence. What began locally in Prayagraj has grown into a digital marketing agency serving businesses across India, the UK, the US, and beyond.",
          },
          {
            key: "storyParagraphThree",
            label:
              "Paragraph 3 (default text includes links to SEO and Paid Marketing pages — editing this replaces it with plain text)",
            type: "textarea",
            default:
              "Today, we bring together strategy, creativity, technology, SEO, and performance marketing to help businesses build stronger brands, reach the right audiences, and achieve meaningful digital growth.",
          },
          {
            key: "storyParagraphFour",
            label: "Paragraph 4",
            type: "textarea",
            default:
              "Our ambition is global, but our approach remains personal: understand the business, build the right strategy, and focus on results that actually matter.",
          },
        ],
      },
      {
        key: "missionVision",
        label: "Mission, Vision & Core Values",
        fields: [
          {
            key: "missionVisionHeading",
            label: "Heading",
            type: "text",
            default: "Our Mission, Vision & Core Values",
          },
          {
            key: "missionTitle",
            label: "Mission Title",
            type: "text",
            default: "Our Mission",
          },
          {
            key: "missionText",
            label: "Mission Text",
            type: "textarea",
            default:
              "To help every business unlock measurable growth through smart, ethical, and future-ready digital marketing — no fluff, no shortcuts, only strategy that works.",
          },
          {
            key: "visionTitle",
            label: "Vision Title",
            type: "text",
            default: "Our Vision",
          },
          {
            key: "visionText",
            label: "Vision Text",
            type: "textarea",
            default:
              "To become India's most trusted digital marketing partner, known for turning ambitious brands into industry leaders through innovation and consistency.",
          },
          {
            key: "coreValuesHeading",
            label: "Core Values Heading",
            type: "text",
            default: "Our Core Values",
          },
          {
            key: "coreValues",
            label: "Core Value Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Results Over Reports",
                description:
                  "We measure success in real growth, not just polished monthly PDFs.",
              },
              {
                title: "Transparency First",
                description:
                  "Clear communication, honest timelines, and zero hidden agendas, always.",
              },
              {
                title: "Innovation-Led Thinking",
                description:
                  "We track algorithm shifts and AI search trends before they trend.",
              },
              {
                title: "Client-Centric Culture",
                description:
                  "Every strategy is built around your business, never a generic template.",
              },
              {
                title: "Integrity in Execution",
                description:
                  "Ethical, white-hat practices that protect your brand's reputation long-term.",
              },
            ],
          },
        ],
      },
      {
        key: "journey",
        label: "Our Journey So Far",
        fields: [
          {
            key: "journeyHeading",
            label: "Heading",
            type: "text",
            default: "Our Journey So Far",
          },
          {
            key: "journeyYears",
            label: "Year Cards",
            type: "list",
            itemFields: [
              { key: "year", label: "Year", type: "text" },
              { key: "title", label: "Title", type: "text" },
              { key: "body", label: "Description", type: "textarea" },
              { key: "img", label: "Image", type: "image" },
            ],
            default: [
              {
                year: "2022",
                title: "Building the Foundation",
                body: "We began our journey with a focus on digital marketing, creative branding, and online business growth, helping brands establish a stronger and more meaningful digital presence.",
                img: "/team-images/team-2.jpeg",
              },
              {
                year: "2023",
                title: "Expanding Digital Expertise",
                body: "We continued developing our expertise in SEO, social media marketing, content marketing, website solutions, and digital branding to create stronger online experiences for growing businesses.",
                img: "/image-5.webp",
              },
              {
                year: "2024",
                title: "Strengthening Our Approach",
                body: "Our focus evolved toward result-driven digital marketing strategies, combining SEO, content, social media, branding, and web solutions to help businesses build visibility and connect with their audiences.",
                img: "/team-images/team-13.jpeg",
              },
              {
                year: "2025",
                title: "Growing Digital Possibilities",
                body: "We continued refining our digital marketing and SEO strategies, focusing on stronger brand visibility, engaging content, effective online campaigns, and sustainable digital growth across different business needs.",
                img: "/image-6.jpg",
              },
              {
                year: "2026",
                title: "Where We Are Today",
                body: "Today, we continue building smarter digital marketing, SEO, branding, content, social media, and web strategies, helping businesses strengthen their online presence and grow with confidence.",
                img: "/team-images/team-5.jpeg",
              },
            ],
          },
        ],
      },
      {
        key: "differentiators",
        label: "Built Different, Built to Perform",
        fields: [
          {
            key: "differentiatorsHeading",
            label: "Heading",
            type: "text",
            default: "Built Different, Built to Perform",
          },
          {
            key: "differentiatorsSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              'In a market flooded with agencies promising "guaranteed rankings," we chose a different path — building sustainable digital growth systems instead of chasing quick wins.',
          },
          {
            key: "differentiatorItems",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Data Over Guesswork",
                desc: 'Every decision is backed by real performance data, not assumptions or industry "best guesses."',
              },
              {
                title: "AI & Search-Ready Strategy",
                desc: "We optimize for how India searches today — voice assistants, AI tools, and answer engines, not just Google.",
              },
              {
                title: "Full-Funnel Marketing",
                desc: "From brand awareness to final conversion, we manage the entire customer journey under one roof.",
              },
              {
                title: "Custom Roadmaps, Not Templates",
                desc: "Every client gets a strategy built around their industry, competitors, and specific business goals.",
              },
              {
                title: "Radical Transparency",
                desc: "Live performance dashboards, not vague monthly summaries — you see exactly where your budget goes.",
              },
              {
                title: "Proven Delivery",
                desc: "90+ projects and 50+ clients trust us to turn strategy into measurable, repeatable growth.",
              },
            ],
          },
        ],
      },
      {
        key: "culture",
        label: "Culture",
        fields: [
          {
            key: "cultureRows",
            label: "Culture Rows",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "body", label: "Description", type: "textarea" },
              { key: "img", label: "Image", type: "image" },
            ],
            default: [
              {
                title: "We Build With Real Ownership",
                body: "At BizzBuzz Creations, clear communication and accountability drive everything we do. Our digital marketing team in Prayagraj takes ownership from strategy to execution, turning ideas into marketing that creates real business impact.",
                img: "/team-images/team-13.jpeg",
              },
              {
                title: "We Work As One Team",
                body: "Our teams work together across strategy, design, technology, SEO, and digital marketing. Based in Prayagraj, India, with an international outlook, we bring different skills together to build smarter digital solutions for businesses.",
                img: "/team-images/team-12.jpeg",
              },
              {
                title: "We Grow Together",
                body: "We believe great work comes from continuous learning and shared growth. Our team works on real campaigns, explores new digital strategies, and keeps developing the skills needed to deliver better marketing results for businesses in India and worldwide.",
                img: "/team-images/team-7.jpeg",
              },
            ],
          },
        ],
      },
      {
        key: "roadmap",
        label: "How Our Digital Marketing Process Works",
        fields: [
          {
            key: "roadmapHeading",
            label: "Heading",
            type: "text",
            default: "How Our Digital Marketing Process Works",
          },
          {
            key: "roadmapSubheading",
            label: "Sub-heading",
            type: "text",
            default: "The Bizzbuzz Growth Blueprint",
          },
          {
            key: "roadmapIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "We follow a structured, repeatable process that has helped us deliver consistent results across 90+ projects.",
          },
          {
            key: "roadmapSteps",
            label: "Roadmap Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Discover & Audit",
                desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
              },
              {
                title: "Strategize",
                desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals.",
              },
              {
                title: "Create & Execute",
                desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content.",
              },
              {
                title: "Optimize & Scale",
                desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
              },
              {
                title: "Report & Grow",
                desc: "Transparent reporting and regular strategy calls keep growth compounding long after launch day.",
              },
            ],
          },
          {
            key: "roadmapClosing",
            label: "Closing Paragraph",
            type: "textarea",
            default:
              "This roadmap is the reason our clients don't just get short-term spikes — they get compounding, long-term digital growth.",
          },
        ],
      },
      {
        key: "trust",
        label: "Why Businesses Choose BizzBuzz Creations",
        fields: [
          {
            key: "trustHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Choose BizzBuzz Creations",
          },
          {
            key: "trustIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.",
          },
          {
            key: "trustItems",
            label: "Trust Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Proven Track Record",
                desc: "90+ projects delivered across India with real, measurable business outcomes.",
              },
              {
                title: "Future-Focused SEO",
                desc: "We optimize for traditional search, AI search, and voice assistants — all at once.",
              },
              {
                title: "End-to-End Services",
                desc: "SEO, paid ads, content, social, and web design — everything under one roof.",
              },
              {
                title: "Honest Partnerships",
                desc: "No inflated promises, just clear strategy, consistent effort, and steady growth.",
              },
              {
                title: "Dedicated Account Support",
                desc: "You get a real team that knows your brand, not a ticket number.",
              },
              {
                title: "Growing Client Base",
                desc: "50+ businesses across India already trust us with their growth.",
              },
            ],
          },
          {
            key: "trustClosing",
            label: "Closing Paragraph",
            type: "textarea",
            default:
              "If you're looking for a digital marketing agency that treats your business like a long-term partnership — not a one-off project — Bizzbuzz Creations is built for that.",
          },
        ],
      },
      {
        key: "aboutFaq",
        label: "FAQs",
        fields: [
          {
            key: "aboutFaqHeading",
            label: "Heading",
            type: "text",
            default: "FAQs",
          },
          {
            key: "aboutFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "Who is BizzBuzz Creations?",
                answer:
                  "BizzBuzz Creations is a digital marketing agency based in Prayagraj (Allahabad), India, helping businesses grow through SEO, digital marketing, paid advertising, social media, web development, and digital strategy.",
              },
              {
                question: "Where is BizzBuzz Creations based?",
                answer:
                  "BizzBuzz Creations is based in Prayagraj, Uttar Pradesh, India, and works with businesses across India as well as clients in international markets, including the UK and US.",
              },
              {
                question:
                  "What digital marketing services does BizzBuzz Creations offer?",
                answer:
                  "BizzBuzz Creations provides SEO, digital marketing, social media marketing, paid advertising, content marketing, web design and development, and digital strategy. Services can be combined based on your business goals.",
              },
              {
                question:
                  "Does BizzBuzz Creations work with businesses outside Prayagraj?",
                answer:
                  "Yes. While we work with businesses in Prayagraj and across India, we also help businesses in international markets build their online presence, generate leads, and achieve sustainable digital growth.",
              },
              {
                question:
                  "Why choose BizzBuzz Creations as your digital marketing agency?",
                answer:
                  "We focus on strategy before campaigns, measurable growth over vanity metrics, and long-term digital performance. Every strategy is tailored to the business, audience, competition, and goals rather than using a one-size-fits-all approach.",
              },
              {
                question: "How can I get started with BizzBuzz Creations?",
                answer:
                  "Contact our team to discuss your business, current digital presence, and growth goals. We'll identify the right opportunities and help you build a practical digital marketing strategy designed around your business.",
              },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    sections: [
      {
        key: "servicesHero",
        label: "Hero Section",
        fields: [
          {
            key: "servicesHeroHeading",
            label: "Heading",
            type: "text",
            default: "Stop Juggling Agencies. Start Growing.",
          },
          {
            key: "servicesHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "SEO, ads, web development and automation — one roof, one team, wherever your customers are.",
          },
          {
            key: "servicesHeroButtonText",
            label: "Primary Button Text (scrolls to the services grid)",
            type: "text",
            default: "Explore Our Services",
          },
          {
            key: "servicesHeroSecondaryButtonText",
            label: "Secondary Button Text (links to Contact page)",
            type: "text",
            default: "Get a Free Consultation",
          },
          {
            key: "servicesHeroImage",
            label: "Hero Image (right side)",
            type: "image",
            default: "/services.png",
          },
        ],
      },
      {
        key: "servicesGrid",
        label: "Services Grid",
        fields: [
          {
            key: "servicesGridHeading",
            label: "Heading",
            type: "text",
            default: "Explore Our Digital Growth Services",
          },
          {
            key: "servicesGridSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Choose the services that match your goals, or combine multiple solutions to support different areas of your business.",
          },
          {
            key: "serviceDescriptions",
            label:
              "Service Cards (same order as: SEO, Social Media, Paid Ads, Web Development, BPO, AI Solutions, Marketing Automation, Business Consultancy)",
            type: "list",
            itemFields: [
              { key: "description", label: "Description", type: "textarea" },
              { key: "buttonText", label: "Link Text", type: "text" },
            ],
            default: [
              {
                description:
                  "Improve search visibility, attract qualified organic traffic, and build sustainable growth with technical SEO, content, on-page optimization, and link-building strategies.",
                buttonText: "Explore SEO Services",
              },
              {
                description:
                  "Build your brand presence and engage the right audience with strategic content, social media management, paid campaigns, and platform-specific marketing strategies.",
                buttonText: "Explore Social Media Marketing",
              },
              {
                description:
                  "Reach high-intent customers faster with targeted Google Ads and paid campaigns designed to increase qualified traffic, generate leads, and maximize marketing performance.",
                buttonText: "Explore Paid Marketing",
              },
              {
                description:
                  "Build fast, responsive, SEO-friendly websites that strengthen your online presence, deliver better user experiences, and turn visitors into meaningful business opportunities.",
                buttonText: "Explore Website Development",
              },
              {
                description:
                  "Improve operational efficiency with reliable BPO and customer support solutions covering customer queries, order support, back-office operations, and business processes.",
                buttonText: "Explore BPO Services",
              },
              {
                description:
                  "Use AI-powered solutions, intelligent chatbots, workflow automation, and custom systems to reduce repetitive work, improve efficiency, and support smarter business operations.",
                buttonText: "Explore AI Solutions",
              },
              {
                description:
                  "Streamline lead nurturing and follow-ups with CRM workflows, email automation, customer journeys, and marketing systems that keep your sales process moving consistently.",
                buttonText: "Explore Marketing Automation",
              },
              {
                description:
                  "Get practical business guidance through strategic audits, workshops, market insights, and growth roadmaps designed to help you make better decisions with confidence.",
                buttonText: "Explore Business Consultancy",
              },
            ],
          },
        ],
      },
      {
        key: "engagement",
        label: "What Every Engagement Includes",
        fields: [
          {
            key: "engagementEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "How We Work",
          },
          {
            key: "engagementHeading",
            label: "Heading",
            type: "text",
            default: "A Better Experience From Start to Finish",
          },
          {
            key: "engagementSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Simple communication, clear ownership, and a straightforward experience without the usual agency complications.",
          },
          {
            key: "engagementFeatures",
            label: "Feature Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "One Point of Contact",
                desc: "Keep communication simple with a dedicated team that understands your business and ongoing requirements.",
              },
              {
                title: "You Own Your Accounts",
                desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your ownership.",
              },
              {
                title: "Clear Scope & Pricing",
                desc: "Know what's included, what's being delivered, and where your budget is going before work begins.",
              },
              {
                title: "No Long-Term Lock-In",
                desc: "Choose the services you need without being pushed into unnecessary packages or complicated commitments.",
              },
              {
                title: "Secure Information Handling",
                desc: "Your business information, account access, and project details are handled with appropriate confidentiality and care.",
              },
              {
                title: "Support When You Need It",
                desc: "Get help when questions, changes, or new requirements come up instead of being left to figure them out alone.",
              },
            ],
          },
        ],
      },
      {
        key: "scenarios",
        label: "Find the Right Service for Your Problem",
        fields: [
          {
            key: "scenariosEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Not Sure Where to Start?",
          },
          {
            key: "scenariosHeading",
            label: "Heading",
            type: "text",
            default: "What Are You Trying to Fix?",
          },
          {
            key: "scenariosSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Start with the challenge, not the service. We'll help you find the right digital solution.",
          },
          {
            key: "scenarioQuestions",
            label:
              "Problem Cards (same order as: SEO, Web Development, Paid Ads, Social Media, AI Solutions, BPO, Business Consultancy, Web Development)",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "detail", label: "Description", type: "textarea" },
            ],
            default: [
              {
                question: "Not Getting Enough Traffic?",
                detail:
                  "Improve your online visibility and attract more qualified visitors through SEO and search-focused content.",
              },
              {
                question: "Getting Traffic but Few Enquiries?",
                detail:
                  "Strengthen your website experience, messaging, and conversion paths to turn more visitors into potential customers.",
              },
              {
                question: "Need More Leads Quickly?",
                detail:
                  "Reach customers with high purchase intent through targeted Google Ads and paid digital campaigns.",
              },
              {
                question: "Struggling to Stay Consistent on Social Media?",
                detail:
                  "Build a stronger presence with content planning, social media management, and audience-focused campaigns.",
              },
              {
                question: "Too Many Repetitive Tasks?",
                detail:
                  "Reduce manual work with AI-powered tools, automated workflows, and connected marketing systems.",
              },
              {
                question: "Customer Support Taking Too Much Time?",
                detail:
                  "Delegate customer queries and routine business operations to reliable BPO and support teams.",
              },
              {
                question: "Not Sure What Your Business Needs Next?",
                detail:
                  "Get an outside perspective on your digital presence, opportunities, and priorities before investing further.",
              },
              {
                question: "Need a Better Online Foundation?",
                detail:
                  "Create a fast, responsive website that gives your brand a stronger digital presence and supports customer acquisition.",
              },
            ],
          },
        ],
      },
      {
        key: "servicesProcess",
        label: "Why Choose Us",
        fields: [
          {
            key: "servicesProcessEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Why Choose Us?",
          },
          {
            key: "servicesProcessHeading",
            label: "Heading",
            type: "text",
            default: "Why Businesses Choose BizzBuzz Creations",
          },
          {
            key: "servicesProcessSubtext",
            label: "Subtext",
            type: "text",
            default:
              "More than individual services, you get one team that understands the bigger picture of your digital presence.",
          },
          {
            key: "servicesProcessSteps",
            label: "Why Choose Us Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Everything Under One Roof",
                description:
                  "SEO, paid advertising, social media, websites, AI, automation, BPO, and consultancy without coordinating multiple agencies.",
              },
              {
                title: "Built Around Your Business",
                description:
                  "We consider your industry, audience, market, and requirements instead of forcing your business into a standard package.",
              },
              {
                title: "Flexible as You Grow",
                description:
                  "Start with what you need today and add services as new opportunities, challenges, and business requirements emerge.",
              },
              {
                title: "Focused on Business Outcomes",
                description:
                  "Our work is designed to support meaningful outcomes such as visibility, enquiries, customers, efficiency, and stronger digital operations.",
              },
            ],
          },
        ],
      },
      {
        key: "servicesFaq",
        label: "FAQs",
        fields: [
          {
            key: "servicesFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "servicesFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "What services does BizzBuzz Creations offer?",
                answer:
                  "BizzBuzz Creations provides SEO, social media marketing, Google Ads and paid marketing, website development, BPO and customer support, AI solutions, marketing automation, and business consultancy.",
              },
              {
                question: "How much do digital marketing services cost?",
                answer:
                  "Pricing depends on the services and scope you choose; there's no fixed package. A free consultation gets you a clear, upfront quote before any work begins.",
              },
              {
                question: "How do I know which service is right for my business?",
                answer:
                  "The right service depends on your goals, industry, audience, competition, budget, and current digital presence. Our team can evaluate your needs and recommend the most suitable services and priorities.",
              },
              {
                question: "How long does it take to see results from SEO or paid ads?",
                answer:
                  "Paid ads typically show measurable traffic and leads within days to a few weeks. SEO is a longer-term investment; most businesses see meaningful ranking improvements in 3 to 6 months, depending on competition.",
              },
              {
                question: "Can BizzBuzz Creations handle both marketing and website development?",
                answer:
                  "Yes. We provide digital marketing and website development under one team, allowing businesses to coordinate their online visibility, marketing campaigns, content, and website experience more efficiently.",
              },
              {
                question: "Do you provide services to businesses outside Prayagraj?",
                answer:
                  "Yes. BizzBuzz Creations works with businesses in Prayagraj, across India, and worldwide, providing digital marketing, web development, BPO, AI, automation, and other business solutions.",
              },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "industries",
    label: "Industries",
    sections: [
      {
        key: "industriesHero",
        label: "Hero Section",
        fields: [
          {
            key: "industriesHeroEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Industries",
          },
          {
            key: "industriesHeroHeading",
            label: "Heading",
            type: "text",
            default: "Digital Growth Solutions for Every Industry",
          },
          {
            key: "industriesHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Every industry has different goals, audiences, and challenges. We create tailored digital marketing, BPO, and web solutions that fit the way your business works.",
          },
          {
            key: "industriesHeroButtonText",
            label: "Button Text",
            type: "text",
            default: "Explore Our Solutions",
          },
          {
            key: "industriesHeroImage",
            label: "Hero Image (right side)",
            type: "image",
            default: "/industries.png",
          },
        ],
      },
      {
        key: "industriesGrid",
        label: "Industries Grid",
        fields: [
          {
            key: "industriesGridEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "",
          },
          {
            key: "industriesGridHeading",
            label: "Heading",
            type: "text",
            default: "Built Around Your Industry",
          },
          {
            key: "industriesGridSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Every industry is different. We create digital strategies built around your business, audience, and goals.",
          },
          {
            key: "industryCards",
            label:
              "Industry Cards (title, description, image, and which service page each links to)",
            type: "list",
            itemFields: [
              { key: "title", label: "Industry", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "image", label: "Image", type: "image" },
              { key: "linkText", label: "Link Text", type: "text" },
              { key: "linkHref", label: "Link URL", type: "text" },
            ],
            // `image` is each industry's own real photo (same one used on
            // that industry's own hero) — was previously a separate
            // generic pool of 11 photos cycled across all 15 cards via
            // index modulo (the old industriesCardImages field, now
            // removed), unrelated to which industry actually landed on
            // that slot, and two of those 11 didn't even exist in
            // /public, so a couple of cards always rendered broken.
            default: [
              {
                title: "Healthcare",
                description:
                  "Build a stronger healthcare presence with digital marketing, SEO, and websites designed to connect with patients.",
                image: "/Healthcare.png",
                linkText: "Learn More",
                linkHref: "/industries/healthcare",
              },
              {
                title: "Finance",
                description:
                  "Strengthen your finance brand with digital strategies that build visibility, trust, engagement, and qualified customer opportunities.",
                image: "/Finance.png",
                linkText: "Learn More",
                linkHref: "/industries/finance",
              },
              {
                title: "Restaurant",
                description:
                  "Attract more diners with local SEO, social media, and digital marketing strategies built for restaurant growth.",
                image: "/Restaurant.png",
                linkText: "Learn More",
                linkHref: "/industries/restaurant",
              },
              {
                title: "Wearables",
                description:
                  "Grow your wearable technology brand with digital strategies that improve visibility, engagement, and online customer discovery.",
                image: "/wearables.png",
                linkText: "Learn More",
                linkHref: "/industries/wearables",
              },
              {
                title: "Entertainment",
                description:
                  "Reach wider audiences with creative digital marketing, social media, and content strategies built for entertainment brands.",
                image: "/Entertainment.png",
                linkText: "Learn More",
                linkHref: "/industries/entertainment",
              },
              {
                title: "Travel",
                description:
                  "Increase bookings and brand visibility with SEO, digital marketing, and engaging online experiences for travel businesses.",
                image: "/Travel.png",
                linkText: "Learn More",
                linkHref: "/industries/travel",
              },
              {
                title: "Fitness",
                description:
                  "Build a stronger fitness brand with digital marketing strategies that attract members, increase visibility, and drive growth.",
                image: "/fitness.png",
                linkText: "Learn More",
                linkHref: "/industries/fitness",
              },
              {
                title: "Education",
                description:
                  "Connect with students and learners through SEO, digital marketing, and websites designed for educational businesses.",
                image: "/Education.png",
                linkText: "Learn More",
                linkHref: "/industries/education",
              },
              {
                title: "Real Estate",
                description:
                  "Generate more property leads with SEO, digital marketing, and conversion-focused websites built for real estate businesses.",
                image: "/Real estate.png",
                linkText: "Learn More",
                linkHref: "/industries/real-estate",
              },
              {
                title: "E-commerce",
                description:
                  "Grow your online store with SEO, digital marketing, and conversion-focused strategies designed for e-commerce success.",
                image: "/ecommerce.png",
                linkText: "Learn More",
                linkHref: "/industries/ecommerce",
              },
              {
                title: "Events",
                description:
                  "Build event awareness and increase registrations with social media, digital marketing, and engaging online campaigns.",
                image: "/Events.png",
                linkText: "Learn More",
                linkHref: "/industries/events",
              },
              {
                title: "Manufacturing",
                description:
                  "Strengthen your manufacturing business with digital strategies that improve visibility, reach buyers, and generate qualified leads.",
                image: "/Manufacturing.png",
                linkText: "Learn More",
                linkHref: "/industries/manufacturing",
              },
              {
                title: "Fashion & Apparel",
                description:
                  "Build a stronger fashion brand with social media, digital marketing, and e-commerce strategies that turn attention into growth.",
                image: "/Fashion.png",
                linkText: "Learn More",
                linkHref: "/industries/fashion-apparel",
              },
              {
                title: "Gaming",
                description:
                  "Reach gaming audiences with engaging digital marketing, social media, and content strategies built around player communities.",
                image: "/Gaming.png",
                linkText: "Learn More",
                linkHref: "/industries/gaming",
              },
              {
                title: "Construction",
                description:
                  "Generate qualified leads and strengthen your online presence with SEO, digital marketing, and conversion-focused web solutions.",
                image: "/Construction.png",
                linkText: "Learn More",
                linkHref: "/industries/construction",
              },
            ],
          },
        ],
      },
      {
        key: "industriesCertifications",
        label: "Certified & Recognized By",
        fields: [
          {
            key: "industriesCertHeading",
            label: "Heading",
            type: "text",
            default: "Certified & Recognized By",
          },
          {
            key: "industriesCertSubtext",
            label: "Subtext",
            type: "textarea",
            default:
              "Real credentials that back up how we work, not just what we say.",
          },
        ],
      },
      {
        key: "industriesFaq",
        label: "FAQs",
        fields: [
          {
            key: "industriesFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "industriesFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "What industries does BizzBuzz Creations serve?",
                answer:
                  "BizzBuzz Creations works with businesses across healthcare, finance, restaurants, travel, education, real estate, ecommerce, manufacturing, gaming, and other growing industries.",
              },
              {
                question: "Do you provide industry-specific digital marketing services?",
                answer:
                  "Yes. We create digital marketing strategies based on each industry's audience, competition, customer journey, business goals, and market requirements.",
              },
              {
                question: "Can you help my industry improve its online visibility?",
                answer:
                  "Yes. Our SEO, digital marketing, social media, Google Ads, and website development solutions help businesses strengthen visibility and reach potential customers.",
              },
              {
                question: "Do you create websites for different industries?",
                answer:
                  "Yes. We develop industry-focused websites designed around your business objectives, audience needs, user experience, and conversion goals.",
              },
              {
                question: "Can BizzBuzz Creations work with businesses outside Prayagraj?",
                answer:
                  "Yes. We work with businesses in Prayagraj, across India, and worldwide, providing digital marketing, BPO, web development, and other digital solutions.",
              },
              {
                question: "How do I choose the right digital marketing strategy for my industry?",
                answer:
                  "Our team can evaluate your industry, audience, competition, goals, and current digital presence to recommend the most suitable marketing and technology solutions.",
              },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "contact",
    label: "Contact Us",
    sections: [
      {
        key: "contactHero",
        label: "Hero / Contact Form Section",
        fields: [
          {
            key: "contactHeroHeading",
            label: "Heading",
            type: "text",
            default: "Let’s Turn Your Digital Goals Into a Growth Plan",
          },
          {
            key: "contactHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "You bring the goals. We bring the strategy, execution, and ongoing support. From the first idea to measurable results, our team handles the heavy lifting, so you can focus on growing your business.",
          },
          {
            key: "contactFormHeading",
            label: "Form Heading",
            type: "text",
            default: "Send Us a Message",
          },
          {
            key: "contactFormButtonText",
            label: "Form Submit Button Text",
            type: "text",
            default: "Send Message",
          },
          {
            key: "contactSteps",
            label: "Step Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
            default: [
              {
                title: "Tell Us Your Challenge",
                description:
                  "Share your goals, challenges, and what you want to achieve. We'll take the time to understand your business.",
              },
              {
                title: "Get a Free Consultation",
                description:
                  "Talk to our team about your goals, requirements, and priorities. We'll explore the right opportunities for your business.",
              },
              {
                title: "Get a Clear Growth Roadmap",
                description:
                  "Get a practical direction for your next steps, priorities, and opportunities. We'll help you move forward with confidence.",
              },
            ],
          },
        ],
      },
      {
        key: "globeTrust",
        label: "Trusted by Growing Businesses",
        fields: [
          {
            key: "globeEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Trusted by Growing Businesses",
          },
          {
            key: "globeHeading",
            label: "Heading",
            type: "text",
            default: "In Prayagraj, Across India & Worldwide",
          },
          {
            key: "globeParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "From local businesses to growing enterprises, we help brands across Prayagraj, India, and global markets build a digital presence that drives leads and sales — real results, not vanity metrics. Whether you're a small business just getting started online or an established company looking to expand into new markets, our team combines local market understanding with strategies that work across borders, so your growth never stays confined to one city or one country.",
          },
        ],
      },
      {
        key: "marketingCTA",
        label: "Let's Put Your Brand on the Map",
        fields: [
          {
            key: "marketingCtaEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "BizzBuzz Creations",
          },
          {
            key: "marketingCtaHeading",
            label: "Heading",
            type: "text",
            default: "Let’s Put Your Brand on the Map",
          },
          {
            key: "marketingCtaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Whether you're launching, scaling, or ready for a fresh marketing direction, tell us what you're working on. We'll show you the smartest way forward.",
          },
          {
            key: "marketingCtaButtonText",
            label: "Button Text",
            type: "text",
            default: "Get Free Consultation Now",
          },
          {
            key: "marketingCtaTrustLines",
            label: "Trust Lines (below the button)",
            type: "list",
            itemFields: [{ key: "text", label: "Text", type: "textarea" }],
            default: [
              {
                text: "Trusted by growing businesses across Prayagraj, India, and the UK — no long-term lock-in, just a team focused on measurable results.",
              },
              {
                text: "Every engagement starts with a free consultation — no fixed package, just what your business actually needs.",
              },
              {
                text: "Transparent reporting and clear communication, so you always know exactly what's happening and why.",
              },
            ],
          },
          {
            key: "marketingCtaBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "/building.jpg",
          },
          {
            key: "stagesEyebrow",
            label: "Cards Eyebrow Label",
            type: "text",
            default: "Wherever You Are, We Have a Path",
          },
          {
            key: "stages",
            label:
              "Path Cards (same order as: SEO, Digital Marketing, Social Media, Web Development, Branding, Case Studies)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "ctaText", label: "Link Text", type: "text" },
            ],
            default: [
              {
                title: "Get Found on Google",
                description:
                  "Boost visibility and attract the right audience with smarter SEO.",
                ctaText: "Explore SEO Services",
              },
              {
                title: "Own Your Digital Space",
                description:
                  "Build a stronger online presence with strategies made for growth.",
                ctaText: "Explore Digital Marketing Services",
              },
              {
                title: "Make Social Work Harder",
                description:
                  "Turn attention and engagement into meaningful business growth.",
                ctaText: "Explore Social Media Marketing",
              },
              {
                title: "Build a Website That Sells",
                description:
                  "Create a website that engages visitors and drives conversions.",
                ctaText: "Explore Web Development Services",
              },
              {
                title: "Make Your Brand Stand Out",
                description:
                  "Build a memorable identity that makes your business impossible to ignore.",
                ctaText: "Explore Branding Services",
              },
              {
                title: "See Growth in Action",
                description:
                  "Explore our work, strategies, and results for growing businesses.",
                ctaText: "View Our Industries",
              },
            ],
          },
        ],
      },
      {
        key: "contactFaq",
        label: "FAQs",
        fields: [
          {
            key: "contactFaqEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "Got Questions?",
          },
          {
            key: "contactFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "contactFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              {
                question: "How can I get started with BizzBuzz Creations?",
                answer:
                  "You can get started by filling out our contact form and booking a free consultation. We'll discuss your business goals, challenges, requirements, and the right digital marketing or technology solution for you.",
              },
              {
                question:
                  "Does BizzBuzz Creations provide digital marketing services in Prayagraj?",
                answer:
                  "Yes. BizzBuzz Creations is a digital marketing agency serving businesses in Prayagraj, across India, and worldwide, with services including SEO, social media marketing, Google Ads, web design, and web development.",
              },
              {
                question:
                  "What digital marketing services does BizzBuzz Creations offer?",
                answer:
                  "We provide SEO, social media marketing, Google Ads, web design, web development, content marketing, and other digital solutions designed to improve online visibility, generate leads, and support business growth.",
              },
              {
                question:
                  "Can BizzBuzz Creations work with businesses outside India?",
                answer:
                  "Yes. We work with businesses beyond India and can provide digital marketing, website development, and other digital solutions for brands targeting international markets.",
              },
              {
                question:
                  "How much do digital marketing and web development services cost?",
                answer:
                  "The cost depends on your goals, project scope, services required, and target market. Contact us for a free consultation and a customized proposal based on your specific requirements.",
              },
              {
                question:
                  "How quickly can I expect results from digital marketing?",
                answer:
                  "The timeline depends on the service and your goals. SEO generally requires consistent effort over time, while paid advertising can generate visibility and leads faster. We create a strategy based on your business objectives and track performance along the way.",
              },
            ],
          },
        ],
      },
      {
        key: "joinTeam",
        label: "Join Our Team!",
        fields: [
          {
            key: "joinTeamEyebrow",
            label: "Eyebrow Label",
            type: "text",
            default: "We’re Always Looking for Great Talent",
          },
          {
            key: "joinTeamHeading",
            label: "Heading",
            type: "text",
            default: "Join Our Team!",
          },
          {
            key: "joinTeamParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Bring your ideas. Build your skills. Create work you're proud of.",
          },
          {
            key: "joinTeamEmailButtonText",
            label: "Email Button Text",
            type: "text",
            default: "Drop An Email",
          },
          {
            key: "joinTeamCareersButtonText",
            label: "Careers Button Text",
            type: "text",
            default: "See All Careers",
          },
          {
            key: "joinTeamImage1",
            label: "Image",
            type: "image",
            default: "/team-images/team-5.jpeg",
          },
        ],
      },
    ],
  },
  {
    key: "our-team",
    label: "Our Team Page",
    sections: [
      {
        key: "teamHero",
        label: "Hero",
        fields: [
          {
            key: "teamHeroHeading",
            label: "Heading",
            type: "text",
            default: "The Humans Behind the Hustle",
          },
          {
            key: "teamHeroSubheading",
            label: "Subheading",
            type: "text",
            default: "Strategy. Creativity. Technology. One Team.",
          },
          {
            key: "teamHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Meet the marketers, strategists, designers, developers, and digital specialists behind BizzBuzz Creations. Our team brings together diverse expertise to build smarter digital strategies and meaningful growth for businesses across Prayagraj, India, and worldwide.",
          },
          {
            key: "teamHeroCtaText",
            label: "Button Text",
            type: "text",
            default: "Meet the Team",
          },
          {
            key: "teamHeroSlides",
            label: "Background Slideshow Images",
            type: "list",
            itemFields: [{ key: "image", label: "Image", type: "image" }],
            default: [
              { image: "/team-images/team-5.jpeg" },
              { image: "/team-images/team-6.jpeg" },
              { image: "/team-images/team-2.jpeg" },
              { image: "/team-images/team-13.jpeg" },
            ],
          },
        ],
      },
      {
        key: "founders",
        label: "Founders",
        fields: [
          {
            key: "foundersHeading",
            label: "Heading",
            type: "text",
            default: "Meet the Founders",
          },
          {
            key: "foundersSubheading",
            label: "Subheading",
            type: "text",
            default: "The Minds Behind BizzBuzz Creations",
          },
          {
            key: "foundersParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "BizzBuzz Creations was built on a simple belief: digital marketing should connect creativity with measurable business outcomes. Our founders combine entrepreneurial thinking, marketing expertise, and a long-term vision to build solutions that help businesses grow with clarity and confidence.",
          },
          {
            key: "founders",
            label: "Founder Cards (icon order fixed: Crown, Users) — hover to flip and reveal LinkedIn/Instagram",
            type: "list",
            itemFields: [
              { key: "name", label: "Name", type: "text" },
              { key: "role", label: "Role", type: "text" },
              { key: "photo", label: "Photo (replaces the icon placeholder)", type: "image" },
              { key: "linkedin", label: "LinkedIn URL", type: "text" },
              { key: "instagram", label: "Instagram URL", type: "text" },
            ],
            default: [
              { name: "Abheuday Mishra", role: "Founder & CEO", photo: "/person-image.jpg", linkedin: "https://www.linkedin.com/in/abheuday-mishra?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "" },
              { name: "Utkarsh Mishra", role: "Co-Founder & Director", photo: "/person-image.jpg", linkedin: "https://www.linkedin.com/in/utkarsh-mishra-293ba1209?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "" },
            ],
          },
        ],
      },
      {
        key: "leaders",
        label: "Leadership Team",
        fields: [
          {
            key: "leadersHeading",
            label: "Heading",
            type: "text",
            default: "Meet Our Leadership Team",
          },
          {
            key: "leadersSubheading",
            label: "Subheading",
            type: "text",
            default: "The People Driving Strategy, Growth & Execution",
          },
          {
            key: "leadersParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Our leadership team brings together expertise across digital marketing, technology, business strategy, and operations. They stay closely involved in the work, guide our teams, and help turn business objectives into focused strategies and effective digital solutions.",
          },
          {
            key: "leaders",
            label: "Leader Cards (icon order fixed: SEO, Paid Ads, Creative, Engineering, AI, Consultancy, Team) — hover to flip and reveal name + LinkedIn/Instagram. No department tag anymore — just name + role. A real Photo replaces the icon placeholder once set.",
            type: "list",
            itemFields: [
              { key: "role", label: "Role", type: "text" },
              { key: "name", label: "Name (shown on the back, once finalized)", type: "text" },
              { key: "photo", label: "Photo (replaces the icon placeholder)", type: "image" },
              { key: "linkedin", label: "LinkedIn URL", type: "text" },
              { key: "instagram", label: "Instagram URL", type: "text" },
            ],
            default: [
              { role: "Compliance Manager", name: "Abhay Sharma", photo: "/team-images/abhay.jpeg", linkedin: "", instagram: "" },
              { role: "Process Manager", name: "Kautic Jaiswal", photo: "/team-images/kautic.jpeg", linkedin: "", instagram: "" },
              { role: "Team Leader", name: "Swapnil Singh", photo: "/team-images/swapnil.jpeg", linkedin: "", instagram: "" },
              { role: "Organizational Manager", name: "Shruti Singh", photo: "/team-images/shruti.jpeg", linkedin: "", instagram: "" },
              { role: "HR", name: "Aley Saiyyadah Rizvi", photo: "/team-images/aley.jpeg", linkedin: "", instagram: "" },
              { role: "IT Manager", name: "Md. Shameem", photo: "/team-images/shameem.jpeg", linkedin: "", instagram: "" },
              { role: "Accounts and Management", name: "Ankit Kumar Yadav", photo: "/team-images/ankit.jpeg", linkedin: "", instagram: "" },
            ],
          },
        ],
      },
      {
        key: "teamGroups",
        label: "Meet Our Team (BPO & R&D)",
        fields: [
          {
            key: "teamGroupsHeading",
            label: "Heading",
            type: "text",
            default: "Meet Our Team",
          },
          {
            key: "teamGroups",
            label: "Team Group Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "tagline", label: "Tagline", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
              { key: "image", label: "Image", type: "image" },
            ],
            default: [
              {
                title: "Meet Our BPO Team",
                tagline: "The People Keeping Every Customer Interaction Moving",
                desc: "Our BPO team handles customer support, lead follow-ups, communication, and day-to-day customer interactions, helping businesses stay responsive while creating smoother experiences for their customers.",
                image: "/team-images/team-bpo.jpeg",
              },
              {
                title: "Meet Our R&D Team",
                tagline: "Exploring What's Next in Digital",
                desc: "Our R&D team researches and tests emerging technologies across AI search, SEO, automation, digital tools, and evolving search behaviour. Their work helps us turn new developments into practical strategies and smarter solutions for the businesses we serve.",
                image: "/team-images/team-rnd.jpeg",
              },
            ],
          },
        ],
      },
      {
        key: "specialties",
        label: "What Each Team Brings",
        fields: [
          {
            key: "specialtiesHeading",
            label: "Heading",
            type: "text",
            default: "What Each Team Brings",
          },
          {
            key: "specialtiesSubheading",
            label: "Subheading",
            type: "text",
            default: "One Team. Multiple Specialities.",
          },
          {
            key: "teamSpecialties",
            label: "Specialty Cards (icon order fixed: Marketing, Creative, Technology, Strategy, BPO, R&D)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Digital Marketing", desc: "Our marketing specialists combine SEO, paid advertising, social media, content, and campaign strategy to help businesses reach the right audiences and create measurable digital growth." },
              { title: "Creative", desc: "Our creative team brings together branding, graphic design, visual content, and creative campaigns to help businesses communicate clearly, build recognition, and create memorable digital experiences." },
              { title: "Technology", desc: "Our technology specialists work across web development, website optimisation, integrations, and digital solutions, creating reliable digital experiences designed around business and customer needs." },
              { title: "Strategy", desc: "Our strategists connect research, analytics, positioning, planning, and business goals to create focused digital roadmaps that give every campaign and digital initiative a clear direction." },
              { title: "BPO & Support", desc: "Our BPO and support specialists manage customer communication, lead follow-ups, support operations, and day-to-day interactions, helping businesses deliver responsive and consistent customer experiences." },
              { title: "R&D", desc: "Our R&D specialists explore AI search, automation, emerging technologies, and evolving digital trends to help our teams discover smarter approaches and prepare businesses for what's next." },
            ],
          },
        ],
      },
      {
        key: "whyItWorks",
        label: "Why It Works Together",
        fields: [
          {
            key: "whyItWorksHeading",
            label: "Heading",
            type: "text",
            default: "Why It Works Together",
          },
          {
            key: "whyItWorks",
            label: "Cards",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "No Handoffs", desc: "Every project moves through one connected team, not separate vendors passing work between each other — so nothing gets lost in translation." },
              { title: "Decisions Backed by Data", desc: "Every recommendation — creative, technical, or strategic — is grounded in real performance data, not opinion or trend-chasing." },
              { title: "Built to Last, Not Just Launch", desc: "We design systems and strategies meant to keep working long after launch — not quick wins that fade once the campaign ends." },
              { title: "Full Accountability", desc: "Because the work stays in-house, one team owns the outcome end to end — no outsourced pieces to point fingers at when something needs fixing." },
            ],
          },
        ],
      },
      {
        key: "teamContact",
        label: "Contact Form Section",
        fields: [
          {
            key: "teamContactHeading",
            label: "Heading",
            type: "text",
            default: "Let’s Turn Your Digital Goals Into a Growth Plan",
          },
          {
            key: "teamContactParagraph",
            label: "Paragraph",
            type: "textarea",
            default: "",
          },
          {
            key: "teamContactFormHeading",
            label: "Form Heading",
            type: "text",
            default: "Send Us a Message",
          },
          {
            key: "teamContactFormButtonText",
            label: "Form Button Text",
            type: "text",
            default: "Send Message",
          },
        ],
      },
      {
        key: "teamCta",
        label: "Closing CTA (Work With Us / Join Us)",
        fields: [
          {
            key: "teamCtaHeading",
            label: "Heading",
            type: "text",
            default: "Want to Work With the People Behind the Work?",
          },
          {
            key: "teamCtaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Whether you're looking for a digital marketing partner or interested in joining our growing team, we'd love to hear from you.",
          },
          {
            key: "teamCtaPrimaryText",
            label: "Primary Button Text (For Businesses, links to Contact)",
            type: "text",
            default: "Work With Our Team",
          },
          {
            key: "teamCtaSecondaryText",
            label: "Secondary Button Text (For Candidates, links to Careers)",
            type: "text",
            default: "Explore Careers",
          },
        ],
      },
    ],
  },
  {
    key: "bpo-team",
    label: "Meet Our BPO Team",
    sections: [
      {
        key: "bpoTeamPage",
        label: "BPO Team Page",
        fields: [
          {
            key: "bpoTeamHeading",
            label: "Page Heading",
            type: "text",
            default: "Meet Our BPO Team",
          },
          {
            key: "bpoTeamMembers",
            label: "Team Members (icon shown only as a fallback when no photo is set)",
            type: "list",
            itemFields: [
              { key: "name", label: "Name", type: "text" },
              { key: "role", label: "Role", type: "text" },
              { key: "photo", label: "Photo", type: "image" },
            ],
            default: [
              { name: "Abhishek Awasthi", role: "Customer Support Executive", photo: "/person-image.jpg" },
              { name: "Akanksha Pandey", role: "Senior Advisor", photo: "/person-image.jpg" },
              { name: "Akash Singh", role: "Advisor", photo: "/team-images/akash.jpeg" },
              { name: "Anurag Singh Bisht", role: "Advisor", photo: "/person-image.jpg" },
              { name: "Digvijay Singh", role: "Advisor", photo: "/person-image.jpg" },
              { name: "Harsh Singh", role: "Advisor", photo: "/team-images/harsh.jpeg" },
              { name: "Harshvardhan Tripathi", role: "Advisor", photo: "/team-images/harshvardhan.jpeg" },
              { name: "Hritik Kesarwani", role: "Advisor", photo: "/team-images/hritik.jpeg" },
              { name: "Ishika Kesarwani", role: "Compliance Manager", photo: "/team-images/ishika.jpeg" },
              { name: "Karan Agarhari", role: "Advisor", photo: "/team-images/karan.jpeg" },
              { name: "Kanchi Singh", role: "Advisor", photo: "/team-images/kanchi.jpeg" },
              { name: "Kushal Singh", role: "Senior Advisor", photo: "/team-images/kushal.jpeg" },
              { name: "Kartikae Ojha", role: "Strategy Manager", photo: "/person-image.jpg" },
              { name: "Manasvi Gupta", role: "Advisor", photo: "/team-images/manasvi.jpeg" },
              { name: "Monika Sharma", role: "Advisor", photo: "/team-images/monika.jpeg" },
              { name: "Shreya Dubey", role: "Advisor", photo: "/team-images/shreya.jpeg" },
              { name: "Ziauddin Khan", role: "Advisor", photo: "/person-image.jpg" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "rnd-team",
    label: "Meet Our R&D Team",
    sections: [
      {
        key: "rndTeamPage",
        label: "R&D Team Page",
        fields: [
          {
            key: "rndTeamHeading",
            label: "Page Heading",
            type: "text",
            default: "Meet Our R&D Team",
          },
          {
            key: "rndTeamMembers",
            label: "Team Members (icon shown only as a fallback when no photo is set)",
            type: "list",
            itemFields: [
              { key: "name", label: "Name", type: "text" },
              { key: "role", label: "Role", type: "text" },
              { key: "photo", label: "Photo", type: "image" },
              { key: "linkedin", label: "LinkedIn URL", type: "text" },
            ],
            default: [
              { name: "Paridhi Verma", role: "Data Analyst", photo: "/team-images/paridhi.png", linkedin: "https://www.linkedin.com/in/paridhi-verma/" },
              { name: "Md. Shaquib", role: "SEO Specialist", photo: "/team-images/Shaquib.png", linkedin: "https://www.linkedin.com/in/shaquib-mohd/" },
              { name: "Khushi Gupta", role: "Content Writer & SEO Executive", photo: "/team-images/khushi.jpeg", linkedin: "https://www.linkedin.com/in/khushi-gupta-8675a7339/" },
              { name: "Mudit Srivastava", role: "Graphic Designer & Video Editor", photo: "/team-images/mudit.png", linkedin: "https://www.linkedin.com/in/mudit-srivastava-a4086320b/" },
              { name: "Kushmal Arora", role: "Full Stack Developer", photo: "/team-images/Kushmal.jpg", linkedin: "https://www.linkedin.com/in/kushmalarora017/" },
              { name: "Shashwat Upadhayay", role: "DevOps Engineer", photo: "/team-images/shashwat.png", linkedin: "https://www.linkedin.com/in/shashwat-upadhyay-swtu/" },
              { name: "Tejash Yadav", role: "DevOps Engineer", photo: "/team-images/Tejash.jpg", linkedin: "https://www.linkedin.com/in/tejashh/" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "career",
    label: "Career Page",
    sections: [
      {
        key: "careerHero",
        label: "Hero",
        fields: [
          {
            key: "careerHeroHeading",
            label: "Heading",
            type: "text",
            default: "Work Where Your Ideas Matter",
          },
          {
            key: "careerHeroSubheading",
            label: "Subheading",
            type: "text",
            default: "Learn by Doing. Grow by Owning.",
          },
          {
            key: "careerHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "At BizzBuzz Creations, we believe great work comes from trust, ownership, and collaboration. Our flat structure means fewer layers, faster decisions, and more room to turn your ideas into real outcomes.",
          },
          {
            key: "careerHeroCtaText",
            label: "Button Text",
            type: "text",
            default: "Apply Now",
          },
          {
            key: "careerHeroSlides",
            label: "Background Slideshow Images",
            type: "list",
            itemFields: [{ key: "image", label: "Image", type: "image" }],
            default: [
              { image: "/team-images/team-5.jpeg" },
              { image: "/team-images/team-13.jpeg" },
              { image: "/team-images/team-8.jpeg" },
              { image: "/team-images/team-2.jpeg" },
            ],
          },
        ],
      },
      {
        key: "careerWhyUs",
        label: "Why Work With Us",
        fields: [
          {
            key: "careerWhyUsHeading",
            label: "Heading",
            type: "text",
            default: "Roots in Prayagraj, India. An International Outlook.",
          },
          {
            key: "careerWhyUsParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "We're a growing agency with roots in Prayagraj, India, and clients across the world. From day one, you'll work on real challenges across digital marketing, technology, design, and strategy — building practical skills instead of simply following a checklist. We value people who stay curious, take initiative, share ideas, and want to keep getting better. Your growth matters here, because when our people grow, BizzBuzz Creations grows too.",
          },
          {
            key: "careerWhyUsImage",
            label: "Image",
            type: "image",
            default: "/team-images/team-5.jpeg",
          },
        ],
      },
      {
        key: "openPositions",
        label: "Open Positions",
        fields: [
          {
            key: "openPositionsHeading",
            label: "Heading",
            type: "text",
            default: "Open Positions",
          },
        ],
      },
      {
        key: "careerJoinTeam",
        label: "Grow Beyond Your Job Description",
        fields: [
          {
            key: "careerJoinHeading",
            label: "Heading",
            type: "text",
            default: "Grow Beyond Your Job Description",
          },
          {
            key: "careerJoinTagline",
            label: "Tagline",
            type: "text",
            default: "Your role here is a starting point, not a ceiling.",
          },
          {
            key: "careerJoinParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "At BizzBuzz Creations, growth isn't limited to a job title. You'll have opportunities to explore new skills, work across disciplines, take on responsibility, and discover where your strengths can take you.",
          },
          {
            key: "careerJoinPoints",
            label: "Points (icon order fixed: Learn, Ownership, Growth)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Learn by Doing", desc: "Work on real campaigns and business challenges." },
              { title: "Take Ownership", desc: "Bring ideas forward and take responsibility for your work." },
              { title: "Keep Growing", desc: "Develop skills through hands-on experience and collaboration." },
            ],
          },
          {
            key: "careerJoinCtaText",
            label: "Button Text",
            type: "text",
            default: "Apply Now",
          },
          {
            key: "careerJoinImage1",
            label: "Image 1",
            type: "image",
            default: "/image-5.webp",
          },
          {
            key: "careerJoinImage2",
            label: "Image 2",
            type: "image",
            default: "/team-images/team-14.jpeg",
          },
          {
            key: "careerJoinImage3",
            label: "Image 3",
            type: "image",
            default: "/team-images/team-5.jpeg",
          },
          {
            key: "careerJoinImage4",
            label: "Image 4",
            type: "image",
            default: "/team-images/team-11.jpeg",
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "how-we-work",
    label: "How We Work Page",
    sections: [
      {
        key: "hwwHero",
        label: "Hero",
        fields: [
          {
            key: "hwwHeroHeading",
            label: "Heading",
            type: "text",
            default: "We Don't Wing It. Here's Our Process",
          },
          {
            key: "hwwHeroSubheading",
            label: "Subheading",
            type: "text",
            default: "A Clear, Repeatable System Behind Every Campaign We Run",
          },
          {
            key: "hwwHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "No vague promises, no \"we'll figure it out as we go.\" Every project at BizzBuzz Creations follows the same structured process of audit, strategy, execution, and reporting — so you always know what's happening, why it's happening, and what results to expect.",
          },
          {
            key: "hwwHeroCtaText",
            label: "Button Text",
            type: "text",
            default: "See How It Works",
          },
          {
            key: "hwwHeroImage",
            label: "Hero Image (right side)",
            type: "image",
            default: "/how we work and function.png",
          },
        ],
      },
      {
        key: "principles",
        label: "Our Principles",
        fields: [
          {
            key: "principlesHeading",
            label: "Heading",
            type: "text",
            default: "The Principles That Power Every Client Partnership",
          },
          {
            key: "principlesParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "No complicated playbooks or hidden processes. Just six principles that shape how we communicate, collaborate, execute, and grow with every client.",
          },
          {
            key: "principles",
            label: "Principle Cards (icon order fixed: Transparency, Collaboration, Speed, Ownership, Security, Innovation)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "tagline", label: "Tagline", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Transparency", tagline: "Clear From Start to Finish", desc: "You'll always know what we're doing, why we're doing it, and what comes next through clear communication and honest reporting." },
              { title: "Collaboration", tagline: "Better Work, Built Together", desc: "We combine your business knowledge with our digital expertise, keeping communication open and every important decision collaborative." },
              { title: "Speed", tagline: "Momentum Without Compromise", desc: "Focused priorities and efficient workflows help us move quickly, stay organised, and keep progress moving without sacrificing quality." },
              { title: "Ownership", tagline: "Your Business Stays Yours", desc: "Your website, advertising accounts, analytics, data, and digital assets remain under your control, giving you complete ownership at every stage." },
              { title: "Security", tagline: "Your Data, Handled Responsibly", desc: "We use controlled access and responsible data practices to protect sensitive information, with NDAs available when additional confidentiality is required." },
              { title: "Innovation", tagline: "Ready for What Comes Next", desc: "We continuously explore SEO, AI search, automation, and emerging digital trends to build strategies that adapt as technology evolves." },
            ],
          },
        ],
      },
      {
        key: "hwwRoadmap",
        label: "5-Step Engagement Roadmap",
        fields: [
          {
            key: "hwwRoadmapHeading",
            label: "Heading",
            type: "text",
            default: "Our 5-Step Engagement Roadmap",
          },
          {
            key: "hwwRoadmapSteps",
            label: "Steps",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Discover & Audit", desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities." },
              { title: "Strategize", desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget." },
              { title: "Create & Execute", desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars." },
              { title: "Optimize & Scale", desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI." },
              { title: "Report & Grow", desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day." },
            ],
          },
        ],
      },
      {
        key: "tools",
        label: "The Tools Behind Every Strategy",
        fields: [
          {
            key: "toolsHeading",
            label: "Heading",
            type: "text",
            default: "The Tools Behind Every Strategy",
          },
          {
            key: "toolsParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "We combine industry-leading platforms with our own in-house systems to plan, execute, and track every campaign with precision.",
          },
          {
            key: "tools",
            label: "Tool Cards (icon order fixed: Research, Advertising, Automation, AI)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Research & Analytics", desc: "Google Analytics, Google Search Console, SEMrush, and Ahrefs power our audits, keyword research, and performance tracking." },
              { title: "Advertising & Campaigns", desc: "Google Ads, Meta Ads Manager, and conversion tracking tools help us run and optimise every paid campaign with real data." },
              { title: "Automation & CRM", desc: "We build and use our own CRM and workflow automation systems — the same infrastructure that runs our clients' campaigns and our own operations." },
              { title: "AI & Emerging Tech", desc: "We work with AI-powered content, chatbot, and search optimisation tools to keep strategies ahead of how search and customer behaviour are evolving." },
            ],
          },
        ],
      },
      {
        key: "onboarding",
        label: "What to Expect, and When (Timeline Carousel)",
        fields: [
          {
            key: "onboardingHeading",
            label: "Heading",
            type: "text",
            default: "What to Expect, and When",
          },
          {
            key: "onboardingParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Every business is different, but here's a realistic timeline for how our process typically unfolds.",
          },
          {
            key: "onboardingSteps",
            label: "Timeline Cards (icon order fixed: Discover, Strategise, Create, Optimise, Report)",
            type: "list",
            itemFields: [
              { key: "step", label: "Timeframe Tag", type: "text" },
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { step: "1 TO 2 WEEKS", title: "Discover & Audit", desc: "We review your business, competitors, and current digital presence to identify real opportunities before recommending anything." },
              { step: "1 WEEK", title: "Strategise", desc: "We turn audit insights into a focused roadmap across the right channels, matched to your goals and budget." },
              { step: "ONGOING", title: "Create & Execute", desc: "Campaigns, content, and websites are built and launched in phases, so results start compounding early rather than all at once." },
              { step: "CONTINUOUS", title: "Optimise & Scale", desc: "We don't stop after launch — testing, refining, and scaling run throughout the engagement, not just at the start." },
              { step: "MONTHLY", title: "Report & Grow", desc: "You receive clear reporting on a consistent monthly cycle, with strategy calls to review what's working and what's next." },
            ],
          },
        ],
      },
      {
        key: "expectations",
        label: "What You Can Expect",
        fields: [
          {
            key: "expectationsHeading",
            label: "Heading",
            type: "text",
            default: "What You Can Expect",
          },
          {
            key: "expectationsSubheading",
            label: "Subheading",
            type: "text",
            default: "Clear Communication. Accountable Execution. Continuous Improvement.",
          },
          {
            key: "expectationsParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Working with BizzBuzz Creations means knowing where your project stands, what we're working toward, and how we're improving it along the way.",
          },
          {
            key: "expectations",
            label: "Cards (icon order fixed: Communication, Reporting, Expertise, Optimisation)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Clear Communication", desc: "Regular updates, accessible communication, and straightforward explanations keep everyone aligned." },
              { title: "Transparent Reporting", desc: "Understand your performance, progress, priorities, and opportunities without confusing marketing jargon." },
              { title: "Dedicated Expertise", desc: "Your work is supported by specialists across strategy, marketing, creative, technology, and performance." },
              { title: "Continuous Optimisation", desc: "We keep analysing, testing, learning, and improving as your business and digital landscape evolve." },
            ],
          },
        ],
      },
      {
        key: "hwwIndustries",
        label: "Industries We Apply This Process To",
        fields: [
          {
            key: "hwwIndustriesHeading",
            label: "Heading",
            type: "text",
            default: "Industries We Apply This Process To",
          },
          {
            key: "hwwIndustriesSubheading",
            label: "Subheading",
            type: "text",
            default: "One Process. Every Industry.",
          },
          {
            key: "hwwIndustriesParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "This same structured process — discover, strategize, execute, optimize, and report — powers digital growth across every industry we work with, from healthcare and real estate to e-commerce, education, and beyond.",
          },
        ],
      },
      {
        key: "categories",
        label: "Everything Your Business Needs to Grow Digitally",
        fields: [
          {
            key: "categoriesHeading",
            label: "Heading",
            type: "text",
            default: "Everything Your Business Needs to Grow Digitally",
          },
          {
            key: "categoriesParagraph",
            label: "Paragraph",
            type: "textarea",
            default: "One connected team across marketing, technology, automation, and business growth.",
          },
        ],
      },
      {
        key: "hwwFaq",
        label: "FAQs",
        fields: [
          {
            key: "hwwFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "hwwFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              { question: "How long does it take to see results with BizzBuzz Creations?", answer: "Timelines vary by service — paid campaigns can show results within days, while SEO typically takes 3 to 6 months for measurable ranking growth." },
              { question: "Do I get reports on how my campaigns are performing?", answer: "Yes. Every client receives transparent monthly reporting along with regular strategy calls to review progress and next steps." },
              { question: "Will I own my website, ad accounts, and data?", answer: "Yes. Your website, advertising accounts, analytics, and digital assets remain fully under your ownership and control at every stage." },
              { question: "What happens after the strategy is created?", answer: "Our specialists execute the strategy across the relevant channels — SEO, content, paid ads, or website — then continuously optimise based on real performance data." },
              { question: "Do you follow this same process for every industry?", answer: "Yes. The core process stays consistent, but strategy, channels, and priorities are adapted to fit each industry's audience and goals." },
              { question: "What if my business needs change halfway through?", answer: "Our process is built to adapt — strategy, priorities, and services can be adjusted at any stage as your goals or market conditions evolve." },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Book a Consultation)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Ready to See This Process Work for Your Business?",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "No guesswork, no vague timelines — just a clear process built to turn strategy into measurable growth. Book a free consultation and see exactly how we'd approach your business.",
          },
          {
            key: "ctaButtonText",
            label: "Button Text",
            type: "text",
            default: "Book Your Free Consultation",
          },
        ],
      },
    ],
  },
  {
    key: "guides",
    label: "Guides Page",
    sections: [
      {
        key: "guidesHero",
        label: "Hero",
        fields: [
          {
            key: "guidesHeroHeading",
            label: "Heading",
            type: "text",
            default: "Digital Marketing Guides & Resources",
          },
          {
            key: "guidesHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Practical, no-fluff guides and insights on SEO, paid ads, social media, websites, content, AI, and digital growth.",
          },
          {
            key: "guidesHeroPrimaryCtaText",
            label: "Primary Button Text",
            type: "text",
            default: "Explore Our Guides",
          },
          {
            key: "guidesHeroSecondaryCtaText",
            label: "Secondary Button Text",
            type: "text",
            default: "Need Help With Marketing?",
          },
          {
            key: "guidesHeroImage",
            label: "Background Image",
            type: "image",
            default: "/guide.jpg",
          },
        ],
      },
      {
        key: "allGuides",
        label: "All Guides",
        fields: [
          {
            key: "allGuidesHeading",
            label: "Heading",
            type: "text",
            default: "All Guides",
          },
          {
            key: "guides",
            label: "Guide Category Cards (icon order fixed — Digital Marketing, SEO, AI, Social, Web Dev, Business Dev, Google Ads, Backlinks, Content, SEO/AEO/GEO)",
            type: "list",
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "body", label: "Description", type: "textarea" },
            ],
            default: [
              { title: "Digital Marketing Services", body: "Explore practical strategies, trends, and insights to strengthen your digital presence and accelerate business growth." },
              { title: "SEO Services", body: "Discover proven SEO strategies, techniques, and insights to improve rankings, visibility, and organic traffic." },
              { title: "AI Marketing", body: "Explore AI-powered marketing strategies, tools, trends, and practical ideas for smarter digital growth." },
              { title: "Social Media Marketing", body: "Learn social media strategies, content ideas, trends, and techniques to build engagement and grow your brand." },
              { title: "Website Development Services", body: "Discover website development insights, technologies, strategies, and tips for creating better digital experiences." },
              { title: "Business Development", body: "Explore practical strategies, opportunities, and insights to build partnerships, attract customers, and drive growth." },
              { title: "Google Ads Services", body: "Learn Google Ads strategies, optimization techniques, campaign insights, and tips for improving advertising results." },
              { title: "Backlink Strategy", body: "Discover effective backlink strategies, link-building insights, and techniques for building stronger search authority." },
              { title: "Content Marketing & SEO", body: "Learn how content and SEO work together to attract audiences, improve visibility, and generate organic growth." },
              { title: "SEO, AEO & GEO", body: "Explore modern search strategies for traditional search, answer engines, and AI-powered generative search experiences." },
            ],
          },
        ],
      },
      {
        key: "guidesSidebar",
        label: "Sidebar Help Card",
        fields: [
          {
            key: "guidesSidebarHeading",
            label: "Heading",
            type: "text",
            default: "Want Hands-On Help With Any of This?",
          },
          {
            key: "guidesSidebarParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Reading is a great start — but a strategy built for your specific business moves faster. Talk to our team and we'll turn these guides into a clear, actionable plan.",
          },
          {
            key: "guidesSidebarPrimaryText",
            label: "Primary Button Text (links to Contact)",
            type: "text",
            default: "Schedule a Call",
          },
          {
            key: "guidesSidebarSecondaryText",
            label: "Secondary Button Text (links to Services)",
            type: "text",
            default: "View Our Services",
          },
        ],
      },
      {
        key: "guidesFaq",
        label: "FAQs",
        fields: [
          {
            key: "guidesFaqHeading",
            label: "Heading",
            type: "text",
            default: "Frequently Asked Questions",
          },
          {
            key: "guidesFaqItems",
            label: "Questions & Answers",
            type: "list",
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
            default: [
              { question: "What topics are covered in the BizzBuzz Creations guides?", answer: "Our guides cover digital marketing, SEO, AI marketing, social media marketing, website development, Google Ads, content marketing, backlink strategies, business development, and SEO, AEO & GEO." },
              { question: "Are these digital marketing guides suitable for beginners?", answer: "Yes. Our guides are created for beginners, marketers, business owners, and professionals looking for practical insights, strategies, and actionable digital marketing knowledge." },
              { question: "How can these guides help my business?", answer: "Our guides provide practical strategies and insights to help you improve online visibility, attract the right audience, generate leads, and make better digital marketing decisions." },
              { question: "How often are new guides and insights published?", answer: "We regularly publish new guides covering emerging trends, proven strategies, industry updates, tools, and important developments across digital marketing and technology." },
              { question: "Do your guides cover the latest SEO and AI search trends?", answer: "Yes. We cover evolving SEO practices along with AEO, GEO, AI search, Google updates, and other changes shaping how businesses are discovered online." },
              { question: "Can I get professional help if I need help implementing these strategies?", answer: "Yes. If you need help applying the strategies covered in our guides, you can explore our digital marketing services or contact BizzBuzz Creations for a consultation." },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
  {
    key: "faq",
    label: "FAQ Page",
    sections: [
      {
        key: "faqHero",
        label: "Hero",
        fields: [
          {
            key: "faqHeroHeadingLine1",
            label: "Heading Line 1",
            type: "text",
            default: "Frequently Asked",
          },
          {
            key: "faqHeroHeadingLine2",
            label: "Heading Line 2",
            type: "text",
            default: "Questions",
          },
          {
            key: "faqHeroSubheading",
            label: "Subheading",
            type: "text",
            default: "Answers to What Businesses Ask Before They Grow With Us",
          },
          {
            key: "faqHeroParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Have questions about SEO, Google Ads, social media, web development, AI automation, or working with BizzBuzz Creations? Find clear answers below — and if you don't see what you're looking for, our team is one message away.",
          },
          {
            key: "faqHeroCtaText",
            label: "Button Text (links to Contact page)",
            type: "text",
            default: "Ask Us Directly",
          },
          {
            key: "faqHeroBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "/FAQ.png",
          },
        ],
      },
      {
        key: "faqTopics",
        label: "FAQ Topics",
        fields: [
          {
            key: "faqTopics",
            label: "Topics (icon order stays fixed — About, SEO, Paid Ads, Social, Web Dev, AI, Content, CRM/BPO, Consultancy, Working With Us)",
            type: "list",
            itemFields: [
              { key: "label", label: "Topic Title", type: "text" },
              { key: "description", label: "Topic Description", type: "text" },
              {
                key: "faqs",
                label: "Questions & Answers",
                type: "list",
                itemFields: [
                  { key: "question", label: "Question", type: "text" },
                  { key: "answer", label: "Answer", type: "textarea" },
                ],
              },
            ],
            default: [
              {
                label: "About BizzBuzz Creations",
                description: "Who we are, where we work, and how we work with clients.",
                faqs: [
                  { question: "What does BizzBuzz Creations do?", answer: "BizzBuzz Creations is a full-stack digital marketing and business solutions agency offering SEO, Google Ads, social media marketing, website development, AI automation, and business consultancy under one team, serving clients in India and worldwide." },
                  { question: "Does BizzBuzz Creations work with international clients?", answer: "Yes, BizzBuzz Creations works with businesses across India and internationally, using the same team, process, and communication standards regardless of location." },
                  { question: "Can I hire BizzBuzz Creations for just one service?", answer: "Yes, you can start with a single service such as SEO, Google Ads, or web development, and add more services later as your business needs grow; nothing is bundled or forced." },
                  { question: "How much does digital marketing cost with BizzBuzz Creations?", answer: "Pricing depends on the services and scope required. Every engagement starts with a free consultation so you receive a clear quote before committing to anything." },
                  { question: "How do I get started with BizzBuzz Creations?", answer: "Book a free consultation. The team reviews your business, current online presence, and goals, then recommends a starting point with no obligation." },
                  { question: "What makes BizzBuzz Creations different from other agencies?", answer: "BizzBuzz Creations offers one team, one point of contact, and full ownership of your accounts and data — avoiding vendor lock-in or juggling multiple agencies for one strategy." },
                ],
              },
              {
                label: "SEO FAQs",
                description: "Rankings, local search, and how SEO fits with AI search.",
                faqs: [
                  { question: "How long does SEO take to show results?", answer: "SEO typically takes 3 to 6 months to show measurable ranking and traffic improvements, depending on competition, website history, and consistency of execution." },
                  { question: "What is local SEO and do I need it?", answer: "Local SEO helps businesses rank in location-based searches like \"near me\" queries. It's essential for businesses serving a specific city or region alongside national or global reach." },
                  { question: "Does SEO still work with AI search and Google AI Overviews?", answer: "Yes. SEO remains essential — AI Overviews pull from well-structured, authoritative web content, so strong technical SEO and content quality directly influence AI search visibility." },
                  { question: "What's the difference between SEO and Google Ads?", answer: "SEO builds long-term organic visibility without ongoing ad spend, while Google Ads delivers immediate visibility through paid placements. Most businesses benefit from combining both." },
                  { question: "How much does SEO cost in India?", answer: "SEO pricing varies based on website size, competition, and goals. BizzBuzz Creations provides a custom quote after a free audit rather than fixed package pricing." },
                  { question: "Can SEO help a business rank internationally, not just in India?", answer: "Yes. International SEO involves targeting specific countries or regions through content, technical setup, and local relevance signals tailored to each target market." },
                ],
              },
              {
                label: "Google Ads & Paid Advertising FAQs",
                description: "Budgets, timelines, and getting paid campaigns to convert.",
                faqs: [
                  { question: "How much budget do I need to start Google Ads?", answer: "Google Ads budgets vary by industry and competition, but most businesses see meaningful data within a monthly spend that allows at least 15 to 20 conversions to gather performance insights." },
                  { question: "How fast do Google Ads generate leads?", answer: "Google Ads can generate leads within days of launching, unlike SEO, which takes months — making it effective for immediate visibility and lead flow." },
                  { question: "What's the difference between Google Ads and Meta Ads?", answer: "Google Ads target active search intent (people actively searching), while Meta Ads target audiences based on interests and behavior — both serve different stages of the buyer journey." },
                  { question: "Why isn't my Google Ads campaign converting?", answer: "Common causes include poor audience targeting, weak landing pages, incorrect keyword match types, or insufficient conversion tracking setup." },
                  { question: "Do I need a separate landing page for Google Ads?", answer: "Yes. A dedicated, conversion-focused landing page typically performs significantly better than sending ad traffic to a general homepage." },
                  { question: "Can Google Ads work for international or global campaigns?", answer: "Yes. Google Ads campaigns can be geo-targeted to specific countries, regions, or worldwide audiences, with budgets and bidding adjusted per market." },
                ],
              },
              {
                label: "Social Media Marketing FAQs",
                description: "Platforms, posting frequency, and measuring what matters.",
                faqs: [
                  { question: "Which social media platform is best for business growth?", answer: "The best platform depends on your audience and industry. Instagram and YouTube Shorts work well for visual/consumer brands, while LinkedIn suits B2B businesses." },
                  { question: "How often should a business post on social media?", answer: "Most businesses see steady engagement posting 3 to 5 times per week, prioritizing consistency and content quality over frequency alone." },
                  { question: "Does social media marketing help with SEO?", answer: "Social media doesn't directly impact search rankings, but it increases brand visibility, traffic, and content distribution — indirect signals that support SEO efforts." },
                  { question: "What is social commerce, and why does it matter?", answer: "Social commerce refers to selling products directly through social platforms like Instagram and Facebook Shops, reducing friction between discovery and purchase." },
                  { question: "How do you measure social media marketing success?", answer: "Success is measured through engagement rate, follower growth, website traffic from social channels, and conversions — not just likes or follower count." },
                  { question: "Can social media marketing work for global audiences?", answer: "Yes. Campaigns can be tailored by language, region, and platform preference to reach both local and international audiences effectively." },
                ],
              },
              {
                label: "Website Development FAQs",
                description: "Speed, timelines, and choosing the right platform.",
                faqs: [
                  { question: "Why does website speed matter for conversions?", answer: "A slow website increases bounce rates and lowers conversions; even a 1-second delay in load time can significantly reduce user engagement and sales." },
                  { question: "How long does it take to build a business website?", answer: "A standard business website typically takes 2 to 6 weeks to design, develop, and launch, depending on complexity and content readiness." },
                  { question: "Do I need a custom website or is a template enough?", answer: "Templates work for simple sites, but custom development offers better performance, scalability, and brand differentiation for growing businesses." },
                  { question: "Is my website's mobile-friendliness important for SEO?", answer: "Yes. Google uses mobile-first indexing, meaning your site's mobile version directly affects search rankings, not just the desktop version." },
                  { question: "What platform is best for building a business website?", answer: "The right platform depends on business needs — WordPress suits content-heavy sites, Shopify suits e-commerce, and custom-coded sites suit unique functionality requirements." },
                  { question: "Can a website be built for both local and global audiences?", answer: "Yes. Multi-region websites use geo-targeting, localized content, and technical setup like hreflang tags to serve both local and international visitors effectively." },
                ],
              },
              {
                label: "AI & Automation FAQs",
                description: "Chatbots, workflow automation, and where AI actually helps.",
                faqs: [
                  { question: "What is AI search optimization?", answer: "AI search optimization improves how a business appears in AI-powered search results and tools like Google AI Overviews, ChatGPT, and Perplexity, alongside traditional SEO." },
                  { question: "How do AI chatbots help a business?", answer: "AI chatbots automate conversations, answer common questions, qualify leads, and provide 24/7 customer support without increasing staffing costs." },
                  { question: "What is marketing automation and how does it help?", answer: "Marketing automation uses software to handle repetitive tasks like email sequences, lead follow-ups, and workflows, saving time and improving response consistency." },
                  { question: "Can AI replace a full marketing team?", answer: "No. AI tools improve efficiency and speed but work best alongside human strategy, creativity, and oversight rather than replacing a team entirely." },
                  { question: "Is AI automation expensive to implement?", answer: "Costs vary based on complexity — simple chatbot or workflow automation is relatively affordable, while custom AI systems require larger investment." },
                  { question: "How is BizzBuzz Creations different in AI implementation?", answer: "BizzBuzz Creations builds and runs its own in-house AI voice calling system and automation tools in production — not just theoretical recommendations." },
                ],
              },
              {
                label: "Content Marketing FAQs",
                description: "Blogging cadence, strategy, and content built for AI search.",
                faqs: [
                  { question: "What is content marketing and how does it help a business?", answer: "Content marketing involves creating valuable content — blogs, guides, videos — that attracts, educates, and converts potential customers, while also improving SEO visibility." },
                  { question: "How often should a business publish blog content?", answer: "Most businesses benefit from publishing 2 to 4 quality blog posts per month, prioritizing depth and search intent over frequency alone." },
                  { question: "Does content marketing work faster than SEO?", answer: "Content marketing supports SEO rather than replacing it — results typically build over months as content gains authority, backlinks, and search rankings." },
                  { question: "What type of content ranks best in AI search results?", answer: "Clear, well-structured content that directly answers specific questions using headers, concise answers, and factual accuracy performs best in AI-powered search results." },
                  { question: "Can one piece of content target multiple keywords?", answer: "Yes. A well-structured page can rank for multiple related keywords if it comprehensively covers a topic without keyword stuffing." },
                  { question: "Do I need a content strategy or just occasional blog posts?", answer: "A structured content strategy — mapped to customer journey stages and search intent — consistently outperforms random, unplanned blog posting." },
                ],
              },
              {
                label: "CRM, BPO & Call Center Solutions FAQs",
                description: "Custom CRMs, outbound calling, and call center automation.",
                faqs: [
                  { question: "What is a CRM and why does a call center need one?", answer: "A CRM (Customer Relationship Management) system organizes leads, tracks agent workflows, and centralizes reporting, helping call centers manage customer interactions efficiently." },
                  { question: "Can BizzBuzz Creations build a custom CRM for my business?", answer: "Yes. BizzBuzz Creations builds and operates its own custom CRM for BPO and call center teams, and offers similar custom-built systems for client businesses." },
                  { question: "What's the difference between a generic CRM and a custom-built one?", answer: "Generic CRMs offer standard features for broad use cases, while a custom CRM is built around a business's specific workflows, reducing unnecessary complexity." },
                  { question: "Does BizzBuzz Creations support outbound calling operations?", answer: "Yes. BizzBuzz Creations has in-house experience running outbound calling operations, including debt casework and lead qualification workflows." },
                  { question: "What is WhatsApp and workflow automation used for in a call center?", answer: "It automates lead outreach, follow-ups, and customer communication through connected workflows, reducing manual work for sales and support teams." },
                  { question: "Is a custom CRM expensive to build and maintain?", answer: "Costs depend on complexity and required integrations. A phased build — starting with core features and expanding later — keeps initial investment manageable." },
                ],
              },
              {
                label: "Business Consultancy FAQs",
                description: "Strategy, prioritization, and where consultancy fits in.",
                faqs: [
                  { question: "What does a digital business consultant actually do?", answer: "A digital business consultant reviews your current operations, market position, and growth goals, then recommends a practical roadmap combining strategy, technology, and marketing." },
                  { question: "Do I need consultancy if I already have a marketing team?", answer: "Consultancy can complement an existing team by identifying gaps, aligning strategy across departments, and recommending tools or processes the team may not have considered." },
                  { question: "How is business consultancy different from hiring an agency?", answer: "Consultancy focuses on strategy and planning, while an agency typically executes campaigns — many businesses benefit from combining both under one team." },
                  { question: "Can a consultant help decide which digital services to prioritize?", answer: "Yes. A consultant assesses your budget, goals, and current gaps to recommend which services — SEO, ads, automation, or website — deliver the fastest impact." },
                  { question: "Is business consultancy only for large companies?", answer: "No. Small and mid-sized businesses often benefit most from consultancy, since it helps prioritize limited budgets toward the highest-impact actions." },
                  { question: "How long does a typical consultancy engagement last?", answer: "It varies — some businesses need a one-time strategic roadmap, while others prefer ongoing advisory support as their operations scale." },
                ],
              },
              {
                label: "Working With BizzBuzz Creations",
                description: "Contracts, reporting, ownership, and switching services.",
                faqs: [
                  { question: "Does BizzBuzz Creations offer month-to-month contracts?", answer: "Engagement terms depend on the service and scope discussed during the free consultation — flexibility is assessed case by case rather than fixed upfront." },
                  { question: "Will I have one point of contact or multiple account managers?", answer: "BizzBuzz Creations assigns one connected team and point of contact per client, avoiding the fragmentation of juggling multiple vendors." },
                  { question: "How does BizzBuzz Creations report on campaign performance?", answer: "Clients receive clear monthly reports covering key metrics, along with ongoing optimization based on real performance data rather than vanity metrics." },
                  { question: "Who owns my website, ad accounts, and data?", answer: "Clients retain full ownership of their accounts, website, and data at all times — there is no vendor lock-in." },
                  { question: "Can I switch services later if my business needs change?", answer: "Yes. Services can be added, adjusted, or scaled as business needs evolve — nothing is locked into a rigid, fixed package." },
                  { question: "Does BizzBuzz Creations work with businesses outside India?", answer: "Yes. BizzBuzz Creations works with international clients using the same team, tools, and communication process as domestic clients." },
                ],
              },
            ],
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA (Get Free Consultancy)",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: "Get Free Consultancy Now!",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Ready to grow your business with trusted digital marketing services in UP? Contact Bizz Buzz Creations today and let’s build your success story together.",
          },
        ],
      },
    ],
  },
];

// A hidden, dashboard-only landing page ("Digital Marketing Services in
// UK") — same layout and same editable sections/fields as the real
// homepage, reusing its field schema by reference instead of duplicating
// ~700 lines, but saved under its own pageKey so editing it in the
// dashboard never touches the real homepage's content. Deliberately not
// linked anywhere on the site — see
// app/(main)/en-uk/digital-marketing-services-in-uk/page.js. Defined
// here (not in its own file importing PAGE_CONTENT_REGISTRY back in)
// purely to avoid a circular import with that file re-exporting this.
export const OUTSIDE_LOCATION_REGISTRY = [
  {
    key: "outside-location-uk",
    label: "Digital Marketing Services in UK",
    sections: PAGE_CONTENT_REGISTRY.find((p) => p.key === "home")?.sections || [],
  },
];

// Every page across all four registries gets this same SEO section
// appended automatically — added here once instead of hand-editing
// every page entry in every registry file. Defaults are empty on
// purpose: each page's own page.js already has a real title/description
// hardcoded as its true fallback (used whenever the saved override is
// blank), so there's no copy to duplicate here.
const SEO_SECTION = {
  key: "seo",
  label: "SEO / Meta",
  fields: [
    {
      key: "metaTitle",
      label: "Meta Title (shown in Google search results and the browser tab)",
      type: "text",
      default: "",
    },
    {
      key: "metaDescription",
      label: "Meta Description (shown under the title in Google search results)",
      type: "textarea",
      default: "",
    },
  ],
};

function withSeoSection(page) {
  if (!page) return page;
  const alreadyHasSeo = page.sections.some((s) => s.key === "seo");
  return alreadyHasSeo
    ? page
    : { ...page, sections: [...page.sections, SEO_SECTION] };
}

export function getPageMeta(pageKey) {
  const page =
    PAGE_CONTENT_REGISTRY.find((p) => p.key === pageKey) ||
    INDUSTRY_CONTENT_REGISTRY.find((p) => p.key === pageKey) ||
    SERVICE_CONTENT_REGISTRY.find((p) => p.key === pageKey) ||
    SUB_SERVICE_CONTENT_REGISTRY.find((p) => p.key === pageKey) ||
    OUTSIDE_LOCATION_REGISTRY.find((p) => p.key === pageKey);
  return withSeoSection(page);
}

// Flat { fieldKey: default } map for a page — used to fall back to real
// site copy when no saved override exists yet. List fields default to
// their `default` array as-is.
export function getPageDefaults(pageKey) {
  const page = getPageMeta(pageKey);
  if (!page) return {};
  const defaults = {};
  for (const section of page.sections) {
    for (const field of section.fields) {
      defaults[field.key] = field.default;
    }
  }
  return defaults;
}
