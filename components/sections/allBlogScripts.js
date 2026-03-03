import Script from "next/script";

//All Script for all Blog Pages
export default function AllBlogScripts({ slug }) {
  return (
    <>
      {slug ===
        "the-future-of-digital-marketing-in-2026-ai-seo-ads-conversion-strategy" && (
        <Script type="application/ld+json" strategy="beforeInteractive">
          {`{
          
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the top digital marketing trends in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The top digital marketing trends in 2026 include AI-powered marketing automation, voice search optimization, advanced SEO strategies, performance-based paid ads, and conversion-focused funnel marketing. Businesses that combine SEO, Google Ads, and social media marketing see the best long-term growth."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best SEO agency in Prayagraj?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best SEO agency in Prayagraj focuses on long-term ranking, structured content strategy, local SEO optimization, and measurable results. Look for experience, proven case studies, and transparent reporting before choosing professional SEO services."
      }
    },
    {
      "@type": "Question",
      "name": "How do Google Ads services in Prayagraj help generate leads?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google Ads services in Prayagraj help generate high-intent leads by targeting users who are actively searching for products or services. With smart bidding, keyword targeting, and proper conversion tracking, businesses can attract quality inquiries quickly."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SEO and paid ads services in Prayagraj?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO services focus on organic search visibility and long-term traffic growth, while paid ads services deliver immediate traffic through platforms like Google Ads and Meta Ads. Combining both strategies gives better and sustainable results."
      }
    },
    {
      "@type": "Question",
      "name": "Why is local SEO important for businesses in Prayagraj?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Local SEO services in Prayagraj help businesses appear in Google Maps and local search results. This increases visibility among nearby customers and builds trust through optimized profiles and customer reviews."
      }
    }
  ]

          }`}
        </Script>
      )}

      {slug ===
        "answer-engine-optimization-aeo-the-new-seo-strategy-for-ai-search" && (
        <>
          <Script type="application/ld+json" strategy="beforeInteractive">
            {`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Answer Engine Optimization (AEO): The New SEO Strategy for AI Search",
  "description": "Learn what Answer Engine Optimization (AEO) is, how to optimize for AI search, and how to appear in Google AI Overview in 2026.",
  "author": {
    "@type": "Organization",
    "name": "BizzBuzz Creations"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BizzBuzz Creations",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bizzbuzzcreations.com/favicon.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://bizzbuzzcreations.com/blog/answer-engine-optimization-aeo-the-new-seo-strategy-for-ai-search"
  },
  "datePublished": "2026-03-05",
  "dateModified": "2026-03-05"
}`}
          </Script>
          <Script type="application/ld+json" strategy="beforeInteractive">
            {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Answer Engine Optimization (AEO)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer Engine Optimization (AEO) is the process of optimizing content so search engines and AI systems can directly use it as answers in Google AI Overviews, featured snippets, and voice search results."
      }
    },
    {
      "@type": "Question",
      "name": "How is AEO different from traditional SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional SEO focuses on ranking web pages, while AEO focuses on structuring content so AI-powered search engines can extract and display it as a direct answer."
      }
    },
    {
      "@type": "Question",
      "name": "How do you optimize for AI search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To optimize for AI search, use question-based headings, provide clear 40-60 word answers, implement schema markup, structure content properly, and focus on search intent instead of just keywords."
      }
    },
    {
      "@type": "Question",
      "name": "How can I appear in Google AI Overview?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To appear in Google AI Overview, create structured and authoritative content, answer common user queries directly, use FAQ schema, build topical authority, and maintain strong internal linking."
      }
    },
    {
      "@type": "Question",
      "name": "Why is AEO important in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AEO is important in 2026 because search engines are becoming AI-driven answer platforms. Businesses that optimize for AI search gain higher visibility, authority, and voice search traffic."
      }
    }
  ]
}`}
          </Script>
        </>
      )}
    </>
  );
}
