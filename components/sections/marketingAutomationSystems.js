import { Mail, Filter, Contact, MessageCircle } from "lucide-react";

const systems = [
  {
    icon: Mail,
    title: "Email Marketing Automation",
    description:
      "We set up email automation services that send the right message at the right moment: welcome sequences, abandoned cart reminders, and re-engagement campaigns without anyone manually hitting send. Every email is timed, tested, and tracked, so your list keeps working for you instead of sitting idle in a spreadsheet.",
  },
  {
    icon: Filter,
    title: "Lead Nurturing Automation",
    description:
      "A lead that isn't ready to buy today doesn't mean a lost sale. Our lead nurturing automation keeps prospects warm with timed content, reminders, and offers, quietly moving them down the funnel through sales funnel automation services until they're ready to talk to your team.",
  },
  {
    icon: Contact,
    title: "CRM Marketing Automation",
    description:
      "Your CRM shouldn't be a place where leads go to be forgotten. We connect CRM marketing automation directly to your campaigns, so every call, form fill, or reply automatically updates lead status, assigns follow-ups, and triggers the next action. No manual data entry is required.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Marketing Automation",
    description:
      "With open rates far higher than email, WhatsApp marketing automation lets you send order updates, offers, and reminders where your customers already are. Paired with chatbot marketing automation, it also handles common questions instantly, turning idle chats into automated lead generation services.",
  },
];

export default function MarketingAutomationSystems() {
  return (
    <div className="container max-w-6xl mx-auto mb-20 px-5">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Four Systems That Keep Working After Your Team Clocks Out
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {systems.map((system) => {
          const Icon = system.icon;
          return (
            <div
              key={system.title}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {system.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {system.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
