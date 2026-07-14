import React from "react";

export default function FAQ() {
  return (
    <div className="mb-20 max-w-5xl p-4 mx-auto container">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">
        FAQs
      </h2>

      <div
        id="accordion-faq"
        data-accordion="collapse"
        data-active-classes="bg-neutral-primary text-heading"
        data-inactive-classes="text-body"
        className="w-full max-w-4xl mx-auto"
      >
        <h2 id="accordion-flush-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-5"
            aria-expanded="true"
            aria-controls="accordion-flush-body-5"
          >
            <span>How much does digital marketing cost in India?</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
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
          id="accordion-flush-body-5"
          className="hidden"
          aria-labelledby="accordion-flush-heading-5"
        >
          <div className="py-5 border-b border-default text-body">
            <p className="mb-2">
              Depends on your goals and city. Get a free custom quote.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-6">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-6"
            aria-expanded="false"
            aria-controls="accordion-flush-body-6"
          >
            <span>What does a digital marketing agency do?</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
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
          id="accordion-flush-body-6"
          className="hidden"
          aria-labelledby="accordion-flush-heading-6"
        >
          <div className="py-5 border-b border-default text-body">
            <p className="mb-2">
              Handles your SEO, ads, social media, and website — so you get found online.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-7">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-7"
            aria-expanded="false"
            aria-controls="accordion-flush-body-7"
          >
            <span>Can a Prayagraj business rank across India?</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
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
          id="accordion-flush-body-7"
          className="hidden"
          aria-labelledby="accordion-flush-heading-7"
        >
          <div className="py-5 text-body border-b border-default">
            <p className="mb-2">
              Yes. Local SEO plus a wider keyword strategy makes it possible.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-8">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-8"
            aria-expanded="false"
            aria-controls="accordion-flush-body-8"
          >
            <span>How long does SEO take to show results?</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
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
          id="accordion-flush-body-8"
          className="hidden"
          aria-labelledby="accordion-flush-heading-8"
        >
          <div className="py-5 text-body border-b border-default">
            <p className="mb-2">
              Usually 2–3 months for visible movement. Ads work faster.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-9">
          <button
            type="button"
            className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-9"
            aria-expanded="false"
            aria-controls="accordion-flush-body-9"
          >
            <span> Is SEO still relevant with AI tools like ChatGPT?</span>
            <svg
              data-accordion-icon
              className="w-5 h-5 rotate-180 shrink-0"
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
          id="accordion-flush-body-9"
          className="hidden"
          aria-labelledby="accordion-flush-heading-9"
        >
          <div className="py-5 text-body border-b border-default">
            <p className="mb-2">
              Yes — you now need to rank on Google and show up in AI answers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
