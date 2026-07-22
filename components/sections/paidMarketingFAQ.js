"use client";

import React, { useState } from "react";

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
