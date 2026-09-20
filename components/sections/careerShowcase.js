import Image from "next/image";
import { GraduationCap, Target, TrendingUp } from "lucide-react";
import RichText from "@/components/ui/richText";

// "Why Work With Us" + "Join The Team" — real BizzBuzz office/team photos
// throughout (same assets already used in the homepage's shuffle grid and
// the About page), not stock photography or another company's people.
// Split into two exports so the page can place them on either side of
// the Open Positions section.
export function CareerWhyUs({ content } = {}) {
  const heading = content?.careerWhyUsHeading || "Roots in Prayagraj, India. An International Outlook.";
  const paragraph =
    content?.careerWhyUsParagraph ||
    "We're a growing agency with roots in Prayagraj, India, and clients across the world. From day one, you'll work on real challenges across digital marketing, technology, design, and strategy — building practical skills instead of simply following a checklist. We value people who stay curious, take initiative, share ideas, and want to keep getting better. Your growth matters here, because when our people grow, BizzBuzz Creations grows too.";
  const image = content?.careerWhyUsImage || "/team-images/team-5.jpeg";

  const photo = (
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
      <Image
        src={image}
        alt="Inside the BizzBuzz Creations office"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {heading}
          </h2>

          {/* On mobile only, the photo sits between the heading and the
              paragraph; the desktop two-column layout (heading+paragraph
              on the left, photo on the right) is unchanged. */}
          <div className="mb-6 md:hidden">{photo}</div>

          <RichText as="p" text={paragraph} className="text-white/60 leading-relaxed" />
        </div>

        <div className="hidden md:block">{photo}</div>
      </div>
    </section>
  );
}

const JOIN_TEAM_ICONS = [GraduationCap, Target, TrendingUp];
const DEFAULT_JOIN_TEAM_POINTS = [
  { title: "Learn by Doing", desc: "Work on real campaigns and business challenges." },
  { title: "Take Ownership", desc: "Bring ideas forward and take responsibility for your work." },
  { title: "Keep Growing", desc: "Develop skills through hands-on experience and collaboration." },
];

export function CareerJoinTeam({ content } = {}) {
  const heading = content?.careerJoinHeading || "Grow Beyond Your Job Description";
  const tagline = content?.careerJoinTagline || "Your role here is a starting point, not a ceiling.";
  const paragraph =
    content?.careerJoinParagraph ||
    "At BizzBuzz Creations, growth isn't limited to a job title. You'll have opportunities to explore new skills, work across disciplines, take on responsibility, and discover where your strengths can take you.";
  const pointsRaw = content?.careerJoinPoints?.length > 0 ? content.careerJoinPoints : DEFAULT_JOIN_TEAM_POINTS;
  const points = pointsRaw.map((p, i) => ({ ...p, icon: JOIN_TEAM_ICONS[i % JOIN_TEAM_ICONS.length] }));
  const ctaText = content?.careerJoinCtaText || "Apply Now";
  const image1 = content?.careerJoinImage1 || "/image-5.webp";
  const image2 = content?.careerJoinImage2 || "/team-images/team-14.jpeg";
  const image3 = content?.careerJoinImage3 || "/team-images/team-5.jpeg";
  const image4 = content?.careerJoinImage4 || "/team-images/team-11.jpeg";

  // The image grid is rendered twice on purpose: once inline for mobile
  // (between the tagline and the paragraph, matching the requested
  // heading → tagline → images → paragraph → points → button order) and
  // once as the traditional desktop right column. Only one copy is ever
  // visible at a given breakpoint (md:hidden / hidden md:grid), so this
  // isn't duplicate content on screen — just the simplest way to reorder
  // content differently per breakpoint without CSS `order` fighting the
  // two-column grid placement.
  const imageGrid = (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
        <Image
          src={image1}
          alt="The BizzBuzz Creations team celebrating together"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
        <Image
          src={image2}
          alt="The BizzBuzz Creations team at an office event"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
        <Image
          src={image3}
          alt="The BizzBuzz Creations team"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-square">
        <Image
          src={image4}
          alt="The BizzBuzz Creations team at work"
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
    </div>
  );

  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
            {heading}
          </h2>
          <p className="text-[#40A2D8] font-semibold mb-4">
            {tagline}
          </p>

          <div className="mb-8 md:hidden">{imageGrid}</div>

          <RichText as="p" text={paragraph} className="text-white/60 leading-relaxed mb-8" />

          <div className="space-y-5 mb-8">
            {points.map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="group flex items-start gap-3">
                <span className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B60B0]/15 text-[#40A2D8] transition-all duration-300 group-hover:bg-[#0B60B0] group-hover:text-white group-hover:scale-110">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <RichText as="p" text={desc} className="text-sm text-white/60 leading-relaxed" />
                </div>
              </div>
            ))}
          </div>

          <a
            href="#open-positions"
            className="inline-flex items-center bg-[#0B60B0] hover:bg-white text-white hover:text-black text-sm font-semibold px-6 py-3 rounded-full transition-colors duration-300 w-fit"
          >
            {ctaText}
          </a>
        </div>

        <div className="hidden md:grid">{imageGrid}</div>
      </div>
    </section>
  );
}
