import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "Do you provide BPO services outside Prayagraj?",
    answer:
      "Yes, we serve clients across India and internationally through offshore outsourcing.",
  },
  {
    question: "What is an AI-powered BPO?",
    answer:
      "It combines human agents with AI tools to deliver faster, cost-efficient support.",
  },
  {
    question: "Is outsourcing affordable for startups?",
    answer:
      "Yes, you can start small and scale your remote team as your business grows.",
  },
  {
    question: "Do you offer 24/7 customer support?",
    answer:
      "Yes, we provide round-the-clock support with shift-based teams and AI backup.",
  },
  {
    question: "Is my data secure with you?",
    answer:
      "Yes, we follow NDAs, access control, and strict data protection practices.",
  },
];

export default function BPOServicesFAQ() {
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Question"
    />
  );
}
