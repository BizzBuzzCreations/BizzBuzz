import Link from "next/link";
import {
  Megaphone,
  Search,
  Bot,
  Share2,
  MonitorSmartphone,
  Handshake,
  MousePointerClick,
  Link2,
  FileText,
  Compass,
  Rocket,
} from "lucide-react";
import GuidesHero from "@/components/sections/guidesHero";
import CTA from "@/components/sections/CTA";
import LatestBlogs from "@/components/sections/latestBlogs";
import DarkFAQSection from "@/components/sections/darkFAQSection";
import { getPageContent } from "@/actions/pageContentActions";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("guides", {
  title: "Digital Marketing Guides & Resources | BizzBuzz Creations",
  description:
    "Explore practical digital marketing guides on SEO, AI, social media, Google Ads, websites, content marketing, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/guides",
  },
});
}

// Icons stay code-driven (design), matched positionally to whichever
// guide categories are saved; the "01." style tag is auto-numbered.
const GUIDE_ICONS = [
  Megaphone,
  Search,
  Bot,
  Share2,
  MonitorSmartphone,
  Handshake,
  MousePointerClick,
  Link2,
  FileText,
  Compass,
];

const DEFAULT_GUIDES = [
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
];

// Guides page FAQs — questions specific to the guides/resources library.
// The last question's default answer includes a real link to /services;
// an admin override falls back to plain text since a textarea can't
// carry an embedded link.
const DEFAULT_GUIDES_FAQS = [
  {
    question: "What topics are covered in the BizzBuzz Creations guides?",
    answer:
      "Our guides cover digital marketing, SEO, AI marketing, social media marketing, website development, Google Ads, content marketing, backlink strategies, business development, and SEO, AEO & GEO.",
  },
  {
    question: "Are these digital marketing guides suitable for beginners?",
    answer:
      "Yes. Our guides are created for beginners, marketers, business owners, and professionals looking for practical insights, strategies, and actionable digital marketing knowledge.",
  },
  {
    question: "How can these guides help my business?",
    answer:
      "Our guides provide practical strategies and insights to help you improve online visibility, attract the right audience, generate leads, and make better digital marketing decisions.",
  },
  {
    question: "How often are new guides and insights published?",
    answer:
      "We regularly publish new guides covering emerging trends, proven strategies, industry updates, tools, and important developments across digital marketing and technology.",
  },
  {
    question: "Do your guides cover the latest SEO and AI search trends?",
    answer:
      "Yes. We cover evolving SEO practices along with AEO, GEO, AI search, Google updates, and other changes shaping how businesses are discovered online.",
  },
  {
    question: "Can I get professional help if I need help implementing these strategies?",
    answer:
      "Yes. If you need help applying the strategies covered in our guides, you can explore our digital marketing services or contact BizzBuzz Creations for a consultation.",
  },
];

export default async function GuidesPage() {
  const content = await getPageContent("guides");

  const allGuidesHeading = content?.allGuidesHeading || "All Guides";
  const guidesRaw = content?.guides?.length > 0 ? content.guides : DEFAULT_GUIDES;
  const guides = guidesRaw.map((g, i) => ({
    ...g,
    icon: GUIDE_ICONS[i % GUIDE_ICONS.length],
    tag: String(i + 1).padStart(2, "0"),
  }));

  const sidebarHeading = content?.guidesSidebarHeading || "Want Hands-On Help With Any of This?";
  const sidebarParagraph =
    content?.guidesSidebarParagraph ||
    "Reading is a great start — but a strategy built for your specific business moves faster. Talk to our team and we'll turn these guides into a clear, actionable plan.";
  const sidebarPrimaryText = content?.guidesSidebarPrimaryText || "Schedule a Call";
  const sidebarSecondaryText = content?.guidesSidebarSecondaryText || "View Our Services";

  const faqHeading = content?.guidesFaqHeading || "Frequently Asked Questions";
  const isDefaultFaqs = !(content?.guidesFaqItems?.length > 0);
  const GUIDES_FAQS = isDefaultFaqs
    ? [
        ...DEFAULT_GUIDES_FAQS.slice(0, 5),
        {
          question: DEFAULT_GUIDES_FAQS[5].question,
          answer: (
            <>
              Yes. If you need help applying the strategies covered in our
              guides, you can explore our{" "}
              <Link href="/services" className="text-[#40A2D8] font-semibold hover:underline">
                digital marketing services
              </Link>{" "}
              or contact BizzBuzz Creations for a consultation.
            </>
          ),
        },
      ]
    : content.guidesFaqItems;

  return (
    <>
      <GuidesHero content={content} />

      {/* Guides — list + sidebar, dark theme */}
      <section id="all-guides" className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              {allGuidesHeading}
            </h2>
            <p className="text-white/40 text-sm mb-8">
              {guides.length} guides
            </p>

            <div className="divide-y divide-white/10">
              {/* Each guide links to its matching category on the blog, so
                  readers land straight on that category's posts. */}
              {guides.map(({ icon: Icon, tag, title, body }, i) => (
                <Link
                  key={i}
                  href={`/blog?category=${encodeURIComponent(title)}`}
                  className="group flex gap-5 py-6 first:pt-0"
                >
                  <span className="shrink-0 w-14 h-14 rounded-xl bg-[#0B60B0]/15 border border-[#40A2D8]/25 flex items-center justify-center text-[#40A2D8] transition-colors duration-300 group-hover:bg-[#0B60B0] group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#40A2D8]">
                      {tag}
                    </span>
                    <h3 className="font-bold text-white mt-1 mb-1.5 leading-snug transition-colors duration-300 group-hover:text-[#40A2D8]">
                      {title}
                    </h3>
                    <RichText as="p" text={body} className="text-sm text-white/60 leading-relaxed" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div
              className="relative flex flex-col rounded-2xl p-7 overflow-hidden border border-white/20 shadow-2xl shadow-[#0B60B0]/30"
              style={{
                background: "linear-gradient(160deg, #0B60B0, #40A2D8)",
              }}
            >
              <div
                className="absolute -top-20 -right-16 w-56 h-56 rounded-full blur-3xl opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, #ffffff, transparent 70%)" }}
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 text-white mb-5">
                <Rocket size={22} />
              </span>

              <h3 className="relative z-10 font-bold text-xl leading-snug mb-3">
                {sidebarHeading}
              </h3>
              <RichText as="p" text={sidebarParagraph} className="relative z-10 text-sm text-white/80 leading-relaxed mb-7" />

              <div className="relative z-10 flex flex-col gap-3">
                <AnimatedButton href="/contact" size="sm" className="w-full">
                  {sidebarPrimaryText}
                </AnimatedButton>
                <AnimatedButton href="/services" size="sm" className="w-full">
                  {sidebarSecondaryText}
                </AnimatedButton>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQs — questions specific to the guides/resources library */}
      <DarkFAQSection faqs={GUIDES_FAQS} heading={faqHeading} />

      {/* Latest blogs — real, live content from the blog */}
      <LatestBlogs dark />

      {/* CTA — just above the footer */}
      <div className="bg-black pt-4">
        <CTA content={content} />
      </div>
    </>
  );
}

// LatestBlogs fetches from MongoDB — force-dynamic so this page renders at
// request time instead of during `next build`, where the build sandbox
// can't reliably resolve the Atlas mongodb+srv:// DNS record. Same pattern
// already used on /career and /blog.
export const dynamic = "force-dynamic";
