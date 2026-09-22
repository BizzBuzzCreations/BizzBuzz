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
    <AnimatedButton href="mailto:info@bizzbuzzcreations.com" variant="blue" size="sm">
      {emailButtonText}
    </AnimatedButton>
  );
  const careersLink = (
    <AnimatedButton href="/career" variant="blue" size="sm">
      {careersButtonText}
    </AnimatedButton>
  );
  const emailLinkFull = (
    <AnimatedButton href="mailto:info@bizzbuzzcreations.com" variant="blue" size="sm" className="w-full">
      {emailButtonText}
    </AnimatedButton>
  );
  const careersLinkFull = (
    <AnimatedButton href="/career" variant="blue" size="sm" className="w-full">
      {careersButtonText}
    </AnimatedButton>
  );

  return (
    <section
      className="overflow-hidden"
      style={{
        // Brand blue, strongest on the right, fading through to white on
        // the left where the text sits. (No more dotted overlay — removed
        // per feedback, plain gradient only now.)
        backgroundImage:
          "linear-gradient(90deg, #ffffff 0%, #eaf4fb 38%, #7ec2e8 72%, #0B60B0 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 items-center gap-10 px-6 md:px-12 py-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#0B60B0] mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            {heading}
          </h2>
          <RichText as="p" text={paragraph} className="text-black/60 mb-8 max-w-sm" />

          {/* Desktop/tablet: buttons stay right under the paragraph, in
              their own text column, same as before. */}
          <div className="hidden lg:flex flex-wrap items-center gap-4">
            {emailLink}
            {careersLink}
          </div>
        </div>

        <div className="relative h-56 sm:h-72 lg:h-80 flex items-center justify-center">
          {/* Decorative brand-blue backdrop shape behind the team photo */}
          <div className="absolute w-40 h-40 sm:w-52 sm:h-52 bg-[#0B60B0] rotate-45 rounded-2xl" />
          <div className="relative w-full h-full max-w-md rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt="The BizzBuzz Creations team"
              fill
              sizes="(max-width: 1024px) 90vw, 448px"
              className="object-cover"
            />
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
