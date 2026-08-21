"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Users,
  Search,
  Megaphone,
  Palette,
  Code2,
  Bot,
  Briefcase,
} from "lucide-react";

// Role-based structure rather than invented individual profiles with
// stock photos — the real people behind each role can be swapped in as
// the roster is finalized, without presenting placeholder faces as if
// they were real employees.
const FOUNDERS = [
  { icon: Crown, role: "Founder & CEO", dept: "Leadership" },
  { icon: Users, role: "Co-Founder & Director", dept: "Leadership" },
];

const LEADERS = [
  { icon: Search, role: "Head of SEO & Growth", dept: "SEO" },
  { icon: Megaphone, role: "Paid Media Lead", dept: "Paid Ads" },
  { icon: Palette, role: "Creative & Brand Director", dept: "Creative" },
  { icon: Code2, role: "Web Development Lead", dept: "Engineering" },
  { icon: Bot, role: "AI & Automation Lead", dept: "AI & Automation" },
  { icon: Briefcase, role: "Business Consultancy Lead", dept: "Consultancy" },
];

// Real BizzBuzz team photos (same assets already used elsewhere on the
// site — the hero and the About page's "Our Story" section), not
// fabricated department photos.
const TEAM_GROUPS = [
  {
    title: "Meet Our BPO Team",
    desc: "The voices behind every call and chat — handling customer support, lead follow-up, and day-to-day client communication so nothing falls through the cracks.",
    image: "/teamPic.webp",
    imageAlt: "The BizzBuzz Creations BPO team",
  },
  {
    title: "Meet Our R&D Team",
    desc: "Constantly testing what's next in SEO, AI-driven search, and marketing automation — so the strategies we run for clients stay ahead, not just current.",
    image: "/banner.png",
    imageAlt: "The BizzBuzz Creations R&D team",
  },
];

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
});

function RoleCard({ icon: Icon, role, dept, index, size = "normal" }) {
  return (
    <motion.div
      {...fadeUp(index)}
      className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
    >
      <div
        className={`${size === "large" ? "aspect-[4/3]" : "aspect-square"} flex items-center justify-center bg-white/5`}
      >
        <div
          className={`flex items-center justify-center rounded-full bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B60B0] group-hover:text-white ${
            size === "large" ? "w-20 h-20" : "w-16 h-16"
          }`}
        >
          <Icon size={size === "large" ? 34 : 28} />
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-[#40A2D8] mb-1">
          {dept}
        </p>
        <h3 className="font-bold text-white text-sm leading-snug">
          {role}
        </h3>
      </div>
    </motion.div>
  );
}

export default function TeamGrids() {
  return (
    <>
      {/* Founders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Founders
            </h2>
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              The two people who started BizzBuzz Creations and still set
              the direction every project follows.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-xl mx-auto gap-6">
            {FOUNDERS.map((f, i) => (
              <RoleCard key={f.role} {...f} index={i} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Our Leaders
            </h2>
            <p className="text-white/60 max-w-xl leading-relaxed">
              A hands-on group covering every part of the work — no
              gatekeeping between departments, and no ticket queue between
              you and the people actually doing the work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEADERS.map((l, i) => (
              <RoleCard key={l.role} {...l} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team — BPO & R&D, alternating photo side */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-white mb-14 text-center"
          >
            Meet Our Team
          </motion.h2>

          <div className="space-y-16">
            {TEAM_GROUPS.map((group, i) => {
              const imageFirst = i % 2 === 1;
              return (
                <div
                  key={group.title}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <motion.div
                    {...fadeUp(i)}
                    className={imageFirst ? "md:order-2" : ""}
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                      {group.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {group.desc}
                    </p>
                  </motion.div>

                  <motion.div
                    {...fadeUp(i + 1)}
                    className={`relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg ${
                      imageFirst ? "md:order-1" : ""
                    }`}
                  >
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
