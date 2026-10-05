// JSON-LD for /en-uk/digital-marketing-services-in-uk only. This page used
// to inherit the site-wide India LocalBusiness schema from the root layout
// (see components/sections/allScripts.js, which now skips this route), so
// this @graph is the only structured data it carries.
const SITE = "https://bizzbuzzcreations.com";
const PAGE = `${SITE}/en-uk/digital-marketing-services-in-uk`;
const ORG = `${SITE}/#organization`;
const IMAGE =
  "https://res.cloudinary.com/engynln0/image/upload/v1790148949/bizzbuzz-page-content/usce0bo3ru3wqqw1ry1e.png";
const UK = { "@type": "Country", name: "United Kingdom" };

const service = (slug, name, serviceType, description) => ({
  "@type": "Service",
  "@id": `${SITE}/${slug}#service`,
  name,
  serviceType,
  url: `${SITE}/${slug}`,
  description,
  provider: { "@id": ORG },
  areaServed: UK,
});

const faq = (name, text) => ({
  "@type": "Question",
  name,
  acceptedAnswer: { "@type": "Answer", text },
});

export const ukPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": ORG,
      name: "BizzBuzz Creations",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE}/#logo`,
        url: `${SITE}/bbc-logo.png`,
        contentUrl: `${SITE}/bbc-logo.png`,
        caption: "BizzBuzz Creations logo",
      },
      image: IMAGE,
      description:
        "BizzBuzz Creations is a digital marketing agency helping UK businesses grow with SEO, paid ads, social media marketing, web design and AI-driven automation.",
      email: "info@bizzbuzzcreations.com",
      telephone: "+44 7862 608652",
      priceRange: "$100-$2000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3 Thornham St",
        addressLocality: "London",
        postalCode: "SE10 9SA",
        addressCountry: "GB",
      },
      areaServed: UK,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "12:00",
        closes: "20:00",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+44 7862 608652",
        email: "info@bizzbuzzcreations.com",
        areaServed: "GB",
        availableLanguage: "English",
      },
      sameAs: [
        "https://www.linkedin.com/company/bizz-buzz-creations",
        "https://www.facebook.com/bizzbuzzcreation/",
        "https://www.instagram.com/bizzbuzzcreations",
        "https://www.youtube.com/@bizzbuzzcreations",
        "https://x.com/BizzBuzzAgency",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "1",
        reviewCount: "235",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Marketing Services",
        itemListElement: [
          "search-engine-optimization",
          "paid-marketing",
          "social-media-marketing",
          "web-development",
          "ai-solutions",
        ].map((slug) => ({
          "@type": "Offer",
          itemOffered: { "@id": `${SITE}/${slug}#service` },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "BizzBuzz Creations",
      inLanguage: "en-GB",
      publisher: { "@id": ORG },
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Digital Marketing Services for UK Businesses | BizzBuzz Creations",
      description:
        "Digital marketing services for UK businesses: SEO, paid ads, social media, web design and AI automation from BizzBuzz Creations.",
      inLanguage: "en-GB",
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": ORG },
      publisher: { "@id": ORG },
      primaryImageOfPage: { "@type": "ImageObject", url: IMAGE },
    },
    service(
      "search-engine-optimization",
      "Search Visibility & SEO",
      "Search Engine Optimization",
      "Technical SEO fixes, local listings and content that help your business get found on Google and AI search tools.",
    ),
    service(
      "paid-marketing",
      "Paid Search & Social Ads",
      "Paid Marketing",
      "Tightly targeted Google and social ad campaigns with landing pages built to convert.",
    ),
    service(
      "social-media-marketing",
      "Social Content & Community Building",
      "Social Media Marketing",
      "Short-form video, Instagram, Facebook and YouTube Shorts strategies designed to turn followers into paying customers.",
    ),
    service(
      "web-development",
      "Website Design & Build",
      "Web Design and Development",
      "Fast, clean, mobile-first websites built to convert visitors into enquiries and customers.",
    ),
    service(
      "ai-solutions",
      "AI-Driven Automation",
      "AI Solutions and Marketing Automation",
      "Chatbots, lead scoring and workflow automation that engage customers around the clock.",
    ),
    {
      "@type": "FAQPage",
      "@id": `${PAGE}#faq`,
      mainEntity: [
        faq(
          "What exactly does BizzBuzz Creations offer?",
          "We offer a full range of digital marketing services, including SEO, local SEO, paid ads, social media marketing, content, website design and AI-driven automation. Most clients don't need every single one of these. We usually start by figuring out which two or three will actually move the needle for your business, then build from there instead of selling you a package you don't need.",
        ),
        faq(
          "Do you only work with businesses in one part of the UK?",
          "No. We work with businesses right across the UK, from London and Manchester to smaller towns most agencies never bother targeting. If you've been searching for a digital marketing company near me hoping to find someone local, what usually matters more than the postcode is whether the team actually understands your market and answers the phone when you call. That's the bit we focus on.",
        ),
        faq(
          "I run a small business. Is this actually going to work for someone my size?",
          "It's built for businesses like yours. A lot of our clients are small teams or even one-person operations trying to get their first steady stream of customers online. Our digital marketing services for small business are priced and planned around realistic budgets, not enterprise ones, so you're not paying for strategies that only make sense for a company ten times your size.",
        ),
        faq(
          "Can I just hire you for one thing, like SEO?",
          "Yes. You don't have to buy the full stack of digital marketing services to work with us. Plenty of clients start with just SEO or just paid ads, see how it goes, and add other services later once they trust the results. We'd rather earn the rest of the work than push it on you upfront.",
        ),
        faq(
          "What's this going to cost me?",
          "It depends on what your business needs, which is honestly the honest answer, not a dodge. A local plumber chasing more calls needs a very different budget to an e-commerce brand running national ad campaigns. We'll give you real numbers after we've looked at your business, not before, because quoting blind usually means one side gets it wrong.",
        ),
        faq(
          "How do I actually get started?",
          "Book a free audit with us. We'll look at where your business currently stands online, what your competitors are doing, and where you're realistically losing customers. From there we'll put together a plan and talk you through it before anything gets spent.",
        ),
        faq(
          "What makes you different from the agencies I keep finding?",
          "Most of those searches turn up agencies offering the same five services with different branding on top. We spend more time upfront trying to understand what's actually going wrong in your marketing before recommending anything, rather than starting with a fixed package and fitting your business into it. It's a slower first conversation, but it usually saves you money down the line.",
        ),
      ],
    },
  ],
};
