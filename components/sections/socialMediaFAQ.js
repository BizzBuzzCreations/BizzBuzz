"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What does a social media marketing agency do?",
    answer:
      "A social media marketing agency creates content, manages social platforms, runs ads, and builds strategies to increase brand visibility, engagement, and leads.",
  },
  {
    question: "How much do social media marketing services cost in India?",
    answer:
      "Social media marketing services in India vary based on goals, platforms, content, and ad budget. BizzBuzz Creations provides customized packages for businesses of all sizes.",
  },
  {
    question:
      "Which is better for business growth — Instagram or Facebook ads?",
    answer:
      "Instagram is ideal for brand awareness and visual content, while Facebook ads are effective for lead generation. BizzBuzz Creations combines both for better results.",
  },
  {
    question: "Does AI help in social media marketing in 2026?",
    answer:
      "Yes, AI improves content planning, audience analysis, automation, and ad optimization. BizzBuzz Creations uses AI-powered tools with human strategy for smarter campaigns.",
  },
  {
    question:
      "Why choose BizzBuzz Creations as a social media marketing agency in Prayagraj?",
    answer:
      "BizzBuzz Creations helps businesses grow through customized social media strategies, creative content, paid ads, and data-driven marketing solutions.",
  },
];

export default function SocialMediaFAQ() {
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
