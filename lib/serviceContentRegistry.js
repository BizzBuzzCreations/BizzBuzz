// Dashboard registry for the 8 main service hub pages
// (/bpo-services, /web-development, /search-engine-optimization,
// /social-media-marketing, /paid-marketing, /ai-solutions,
// /marketing-automation, /business-consultancy). A separate file from
// pageContentRegistry.js for the same reason industryContentRegistry.js
// is separate: all 8 pages share one identical structure (Hero, Intro,
// Services Grid, Roadmap, We Are, FAQ, Trust, Closing CTA) with real
// content already living in lib/servicePageContent.js. Each service's
// registry entry is GENERATED here at module-load time straight from that
// file, so a field left untouched in the dashboard always falls back to
// the exact copy already live on the site.
//
// Icons, hrefs, and item numbers (roadmap "01".."06", we-are "001".."006")
// are deliberately NOT exposed here — they're design/structure, not
// content, same rule pageContentRegistry.js and industryContentRegistry.js
// follow everywhere else.
import { SERVICE_PAGE_CONTENT, getServicePageContent } from "./servicePageContent";

// Canonical labels, matched to components/layout/navbar.js's SERVICE_LINKS
// so the dashboard picker reads the same names visitors see in the nav.
export const SERVICE_LABELS = {
  "bpo-services": "BPO Service",
  "web-development": "Website Development",
  "search-engine-optimization": "Search Engine Optimization (SEO)",
  "social-media-marketing": "Social Media Marketing (SMM)",
  "paid-marketing": "Google Ads & Paid Marketing",
  "ai-solutions": "AI Solutions",
  "marketing-automation": "Marketing Automation",
  "business-consultancy": "Business Consultancy",
};

const SERVICE_SLUGS = Object.keys(SERVICE_LABELS);

