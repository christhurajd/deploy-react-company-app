// import { useParams } from "react-router-dom";
// import { jobData } from "./jobData";
// import JobForm from "./JobForm";

// function EditJob() {
//   const { id } = useParams();
//   const job = jobData.find(j => j.id === Number(id));

//   return <JobForm onJobCreated={job} />;
// }

// export default EditJob;

import React, { useEffect, useState } from "react";
import { getJob, updateJob } from "../services/jobService";
import { useNavigate, useParams } from "react-router-dom";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    location: "",
    experience: ""
  });

  useEffect(() => {
    loadJob();
  }, []);

  const loadJob = async () => {
    const result = await getJob(id);
    setJob(result.data);
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateJob(id, job);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={job.title}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="location"
          value={job.location}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="experience"
          value={job.experience}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditJob;