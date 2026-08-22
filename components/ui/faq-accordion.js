"use client";

import * as React from "react";
import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
CustomAccordionItem.displayName = "CustomAccordionItem";

const CustomAccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 rounded-2xl border border-gray-100 p-4 text-left",
          "bg-white transition-all hover:bg-gray-50/70 hover:shadow-md",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-900/20",
          "data-[state=open]:shadow-md",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-4">
          <HelpCircle className="h-5 w-5 text-gray-600" />
          <span className="text-lg font-medium text-zinc-700 tracking-wide">
            {children}
          </span>
        </div>
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
          <ChevronDown className="h-4 w-4 text-gray-800" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

const CustomAccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden",
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2",
        className,
      )}
      {...props}
    >
      <div className="mt-4 ml-14">
        <div className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-md transition-all">
          <span className="flex-1 text-md leading-relaxed text-gray-600">
            {children}
          </span>
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 transition-transform hover:scale-105">
            <MessageCircle className="h-5 w-5 text-gray-700" />
          </div>
        </div>
      </div>
    </AccordionPrimitive.Content>
  ),
);
CustomAccordionContent.displayName = "CustomAccordionContent";

export function FAQSection({
  heading,
  faqs,
  defaultValue,
  className,
  headingClassName,
}) {
  return (
    <div className={className}>
      {heading && (
        <h2 className={headingClassName}>{heading}</h2>
      )}
      <CustomAccordion
        type="single"
        collapsible
        defaultValue={defaultValue}
        className="space-y-6"
      >
        {faqs.map((faq, index) => (
          <CustomAccordionItem key={index} value={`item-${index}`}>
            <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
            <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
          </CustomAccordionItem>
        ))}
      </CustomAccordion>
    </div>
  );
}

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};
