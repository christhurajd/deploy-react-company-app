import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { getJobs } from "../services/jobService";

function Careers() {

  // ✅ ALWAYS default arrays
  const [jobs, setJobs] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {

      const data = await getJobs();

      console.log("Jobs:", data); // DEBUG once

      // if backend ever returns {data: []}
      setJobs(Array.isArray(data) ? data : data.data || []);

    } catch (err) {

      console.error(err);
      setError("Failed to load jobs");

    } finally {
      setLoading(false);
    }
  };

  // ✅ Professional UI states
  if (loading) return <h2>Loading jobs...</h2>;

  if (error) return <h2>{error}</h2>;

  if (jobs.length === 0)
    return <h2>No openings available right now.</h2>;

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

// import { useState } from "react";
// import JobCard from "../components/JobCard";

// function Careers() {
//   const [jobs] = useState([
//     {
//       id: 1,
//       title: "ASP.NET Core Web API & Entity Framework Core",
//       location: "Remote",
//       experience: "2+ Years"
//     },
//     {
//       id: 2,
//       title: "React Js & Node.js Developer",
//       location: "Remote",
//       experience: "1+ Years"
//     },
//     {
//       id: 3,
//       title: "UI/UX Designer",
//       location: "Remote",
//       experience: "1+ Year"
//     }
//   ]);

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Careers</h1>
//       <p>Join our team and build amazing software products.</p>

//       <div style={styles.container}>
//         {jobs.map(job => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     marginTop: "30px",
//     display: "flex",
//     gap: "20px",
//     flexWrap: "wrap"
//   }
// };

// export default Careers;