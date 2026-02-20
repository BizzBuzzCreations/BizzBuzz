import React from "react";

export default function WhatMAkesUs() {
  return (
    <div className="container py-20 mx-auto p-4 flex flex-col justify-center gap-5 items-center">
      <div className=" text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 max-w-4xl">
          How Our Digital Services Transform Your Marketing
        </h2>
      </div>

      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-neutral-primary text-heading"
        data-inactive-classes="text-body"
        className="w-full max-w-4xl"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Deep Business Understanding</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          className="hidden"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 border-b border-default text-body">
            <p className="mb-2">
              We think that the first step to successful marketing is to really
              understand your business. Before we start any campaign, we spend
              time getting to know your business, your consumers, your rivals,
              and your long-term goals. This lets us come up with plans that are
              not only innovative, but also useful, relevant, and designed to
              have a meaningful effect on business.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Customized Strategy Building</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          className="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div className="py-5 border-b border-default text-body">
            <p className="mb-2">
              We don't think that marketing should be the same for everyone. We
              make plans that are just right for your business because every
              firm has its own goals, problems, and customers. We plan
              everything, from the channels we use to the messages we send,
              around what will perform best for your brand and market.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>Data-Driven Campaign Optimization</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          className="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div className="py-5 text-body border-b border-default">
            <p className="mb-2">
              It's not about guessing when it comes to successful digital
              marketing; it's about measuring, learning, and getting better. We
              keep track of every click, impression, and conversion to see what
              truly works. We use real data and insights to constantly enhance
              your campaigns so they perform better, waste less money, and give
              you a better return on your investment.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-4"
            aria-expanded="false"
            aria-controls="accordion-flush-body-4"
          >
            <span>Content marketing that focuses on the audience</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-4"
          className="hidden"
          aria-labelledby="accordion-flush-heading-4"
        >
          <div className="py-5 text-body border-b border-default">
            <p className="mb-2">
              Your audience, not simply your brand, is what makes great content.
              We create content that speaks directly to your customers’ needs,
              questions, and motivations. Our content, which includes blogs,
              landing pages, advertising, and social media postings, is meant to
              teach, engage, and lead your audience to take action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
