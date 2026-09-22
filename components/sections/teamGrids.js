"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";
import {
  Crown,
  Users,
  Search,
  Megaphone,
  Palette,
  Code2,
  Bot,
  Briefcase,
  Target,
  Headset,
  FlaskConical,
  Linkedin,
  Instagram,
} from "lucide-react";

// Role-based structure rather than invented individual profiles with
// stock photos — the real people behind each role can be swapped in as
// the roster is finalized, without presenting placeholder faces as if
// they were real employees. Icons stay code-driven (design), matched
// positionally to whichever cards are saved.
const FOUNDER_ICONS = [Crown, Users];
const DEFAULT_FOUNDERS = [
  { name: "Abheuday Mishra", role: "Founder & CEO", photo: "/person-image.jpg", linkedin: "https://www.linkedin.com/in/abheuday-mishra?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Utkarsh Mishra", role: "Co-Founder & Director", photo: "/person-image.jpg", linkedin: "https://www.linkedin.com/in/utkarsh-mishra-293ba1209?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
];

const LEADER_ICONS = [Search, Megaphone, Palette, Code2, Bot, Briefcase, Users];
// No `dept` field on any of these — the small uppercase label that used
// to sit above the name has been dropped entirely (RoleCard only renders
// it when `dept` is present), leaving just the name and role/position.
const DEFAULT_LEADERS = [
  { name: "Abhay Sharma", role: "Compliance Manager", photo: "/team-images/abhay.jpeg" },
  { name: "Kautic Jaiswal", role: "Process Manager", photo: "/team-images/kautic.jpeg" },
  { name: "Swapnil Singh", role: "Team Leader", photo: "/team-images/swapnil.jpeg" },
  { name: "Shruti Singh", role: "Organizational Manager", photo: "/team-images/shruti.jpeg" },
  { name: "Aley Saiyyadah Rizvi", role: "HR", photo: "/team-images/aley.jpeg" },
  { name: "Md. Shameem", role: "IT Manager", photo: "/team-images/shameem.jpeg" },
  { name: "Ankit Kumar Yadav", role: "Accounts and Management", photo: "/team-images/ankit.jpeg" },
];

// Real BizzBuzz team photos — /teamPic.webp and /banner.png don't exist
// in /public (both rendered as broken image icons); swapped for a real
// office photo already used elsewhere on the site.
const DEFAULT_TEAM_GROUPS = [
  {
    title: "Meet Our BPO Team",
    tagline: "The People Keeping Every Customer Interaction Moving",
    desc: "Our BPO team handles customer support, lead follow-ups, communication, and day-to-day customer interactions, helping businesses stay responsive while creating smoother experiences for their customers.",
    image: "/team-images/team-bpo.jpeg",
  },
  {
    title: "Meet Our R&D Team",
    tagline: "Exploring What’s Next in Digital",
    desc: "Our R&D team researches and tests emerging technologies across AI search, SEO, automation, digital tools, and evolving search behaviour. Their work helps us turn new developments into practical strategies and smarter solutions for the businesses we serve.",
    image: "/team-images/team-rnd.jpeg",
  },
];

const SPECIALTY_ICONS = [Megaphone, Palette, Code2, Target, Headset, FlaskConical];
const DEFAULT_TEAM_SPECIALTIES = [
  {
    title: "Digital Marketing",
    desc: "Our marketing specialists combine SEO, paid advertising, social media, content, and campaign strategy to help businesses reach the right audiences and create measurable digital growth.",
  },
  {
    title: "Creative",
    desc: "Our creative team brings together branding, graphic design, visual content, and creative campaigns to help businesses communicate clearly, build recognition, and create memorable digital experiences.",
  },
  {
    title: "Technology",
    desc: "Our technology specialists work across web development, website optimisation, integrations, and digital solutions, creating reliable digital experiences designed around business and customer needs.",
  },
  {
    title: "Strategy",
    desc: "Our strategists connect research, analytics, positioning, planning, and business goals to create focused digital roadmaps that give every campaign and digital initiative a clear direction.",
  },
  {
    title: "BPO & Support",
    desc: "Our BPO and support specialists manage customer communication, lead follow-ups, support operations, and day-to-day interactions, helping businesses deliver responsive and consistent customer experiences.",
  },
  {
    title: "R&D",
    desc: "Our R&D specialists explore AI search, automation, emerging technologies, and evolving digital trends to help our teams discover smarter approaches and prepare businesses for what's next.",
  },
];

const DEFAULT_WHY_IT_WORKS = [
  {
    title: "No Handoffs",
    desc: "Every project moves through one connected team, not separate vendors passing work between each other — so nothing gets lost in translation.",
  },
  {
    title: "Decisions Backed by Data",
    desc: "Every recommendation — creative, technical, or strategic — is grounded in real performance data, not opinion or trend-chasing.",
  },
  {
    title: "Built to Last, Not Just Launch",
    desc: "We design systems and strategies meant to keep working long after launch — not quick wins that fade once the campaign ends.",
  },
  {
    title: "Full Accountability",
    desc: "Because the work stays in-house, one team owns the outcome end to end — no outsourced pieces to point fingers at when something needs fixing.",
  },
];

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
});

