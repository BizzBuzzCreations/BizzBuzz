import React from "react";

export default function FAQ() {
  return (
    <div className="mb-20 max-w-5xl mx-auto container">
      <h2 className="md:text-4xl text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-neutral-primary text-heading"
        data-inactive-classes="text-body"
        className="w-full max-w-4xl mx-auto"
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
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p>
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-fg-brand hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
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
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p>
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-fg-brand hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
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
            <span>Execution With Precision </span>
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
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2">Learn more about these technologies:</p>
            <ul className="ps-5 list-disc">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-fg-brand hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-fg-brand hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
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
            <span>Execution With Precision </span>
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
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p className="mb-2">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2">Learn more about these technologies:</p>
            <ul className="ps-5 list-disc">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-fg-brand hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-fg-brand hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
