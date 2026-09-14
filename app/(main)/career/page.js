import { getAllJobs } from "@/actions/serverActions";
import CareerHero from "@/components/sections/careerHero";
import { CareerWhyUs, CareerJoinTeam } from "@/components/sections/careerShowcase";
import CTA from "@/components/sections/CTA";
import { Briefcase } from "lucide-react";
import { getPageContent } from "@/actions/pageContentActions";
import JobCard from "@/components/ui/jobCard";
import { buildPageMetadata } from "@/lib/pageMetadata";

export async function generateMetadata() {
  return buildPageMetadata("career", {
  title: "Careers at BizzBuzz Creations | Digital Marketing Jobs & Internships",
  description:
    "Join BizzBuzz Creations and build your career in SEO, Meta Ads, content marketing & branding. Explore digital marketing jobs and internship opportunities today.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/career",
  },
});
}

export default async function Career() {
  const getDaysSincePosted = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const diffTime = today - createdDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const content = await getPageContent("career");
  const openPositionsHeading = content?.openPositionsHeading || "Open Positions";

  const response = await getAllJobs();
  const jobsData = response?.success ? response?.data : [];

  return (
    <>
      <CareerHero content={content} />

      <CareerWhyUs content={content} />

      {/* Open roles */}
      <section id="open-positions" className="bg-black py-16 px-6 md:px-12 lg:px-24 scroll-mt-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            {openPositionsHeading}
          </h2>
          <p className="text-center text-white/60 mb-12">
            {jobsData.length > 0
              ? `${jobsData.length} role${jobsData.length === 1 ? "" : "s"} currently open`
              : "No open roles right now — check back soon"}
          </p>

          {jobsData.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center shadow-sm">
              <Briefcase className="mx-auto mb-4 text-white/30" size={36} />
              <p className="text-white/60 mb-1">
                We don&rsquo;t have any open positions posted at the moment.
              </p>
              <p className="text-sm text-white/40">
                Check back soon, or reach out through our{" "}
                <a href="/contact" className="text-[#40A2D8] hover:underline">
                  contact page
                </a>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobsData.map((job, i) => (
                <JobCard key={i} job={job} days={getDaysSincePosted(job.createdAt)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CareerJoinTeam content={content} />

      {/* CTA — just above the footer */}
      <div className="bg-black pt-4">
        <CTA content={content} />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
