import { useEffect, useState } from "react";
import API_BASE_URL from "../services/api";
import { blogData } from "./blogData";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);

   useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE_URL}/api/blogs`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // ALWAYS debug once
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch(error => console.error("Error fetching blogs:", error));
    
  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete this blog?")) return;

    await fetch(`${API_BASE_URL}/api/blogs/${id}`, {
  method: "DELETE"
});
    fetchBlogs();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Manage Blogs</h1>

      <Link to="/admin/blogs/create">
        <button style={styles.Btn}>Create New Blog</button>
      </Link>

{/* style={styles.table} */}
      <table style={styles.table}> 
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>
                <div style={{ display: "flex", gap: "15px" }}>
                <Link to={`/admin/blogs/edit/${blog.id}`}>
                  <button style={styles.Btn}>Edit</button>
                </Link>
                <button style={styles.Btn} onClick={() => handleDelete(blog.id)}>
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
}

const styles = {
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse"
  },
  Btn: {
    padding: "10px 18px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default ManageBlogs;