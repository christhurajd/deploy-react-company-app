import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ initialData }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, content });
    navigate("/admin/blogs");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>{initialData ? "Edit Blog" : "Create Blog"}</h2>

      <input
        placeholder="Blog Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button style={styles.Btn} type="submit">Save</button>
    </form>
  );
}

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

export default BlogForm;