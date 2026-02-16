import { useEffect, useState } from "react";
import { getApplications } from "../services/jobService";
import { Link } from "react-router-dom";

function AdminApplications() {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {

    try {

      const data = await getApplications();

      console.log("Applications:", data);

      // defensive coding
      setApplications(
        Array.isArray(data) ? data : []
      );

    } catch (err) {

      console.error(err);
      setError("Failed to load applications");

    } finally {
      setLoading(false);
    }
  };

  if (loading) return <h2>Loading applications...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div style={{ padding: "40px" }}>
        <Link to="/admin/dashboard">← Back to Dashboard</Link>
      <h1>Job Applications</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resume</th>
          </tr>
        </thead>

        <tbody>
          {applications.map(app => (
            <tr key={app.id}>
              <td data-label="Name">{app.name}</td>
              <td data-label="Email">{app.email}</td>
              <td data-label="Phone">{app.phoneNumber}</td>

              <td data-label="Resume">

                {/* VIEW */}
                <button
                  style={styles.viewBtn}
                  onClick={() =>
                    window.open(
                      app.resumeUrl,
                      "_blank"
                    )
                  }
                >
                  View
                </button>
<br/><br/>
                {/* DOWNLOAD */}
                <a
                  href={app.resumeUrl}
                  download
                >
                  <button style={styles.downloadBtn}>
                    Download
                  </button>
                </a>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminApplications;

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  },
  viewBtn: {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "6px 10px",
    marginRight: "10px",
    cursor: "pointer"
  },
  downloadBtn: {
    background: "#16a34a",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer"
  }
};