import { Bot, PhoneCall, Workflow, FileText, UserCheck, Clock } from "lucide-react";

// Hub-and-spoke layout: BPO in the center, six service boxes radiating
// outward, connected by lines — matches the reference sketch. Hexagon
// positions in percent of the (square) container, clockwise from the top.
const ITEMS = [
  {
    icon: Bot,
    heading: "AI-Powered BPO & Call Center Solutions",
    description:
      "We layer AI call center solutions on top of real agents' smart call routing, live transcription, and chatbot customer support services that pick up repetitive questions instantly. Your team only steps in for calls that truly need a human touch, so nothing slips through and nothing feels robotic.",
    pos: { x: 50, y: 9 },
  },
  {
    icon: PhoneCall,
    heading: "Inbound & Outbound Call Center Services",
    description:
      "From answering customer queries to running outbound sales and collection calls, our inbound call center services and outbound call center services are staffed by agents trained on your scripts, tone, and product, not a generic script read out from a random floor.",
    pos: { x: 85, y: 32 },
  },
  {
    icon: Workflow,
    heading: "Business Process Automation Services",
    description:
      "Manual, repetitive processes are where most companies quietly lose hours every week. Our business process automation services map your workflow first, then automate the boring middle, freeing your in-house team to focus on decisions, not data-copying.",
    pos: { x: 85, y: 68 },
  },
  {
    icon: FileText,
    heading: "Data Entry & Back Office Outsourcing",
    description:
      "Invoices, records, CRM updates, reconciliations — our data entry outsourcing and back office outsourcing desks work with the same accuracy checks a large enterprise would demand, at a cost a small business can actually plan around, including finance and accounting outsourcing support.",
    pos: { x: 50, y: 91 },
  },
  {
    icon: UserCheck,
    heading: "Virtual Assistant & Startup Outsourcing",
    description:
      "Not every business needs a 50-seat floor. Our virtual assistant services and startup outsourcing services let founders and small teams hand off scheduling, support and admin work through flexible remote team outsourcing, scaling up only when the workload genuinely demands it.",
    pos: { x: 15, y: 68 },
  },
  {
    icon: Clock,
    heading: "24/7 & E-commerce Customer Support",
    description:
      "Online stores and growing brands can't afford support that sleeps. Our 24/7 support outsourcing services and e-commerce customer support outsourcing cover order queries, returns, and chat support round the clock, with chatbot support services handling the late-night rush.",
    pos: { x: 15, y: 32 },
  },
];

export default function BpoRadialDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[880px]">
      {/* Connector lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {ITEMS.map((item, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={item.pos.x}
            y2={item.pos.y}
            stroke="#0B60B0"
            strokeOpacity="0.35"
            strokeWidth="0.4"
            strokeDasharray="2 1.5"
          />
        ))}
      </svg>

      {/* Center hub */}
      <div
        className="absolute z-20 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white text-center font-bold text-white shadow-2xl sm:h-32 sm:w-32"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(160deg, #0B60B0, #08152b)",
        }}
      >
        <span className="text-lg sm:text-xl">BPO</span>
      </div>

      {/* Satellite service boxes */}
      {ITEMS.map(({ icon: Icon, heading, description, pos }) => (
        <div
          key={heading}
          className="group absolute z-10"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%, -50%)",
            width: "clamp(170px, 18vw, 225px)",
          }}
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0B60B0]/50 group-hover:shadow-2xl">
            <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B60B0] text-white transition-transform duration-300 group-hover:scale-110">
              <Icon size={17} />
            </div>
            <h3 className="mb-1.5 text-sm font-bold text-gray-900 leading-snug">
              {heading}
            </h3>
            <p className="line-clamp-3 text-xs text-gray-500 leading-relaxed transition-all duration-300 group-hover:line-clamp-none">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