function buildServiceEntry(slug, label) {
  const data = getServicePageContent(slug) || {};

  return {
    key: `service-${slug}`,
    label: `Services — ${label}`,
    sections: [
      {
        key: "hero",
        label: "Hero",
        fields: [
          { key: "heroHeading", label: "Heading", type: "text", default: data.heroHeading || "" },
          {
            key: "heroDescription",
            label: "Description",
            type: "textarea",
            default: data.heroDescription || "",
          },
          {
            key: "heroCtaText",
            label: "Button Text",
            type: "text",
            default: data.heroCtaText || "",
          },
          {
            key: "heroImage",
            label: "Hero Image",
            type: "image",
            default: data.heroImage || "",
          },
        ],
      },
      {
        key: "intro",
        label: "Intro Section",
        fields: [
          {
            key: "introHeading",
            label: "Heading",
            type: "text",
            default: data.introHeading || "",
          },
          {
            key: "introTagline",
            label: "Tagline",
            type: "text",
            default: data.introTagline || "",
          },
          {
            key: "introParagraphOne",
            label: "Paragraph One",
            type: "textarea",
            default: data.introParagraphOne || "",
          },
          {
            key: "introParagraphTwo",
            label: "Paragraph Two",
            type: "textarea",
            default: data.introParagraphTwo || "",
          },
          {
            key: "introImage",
            label: "Image",
            type: "image",
            default: data.introImage || "",
          },
        ],
      },
      {
        key: "servicesGrid",
        label: "Services Grid",
        fields: [
          {
            key: "servicesGridHeading",
            label: "Section Heading",
            type: "text",
            default: data.servicesGridHeading || "",
          },
          {
            key: "servicesGridSubheading",
            label: "Section Subheading",
            type: "text",
            default: data.servicesGridSubheading || "",
          },
          {
            key: "services",
            label: "Service Cards",
            type: "list",
            default: (data.services || []).map(({ heading, description }) => ({
              heading,
              description,
            })),
            itemFields: [
              { key: "heading", label: "Heading", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "roadmap",
        label: "Process Roadmap",
        fields: [
          {
            key: "roadmapHeading",
            label: "Section Heading",
            type: "text",
            default: data.roadmapHeading || "",
          },
          {
            key: "roadmapSubtext",
            label: "Section Subtext",
            type: "textarea",
            default: data.roadmapSubtext || "",
          },
          {
            key: "roadmapSteps",
            label: "Roadmap Steps",
            type: "list",
            default: (data.roadmapSteps || []).map(({ title, desc }) => ({ title, desc })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "weAre",
        label: "We Are Section",
        fields: [
          {
            key: "weAreHeading",
            label: "Heading",
            type: "text",
            default: data.weAreHeading || "",
          },
          {
            key: "weAreDescription",
            label: "Description",
            type: "textarea",
            default: data.weAreDescription || "",
          },
          {
            key: "weArePoints",
            label: "Points",
            type: "list",
            default: (data.weArePoints || []).map(({ title, description }) => ({
              title,
              description,
            })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "faq",
        label: "FAQ",
        fields: [
          {
            key: "faqHeading",
            label: "Section Heading",
            type: "text",
            default: data.faqHeading || "Frequently Asked Questions",
          },
          {
            key: "faqSubheading",
            label: "Section Subheading (optional)",
            type: "text",
            default: data.faqSubheading || "",
          },
          {
            key: "faqs",
            label: "Questions",
            type: "list",
            default: data.faqs || [],
            itemFields: [
              { key: "question", label: "Question", type: "text" },
              { key: "answer", label: "Answer", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "trust",
        label: "Trust Section",
        fields: [
          {
            key: "trustHeading",
            label: "Heading",
            type: "text",
            default: data.trustHeading || "",
          },
          {
            key: "trustSubtext",
            label: "Subtext",
            type: "textarea",
            default: data.trustSubtext || "",
          },
          {
            key: "trustParagraphOne",
            label: "Paragraph One",
            type: "textarea",
            default: data.trustParagraphOne || "",
          },
          {
            key: "trustParagraphTwo",
            label: "Paragraph Two",
            type: "textarea",
            default: data.trustParagraphTwo || "",
          },
          {
            key: "trustImage",
            label: "Image",
            type: "image",
            default: data.trustImage || "",
          },
        ],
      },
      {
        key: "cta",
        label: "Closing CTA",
        fields: [
          { key: "ctaHeading", label: "Heading", type: "text", default: data.ctaHeading || "" },
          {
            key: "ctaTagline",
            label: "Tagline",
            type: "text",
            default: data.ctaTagline || "",
          },
          {
            key: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default: data.ctaParagraph || "",
          },
          {
            key: "ctaPrimaryText",
            label: "Primary Button Text",
            type: "text",
            default: data.ctaPrimaryText || "",
          },
          {
            key: "ctaSecondaryText",
            label: "Secondary Button Text",
            type: "text",
            default: data.ctaSecondaryText || "",
          },
          {
            key: "ctaImage",
            label: "Right Side Image (optional)",
            type: "image",
            default: data.ctaImage || "",
          },
        ],
      },
    ],
  };
}

export const SERVICE_CONTENT_REGISTRY = SERVICE_SLUGS.map((slug) =>
  buildServiceEntry(slug, SERVICE_LABELS[slug]),
);

// List of { value, label } for the dashboard's service picker dropdown.
export const SERVICE_PAGE_OPTIONS = SERVICE_SLUGS.map((slug) => ({
  value: `service-${slug}`,
  label: SERVICE_LABELS[slug],
}));

// Re-attaches everything the dashboard registry deliberately leaves out
// (icons, hrefs, item numbers) onto a saved/merged set of field values,
// producing the exact props object each service page's JSX expects.
// Called from each app/(main)/<slug>/page.js with the live static data
// (for icons/hrefs) and the dashboard-merged content (for text).
export function mergeServiceContent(staticData, overrides) {
  if (!overrides) return staticData;
  const merged = { ...staticData };
  // Sections switched off in the dashboard (Remove section).
  merged.hiddenSections = Array.isArray(overrides.hiddenSections)
    ? overrides.hiddenSections
    : [];

  if (overrides.heroHeading) merged.heroHeading = overrides.heroHeading;
  if (overrides.heroDescription) merged.heroDescription = overrides.heroDescription;
  if (overrides.heroCtaText) merged.heroCtaText = overrides.heroCtaText;
  if (overrides.heroImage) merged.heroImage = overrides.heroImage;

  if (overrides.introHeading) merged.introHeading = overrides.introHeading;
  if (overrides.introTagline) merged.introTagline = overrides.introTagline;
  if (overrides.introParagraphOne) merged.introParagraphOne = overrides.introParagraphOne;
  if (overrides.introParagraphTwo) merged.introParagraphTwo = overrides.introParagraphTwo;
  if (overrides.introImage) merged.introImage = overrides.introImage;

  if (overrides.servicesGridHeading) merged.servicesGridHeading = overrides.servicesGridHeading;
  if (overrides.servicesGridSubheading) {
    merged.servicesGridSubheading = overrides.servicesGridSubheading;
  }
  if (overrides.services?.length > 0 && staticData.services?.length > 0) {
    merged.services = overrides.services.map((item, i) => {
      const fallback = staticData.services[i] || staticData.services[staticData.services.length - 1];
      return {
        icon: fallback?.icon,
        heading: item.heading,
        description: item.description,
        href: fallback?.href,
      };
    });
  }

  if (overrides.roadmapHeading) merged.roadmapHeading = overrides.roadmapHeading;
  if (overrides.roadmapSubtext) merged.roadmapSubtext = overrides.roadmapSubtext;
  if (overrides.roadmapSteps?.length > 0) {
    merged.roadmapSteps = overrides.roadmapSteps.map((item, i) => ({
      number: String(i + 1).padStart(2, "0"),
      title: item.title,
      desc: item.desc,
    }));
  }

  if (overrides.weAreHeading) merged.weAreHeading = overrides.weAreHeading;
  if (overrides.weAreDescription) merged.weAreDescription = overrides.weAreDescription;
  if (overrides.weArePoints?.length > 0) {
    merged.weArePoints = overrides.weArePoints.map((item, i) => ({
      number: String(i + 1).padStart(3, "0"),
      title: item.title,
      description: item.description,
    }));
  }

  if (overrides.faqHeading) merged.faqHeading = overrides.faqHeading;
  // faqSubheading only carries through when it's genuinely set (only
  // business-consultancy uses it today) — an empty override string must
  // NOT clobber a real static default, and a real static default with no
  // override should still pass through untouched.
  if (overrides.faqSubheading) merged.faqSubheading = overrides.faqSubheading;
  if (overrides.faqs?.length > 0) merged.faqs = overrides.faqs;

  if (overrides.trustHeading) merged.trustHeading = overrides.trustHeading;
  if (overrides.trustSubtext) merged.trustSubtext = overrides.trustSubtext;
  if (overrides.trustParagraphOne) merged.trustParagraphOne = overrides.trustParagraphOne;
  if (overrides.trustParagraphTwo) merged.trustParagraphTwo = overrides.trustParagraphTwo;
  if (overrides.trustImage) merged.trustImage = overrides.trustImage;

  if (overrides.ctaHeading) merged.ctaHeading = overrides.ctaHeading;
  if (overrides.ctaTagline) merged.ctaTagline = overrides.ctaTagline;
  if (overrides.ctaParagraph) merged.ctaParagraph = overrides.ctaParagraph;
  if (overrides.ctaPrimaryText) merged.ctaPrimaryText = overrides.ctaPrimaryText;
  if (overrides.ctaSecondaryText) merged.ctaSecondaryText = overrides.ctaSecondaryText;
  if (overrides.ctaImage) merged.ctaImage = overrides.ctaImage;

  return merged;
}

export { SERVICE_PAGE_CONTENT };
