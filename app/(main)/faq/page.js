import FaqHero from "@/components/sections/faqHero";
import FaqTopics from "@/components/sections/faqTopics";
import CTA from "@/components/sections/CTA";
import { getPageContent } from "@/actions/pageContentActions";
import { buildPageMetadata } from "@/lib/pageMetadata";
import PageSeoScripts from "@/components/sections/pageSeoScripts";

export async function generateMetadata() {
  return buildPageMetadata("faq", {
  title: "Digital Marketing FAQs | BizzBuzz Creations",
  description:
    "Explore expert answers to SEO, digital marketing, AEO, GEO, AI search, Google Ads, social media, and web development questions for businesses worldwide.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/faq",
  },
});
}

export default async function FAQPage() {
  const content = await getPageContent("faq");
  // Sections switched off in the dashboard (Remove section).
  const hidden = new Set(content?.hiddenSections || []);

  return (
    <>
      <PageSeoScripts pageKey="faq" />
      {!hidden.has("faqHero") && (
      <>
      <FaqHero content={content} />
      </>
      )}
      {!hidden.has("faqTopics") && (
      <>
      <FaqTopics content={content} />
      </>
      )}
      {!hidden.has("cta") && (
      <>
      <div className="bg-black pt-4">
        <CTA content={content} />
      </div>
      </>
      )}
    </>
  );
}
