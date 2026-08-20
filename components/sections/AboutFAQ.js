import DarkFAQSection from "@/components/sections/darkFAQSection";

const faqs = [
  {
    question: "What does Bizzbuzz Creations do?",
    answer:
      "We're a digital marketing agency in India offering SEO, paid ads, social media, content, and web design — all under one roof.",
  },
  {
    question: "How is Bizzbuzz Creations different from other agencies?",
    answer:
      "We build for both traditional search and AI-driven search — not just Google rankings, but how AI tools and voice assistants recommend brands too.",
  },
  {
    question: "How many clients has Bizzbuzz Creations worked with?",
    answer: "We've delivered 90+ projects for 50+ clients across India.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Paid ads show results in weeks; SEO and content typically build momentum in 3–6 months.",
  },
  {
    question: "How do I get started with Bizzbuzz Creations?",
    answer:
      "Book a free strategy call — we'll audit your digital presence and share a custom growth plan.",
  },
];

export default function AboutFAQ() {
  return <DarkFAQSection faqs={faqs} heading="FAQs" />;
}
