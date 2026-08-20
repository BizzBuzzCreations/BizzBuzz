import React from "react";
import DarkFAQSection from "@/components/sections/darkFAQSection";

const faqs = [
  {
    question: "How much does digital marketing cost in India?",
    answer: "Depends on your goals and city. Get a free custom quote.",
  },
  {
    question: "What does a digital marketing agency do?",
    answer:
      "Handles your SEO, ads, social media, and website — so you get found online.",
  },
  {
    question: "Can a Prayagraj business rank across India?",
    answer: "Yes. Local SEO plus a wider keyword strategy makes it possible.",
  },
  {
    question: "How long does SEO take to show results?",
    answer: "Usually 2–3 months for visible movement. Ads work faster.",
  },
  {
    question: " Is SEO still relevant with AI tools like ChatGPT?",
    answer:
      "Yes — you now need to rank on Google and show up in AI answers.",
  },
];

export default function FAQ() {
  return <DarkFAQSection faqs={faqs} heading="FAQs" />;
}
