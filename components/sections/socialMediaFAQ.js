import { FAQSection } from "@/components/ui/faq-accordion";

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
  return (
    <FAQSection
      faqs={faqs}
      className="container max-w-4xl mx-auto px-5 py-16"
      headingClassName="text-3xl font-bold mb-10 text-center"
      heading="Frequently Asked Questions"
    />
  );
}
