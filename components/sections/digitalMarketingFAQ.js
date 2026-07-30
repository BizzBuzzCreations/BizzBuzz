import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question:
      "What's the difference between marketing automation and email marketing?",
    answer:
      "Email automation is one part; marketing automation includes CRM, lead nurturing, and multi-channel workflows.",
  },
  {
    question: "Can startups afford marketing automation?",
    answer:
      "Yes, you can start with a single workflow and scale as your business grows.",
  },
  {
    question: "Do you offer WhatsApp marketing automation?",
    answer:
      "Yes, we automate replies, reminders, updates, and customer interactions on WhatsApp.",
  },
  {
    question: "Will automation replace my sales team?",
    answer:
      "No, it supports your team by handling follow-ups while they focus on closing deals.",
  },
  {
    question: "How are you different from other agencies?",
    answer:
      "We build, track, and optimize complete workflows — not just set up tools.",
  },
];

export default function DigitalMarketingFAQ() {
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Question"
    />
  );
}