export function RoleCard({
  icon: Icon,
  name,
  role,
  dept,
  index,
  size = "normal",
  // When true (currently only the Founders cards), hovering the card
  // 3D-flips it to reveal the name + LinkedIn/Instagram links on the
  // back face, instead of just a hover lift.
  flip = false,
  linkedin,
  instagram,
  // Only the Founders keep LinkedIn on the back now — every other grid
  // (Leaders, BPO, R&D) flips to just the name + role, no social icons.
  showLinkedin = true,
  showInstagram = true,
  // Optional real headshot — when set, this replaces the generic
  // icon-in-a-circle placeholder with an actual photo filling the same
  // image area. Most roles still use the icon since a real photo isn't
  // available for everyone yet.
  photo,
}) {
  const isXl = size === "xl";
  const isLarge = size === "large" || isXl;
  // Desktop flips these cards on :hover, which touch devices can never
  // trigger — so on mobile the card just sat there, front-face-only,
  // forever. Tapping now toggles the same flip via this state, on top of
  // (not instead of) the existing hover behavior for mouse users.
  const [flipped, setFlipped] = useState(false);

  if (flip) {
    return (
      <motion.div
        {...fadeUp(index)}
        className="group [perspective:1500px] cursor-pointer h-full"
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setFlipped((f) => !f);
          }
        }}
      >
        {/* `h-full` on every layer down to the front face (grid's default
            `align-items: stretch` already makes the outer card fill the
            row's tallest neighbor — but a plain block child doesn't
            inherit that height unless each one explicitly fills its
            parent) so every card in a row ends up the exact same total
            height, whatever the name/role wraps to. The photo itself
            stays a fixed, undistorted aspect ratio either way — only the
            text area's bottom whitespace grows or shrinks to absorb the
            difference, instead of the box itself varying in height. */}
        <div
          className={`relative h-full transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front — identical markup to the non-flip card below, just
              sized the same way via isXl/isLarge so flip cards match
              whichever grid (Founders, Leaders) they're used in. */}
          <div className="h-full flex flex-col [backface-visibility:hidden] rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-sm">
            <div
              className={`relative shrink-0 ${photo ? "aspect-[3/4]" : isLarge ? "aspect-[4/3]" : "aspect-square"} flex items-center justify-center bg-white/5`}
            >
              {photo ? (
                <Image src={photo} alt={name || role} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
              ) : (
                <div
                  className={`flex items-center justify-center rounded-full bg-white/10 text-[#40A2D8] ${
                    isXl ? "w-28 h-28" : isLarge ? "w-20 h-20" : "w-16 h-16"
                  }`}
                >
                  <Icon size={isXl ? 48 : isLarge ? 34 : 28} />
                </div>
              )}
            </div>
            <div className={`flex-1 flex flex-col justify-center ${isXl ? "p-6" : "p-4"}`}>
              {dept && (
                <p className={`font-bold uppercase tracking-wide text-[#40A2D8] mb-1 ${isXl ? "text-sm" : "text-xs"}`}>
                  {dept}
                </p>
              )}
              {name && (
                <h3 className={`font-bold text-white leading-snug ${isXl ? "text-xl mb-1" : "text-sm"}`}>
                  {name}
                </h3>
              )}
              <p className={`text-white/60 leading-snug ${isXl ? "text-base" : "font-bold text-white text-sm"}`}>
                {role}
              </p>
            </div>
          </div>

          {/* Back — name + role + social links, flipped 180deg so it
              reads correctly once the card itself rotates into view.
              Falls back to just the role when no name is set yet (e.g.
              leaders whose roster hasn't been finalized with real
              names) — no point repeating the same text twice. */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-[#40A2D8]/40 bg-[#0B60B0]/10 flex flex-col items-center justify-center gap-5 p-6 text-center">
            <div>
              <h3 className="font-bold text-white text-xl leading-snug">
                {name || role}
              </h3>
              {name && role && (
                <p className="text-[#40A2D8] text-sm font-semibold mt-1">
                  {role}
                </p>
              )}
            </div>
            {(showLinkedin || showInstagram) && (
              <div className="flex items-center gap-4">
                {showLinkedin && (
                  <a
                    href={linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name || role} on LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-[#40A2D8] hover:bg-white hover:text-[#0B60B0] transition-colors duration-300"
                  >
                    <Linkedin size={19} />
                  </a>
                )}
                {showInstagram && (
                  <a
                    href={instagram || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${name || role} on Instagram`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-[#40A2D8] hover:bg-white hover:text-[#0B60B0] transition-colors duration-300"
                  >
                    <Instagram size={19} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...fadeUp(index)}
      className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
    >
      <div
        className={`relative shrink-0 ${photo ? "aspect-[3/4]" : isLarge ? "aspect-[4/3]" : "aspect-square"} flex items-center justify-center bg-white/5`}
      >
        {photo ? (
          <Image src={photo} alt={name || role} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top" />
        ) : (
          <div
            className={`flex items-center justify-center rounded-full bg-white/10 text-[#40A2D8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#0B60B0] group-hover:text-white ${
              isXl ? "w-28 h-28" : isLarge ? "w-20 h-20" : "w-16 h-16"
            }`}
          >
            <Icon size={isXl ? 48 : isLarge ? 34 : 28} />
          </div>
        )}
      </div>
      <div className={`flex-1 flex flex-col justify-center ${isXl ? "p-6" : "p-4"}`}>
        {dept && (
          <p className={`font-bold uppercase tracking-wide text-[#40A2D8] mb-1 ${isXl ? "text-sm" : "text-xs"}`}>
            {dept}
          </p>
        )}
        {name && (
          <h3 className={`font-bold text-white leading-snug ${isXl ? "text-xl mb-1" : "text-sm"}`}>
            {name}
          </h3>
        )}
        <p className={`text-white/60 leading-snug ${isXl ? "text-base" : "font-bold text-white text-sm"}`}>
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamGrids({ content } = {}) {
  const foundersHeading = content?.foundersHeading || "Meet the Founders";
  const foundersSubheading = content?.foundersSubheading || "The Minds Behind BizzBuzz Creations";
  const foundersParagraph =
    content?.foundersParagraph ||
    "BizzBuzz Creations was built on a simple belief: digital marketing should connect creativity with measurable business outcomes. Our founders combine entrepreneurial thinking, marketing expertise, and a long-term vision to build solutions that help businesses grow with clarity and confidence.";
  const foundersRaw = content?.founders?.length > 0 ? content.founders : DEFAULT_FOUNDERS;
  const founders = foundersRaw.map((f, i) => ({ ...f, icon: FOUNDER_ICONS[i % FOUNDER_ICONS.length] }));

  const leadersHeading = content?.leadersHeading || "Meet Our Leadership Team";
  const leadersSubheading = content?.leadersSubheading || "The People Driving Strategy, Growth & Execution";
  const leadersParagraph =
    content?.leadersParagraph ||
    "Our leadership team brings together expertise across digital marketing, technology, business strategy, and operations. They stay closely involved in the work, guide our teams, and help turn business objectives into focused strategies and effective digital solutions.";
  const leadersRaw = content?.leaders?.length > 0 ? content.leaders : DEFAULT_LEADERS;
  const leaders = leadersRaw.map((l, i) => ({ ...l, icon: LEADER_ICONS[i % LEADER_ICONS.length] }));

  const teamGroupsHeading = content?.teamGroupsHeading || "Meet Our Team";
  const teamGroups = content?.teamGroups?.length > 0 ? content.teamGroups : DEFAULT_TEAM_GROUPS;

  const specialtiesHeading = content?.specialtiesHeading || "What Each Team Brings";
  const specialtiesSubheading = content?.specialtiesSubheading || "One Team. Multiple Specialities.";
  const specialtiesRaw = content?.teamSpecialties?.length > 0 ? content.teamSpecialties : DEFAULT_TEAM_SPECIALTIES;
  const specialties = specialtiesRaw.map((s, i) => ({ ...s, icon: SPECIALTY_ICONS[i % SPECIALTY_ICONS.length] }));

  const whyItWorksHeading = content?.whyItWorksHeading || "Why It Works Together";
  const whyItWorks = content?.whyItWorks?.length > 0 ? content.whyItWorks : DEFAULT_WHY_IT_WORKS;

  return (
    <>
      {/* Founders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {foundersHeading}
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
              {foundersSubheading}
            </h3>
            <RichText as="p" text={foundersParagraph} className="text-white/60 max-w-2xl mx-auto leading-relaxed" />
          </motion.div>

          <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-8">
            {founders.map((f, i) => (
              <RoleCard key={i} {...f} index={i} size="xl" showInstagram={false} flip />
            ))}
          </div>
        </div>
      </section>

      {/* Our Leaders */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {leadersHeading}
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8] mb-4">
              {leadersSubheading}
            </h3>
            <RichText as="p" text={leadersParagraph} className="text-white/60 max-w-xl mx-auto leading-relaxed" />
          </motion.div>

          {/* Two explicit rows (4 then 3) instead of one 3-column grid —
              a single `lg:grid-cols-3` on 7 cards lands on 3+3+1, which
              reads as broken; splitting into a fixed 4-across row and a
              3-across row (width-matched to the same column track via
              `lg:w-3/4 mx-auto`) keeps it a clean 4-then-3 every time. */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.slice(0, 4).map((l, i) => (
                <RoleCard key={i} {...l} index={i} size="xl" showLinkedin={false} showInstagram={false} flip />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:w-3/4 lg:mx-auto">
              {leaders.slice(4).map((l, i) => (
                <RoleCard key={i + 4} {...l} index={i + 4} size="xl" showLinkedin={false} showInstagram={false} flip />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team — BPO & R&D, alternating photo side */}
      <section id="meet-our-team" className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-2xl md:text-3xl font-bold text-white mb-14 text-center"
          >
            {teamGroupsHeading}
          </motion.h2>

          <div className="space-y-16">
            {teamGroups.map((group, i) => {
              const imageFirst = i % 2 === 1;
              return (
                <div
                  key={i}
                  className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                  <motion.div
                    {...fadeUp(i)}
                    className={`order-2 ${imageFirst ? "md:order-2" : "md:order-1"}`}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {group.title}
                    </h2>
                    <h3 className="text-base md:text-lg font-semibold text-[#40A2D8] mb-4">
                      {group.tagline}
                    </h3>
                    <RichText as="p" text={group.desc} className="text-white/60 leading-relaxed mb-6" />
                    <AnimatedButton href={i === 0 ? "/our-team/bpo-team" : "/our-team/rnd-team"} size="sm">
                      Our Team
                    </AnimatedButton>
                  </motion.div>

                  <motion.div
                    {...fadeUp(i + 1)}
                    className={`relative order-1 aspect-[16/10] rounded-3xl overflow-hidden shadow-lg ${
                      imageFirst ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={group.image}
                      alt={group.title}
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

      {/* What Each Team Brings — the specialities across all our teams */}
      <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeUp(0)} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {specialtiesHeading}
            </h2>
            <h3 className="text-lg font-semibold text-[#40A2D8]">
              {specialtiesSubheading}
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="group text-left rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-[#40A2D8] mb-4 transition-all duration-300 group-hover:bg-white group-hover:text-[#0B60B0] group-hover:scale-110">
                  <Icon size={22} />
                </span>
                <h4 className="font-bold text-white mb-2">{title}</h4>
                <RichText as="p" text={desc} className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Together — auto-scrolling right-to-left marquee,
          paused on hover; the list is duplicated once so the loop is
          seamless at exactly -50%. */}
      <section className="bg-black py-20 overflow-hidden border-t border-white/10">
        <motion.h2
          {...fadeUp(0)}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-14 px-6"
        >
          {whyItWorksHeading}
        </motion.h2>

        <div className="overflow-hidden">
          <div
            className="flex w-max gap-6 animate-[marquee-rtl_28s_linear_infinite] hover:[animation-play-state:paused]"
          >
            {[...whyItWorks, ...whyItWorks].map(({ title, desc }, i) => (
              <div
                key={i}
                className="group shrink-0 w-[320px] rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-[#40A2D8]/50 hover:bg-[#0B60B0] hover:shadow-xl hover:shadow-black/40"
              >
                <h3 className="font-bold text-white mb-2 transition-colors duration-300">
                  {title}
                </h3>
                <RichText as="p" text={desc} className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/85" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
