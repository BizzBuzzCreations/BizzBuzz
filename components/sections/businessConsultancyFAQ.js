"use client";

import React, { useState } from "react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container max-w-4xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
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
