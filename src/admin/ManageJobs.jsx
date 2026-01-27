import { useState } from "react";
import { jobData } from "./jobData";
import { Link } from "react-router-dom";

function ManageJobs() {
  const [jobs, setJobs] = useState(jobData);

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Manage Jobs</h1>

      <Link to="/admin/jobs/create">
        <button style={styles.Btn}>Create New Job</button>
      </Link>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.experience}</td>
              <td>
                <Link to={`/admin/jobs/edit/${job.id}`}>
                  <button style={styles.Btn}>Edit</button>
                </Link>
                <button style={styles.Btn} onClick={() => deleteJob(job.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse"
  },
  Btn: {
    
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default ManageJobs;