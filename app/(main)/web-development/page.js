import ServicesHero from "@/components/sections/servicesHero";
import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/sections/serviceCard";
import {
  LayoutTemplate,
  ShoppingCart,
  Server,
  Atom,
  RefreshCw,
  Newspaper,
} from "lucide-react";
import CTA2 from "@/components/sections/CTA-2";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Counter from "@/components/sections/counter";
import CTA from "@/components/sections/CTA";
import { FAQSection } from "@/components/ui/faq-accordion";

export const metadata = {
  title:
    "Website Development Company in India | Custom Web Design | BizzBuzz Creations",
  description:
    "Get fast, secure & high-converting websites. Custom web development, WordPress & eCommerce solutions by BizzBuzz Creations in Prayagraj & India.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/web-development",
  },
};

const faqs = [
  {
    question: "How much does a website cost in 2026?",
    answer:
      "Costs vary based on features, but we offer affordable, tailored pricing.",
  },
  {
    question: "Why does my business need a website?",
    answer: "It builds trust and generates consistent leads online.",
  },
  {
    question: "Will my website work on all devices?",
    answer:
      "Yes, all our websites are fully responsive and mobile-friendly.",
  },
  {
    question: "Can you add AI features to my website?",
    answer:
      "Yes, we integrate AI tools like chatbots and automation where useful.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and security support.",
  },
];

export default function WebDevelopment() {
  return (
    <>
      <ServicesHero
        heading="Top Website Development Company in India"
        description="Custom, high-performance websites for businesses in Prayagraj and across India.
        First impressions happen fast. We build fast, secure websites for businesses in Prayagraj and across India, websites that actually bring in customers."
        img="/web-dev.webp"
      />

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center items-center mb-10 px-5">
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/Web-Development-Promotion-Instagram-Post-3.webp"
            alt="image"
          />
        </div>
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Web Development Services in Prayagraj - Serving All of India
          </h2>
          <p>
            Your website is usually the first conversation you have with a customer, 
            and most people decide whether to trust a business within seconds of landing on it. At BizzBuzz Creations, 
            we build websites that don't just look sharp; they convert visitors into customers. 
            Whether you're a local business in Prayagraj or Allahabad looking for a website development company near you, 
            a small business owner in India searching for a website developer businesses can rely on, or a startup in India needing a custom website developer for startups, 
            our team of website developers builds fast, secure, and scalable websites tailored to how your business actually works.
          </p>
          <br />
          <p>
            We're a full-service web development company in Prayagraj, proudly serving clients locally across Allahabad and Uttar Pradesh, 
            as well as businesses across the UK, USA, India, and globally. From your first idea to a fully launched, search-optimized website, 
            we handle the strategy, design, and code so you don't have to juggle five different freelancers to get it right.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Web Development Services We Offer</h2>
        <div className="flex flex-wrap justify-center items-center mb-20 gap-10">
          <ServiceCard
            heading="Custom Web Development & Design"
            description="Off-the-shelf templates only get you so far. Our custom web development team builds mobile-first, responsive websites around your specific goals lead generation, bookings, or online sales combining clean design with solid, maintainable code. We make sure your site scales with your business instead of becoming outdated in a year."
            icon={LayoutTemplate}
          />
          <ServiceCard
            heading="Shopify & Ecommerce Development"
            description="As specialist Shopify website developers, we build fast-loading, conversion-focused online stores with smooth checkout experiences. Whether you're an e-commerce website developer for small business needs or a growing retail brand, we design for speed, mobile shoppers, and global scalability, handling real-world traffic reliably, from 20 products to 20,000."
            icon={ShoppingCart}
          />
          <ServiceCard
            heading="PHP Web Application Development"
            description="For businesses with complex backend needs, our full-stack PHP developers build and modernize custom web applications from internal tools to customer-facing platforms. We specialize in updating legacy PHP systems, which often improves both security and site speed dramatically, along with fast, focused landing pages built purely for conversions."
            icon={Server}
          />
          <ServiceCard
            heading="REACT & NEXT.JS Development"
            description="Our React and Next.js developers build high-performing, AI-integrated frontends using server-side rendering to boost load speed and Google ranking. For projects needing pixel-perfect fundamentals, our HTML, CSS, and JavaScript developers craft responsive interfaces from scratch or integrate seamlessly with your existing backend and in-house team."
            icon={Atom}
          />
          <ServiceCard
            heading="Website Redesign & Management"
            description="An outdated website quietly costs you customers every day. Our redesign services modernize your UI/UX for higher conversions and fix Core Web Vitals without losing rankings you've already earned. Afterward, our ongoing website management covers monitoring, security updates, performance checks, and backups, so your site stays fast and online 24/7."
            icon={RefreshCw}
          />
          <ServiceCard
            heading="WordPress Development"
            description="Our WordPress developers build high-performance, SEO-ready websites with strong security, including protection against common vulnerabilities and AI-assisted threat monitoring. WordPress remains one of the most flexible platforms for content-heavy sites and businesses that want full control over updates without needing a developer for every change."
            icon={Newspaper}
          />
        </div>            
      </div>

      <div className="flex lg:flex-row flex-col lg:gap-20 justify-center items-center mb-5 md:mb-20 px-5 py-20 bg-[#e8e8e8]">
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-3">
            Why Choose BizzBuzz Creations?   
          </h2>
          <p>
            We follow a results-driven approach, not just building websites that look good but ones that sell. 
            A well-built website typically outperforms social media alone for generating trust and traffic and gives you far clearer insight into customer intent than any social platform can. 
            Combined with strong Core Web Vitals and technical SEO, our sites are built to rank, not just launch and be forgotten.
          </p>
          <br />
          <p>
            Ready to get started? Get in touch with our team for a free consultation, 
            and let's talk about what your website should actually be doing for your business.

          </p>
        </div>
        <div className="">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            src="/Web-Development-Promotion-Instagram-Post-4.webp"
            alt="image"
          />
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <FAQSection
        faqs={faqs}
        className="container max-w-4xl mx-auto px-5 py-16"
        headingClassName="text-3xl font-bold mb-10 text-center"
        heading="Frequently Asked Questions"
      />

      <CTA2 />
      <WhyChooseUs />
      <Counter />
      <CTA />
    </>
  );
}