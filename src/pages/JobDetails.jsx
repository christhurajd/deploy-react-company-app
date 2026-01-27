import { useParams, Link } from "react-router-dom";

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
        <li>Strong JavaScript skills</li>
        <li>Experience with React</li>
        <li>Good problem-solving skills</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>Apply for this job</h3>
      <ApplyForm />
    </div>
  );
}

function ApplyForm() {
  return (
    <form style={styles.form}>
      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <input placeholder="Phone Number" />
      <textarea placeholder="Why should we hire you?" />
      <button type="submit">Submit Application</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px"
  }
};

export default JobDetails;