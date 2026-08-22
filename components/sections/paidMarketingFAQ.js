import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "What does a paid marketing agency do?",
    answer:
      "A paid marketing agency runs and optimizes online ads to generate leads, calls, and sales through platforms like Google and Meta.",
  },
  {
    question: "What is performance marketing?",
    answer:
      "Performance marketing focuses on measurable results like leads and sales, not just clicks or impressions.",
  },
  {
    question: "Is paid marketing good for small businesses in India?",
    answer:
      "Yes, it helps small businesses generate targeted leads quickly with a controlled budget.",
  },
  {
    question: "What is the ideal budget for paid ads in India?",
    answer:
      "Budgets vary, but most businesses start small and scale once they see positive ROI.",
  },
  {
    question: "Which is the best paid marketing agency in Prayagraj?",
    answer:
      "BizzBuzz Creations is a trusted paid marketing agency in Prayagraj offering Google and Meta ad services.",
  },
];

export default function PaidMarketingFAQ() {
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Question"
    />
  );
}
