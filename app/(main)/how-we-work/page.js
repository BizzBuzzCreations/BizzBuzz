import PageHero from "@/components/sections/pageHero";
import RoadmapTimeline from "@/components/sections/roadmapTimeline";
import CTA from "@/components/sections/CTA";
import { UserCheck, FileBarChart, MessageSquare } from "lucide-react";

export const metadata = {
  title: "How We Work | BizzBuzz Creations",
  description:
    "See how BizzBuzz Creations runs an engagement — from discovery and strategy to execution, reporting, and ongoing optimization.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/how-we-work",
  },
};

// Same steps as the About page's roadmap — kept in sync since this page
// is the dedicated, expanded version of that process.
const roadmapSteps = [
  {
    number: 1,
    title: "Discover & Audit",
    desc: "We analyze your brand, audience, competitors, and current digital presence to uncover real opportunities.",
  },
  {
    number: 2,
    title: "Strategize",
    desc: "We build a custom roadmap across SEO, paid media, content, and social — tailored to your goals and budget.",
  },
  {
    number: 3,
    title: "Create & Execute",
    desc: "Our team designs, writes, and launches everything — from landing pages to ad creatives and content calendars.",
  },
  {
    number: 4,
    title: "Optimize & Scale",
    desc: "We track live performance, run A/B tests, and refine campaigns to steadily improve ROI.",
  },
  {
    number: 5,
    title: "Report & Grow",
    desc: "Transparent monthly reporting and regular strategy calls keep growth compounding long after launch day.",
  },
];

const COMMUNICATION = [
  {
    icon: UserCheck,
    title: "One Dedicated Point of Contact",
    desc: "You're assigned a single contact who coordinates across whichever services you're using — SEO, ads, dev, or BPO — so you're never chasing different specialists yourself.",
  },
  {
    icon: FileBarChart,
    title: "Monthly Performance Reports",
    desc: "Clear reporting on what's working, what we changed, and what's planned next — with more frequent check-ins during the first weeks of a new campaign.",
  },
  {
    icon: MessageSquare,
    title: "Open, Direct Communication",
    desc: "No ticket queues for active clients — you can reach your point of contact directly by phone or email during business hours.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero
        label="Our Process"
        title="How We Work & Function"
        subtitle="A clear, repeatable process — from the first conversation to ongoing reporting — so you always know what we're doing and why."
      />

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-16">
            Our 5-Step Engagement Roadmap
          </h2>
          <RoadmapTimeline steps={roadmapSteps} />
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-4">
            How We Keep You in the Loop
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
            Good strategy falls apart without good communication — here's
            how we keep every engagement on the same page.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {COMMUNICATION.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B60B0] text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 pb-20">
        <CTA />
      </div>
    </>
  );
}
