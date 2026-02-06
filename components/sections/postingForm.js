"use client";
import React, { useEffect, useState } from "react";
import { toast, Bounce } from "react-toastify";
import { publishJob, getAllJobs, deleteJob } from "@/actions/serverActions";
import { Ghost } from "lucide-react";

export default function PostingForm() {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    experience: "",
    location: "",
    type: "",
    description: "",
    applyForm: "",
  });

  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      const response = await getAllJobs();
      if (response?.success) {
        console.log(response.data);
        setAllJobs(response?.data);
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await publishJob({
      title: formData?.title,
      department: formData?.department,
      experience: formData?.experience,
      location: formData?.location,
      type: formData?.type,
      description: formData?.description,
      applyForm: formData?.applyForm,
    });

    if (response?.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleDelete = async (id) => {
    const response = await deleteJob({ id });
    if (response?.success) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      const updatedJobs = allJobs.filter((job) => job._id !== id);
      setAllJobs(updatedJobs);
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="max-w-3xl px-5 mx-auto my-20 py-20">
      <h2 className="md:text-3xl text-2xl font-semibold text-black mb-8 text-center">
        Publish a Job Opening
      </h2>
      <form className="space-y-6 mb-10" action={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Job Title
            </label>
            <input
              onChange={handleChange}
              name="title"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="e.g. Digital Marketing Specialist"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Department
            </label>
            <input
              onChange={handleChange}
              name="department"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="e.g.  Marketing"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Experience
            </label>
            <input
              onChange={handleChange}
              name="experience"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="e.g. 2–5 Years / Fresher"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-black mb-2">
              Location
            </label>
            <input
              onChange={handleChange}
              name="location"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
              placeholder="e.g. Prayagraj, UP"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-black mb-2">
            Job Type
          </label>
          <input
            onChange={handleChange}
            name="type"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="e.g. Full-time / Part-time / Internship"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-black mb-2">
            Job Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="Describe the role, responsibilities, and requirements..."
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-medium text-black mb-2">
            Apply Form / Link
          </label>
          <input
            onChange={handleChange}
            name="applyForm"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-lg"
            placeholder="e.g. Google Form URL"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg px-8 py-4 bg-black text-white text-lg font-medium cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-95 hover:bg-black/95"
        >
          Publish Job
        </button>
      </form>
      <h3 className="md:text-3xl text-2xl font-semibold text-black mb-8 text-center">
        All posted jobs :
      </h3>
      <div className="max-w-3xl px-5 mx-auto my-20">
        {allJobs ? (
          allJobs.map((job) => (
            <div
              key={job._id}
              className="border border-gray-300 rounded-lg p-4 mb-4"
            >
              <h4 className="text-xl font-semibold text-black">{job.title}</h4>
              <p className="text-gray-700">{job.department}</p>
              <p className="text-gray-700">{job.experience}</p>
              <p className="text-gray-700">{job.type}</p>
              <button
                onClick={() => handleDelete(job._id)}
                className="cursor-pointer mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Delete Job
              </button>
            </div>
          ))
        ) : (
          <p className="text-center font-bold flex justify-center items-center gap-3">
            <span>
              <Ghost size={30} />
            </span>
            No jobs posted yet.
          </p>
        )}
      </div>
    </div>
  );
}
