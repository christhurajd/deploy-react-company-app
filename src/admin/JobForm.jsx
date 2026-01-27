import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobForm({ initialData }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(initialData?.title || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [experience, setExperience] = useState(initialData?.experience || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, location, experience });
    navigate("/admin/jobs");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{initialData ? "Edit Job" : "Create Job"}</h2>

      <input
        placeholder="Job Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />

      <input
        placeholder="Experience"
        value={experience}
        onChange={e => setExperience(e.target.value)}
      />

      <button style={styles.Btn} type="submit">Save</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px"
  },
  Btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default JobForm;