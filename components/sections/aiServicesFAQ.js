"use client";

import React, { useState } from "react";

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

export default function AIServicesFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Question
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-base font-semibold text-gray-800 pr-4">
                  {index + 1}. {faq.question}
                </span>
                <span
                  className="text-2xl font-light text-gray-500 shrink-0 transition-transform duration-300"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen ? "200px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
