// Dashboard registry for the 15 /industries/<slug> pages — a separate
// file from pageContentRegistry.js because, unlike every other page,
// these 15 pages all share one identical structure/component
// (IndustryDetailPage) with real content already living in
// lib/industryPageContent.js. Rather than hand-copying ~1400 lines of
// existing copy into static registry defaults (and having two sources of
// truth drift apart), each industry's registry entry is GENERATED here at
// module-load time straight from lib/industryPageContent.js — so a field
// left untouched in the dashboard always falls back to the exact copy
// already live on the site.
//
// Icons, item numbers ("01", "02"...), the ctaText constant
// ("Know Our Services") on service-breakdown cards, and the
// showStats/capabilitiesHoverReveal layout toggles are deliberately NOT
// exposed here — they're design/structure, not content, same rule
// pageContentRegistry.js follows everywhere else.
import { INDUSTRIES } from "./industriesData";
import { getIndustryPageContent } from "./industryPageContent";

function buildIndustryEntry(slug, label) {
  const data = getIndustryPageContent(slug) || {};

  return {
    key: `industry-${slug}`,
    label: `Industries — ${label}`,
    sections: [
      {
        key: "hero",
        label: "Hero Section",
        fields: [
          {
            key: "heroTitle",
            label: "Heading",
            type: "text",
            default: data.heroTitle || `${label} Digital Marketing Services`,
          },
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
            default: data.heroCtaText || "Book Your Free Consultation",
          },
        ],
      },
      {
        key: "capabilities",
        label: "Core Capabilities",
        fields: [
          {
            key: "capabilitiesHeading",
            label: "Section Heading",
            type: "text",
            default: data.capabilitiesHeading || `Built for Every Corner of ${label}`,
          },
          {
            key: "capabilities",
            label: "Capability Cards",
            type: "list",
            default: (data.capabilities || []).map(({ title, desc }) => ({ title, desc })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "serviceBreakdown",
        label: "Service Breakdown",
        fields: [
          {
            key: "serviceBreakdownHeading",
            label: "Section Heading",
            type: "text",
            default: data.serviceBreakdownHeading || "",
          },
          {
            key: "serviceBreakdown",
            label: "Breakdown Cards",
            type: "list",
            default: (data.serviceBreakdown || []).map(({ title, desc, services }) => ({
              title,
              desc,
              servicesText: (services || []).join("\n"),
            })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
              {
                key: "servicesText",
                label: "Specific Services (one per line)",
                type: "textarea",
              },
            ],
          },
        ],
      },
      {
        key: "differentiators",
        label: "What Makes Us Different",
        fields: [
          {
            key: "differentiatorsHeading",
            label: "Section Heading",
            type: "text",
            default: data.differentiatorsHeading || "",
          },
          {
            key: "differentiators",
            label: "Differentiator Items",
            type: "list",
            default: (data.differentiators || []).map(({ title, desc }) => ({ title, desc })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "roadmap",
        label: "Roadmap",
        fields: [
          {
            key: "roadmapCarouselHeading",
            label: "Section Heading",
            type: "text",
            default: data.roadmapCarouselHeading || "",
          },
          {
            key: "roadmapCarouselSteps",
            label: "Roadmap Steps",
            type: "list",
            default: (data.roadmapCarouselSteps || []).map(({ title, desc }) => ({ title, desc })),
            itemFields: [
              { key: "title", label: "Title", type: "text" },
              { key: "desc", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "whyChooseUs",
        label: "Why Choose Us",
        fields: [
          {
            key: "whyChooseUsHeading",
            label: "Heading",
            type: "text",
            default: data.whyChooseUsHeading || `Why ${label} Businesses Choose Us`,
          },
          {
            key: "whyChooseUsText",
            label: "Paragraph",
            type: "textarea",
            default: data.whyChooseUsText || "",
          },
        ],
      },
      {
        key: "faq",
        label: "FAQ",
        fields: [
          {
            key: "faqsHeading",
            label: "Section Heading",
            type: "text",
            default: "Frequently Asked Questions",
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
        key: "cta",
        label: "Closing CTA",
        fields: [
          {
            key: "ctaHeading",
            label: "Heading",
            type: "text",
            default: data.ctaHeading || "",
          },
          {
            key: "ctaText",
            label: "Paragraph",
            type: "textarea",
            default: data.ctaText || "",
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

export const INDUSTRY_CONTENT_REGISTRY = INDUSTRIES.map(({ slug, label }) =>
  buildIndustryEntry(slug, label)
);

// List of { value, label } for the dashboard's industry picker dropdown.
export const INDUSTRY_PAGE_OPTIONS = INDUSTRIES.map(({ slug, label }) => ({
  value: `industry-${slug}`,
  label,
}));

// Re-attaches everything the dashboard registry deliberately leaves out
// (icons, item numbers, the services[] array, the ctaText constant,
// booleans) onto a saved/merged set of field values, producing the exact
// props object <IndustryDetailPage> expects. Called from each
// app/(main)/industries/<slug>/page.js with the live static data (for
// icons/toggles) and the dashboard-merged content (for text).
export function mergeIndustryContent(staticData, overrides) {
  if (!overrides) return staticData;
  const merged = { ...staticData };
  // Sections switched off in the dashboard (Remove section).
  merged.hiddenSections = Array.isArray(overrides.hiddenSections)
    ? overrides.hiddenSections
    : [];

  if (overrides.heroTitle) merged.heroTitle = overrides.heroTitle;
  if (overrides.heroDescription) merged.heroDescription = overrides.heroDescription;
  if (overrides.heroCtaText) merged.heroCtaText = overrides.heroCtaText;

  if (overrides.capabilitiesHeading) merged.capabilitiesHeading = overrides.capabilitiesHeading;
  if (overrides.capabilities?.length > 0 && staticData.capabilities?.length > 0) {
    merged.capabilities = overrides.capabilities.map((item, i) => ({
      title: item.title,
      desc: item.desc,
      icon:
        staticData.capabilities[i]?.icon ||
        staticData.capabilities[staticData.capabilities.length - 1].icon,
    }));
  }

  if (overrides.serviceBreakdownHeading) {
    merged.serviceBreakdownHeading = overrides.serviceBreakdownHeading;
  }
  if (overrides.serviceBreakdown?.length > 0) {
    merged.serviceBreakdown = overrides.serviceBreakdown.map((item, i) => ({
      number: String(i + 1).padStart(2, "0"),
      title: item.title,
      desc: item.desc,
      ctaText: "Know Our Services",
      services: (item.servicesText || "")
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    }));
  }

  if (overrides.differentiatorsHeading) {
    merged.differentiatorsHeading = overrides.differentiatorsHeading;
  }
  if (overrides.differentiators?.length > 0) {
    merged.differentiators = overrides.differentiators.map((item, i) => ({
      number: String(i + 1).padStart(2, "0"),
      title: item.title,
      desc: item.desc,
    }));
  }

  if (overrides.roadmapCarouselHeading) {
    merged.roadmapCarouselHeading = overrides.roadmapCarouselHeading;
  }
  if (overrides.roadmapCarouselSteps?.length > 0) {
    merged.roadmapCarouselSteps = overrides.roadmapCarouselSteps.map((item, i) => ({
      number: String(i + 1).padStart(2, "0"),
      title: item.title,
      desc: item.desc,
    }));
  }

  if (overrides.whyChooseUsHeading) merged.whyChooseUsHeading = overrides.whyChooseUsHeading;
  if (overrides.whyChooseUsText) merged.whyChooseUsText = overrides.whyChooseUsText;

  if (overrides.faqsHeading) merged.faqsHeading = overrides.faqsHeading;
  if (overrides.faqs?.length > 0) merged.faqs = overrides.faqs;

  if (overrides.ctaHeading) merged.ctaHeading = overrides.ctaHeading;
  if (overrides.ctaText) merged.ctaText = overrides.ctaText;
  if (overrides.ctaPrimaryText) merged.ctaPrimaryText = overrides.ctaPrimaryText;
  if (overrides.ctaSecondaryText) merged.ctaSecondaryText = overrides.ctaSecondaryText;
  if (overrides.ctaImage) merged.ctaImage = overrides.ctaImage;

  return merged;
}
