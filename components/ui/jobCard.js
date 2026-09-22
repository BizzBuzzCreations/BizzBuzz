"use client";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ChevronDown } from "lucide-react";
import AnimatedButton from "@/components/ui/animatedButton";

const PREVIEW_LENGTH = 180;

// The full job description (often several paragraphs plus bullet lists)
// used to be dumped in full into every card, making each listing a very
// long, unwieldy block — especially on mobile, where a handful of open
// roles could mean endless scrolling before reaching "Apply Now" on later
// ones. Collapsed to a short preview by default with a "Read more" toggle,
// so the list reads as a clean, scannable stack of roles.
export default function JobCard({ job, days }) {
  const [expanded, setExpanded] = useState(false);
  const description = job.description || "";
  const isLong = description.length > PREVIEW_LENGTH;
  const preview = isLong ? `${description.slice(0, PREVIEW_LENGTH).trimEnd()}…` : description;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#40A2D8]/50 hover:shadow-xl hover:shadow-black/40">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{job.title}</h3>
          <span className="text-xs text-white/40">
            Posted {days === 0 ? "today" : `${days} day${days === 1 ? "" : "s"} ago`}
          </span>
        </div>
        <div className="shrink-0 w-full sm:w-fit">
          <AnimatedButton href={job.applyForm} external size="sm" className="w-full sm:w-fit">
            Apply Now
          </AnimatedButton>
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line mb-2">
        {expanded ? description : preview}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#40A2D8] hover:text-white mb-3 transition-colors duration-300"
        >
          {expanded ? "Read less" : "Read more"}
          <ChevronDown size={13} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
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
}
