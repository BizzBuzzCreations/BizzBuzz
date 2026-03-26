"use client";

import { useEffect, useMemo, useState } from "react";
import {
  publishJob,
  getAllJobs,
  deleteJob,
  postComment,
  getAllComments,
  getAllSubmissions,
  deleteComment,
} from "@/actions/serverActions";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: GridIcon },
  { id: "jobs", label: "Posted Jobs", icon: BriefcaseIcon },
  { id: "comments", label: "Comments", icon: ChatIcon },
  { id: "submissions", label: "Submissions", icon: InboxIcon },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [jobs, setJobs] = useState([]);
  const [comments, setComments] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddJob, setShowAddJob] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    experience: "",
    location: "",
    type: "Full-time",
    description: "",
    applyForm: "",
  });

  const [newComment, setNewComment] = useState({
    name: "",
    blog: "",
    message: "",
  });

  const [newSubmission, setNewSubmission] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [jobsRes, commentsRes, submissionsRes] = await Promise.all([
        getAllJobs(),
        getAllComments(),
        getAllSubmissions(),
      ]);
console.log(submissionsRes)
      if (jobsRes?.success) setJobs(jobsRes.data || []);
      if (commentsRes?.success) setComments(commentsRes.data || []);
      if (submissionsRes?.success) setSubmissions(submissionsRes.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const filteredJobs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return jobs.filter(
      (job) =>
        job.title?.toLowerCase().includes(q) ||
        job.department?.toLowerCase().includes(q) ||
        job.location?.toLowerCase().includes(q) ||
        job.type?.toLowerCase().includes(q)
    );
  }, [jobs, searchQuery]);

  const handleAddJob = async () => {
    const response = await publishJob(newJob);

    if (response?.success) {
      setNewJob({
        title: "",
        department: "",
        experience: "",
        location: "",
        type: "Full-time",
        description: "",
        applyForm: "",
      });
      setShowAddJob(false);
      await fetchAllData();
    } else {
      alert(response?.message || "Failed to publish job.");
    }
  };

  const handleDeleteJob = async (id) => {
    const response = await deleteJob({ id });
    if (response?.success) {
      setJobs((prev) => prev.filter((job) => job._id !== id));
    }
  };

  const handleAddComment = async () => {
    const response = await postComment(newComment);
    if (response?.success) {
      setNewComment({
        name: "",
        blog: "",
        message: "",
      });
      await fetchAllData();
    } else {
      alert(response?.message || "Failed to add comment.");
    }
  };

  const handleDeleteComment = async (id) => {
    const response = await deleteComment({ id });
    if (response?.success) {
      setComments((prev) => prev.filter((item) => item._id !== id));
    }
  };

  const stats = [
    { label: "Posted Jobs", value: jobs.length, sub: "Total active job posts", icon: BriefcaseIcon, color: "#6366f1", bg: "#eef2ff" },
    { label: "User Comments", value: comments.length, sub: "Feedback from users", icon: ChatIcon, color: "#0ea5e9", bg: "#e0f2fe" },
    { label: "Form Submissions", value: submissions.length, sub: "Entries submitted by users", icon: InboxIcon, color: "#f59e0b", bg: "#fef3c7" },
  ];

  if (loading) {
    return <div className="p-10 text-center text-slate-500">Loading dashboard...</div>;
  }

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      <aside
        className="sticky top-0 flex h-screen shrink-0 flex-col overflow-hidden bg-slate-900 pb-4 pt-6 transition-all duration-300 ease-in-out"
        style={{ width: sidebarOpen ? 240 : 72 }}
      >
        <div className="flex items-center gap-2.5 border-b border-slate-800 px-5 pb-7">
          <div className="flex h-[50px] w-[200px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white">
            <img
              src="/BBC Dark Logo.png"
              alt="BizzBuzz Creations Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <nav className="flex flex-col gap-0.5 px-3 pt-5">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg border-none px-3 py-2.5 text-left transition ${
                  active ? "bg-slate-800" : "bg-transparent hover:bg-slate-800/40"
                }`}
              >
                <span className={`flex shrink-0 ${active ? "text-indigo-400" : "text-slate-600"}`}>
                  <Icon size={18} />
                </span>
                {sidebarOpen && (
                  <span className={`whitespace-nowrap text-sm font-medium ${active ? "text-white" : "text-slate-400"}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex min-w-0 flex-1 flex-col px-8 py-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Admin Dashboard</h1>
          </div>

          <button
            className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => {
              setActiveTab("jobs");
              setShowAddJob(true);
            }}
          >
            Post New Job
          </button>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-100 bg-white px-6 py-[22px] shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-400">{s.label}</p>
                    <p className="mb-0.5 text-[36px] font-extrabold tracking-[-1px] text-slate-900">{s.value}</p>
                    <p className="text-xs text-slate-400">{s.sub}</p>
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style={{ background: s.bg, color: s.color }}>
                    <Icon size={22} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {activeTab === "jobs" && (
          <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900">Posted Jobs</h2>
              <input
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none"
                placeholder="Search jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Title</th>
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Department</th>
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Experience</th>
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Location</th>
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Type</th>
                    <th className="px-3 py-2 text-left text-xs text-slate-400">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs.map((job) => (
                    <tr key={job._id} className="border-b border-slate-50">
                      <td className="px-3 py-3 text-sm font-semibold text-slate-800">{job.title}</td>
                      <td className="px-3 py-3 text-sm text-slate-600">{job.department}</td>
                      <td className="px-3 py-3 text-sm text-slate-600">{job.experience}</td>
                      <td className="px-3 py-3 text-sm text-slate-600">{job.location}</td>
                      <td className="px-3 py-3 text-sm text-slate-600">{job.type}</td>
                      <td className="px-3 py-3">
                        <button
                          className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-500"
                          onClick={() => handleDeleteJob(job._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "comments" && (
          <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
            <h2 className="mb-4 text-base font-bold text-slate-900">User Comments</h2>

            <div className="flex flex-col gap-3">
              {comments.map((comment) => (
                <div key={comment._id} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-800">{comment.name}</p>
                      <p className="text-xs text-slate-400">on "{comment.blog}"</p>
                      <p className="mt-2 text-sm text-slate-600">{comment.message}</p>
                    </div>
                    <button
                      className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-500"
                      onClick={() => handleDeleteComment(comment._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "submissions" && (
          <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6">
            <h2 className="mb-4 text-base font-bold text-slate-900">Form Submissions</h2>

            <div className="flex flex-col gap-3">
              {submissions.map((submission) => (
                <div key={submission._id} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-800">{submission.name}</p>
                      <p className="text-xs text-indigo-500">{submission.email}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-700">{submission.subject}</p>
                      <p className="mt-2 text-sm text-slate-600">{submission.message}</p>
                    </div>
                    <button
                      className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-500"
                      onClick={() => handleDeleteSubmission(submission._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}    

        {showAddJob && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/55 backdrop-blur-sm"
            onClick={() => setShowAddJob(false)}
          >
            <div
              className="w-[560px] max-w-[90vw] rounded-[20px] bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="mb-4 text-[20px] font-extrabold text-slate-900">Post a New Job</h2>

              <div className="grid gap-4">
                <input
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  placeholder="Job title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                />
                <input
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  placeholder="Department"
                  value={newJob.department}
                  onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                />
                <input
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  placeholder="Experience"
                  value={newJob.experience}
                  onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                />
                <input
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  placeholder="Location"
                  value={newJob.location}
                  onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                />
                <select
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  value={newJob.type}
                  onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
                <textarea
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  rows={4}
                  placeholder="Description"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                />
                <input
                  className="rounded-lg border border-slate-200 px-4 py-2.5 outline-none"
                  placeholder="Apply form link"
                  value={newJob.applyForm}
                  onChange={(e) => setNewJob({ ...newJob, applyForm: e.target.value })}
                />
              </div>

              <div className="mt-6 flex justify-end gap-2.5">
                <button
                  className="rounded-[10px] border border-slate-200 bg-white px-[18px] py-2.5 text-sm font-semibold text-slate-600"
                  onClick={() => setShowAddJob(false)}
                >
                  Cancel
                </button>
                <button
                  className="rounded-[10px] bg-linear-to-br from-indigo-500 to-violet-500 px-[18px] py-2.5 text-sm font-semibold text-white"
                  onClick={handleAddJob}
                >
                  Post Job
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function GridIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
}
function BriefcaseIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>;
}
function ChatIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function InboxIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>;
}