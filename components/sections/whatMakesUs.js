"use client";
import React from "react";
import Image from "next/image";

export default function WhatMAkesUs() {
  return (
    <div className="container mx-auto px-10 flex flex-wrap justify-center gap-10 items-center mb-20">
      <div>
        <h2 className="text-5xl font-bold mb-4 max-w-2xl">
          How Our Digital Services Transform Your Marketing
        </h2>
        <p className="max-w-lg mb-6">
          Our Strategic Approach That Delivers Real Results
        </p>
        <button className="px-4 py-2 me-2 bg-white text-black font-bold border cursor-pointer rounded-full transform hover:scale-95 hover:text-white hover:bg-black transition">
          Contact Us
        </button>
      </div>

      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-neutral-primary text-heading"
        data-inactive-classes="text-body"
        className="w-sm"
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Deep Business Understanding</span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-1"
          class="hidden"
          aria-labelledby="accordion-flush-heading-1"
        >
          <div class="py-5 border-b border-default text-body">
            <p class="mb-2">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p>
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                class="text-fg-brand hover:underline"
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
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Customized Strategy Building</span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-2"
          class="hidden"
          aria-labelledby="accordion-flush-heading-2"
        >
          <div class="py-5 border-b border-default text-body">
            <p class="mb-2">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p>
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                class="text-fg-brand hover:underline"
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
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>Execution With Precision </span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-3"
          class="hidden"
          aria-labelledby="accordion-flush-heading-3"
        >
          <div class="py-5 text-body border-b border-default">
            <p class="mb-2">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2">Learn more about these technologies:</p>
            <ul class="ps-5 list-disc">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-fg-brand hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-fg-brand hover:underline"
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
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-body border-b border-default gap-3"
            data-accordion-target="#accordion-flush-body-4"
            aria-expanded="false"
            aria-controls="accordion-flush-body-4"
          >
            <span>Execution With Precision </span>
            <svg
              data-accordion-icon
              class="w-5 h-5 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 15 7-7 7 7"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-flush-body-4"
          class="hidden"
          aria-labelledby="accordion-flush-heading-4"
        >
          <div class="py-5 text-body border-b border-default">
            <p class="mb-2">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2">Learn more about these technologies:</p>
            <ul class="ps-5 list-disc">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-fg-brand hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-fg-brand hover:underline"
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
