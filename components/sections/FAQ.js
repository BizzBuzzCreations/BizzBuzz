import React from "react";

export default function FAQ() {
  return (
    <div className="mb-20 max-w-5xl p-4 mx-auto container">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">
        How It Works
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
            <span>Boost Online Visibility</span>
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
              IT Consulting & IT Services at Bizz Buzz Creations offer expert
              guidance and ongoing support to optimize your technology, improve
              security, reduce costs, and streamline operations—boosting
              productivity and keeping your business competitive.
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
            <span>Enhance Brand Awareness</span>
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
              At Bizz Buzz Creations, our IT services boost security with
              firewalls, encryption, system updates, and continuous monitoring,
              protecting your business from threats and ensuring data safety.
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
            <span>Increase Lead Generation</span>
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
              Increase lead generation by leveraging data-driven strategies,
              targeted campaigns, and personalized content to attract qualified
              prospects, nurture relationships, and convert them into loyal
              clients for sustained business growth.
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
            <span>Drive Targeted Traffic</span>
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
              Bizz Buzz Creations offers IT services including IT Management,
              Web Development, Cloud Computing, Tech Support, alongside
              Corporate Event Management, Financial Advisory, Business
              Consulting, Networking, Digital Marketing, and BPO Outsourcing
              solutions.
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
            <span>Performance Track and Optimize</span>
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
              Track performance with real-time analytics, assess campaign
              effectiveness, and continuously optimize strategies to enhance
              ROI, improve outcomes, and ensure sustained growth by adapting to
              market trends and customer behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
