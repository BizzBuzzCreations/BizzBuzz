import { FAQSection } from "@/components/ui/faq-accordion";

// Dark-themed FAQ wrapper — same styling used on the BPO page, generic so
// every service page can reuse it with its own real FAQ content.
export default function DarkFAQSection({ faqs, heading = "Frequently Asked Questions" }) {
  return (
    <section className="bg-black py-16">
      <FAQSection
        faqs={faqs}
        className="container max-w-4xl mx-auto px-5"
        headingClassName="text-3xl font-bold mb-10 text-center text-white"
        heading={heading}
        triggerClassName="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:shadow-none"
        iconClassName="text-[#40A2D8]"
        questionTextClassName="text-white"
        chevronWrapClassName="bg-white/10"
        chevronClassName="text-white"
        answerClassName="bg-white/5 border border-white/10 shadow-none"
        answerTextClassName="text-white/70"
        answerIconWrapClassName="bg-white/10"
        answerIconClassName="text-[#40A2D8]"
      />
    </section>
  );
}
