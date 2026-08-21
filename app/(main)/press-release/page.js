import Link from "next/link";
import {
  Award,
  Globe2,
  ShieldCheck,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";
import PressHero from "@/components/sections/pressHero";
import CTA from "@/components/sections/CTA";
import LatestBlogs from "@/components/sections/latestBlogs";

export const metadata = {
  title: "Press Release | BizzBuzz Creations",
  description:
    "Company news, certifications, and milestones from BizzBuzz Creations — a digital marketing and BPO agency serving clients across India and the UK.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/press-release",
  },
};

// Real, verifiable facts already established elsewhere on the site
// (Recognitions section, Contact page offices, About page milestones) —
// framed as brief announcements rather than a fabricated news feed with
// invented dates or claims.
const ANNOUNCEMENTS = [
  {
    icon: BadgeCheck,
    tag: "Certification",
    title: "BizzBuzz Creations Certified as a Google Ads & Marketing Partner",
    body: "Certified Google Ads & Marketing Partner status, reflecting proven expertise in managing and optimizing Google advertising campaigns for clients.",
  },
  {
    icon: Award,
    tag: "Partnership",
    title: "Recognized as a Verified Partner on Clutch",
    body: "Listed as a verified partner on Clutch, among trusted digital marketing agencies evaluated for client delivery and service quality.",
  },
  {
    icon: BadgeCheck,
    tag: "Certification",
    title: "Certified Google Analytics Partner Status Achieved",
    body: "Now a certified Google Analytics partner, supporting more accurate measurement and data-driven strategy for client campaigns.",
  },
  {
    icon: ShieldCheck,
    tag: "Quality",
    title: "ISO-Certified Business Processes",
    body: "Internal business processes are ISO certified, reflecting a formal commitment to consistent, quality-controlled client delivery.",
  },
  {
    icon: Globe2,
    tag: "Expansion",
    title: "BizzBuzz Creations Expands to London, United Kingdom",
    body: "Alongside the Prayagraj, India headquarters, BizzBuzz Creations now operates an office in London, UK, extending support across both regions.",
  },
  {
    icon: TrendingUp,
    tag: "Milestone",
    title: "90+ Projects Delivered for 50+ Clients",
    body: "90+ projects delivered for 50+ clients across India, spanning industries from finance and healthcare to e-commerce and real estate.",
  },
];

export default function PressReleasePage() {
  return (
    <>
      <PressHero />

      {/* Recent announcements — list + sidebar, dark theme */}
      <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Recent Announcements
            </h2>
            <p className="text-white/40 text-sm mb-8">
              {ANNOUNCEMENTS.length} updates
            </p>

            <div className="divide-y divide-white/10">
              {ANNOUNCEMENTS.map(({ icon: Icon, tag, title, body }) => (
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

          <aside className="space-y-8">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(160deg, #0B60B0, #40A2D8)",
              }}
            >
              <h3 className="font-bold text-lg mb-5 leading-snug">
                Explore How Our Services Can Grow Your Business
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
