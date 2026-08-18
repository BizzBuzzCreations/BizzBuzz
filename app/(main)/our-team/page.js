import Image from "next/image";
import TeamHero from "@/components/sections/teamHero";
import ContactSection from "@/components/sections/contactSection";
import {
  Crown,
  Search,
  Palette,
  Megaphone,
  Code2,
  Headset,
  Bot,
  Users,
} from "lucide-react";

export const metadata = {
  title: "Our Core Team | BizzBuzz Creations",
  description:
    "Meet the team behind BizzBuzz Creations — strategists, marketers, designers, and developers driving growth for clients across India and the UK.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/our-team",
  },
};

// Role-based structure rather than invented individual profiles with
// stock photos — the real people behind each role can be swapped in
// as the roster is finalized, without restructuring the page or
// presenting placeholder faces as if they were real employees.
const TEAM = [
  { icon: Crown, role: "Founder & CEO", dept: "Leadership" },
  { icon: Search, role: "Head of SEO & Growth", dept: "SEO" },
  { icon: Megaphone, role: "Paid Media Lead", dept: "Paid Ads" },
  { icon: Palette, role: "Creative & Brand Director", dept: "Creative" },
  { icon: Code2, role: "Web Development Lead", dept: "Engineering" },
  { icon: Bot, role: "AI & Automation Lead", dept: "AI & Automation" },
  { icon: Headset, role: "Client Success & BPO Lead", dept: "Support" },
  { icon: Users, role: "Business Consultancy Lead", dept: "Consultancy" },
];

export default function OurTeamPage() {
  return (
    <>
      <TeamHero />

      {/* Team grid */}
      <section className="bg-white py-20 px-6 md:px-12 lg:px-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[280px_1fr] gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A hands-on group covering every part of the work — no
              gatekeeping between departments, and no ticket queue between
              you and the people actually doing the work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map(({ icon: Icon, role, dept }) => (
              <div
                key={role}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0B60B0]/40 hover:shadow-xl"
              >
                <div
                  className="aspect-square flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(150deg, #eaf4fb 0%, #cfe9fb 100%)",
                  }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm text-[#0B60B0] transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#0B60B0] mb-1">
                    {dept}
                  </p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug">
                    {role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurable impact — real numbers and certifications only */}
      <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Measurable Impact
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 leading-relaxed">
            Real numbers, not vanity metrics — and the certifications behind
            the work.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[180px]"
              style={{ background: "linear-gradient(160deg, #0B60B0, #050b16)" }}
            >
              <p className="text-4xl font-bold mb-1">90+</p>
              <p className="text-white/70 text-sm">Projects Delivered</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[180px]">
              <p className="text-4xl font-bold mb-1">50+</p>
              <p className="text-white/70 text-sm">Clients Across India &amp; the UK</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col justify-end min-h-[180px]">
              <p className="text-4xl font-bold mb-1">2</p>
              <p className="text-white/70 text-sm">Offices — Prayagraj &amp; London</p>
            </div>
            <div
              className="rounded-2xl p-6 flex flex-col justify-end min-h-[180px]"
              style={{ background: "linear-gradient(160deg, #4c2f91, #050b16)" }}
            >
              <p className="text-4xl font-bold mb-1">20+</p>
              <p className="text-white/70 text-sm">Industries Served</p>
            </div>
          </div>

          {/* Real certifications, not fabricated press coverage */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-sm font-semibold text-white/70 mb-6">
              Certified &amp; Recognized By
            </p>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12">
              {[
                { src: "/clutch.png", alt: "Clutch" },
                { src: "/CDL.png", alt: "Google Ads Partner" },
                { src: "/GA.png", alt: "Google Analytics Partner" },
                { src: "/ISO.png", alt: "ISO Certified" },
              ].map((badge) => (
                <Image
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  width={80}
                  height={80}
                  className="object-contain h-14 w-auto opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact — same working form as the Contact page */}
      <ContactSection />
    </>
  );
}
