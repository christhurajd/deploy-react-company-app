import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getJobById,applyJob } from "../services/jobService";

function JobDetails() {

  const { id } = useParams();

  // ✅ ALWAYS object for details
  const [job, setJob] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) loadJob();
  }, [id]);

  const loadJob = async () => {
    try {

      const data = await getJobById(id);

      console.log("Job:", data); // debug once

      // handles array mistake from backend
      setJob(Array.isArray(data) ? data[0] : data);

    } catch (err) {

      console.error(err);
      setError("Failed to load job details");

    } finally {
      setLoading(false);
    }
  };

  // ✅ Professional UI states
  if (loading) return <h2 style={{ padding: "40px" }}>Loading job...</h2>;

  if (error) return <h2 style={{ padding: "40px" }}>{error}</h2>;

  if (!job) return <h2 style={{ padding: "40px" }}>Job not found</h2>;

  return (
    <div style={{ padding: "40px" }}>

      <Link to="/careers">← Back to Careers</Link>

      <h1 style={{ marginTop: "20px" }}>{job.title}</h1>

      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Experience:</strong> {job.experience}</p>

      {/* If you saved HTML description */}
      {/* {job.description && (
        <>
          <h3>Job Description</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: job.description
            }}
          />
        </>
      )} */}

      <h3 style={{ marginTop: "40px" }}>
        Apply for this job
      </h3>

      <ApplyForm jobId={job.id} />
    </div>
  );
}

// import { useParams, Link } from "react-router-dom";
// import { useState } from "react";

// function JobDetails() {
//   const { id } = useParams();

//   return (
//     <div style={{ padding: "40px" }}>
//       <Link to="/careers">← Back to Careers</Link>

//       <h1 style={{ marginTop: "20px" }}>Job Details</h1>

//       {/* <p><strong>Job ID:</strong> {id}</p> */}
//       <p><strong>Role:</strong> Software Engineer</p>
//       <p><strong>Requirements:</strong></p>

//       <ul>
//         <li>Strong JavaScript, HTML5 & CSS skills</li>
//         <li>Experience with React</li>
//         <li>Good problem-solving skills</li>
//       </ul>

//       <h3 style={{ marginTop: "30px" }}>Apply for this job</h3>
//       <ApplyForm />
//     </div>
//   );
// }

function ApplyForm() {

  const [form, setForm] = useState({
      name: "",
      email: "",
      phonenumber: ""
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const validate = () => {
      const newErrors = {};
      if (!form.name) newErrors.name = "Name is required";
      if (!form.email) newErrors.email = "Email is required";
      if (!form.phonenumber) newErrors.phonenumber = "PhoneNumber is required";
      
      return newErrors;
    };
    const  handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock submit (API later)

    const formData = new FormData();

formData.append("name", form.name);
formData.append("email", form.email);
formData.append("phoneNumber", form.phonenumber);
formData.append("jobId", jobId);
formData.append("resume", file);
await applyJob(formData);


    console.log("Job Form Data:", formData);
    setSubmitted(true);
    setForm({ name: "", email: "", phonenumber: "" });
    setErrors({});
  };

  return (
    
    <div style={{ padding: "40px" }}>
      {submitted && (
          <p style={{ color: "green", marginTop: "10px" }}>
            ✅ Application sent successfully!
          </p>
        )}
      <form onSubmit={handleSubmit} style={styles.form}>
         <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        {/* <input placeholder="Full Name" /> */}
        <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span style={styles.error}>{errors.email}</span>}
        {/* <input placeholder="Email" /> */}
        <input
            name="phonenumber"
            placeholder="Phone Number"
            value={form.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <span style={styles.error}>{errors.phonenumber}</span>}

           {/* ⭐ FILE INPUT */}
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        {errors.resume && (
          <span style={styles.error}>{errors.resume}</span>
        )}
        
        {/* <input placeholder="Phone Number" /> */}
        <textarea placeholder="Why should we hire you?" />
        <button style={styles.btn} onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}



 export default JobDetails;

 const styles = {
 form: {
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px"
  },
  btn: {
    padding: "10px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  },
  error: {
    color: "red",
    fontSize: "12px"
  }
};