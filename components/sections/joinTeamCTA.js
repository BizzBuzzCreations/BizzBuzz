import Image from "next/image";
import RichText from "@/components/ui/richText";
import AnimatedButton from "@/components/ui/animatedButton";

export default function JoinTeamCTA({ content }) {
  const eyebrow = content?.joinTeamEyebrow || "We’re Always Looking for Great Talent";
  const heading = content?.joinTeamHeading || "Join Our Team!";
  const paragraph = content?.joinTeamParagraph || "Bring your ideas. Build your skills. Create work you're proud of.";
  const emailButtonText = content?.joinTeamEmailButtonText || "Drop An Email";
  const careersButtonText = content?.joinTeamCareersButtonText || "See All Careers";
  const image = content?.joinTeamImage1 || "/team-images/team-5.jpeg";

  // This section's background runs light (white → light blue → brand
  // blue) instead of dark, so both buttons use the "blue" variant of the
  // hero's button effect (blue ring/fill instead of white). Rendered
  // twice — once for the desktop row (auto width) and once for the
  // mobile 2-up grid, where they need to stretch to fill each column —
  // rather than sharing one JSX value, since a plain `w-full` on the
  // desktop row would fight its `flex` sizing instead of the grid's.
  const emailLink = (
    <AnimatedButton href="mailto:info@bizzbuzzcreations.com" size="sm">
      {emailButtonText}
    </AnimatedButton>
  );
  const careersLink = (
    <AnimatedButton href="/career" variant="blue" size="sm">
      {careersButtonText}
    </AnimatedButton>
  );
  const emailLinkFull = (
    <AnimatedButton href="mailto:info@bizzbuzzcreations.com" size="sm" className="w-full">
      {emailButtonText}
    </AnimatedButton>
  );
  const careersLinkFull = (
    <AnimatedButton href="/career" variant="blue" size="sm" className="w-full">
      {careersButtonText}
    </AnimatedButton>
  );

  return (
    <section className="relative overflow-hidden bg-black border-t border-t-white/10 border-b border-b-white">
      {/* Soft brand-blue glows on black for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 50%, rgba(11,96,176,0.35), transparent 55%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-6 md:px-12 py-16 md:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#40A2D8] mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            {heading}
          </h2>
          <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#40A2D8] to-[#0B60B0] mb-5" />
          <RichText as="p" text={paragraph} className="text-white/80 mb-8 max-w-sm leading-relaxed" />

          {/* Desktop/tablet: buttons stay right under the paragraph, in
              their own text column, same as before. */}
          <div className="hidden lg:flex flex-wrap items-center gap-4">
            {emailLink}
            {careersLink}
          </div>
        </div>

        <div className="relative h-56 sm:h-72 lg:h-80 flex items-center justify-center">
          {/* Offset brand-blue frame behind the team photo */}
          <div className="absolute inset-0 max-w-md mx-auto w-full translate-x-3 translate-y-3 rounded-2xl border-2 border-[#0B60B0]" />
          <div className="relative w-full h-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[#0B60B0]/30">
            <Image
              src={image}
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>

        {/* Mobile/tablet: image comes first (above), then both buttons
            side by side underneath — a grid (not flex-wrap) so they stay
            on one row instead of stacking on narrow screens. */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {emailLinkFull}
          {careersLinkFull}
        </div>
      </div>
    </section>
  );
}
