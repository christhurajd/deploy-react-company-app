import { useNavigate } from "react-router-dom";
function DashboardCard({ title, count, link }) {

  const navigate = useNavigate();
  return (
    <div  onClick={() => navigate(link)} style={styles.card}>
      <h3>{title}</h3>
      <p style={styles.count}>{count}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    width: "220px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  count: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#2563eb"
  }
};

export default DashboardCard;