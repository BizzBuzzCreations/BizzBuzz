import FaqHero from "@/components/sections/faqHero";
import FaqTopics from "@/components/sections/faqTopics";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "FAQs | BizzBuzz Creations",
  description:
    "Answers to common questions about BizzBuzz Creations' digital marketing, BPO, and web development services — pricing, process, data security, and more.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <FaqHero />
      <FaqTopics />
      <div className="bg-black pt-4 pb-20">
        <CTA />
      </div>
    </>
  );
}
