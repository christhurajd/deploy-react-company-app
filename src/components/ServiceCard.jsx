function ServiceCard({ image,title, description }) {
  return (
    <div style={styles.card }>
      <h3>🧑‍💻 {title}</h3>
      <p>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  }
};

export default ServiceCard;