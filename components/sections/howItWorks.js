import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const howItWorks = [
    {
      title: "Customized Strategies",
      description:
        "We create marketing strategies that align with goals and audiences.",
      src: "/strategy.webp",
    },

    {
      title: "Comprehensive Expertise",
      description:
        "Services spanning SEO, social media, PPC, content, and email marketing.",
      src: "/expertise.webp",
    },
    {
      title: "Client-Centric Approach",
      description:
        "Dedicated support ensuring transparent communication and measurable results.",
      src: "/client.webp",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 block max-w-sm p-6 border border-gray-300 rounded-xl shadow-xs"
            >
              <Image
                className="rounded-xl"
                src={item.src}
                alt="how"
                width={300}
                height={300}
              />
              <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                {item.title}
              </h5>
              <p className="mb-6 text-body">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
