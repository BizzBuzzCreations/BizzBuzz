import PageHero from "@/components/sections/pageHero";
import Recognitions from "@/components/sections/recognitions";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Awards & Recognition | BizzBuzz Creations",
  description:
    "BizzBuzz Creations' certifications and partnerships — Clutch Verified Partner, certified Google Ads & Analytics Partner, and ISO-certified processes.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/awards",
  },
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        label="Recognition"
        title="Awards & Recognition"
        subtitle="We'd rather earn real, verifiable certifications than chase press-release awards — here's what BizzBuzz Creations is actually recognized for."
      />

      <Recognitions />

      <div className="bg-black pb-20">
        <CTA />
      </div>
    </>
  );
}
