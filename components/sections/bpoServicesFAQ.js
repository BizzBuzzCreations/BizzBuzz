"use client";

import React, { useState } from "react";

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
