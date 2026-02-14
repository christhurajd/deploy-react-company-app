import React, { useState } from "react";
import { createJob  } from "../services/jobService";
import { useNavigate } from "react-router-dom";

const JobForm = () => {
  const [job, setJob] = useState({
    title: "",
    location: "",
    experience: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createJob(job);
    navigate("/admin/jobs");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Job</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          name="experience"
          placeholder="Experience (eg: 3 Years)"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default JobForm;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// //import { apiFetch } from "../services/api";

// function JobForm({ initialData }) {
//   const navigate = useNavigate();



//   const [title, setTitle] = useState(initialData?.title || "");
//   const [location, setLocation] = useState(initialData?.location || "");
//   const [experience, setExperience] = useState(initialData?.experience || "");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ title, location, experience });
//     navigate("/admin/jobs");
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <h2>{initialData ? "Edit Job" : "Create Job"}</h2>

//       <input
//         placeholder="Job Title"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />

//       <input
//         placeholder="Location"
//         value={location}
//         onChange={e => setLocation(e.target.value)}
//       />

//       <input
//         placeholder="Experience"
//         value={experience}
//         onChange={e => setExperience(e.target.value)}
//       />

//       <button style={styles.Btn} type="submit">Save</button>
//     </form>
//   );
// }

// const styles = {
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     maxWidth: "400px"
//   },
//   Btn: {
//     padding: "10px 18px",
//     background: "#2563eb",
//     color: "white",
//     border: "none",
//     borderRadius: "5px"
//   }
// };

// export default JobForm;