import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";
import { getDashboardStats } from "../services/dashboardService";

function Dashboard() {

  const { logout } = useContext(AuthContext);

  const [stats, setStats] = useState(null);

  useEffect(() => {

    const loadStats = async () => {
      try {
        const data = await getDashboardStats();

        setStats([
          { title: "Total Blogs", count: data.totalBlogs , link: "/admin/blogs"},
          { title: "Job Openings", count: data.totalJobs, link: "/admin/jobs" },
          { title: "Messages", count: data.totalMessages, link: "/admin/applications" }
        ]);

      } catch (error) {
        console.error("Dashboard error:", error);
      }
    };

    loadStats();

  }, []);

  if (!stats) return <h2>Loading dashboard...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>

      {/* Stats Cards */}
      <div style={styles.cardContainer}>
        {stats.map((stat, index) => (
          <DashboardCard
            key={index}
            title={stat.title}
            count={stat.count}
            link={stat.link} // 👈 ADD THIS
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div style={{ marginTop: "40px" }}>
        <h2>Quick Actions</h2>

        <Link to="/admin/blogs">
          <button style={styles.btn}>Manage Blogs</button>
        </Link>

        <Link to="/admin/jobs">
          <button style={styles.btn}>Manage Jobs</button>
        </Link>

        <Link to="/admin/applications">
          <button style={styles.btn}>View Applications</button>
        </Link>

        <button style={styles.logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import DashboardCard from "../components/DashboardCard";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   const { logout } = useContext(AuthContext);

//   // Mock stats (later from API)
//   const stats = [
//     { title: "Total Blogs", count: 4 },
//     { title: "Job Openings", count: 3 },
//     { title: "Messages", count: 12 }
//   ];

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Dashboard</h1>
//       {/* <p>Manage your website content from here.</p> */}

//       {/* Stats Cards */}
//       <div style={styles.cardContainer}>
//         {stats.map((stat, index) => (
//           <DashboardCard
//             key={index}
//             title={stat.title}
//             count={stat.count}
//           />
//         ))}
//       </div>

//       {/* Quick Actions */}
//       <div style={{ marginTop: "40px" }}>
//         <h2>Quick Actions</h2>
//         <Link to="/admin/blogs">
//           <button style={styles.btn}>Manage Blogs</button>
//         </Link>
//         <Link to="/admin/jobs">
//           <button style={styles.btn}>Manage Jobs</button>
//         </Link>
//         <Link to="/admin/applications">
//         <button style={styles.btn}>View Applications</button>
   
// </Link>
//         <button style={styles.logoutBtn} onClick={logout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }

const styles = {
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap"
  },
  btn: {
    marginRight: "15px",
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  },
  logoutBtn: {
    padding: "10px 18px",
    background: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default Dashboard;