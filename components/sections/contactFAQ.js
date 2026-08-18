import { FAQSection } from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "How quickly will BizzBuzz Creations get back to me?",
    answer:
      "We typically respond within 24 business hours of receiving your email or form submission — often sooner.",
  },
  {
    question: "Do you work with businesses outside Prayagraj and India?",
    answer:
      "Yes — alongside our India office, we also serve clients through our UK office in London, so we work with businesses across both regions.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes. Drop us an email or give us a call and we'll go over your goals and share a plan — no cost, no obligation.",
  },
  {
    question: "What information should I share when I reach out?",
    answer:
      "Just your business name, website (if you have one), and what you're hoping to achieve — SEO, ads, a new website, or support. We'll take it from there.",
  },
  {
    question: "Can I visit your office in person?",
    answer:
      "Absolutely — you're welcome at either our Prayagraj or London office during business hours. Full addresses and Google Maps links are further down this page.",
  },
];

// Blue-tinted hover instead of the accordion's default gray — matches the
// treatment already used on /faq, so the two pages read as one system.
const TRIGGER_HOVER = "hover:bg-[#eaf4fb] hover:border-[#40A2D8]/40";

export default function ContactFAQ() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] text-center mb-3">
        Got Questions?
      </p>
      <FAQSection
        faqs={faqs}
        defaultValue="item-0"
        headingClassName="md:text-4xl text-3xl font-bold text-center mb-12 text-white"
        heading="Frequently Asked Questions"
        triggerClassName={TRIGGER_HOVER}
      />
    </div>
  );
}
