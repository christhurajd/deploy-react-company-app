import { Link } from "react-router-dom";

function JobCard({ job }) {
  return (
    <div style={styles.card}>
      <h3>{job.title}</h3>
      <p>📍 Location: {job.location}</p>
      <p>🧑‍💻 Experience: {job.experience}</p>

      <Link to={`/careers/${job.id}`}>
        <button style={styles.btn}>View Details</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    width: "260px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  btn: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px"
  }
};

export default JobCard;