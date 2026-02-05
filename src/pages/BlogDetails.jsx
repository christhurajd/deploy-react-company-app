import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import REACT_APP_API_URL from "../services/apiClient";

function BlogDetails() {

  const { id } = useParams(); // ✅ get id from URL

  const [blog, setBlog] = useState(null);

  useEffect(() => {

    const fetchBlog = async () => {
      try {

        const response = await fetch(
          `${REACT_APP_API_URL}/blogs/${id}`
        );

        const data = await response.json();

        setBlog(data);

      } catch (error) {
        console.error("Failed to fetch blog", error);
      }
    };

    fetchBlog();

  }, [id]);

  if (!blog) return <h2>Loading...</h2>;

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>

      <h1>{blog.title}</h1>

      <img
        src={blog.imageUrl}
        alt={blog.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <p>{blog.content}</p>

    </div>
  );
}

export default BlogDetails;