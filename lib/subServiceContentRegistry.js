// Dashboard registry for the 44 /<service-hub>/<sub-service-slug> pages —
// the individual service pages nested under each of the 8 main service hub
// pages (BPO, Website Development, SEO, Social Media Marketing, Google Ads
// & Paid Marketing, AI Solutions, Marketing Automation, Business
// Consultancy). A separate file from pageContentRegistry.js for the same
// reason industryContentRegistry.js and serviceContentRegistry.js are
// separate: all 44 pages share one identical structure/component
// (ServiceDetailPage) with real content already living in
// lib/subServicePageContent.js. Each sub-service's registry entry is
// GENERATED here at module-load time straight from that file, so a field
// left untouched in the dashboard always falls back to the exact copy
// already live on the site.
//
// Icons, hrefs, item numbers ("01".."06" on serviceBreakdown/
// differentiators/roadmap), the serviceBreakdown ctaText constant ("Know
// Our Services"), and the showStats/showWhyChooseUs/serviceBreakdownFlip
// layout toggles (all 44 pages hardcode showStats={false} and
// showWhyChooseUs={false}) are deliberately NOT exposed here — they're
// design/structure, not content, same rule every other content registry in
// this codebase follows.
import { SUB_SERVICE_PAGE_CONTENT, getSubServicePageContent } from "./subServicePageContent";

// Hub labels, matched to lib/serviceContentRegistry.js's SERVICE_LABELS so
// the dashboard picker groups sub-services under the same hub names used
// everywhere else.
export const HUB_LABELS = {
  "bpo-services": "BPO Services",
  "web-development": "Website Development",
  "search-engine-optimization": "Search Engine Optimization (SEO)",
  "social-media-marketing": "Social Media Marketing (SMM)",
  "paid-marketing": "Google Ads & Paid Marketing",
  "ai-solutions": "AI Solutions",
  "marketing-automation": "Marketing Automation",
  "business-consultancy": "Business Consultancy",
};

// slug -> hub, so the dropdown can group entries and labels can show
// "<Hub Label> — <Page Label>". Order here also controls display order.
const SUB_SERVICE_SLUGS_BY_HUB = {
  "bpo-services": [
    "ai-powered-bpo-call-center-solutions",
    "inbound-outbound-call-center-services",
    "business-process-automation-services",
    "virtual-assistant-startup-outsourcing",
    "24-7-ecommerce-customer-support",
    "data-entry-back-office-outsourcing",
  ],
  "web-development": [
    "custom-web-development",
    "shopify-ecommerce-development",
    "php-web-application-development",
    "react-nextjs-development",
    "website-redesign-management",
    "wordpress-development",
  ],
  "search-engine-optimization": [
    "ai-search-optimization",
    "generative-engine-optimization",
    "answer-engine-optimization",
    "semantic-seo-topical-authority",
    "ai-content-optimization",
    "high-intent-local-seo",
  ],
  "social-media-marketing": [
    "social-media-management-services",
    "instagram-marketing-agency",
    "facebook-meta-ads-agency",
    "linkedin-marketing-b2b-growth",
    "ai-social-media-marketing",
    "reels-short-video-marketing",
  ],
  "paid-marketing": [
    "google-search-ads-management",
    "meta-social-ads-management",
    "performance-marketing-roi-campaigns",
    "lead-generation-campaigns",
    "ecommerce-retargeting-ads",
    "local-city-based-ad-campaigns",
  ],
  "ai-solutions": [
    "custom-ai-agents-chatbots",
    "ai-content-generative-engines",
    "workflow-process-automation",
    "generative-engine-optimization",
  ],
  "marketing-automation": [
    "crm-marketing-automation",
    "email-marketing-automation",
    "whatsapp-marketing-automation",
    "lead-nurturing-automation",
  ],
  "business-consultancy": [
    "business-strategy-consulting",
    "business-development-marketing-consulting",
    "business-growth-scaling-consulting",
    "operations-process-consulting",
    "startup-new-business-consulting",
    "local-city-based-business-advisory",
  ],
};

