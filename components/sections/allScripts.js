import Script from "next/script";

export default function AllScripts() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z0B5EJDR4C" />

      <Script id="ga-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z0B5EJDR4C');
        `}
      </Script>

      <Script type="application/ld+json">
        {`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BizzBuzz Creations",
  "image": "https://bizzbuzzcreations.com/_next/image?url=%2FIndustry%20Authority%20(1).png&w=640&q=75",
  "@id": "https://bizzbuzzcreations.com/",
  "url": "https://bizzbuzzcreations.com/",
  "telephone": "+91-8115585285,+91-9369313484",
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "43/33, Tej Bahdur Sapru Rd, Agnipath Colony, Civil Lines",
    "addressLocality": "Prayagraj",
    "addressRegion": "UP",
    "postalCode": "211001",
    "addressCountry": "IN"
  },
  "description": "Looking for the best digital marketing agency in Prayagraj? We offer expert SEO, local SEO services, and social media marketing to grow your business online.",
  "sameAs": [
    "https://www.facebook.com/bizzbuzzcreation/",
    "https://www.instagram.com/bizzbuzzcreations",
    "https://t.me/bizzbuzzcreations",
    "https://www.linkedin.com/company/bizz-buzz-creations"
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.4578694",
    "longitude": "81.8366166"
  },
  "openingHours": "Monday-Saturday 11:00-23:00",
  
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Digital Marketing, Online Marketing, Internal Marketing, Web Marketing",
        "description": "We help businesses grow through digital marketing, online marketing, internal marketing strategies, and web marketing that drive visibility, leads, and real results."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Paid Marketing",
        "description": "Looking for paid marketing services to get instant leads? We run targeted Google and social media ads that bring the right audience to your business and increase sales quickly."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "BPO Service",
        "description": "Looking for reliable BPO services to manage your business operations? We provide customer support, lead handling, and back-office solutions to improve efficiency and reduce costs."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Website Development",
        "description": "Want a website that brings you customers? Our website development services design secure, responsive, and easy-to-manage websites that grow your business online."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Search Engine Optimization",
        "description": "Looking for SEO services to grow your business online? We help you rank higher on Google, increase website traffic, and generate real leads with smart, result-driven SEO strategies."
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Social Media Marketing",
        "description": "Want to grow your business through social media? Our social media marketing services increase brand visibility, engagement, and leads using smart content and paid campaigns."
      }
    }
        ]}`}
      </Script>
    </>
  );
}
