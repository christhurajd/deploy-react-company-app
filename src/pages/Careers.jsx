import { useState } from "react";
import JobCard from "../components/JobCard";

function Careers() {
  const [jobs] = useState([
    {
      id: 1,
      title: "ASP.NET Core Web API & Entity Framework Core",
      location: "Remote",
      experience: "2+ Years"
    },
    {
      id: 2,
      title: "React Js & Node.js Developer",
      location: "Remote",
      experience: "1+ Years"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      experience: "1+ Year"
    }
  ]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Careers</h1>
      <p>Join our team and build amazing software products.</p>

      <div style={styles.container}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }
};

export default Careers;