import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div style={styles.card}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 80)}...</p>
       <Link to={`/blog/${post.id}`}>
        <button style={styles.btn}>Read More</button>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "20px",
    width: "280px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  btn: {
    marginTop: "10px",
    padding: "8px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

export default BlogCard;