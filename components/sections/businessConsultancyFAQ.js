import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "What does a business consultant do?",
    answer:
      "A business consultant helps you understand what's working in your business and what's not. They guide you with simple, practical strategies to improve growth, save costs, and run things more efficiently.",
  },
  {
    question: "How is this different from hiring staff?",
    answer:
      "Instead of hiring full-time employees, a consultant gives expert advice when you need it without long-term costs. They also bring a fresh, unbiased perspective to solve problems faster.",
  },
  {
    question: "Is it useful for small businesses or startups?",
    answer:
      "Absolutely. A consultant helps you avoid common mistakes, plan better, and grow faster especially when you're just starting out or trying to scale.",
  },
  {
    question: "How much does it cost in India?",
    answer:
      "It depends on what you need. Some businesses need a one-time strategy, while others need ongoing support. Good consultants usually offer flexible pricing based on your goals and budget.",
  },
  {
    question: "Can I find a consultant in Prayagraj/Allahabad?",
    answer:
      "Yes, there are local options like BizzBuzz Creations that understand the market well and can even work with you in person when needed.",
  },
];

export default function BusinessConsultancyFAQ() {
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Questions"
    />
  );
}