function buildSubServiceEntry(hub, slug) {
  const data = getSubServicePageContent(hub, slug) || {};

  return {
    // Keyed by "subservice-<hub>-<slug>" rather than slug alone: one slug
    // ("generative-engine-optimization") is reused by two different pages
    // under two different hubs (search-engine-optimization and
    // ai-solutions), so slug alone isn't a safe unique key across all 44
    // pages — see the matching note in lib/subServicePageContent.js.
    key: `subservice-${hub}-${slug}`,
    hub,
    slug,
    label: `${HUB_LABELS[hub]} — ${data.label || slug}`,
    sections: [
      {
        key: "hero",
        label: "Hero",
        fields: [
          {
            key: "heroTitle",
            label: "Heading",
            type: "text",
            default: data.heroTitle || "",
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
            default: data.heroCtaText || "",
          },
          {
            key: "heroImage",
            label: "Hero Image (optional)",
            type: "image",
            default: data.heroImage || "",
          },
        ],
      },
      {
        key: "capabilities",
        label: "Capabilities",
        fields: [
          {
            key: "capabilitiesHeading",
            label: "Section Heading",
            type: "text",
            default: data.capabilitiesHeading || "",
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
        label: "Differentiators",
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
        label: "Process Roadmap",
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
        key: "locality",
        label: "Locality Section",
        fields: [
          {
            key: "localityHeading",
            label: "Heading",
            type: "text",
            default: data.localityHeading || "",
          },
          {
            key: "localityText",
            label: "Paragraph",
            type: "textarea",
            default: data.localityText || "",
          },
        ],
      },
      {
        key: "faq",
        label: "FAQ",
        fields: [
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
          { key: "ctaHeading", label: "Heading", type: "text", default: data.ctaHeading || "" },
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

export const SUB_SERVICE_CONTENT_REGISTRY = Object.entries(SUB_SERVICE_SLUGS_BY_HUB).flatMap(
  ([hub, slugs]) => slugs.map((slug) => buildSubServiceEntry(hub, slug)),
);

// List of { value, label, group } for the dashboard's sub-service picker
// dropdown — group is the hub label, used to render <optgroup> elements
// since 44 flat options would be unwieldy.
export const SUB_SERVICE_PAGE_OPTIONS = SUB_SERVICE_CONTENT_REGISTRY.map((entry) => ({
  value: entry.key,
  // Strip the "<Hub Label> — " prefix already baked into entry.label —
  // the dropdown itself groups by hub via <optgroup>, so repeating the hub
  // name inside every option label would just be noise.
  label: entry.label.replace(`${HUB_LABELS[entry.hub]} — `, ""),
  group: HUB_LABELS[entry.hub],
}));

// Re-attaches everything the dashboard registry deliberately leaves out
// (icons, item numbers, the services[] array, the ctaText constant,
// sectionLabel/label/description/icon page-identity fields) onto a
// saved/merged set of field values, producing the exact props object
// <ServiceDetailPage> expects. Called from each
// app/(main)/<hub>/<slug>/page.js with the live static data (for
// icons/identity) and the dashboard-merged content (for text).
export function mergeSubServiceContent(staticData, overrides) {
  if (!overrides) return staticData;
  const merged = { ...staticData };
  // Sections switched off in the dashboard (Remove section).
  merged.hiddenSections = Array.isArray(overrides.hiddenSections)
    ? overrides.hiddenSections
    : [];

  if (overrides.heroTitle) merged.heroTitle = overrides.heroTitle;
  if (overrides.heroDescription) merged.heroDescription = overrides.heroDescription;
  if (overrides.heroCtaText) merged.heroCtaText = overrides.heroCtaText;
  if (overrides.heroImage) merged.heroImage = overrides.heroImage;

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

  if (overrides.localityHeading) merged.localityHeading = overrides.localityHeading;
  if (overrides.localityText) merged.localityText = overrides.localityText;

  if (overrides.faqs?.length > 0) merged.faqs = overrides.faqs;

  if (overrides.ctaHeading) merged.ctaHeading = overrides.ctaHeading;
  if (overrides.ctaText) merged.ctaText = overrides.ctaText;
  if (overrides.ctaPrimaryText) merged.ctaPrimaryText = overrides.ctaPrimaryText;
  if (overrides.ctaSecondaryText) merged.ctaSecondaryText = overrides.ctaSecondaryText;
  if (overrides.ctaImage) merged.ctaImage = overrides.ctaImage;

  return merged;
}

export { SUB_SERVICE_PAGE_CONTENT };
