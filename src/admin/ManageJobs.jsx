import React, { useEffect, useState } from "react";

import { getJobs, deleteJob } from "../services/jobService";
import { Link } from "react-router-dom";

const ManageJobs = () => {
const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
     const params = {
    // page: page,
    // pageSize: pageSize,
    // search: search,
    // location: location
  };

    const result = await getJobs(params);
    setJobs(result.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      await deleteJob(id);
      loadJobs();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Jobs</h2>

      <Link to="/admin/jobs/create">
        <button style={ styles.Btn}>Add Job</button>
      </Link>

      <table border="1" cellPadding="10" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Experience</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {console.log(jobs)}
          {jobs?.map((job) => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.location}</td>
              <td>{job.experience}</td>
              <td>{new Date(job.createdAt).toLocaleDateString()}</td>

              <td>
                <div style={{ display: "flex", gap: "15px" }}>
                <Link to={`/admin/jobs/edit/${job.id}`}>
                  <button style={ styles.Btn}>Edit</button>
                </Link>

                <button
                  onClick={() => handleDelete(job.id)}
                  style={ styles.Btn}
                >
                  Delete
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageJobs;

// import { useState } from "react";
// import { jobData } from "./jobData";
// import { Link } from "react-router-dom";

// function ManageJobs() {
//   const [jobs, setJobs] = useState(jobData);

//   const deleteJob = (id) => {
//     setJobs(jobs.filter(job => job.id !== id));
//   };

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Manage Jobs</h1>

//       <Link to="/admin/jobs/create">
//         <button style={styles.Btn}>Create New Job</button>
//       </Link>

//       <table style={styles.table}>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Location</th>
//             <th>Experience</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {jobs.map(job => (
//             <tr key={job.id}>
//               <td>{job.title}</td>
//               <td>{job.location}</td>
//               <td>{job.experience}</td>
//               <td>
//                 <Link to={`/admin/jobs/edit/${job.id}`}>
//                   <button style={styles.Btn}>Edit</button>
//                 </Link>
//                 <button style={styles.Btn} onClick={() => deleteJob(job.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const styles = {
//   table: {
//     width: "100%",
//     marginTop: "20px",
//     borderCollapse: "collapse"
//   },
//   Btn: {
    
//     padding: "10px 18px",
//     background: "#2563eb",
//     color: "white",
//     border: "none",
//     borderRadius: "5px"
//   }
// };

// export default ManageJobs;
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px"
  },
  Btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }

  
};