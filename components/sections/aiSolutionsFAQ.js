import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question:
      "What's the difference between an AI solutions company and a developer?",
    answer:
      "A developer builds a tool; an AI solutions company builds a complete system with automation, agents, and strategy.",
  },
  {
    question: "Can small businesses afford AI solutions?",
    answer:
      "Yes, you can start with one use case (like a chatbot) and scale as needed.",
  },
  {
    question: "What is GEO, and do I need it?",
    answer:
      "GEO helps AI tools recommend your business in search results, making it essential alongside SEO.",
  },
  {
    question: "Will an AI chatbot sound robotic?",
    answer:
      "No, it's trained on your business tone to deliver natural, human-like responses.",
  },
  {
    question: "How long does it take to build an AI agent?",
    answer:
      "Most AI agents are ready within 2 to 4 weeks, depending on complexity.",
  },
];

export default function AISolutionsFAQ() {
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Question"
    />
  );
}
