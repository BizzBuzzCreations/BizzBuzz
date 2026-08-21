import { getAllJobs } from "@/actions/serverActions";
import CareerHero from "@/components/sections/careerHero";
import { CareerWhyUs, CareerJoinTeam } from "@/components/sections/careerShowcase";
import CTA from "@/components/sections/CTA";
import { ArrowUpRight, Briefcase, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Careers at BizzBuzz Creations | Digital Marketing Jobs & Internships",
  description:
    "Join BizzBuzz Creations and build your career in SEO, Meta Ads, content marketing & branding. Explore digital marketing jobs and internship opportunities today.",
  alternates: {
    canonical: "https://bizzbuzzcreations.com/career",
  },
};

export default async function Career() {
  const getDaysSincePosted = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const diffTime = today - createdDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const response = await getAllJobs();
  const jobsData = response?.success ? response?.data : [];

  return (
    <>
      <CareerHero />

      <CareerWhyUs />

      {/* Open roles */}
      <section id="open-positions" className="bg-black py-16 px-6 md:px-12 lg:px-24 scroll-mt-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            Open Positions
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
              {jobsData.map((job, i) => {
                const days = getDaysSincePosted(job.createdAt);
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">
                          {job.title}
                        </h3>
                        <span className="text-xs text-white/40">
                          Posted {days === 0 ? "today" : `${days} day${days === 1 ? "" : "s"} ago`}
                        </span>
                      </div>
                      <a
                        href={job.applyForm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 shrink-0 bg-[#0B60B0] hover:bg-[#0B60B0]/90 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition w-fit"
                      >
                        Apply Now
                        <ArrowUpRight size={15} />
                      </a>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line mb-5">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-[#40A2D8] px-3 py-1.5 text-xs font-semibold">
                        <Briefcase size={13} />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-[#40A2D8] px-3 py-1.5 text-xs font-semibold">
                        <MapPin size={13} />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 text-[#40A2D8] px-3 py-1.5 text-xs font-semibold">
                        <Clock size={13} />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CareerJoinTeam />

      {/* CTA — just above the footer */}
      <div className="bg-black pt-4 pb-16">
        <CTA />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
