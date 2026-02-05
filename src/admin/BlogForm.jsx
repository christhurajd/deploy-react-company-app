import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/apiClient";

function BlogForm({ initialData }) {
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("Title", title);
      formData.append("ShortDesc", shortDesc);
      formData.append("Content", content);
      formData.append("Image", image);

      const response = await apiClient.post("/blogs", formData);

      alert("Blog created successfully!");

      console.log(response.data);

      // Reset form
      setTitle("");
      setShortDesc("");
      setContent("");
      setImage(null);
      setPreview(null);

    } catch (error) {
      console.error(error);
      alert("Failed to create blog");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.form}>
      <h2>Create Blog</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Short Description"
          value={shortDesc}
          onChange={(e) => setShortDesc(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Content"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        <br /><br />

        {preview && (
          <img
            src={preview}
            alt="preview"
            width="200"
          />
        )}

        <br /><br />

        <button style={styles.Btn} disabled={loading}>
          {loading ? "Uploading..." : "Create Blog"}
        </button>

      </form>
    </div>
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