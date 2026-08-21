import Link from "next/link";
import {
  Search,
  Share2,
  Megaphone,
  MonitorSmartphone,
  Headset,
  Bot,
} from "lucide-react";
import GuidesHero from "@/components/sections/guidesHero";
import CTA from "@/components/sections/CTA";
import LatestBlogs from "@/components/sections/latestBlogs";

export const metadata = {
  title: "Marketing Guides | BizzBuzz Creations",
  description:
    "Practical, no-fluff guides on SEO, social media, Google Ads, website conversion, customer support, and AI-driven marketing — from BizzBuzz Creations.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/guides",
  },
};

// Same structure as the Press Release page's "Recent Announcements" —
// short, real, actionable takeaways instead of gated PDFs.
const GUIDES = [
  {
    icon: Search,
    tag: "SEO",
    title: "SEO Fundamentals for Local Businesses",
    body: "Complete your Google Business Profile fully, keep your name/address/phone consistent everywhere, and write real service pages for each city you serve — thin pages don't rank.",
  },
  {
    icon: Share2,
    tag: "Social Media",
    title: "Social Media Marketing 101",
    body: "Pick 3–4 content pillars instead of posting whatever comes to mind, keep a realistic schedule you can actually sustain, and pair your best organic posts with a small ad budget.",
  },
  {
    icon: Megaphone,
    tag: "Paid Ads",
    title: "Getting Started with Google Ads",
    body: "Set up conversion tracking before spending a rupee, separate campaigns by intent, and review search term reports weekly to catch wasted spend early.",
  },
  {
    icon: MonitorSmartphone,
    tag: "Website",
    title: "Website Conversion Checklist",
    body: "Aim for under 3-second mobile load times, one clear call-to-action per page, and visible trust signals — real contact info, testimonials, and certifications.",
  },
  {
    icon: Headset,
    tag: "Support",
    title: "Customer Support & BPO Basics",
    body: "Set a clear response-time target and track it, give your team scripts that still sound human, and build a clear escalation path for issues agents can't resolve alone.",
  },
  {
    icon: Bot,
    tag: "AI & Automation",
    title: "AI & Automation for Small Business Marketing",
    body: "Automate the follow-up (not the first conversation), use AI for first drafts with a human edit before publishing, and start with one workflow instead of automating everything at once.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <GuidesHero />

      {/* Guides — list + sidebar, dark theme (same layout as Press Release) */}
      <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              All Guides
            </h2>
            <p className="text-white/40 text-sm mb-8">
              {GUIDES.length} guides
            </p>

            <div className="divide-y divide-white/10">
              {GUIDES.map(({ icon: Icon, tag, title, body }) => (
                <div key={title} className="flex gap-5 py-6 first:pt-0">
                  <span className="shrink-0 w-14 h-14 rounded-xl bg-[#0B60B0]/15 border border-[#40A2D8]/25 flex items-center justify-center text-[#40A2D8]">
                    <Icon size={24} />
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#40A2D8]">
                      {tag}
                    </span>
                    <h3 className="font-bold text-white mt-1 mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(160deg, #0B60B0, #40A2D8)",
              }}
            >
              <h3 className="font-bold text-lg mb-5 leading-snug">
                Want Hands-On Help With Any of This?
              </h3>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#0B60B0] font-semibold rounded-lg py-2.5 mb-3 hover:bg-gray-100 transition"
              >
                Schedule a Call
              </Link>
              <Link
                href="/#services"
                className="block text-center border border-white/50 text-white rounded-lg py-2.5 hover:bg-white/10 transition"
              >
                View Our Services
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Latest blogs — real, live content from the blog */}
      <LatestBlogs dark />

      {/* CTA — just above the footer */}
      <div className="bg-black pt-4 pb-16">
        <CTA />
      </div>
    </>
  );
}

// LatestBlogs fetches from MongoDB — force-dynamic so this page renders at
// request time instead of during `next build`, where the build sandbox
// can't reliably resolve the Atlas mongodb+srv:// DNS record. Same pattern
// already used on /career and /blog.
export const dynamic = "force-dynamic";
