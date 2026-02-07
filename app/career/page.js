"use client";

import React, { useEffect, useState } from "react";
import { getAllJobs,  } from "@/actions/serverActions";

export default function Career() {
  const getDaysSincePosted = (createdAt) => {
    const createdDate = new Date(createdAt);
    const today = new Date();
    const diffTime = today - createdDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  const [jobsData, setJobsData] = useState([]);
    useEffect(() => {
      const fetchJobs = async () => {
        const response = await getAllJobs();
        if (response?.success) {
          setJobsData(response?.data);
        }
      };
      fetchJobs();
    }, []);
  
  return (
    <div className="mx-auto mt-32 mb-8 max-w-[650px] rounded-xl bg-[#fcfbf8] px-4 py-6 shadow-md sm:px-8">
      <div className="mb-3 inline-block rounded-full border-2 border-black px-3 py-1 text-xs font-semibold">
        We’re hiring!
      </div>

      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Be part of our mission</h1>

      <p className="mb-8 max-w-[520px] text-sm leading-relaxed text-gray-600">
        We’re looking for passionate people to join us on our mission. We value flat hierarchies,
        clear communication, and full ownership and responsibility.
      </p>

      <div>
        {jobsData.length === 0 ? (
          <p className="text-gray-500 text-sm">No jobs are posted yet.</p>
        ) : (
          jobsData.map((job, i) => (
            <div key={i} className="mb-5 border-b-2 border-gray-200 pb-5 relative">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold">{job.title}</h3>
                <a
                  href={job.applyForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-semibold text-black"
                >
                  Apply ↗
                </a>
              </div>

              <p className="my-2 text-sm text-gray-600">{job.description}</p>

              {/* Tags container */}
              <div className="flex flex-wrap gap-3 mt-2 text-xs text-white-700 items-center">
                <span className="rounded-full border-2 border-black bg-gray-50 px-3 py-1">
                  {job.department}
                </span>
                <span className="rounded-full border-2 border-black bg-gray-50 px-3 py-1">
                   {job.location}
                </span>
                <span className="rounded-full border-2 border-black bg-gray-50 px-3 py-1">
                  {job.experience}
                </span>
              </div>
              
              <div className="mt-2 flex justify-end">
                <span className="rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                  Posted: {getDaysSincePosted(job.createdAt)}{" "}
                  {getDaysSincePosted(job.createdAt) === 1 ? "day ago" : "days ago"}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
