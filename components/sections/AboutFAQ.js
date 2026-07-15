"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mb-20 max-w-5xl p-4 mx-auto container">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12 text-black">
        FAQs
      </h2>

      <div className="w-full max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="border-b border-black/20">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex items-center justify-between w-full py-5 font-medium text-black gap-3 text-left"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              {isOpen && (
                <div className="pb-5 text-black/80">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
