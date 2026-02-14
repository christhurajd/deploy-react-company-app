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
import { getJobById, updateJob } from "../services/jobService";
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
    const result = await getJobById(id);
    setJob(Array.isArray(result) ? result[0] : result);
   // setJob(result.data);
  };

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateJob(id, job);
    navigate("/admin/jobs");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Job</h2>
{console.log("Chris Test"+job)}
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={job?.title|| "" }
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="location"
          placeholder="Location"
          value={job?.location || ""}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="experience"
          placeholder="Experience"
          value={job?.experience || ""}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button style={ styles.Btn} type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditJob;

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px"
  },
  Btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }

  
};