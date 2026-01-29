import { useParams, Link } from "react-router-dom";
import { useState } from "react";

function JobDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/careers">← Back to Careers</Link>

      <h1 style={{ marginTop: "20px" }}>Job Details</h1>

      {/* <p><strong>Job ID:</strong> {id}</p> */}
      <p><strong>Role:</strong> Software Engineer</p>
      <p><strong>Requirements:</strong></p>

      <ul>
        <li>Strong JavaScript, HTML5 & CSS skills</li>
        <li>Experience with React</li>
        <li>Good problem-solving skills</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>Apply for this job</h3>
      <ApplyForm />
    </div>
  );
}

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
    const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock submit (API later)
    console.log("Job Form Data:", form);
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
        {/* <input placeholder="Phone Number" /> */}
        <textarea placeholder="Why should we hire you?" />
        <button style={styles.btn} onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

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

export default JobDetails;