"use client";

import { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [cvData, setCvData] = useState(null);
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("Bangladesh");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cvData");

    if (saved) {
      const cv = JSON.parse(saved);

      console.log("CV =", cv);
      console.log("SESSION =", cv.session_id);

      setCvData(cv);

      if (cv.profession) {
        setQuery(`${cv.profession} jobs`);
      }
    }
  }, []);

  const searchJobs = async () => {
    if (!cvData) {
      alert("Please upload and analyze a CV first");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending:", {
        query,
        country,
        session_id: cvData.session_id,
      });

      const response = await fetch(
        "https://aurevia-backend-r18t.onrender.com/job-search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            country,
            session_id: cvData.session_id,
          }),
        }
      );

      const data = await response.json();

      console.log("JOB RESPONSE =", data);

      setJobs(data.jobs);

    } catch (error) {
      console.error(error);
      alert("Job search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "50px",
      }}
    >
      <h1
        style={{
          color: "#d8b4fe",
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Job Hunter Agent
      </h1>

      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "20px",
          width: "250px",
        }}
      >
        <option>Bangladesh</option>
        <option>USA</option>
        <option>Canada</option>
        <option>Germany</option>
        <option>Australia</option>
      </select>

      <input
        type="text"
        placeholder="Find ML internships in Dhaka"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "18px",
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      />

      <button
        onClick={searchJobs}
        disabled={loading}
        style={{
          background:
            "linear-gradient(to right,#9333ea,#c084fc)",
          color: "white",
          border: "none",
          padding: "18px 35px",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        {loading ? "Searching..." : "Search Jobs"}
      </button>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
        }}
      >
        {jobs.length === 0 && (
          <p>No jobs found yet.</p>
        )}

        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              background: "#081225",
              border: "1px solid #9333ea",
              borderRadius: "20px",
              padding: "25px",
            }}
          >
            <h2>{job.role}</h2>

            <p>Company: {job.company}</p>

            <p>Location: {job.location}</p>

            <p>Salary: {job.salary}</p>

            <p>Deadline: {job.deadline}</p>

            <p>Fit Score: {job.fit_score}%</p>

            <p>Match Reason: {job.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}