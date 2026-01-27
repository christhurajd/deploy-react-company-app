import { useState } from "react";
import { blogData } from "./blogData";
import { Link } from "react-router-dom";

function ManageBlogs() {
  const [blogs, setBlogs] = useState(blogData);

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
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
                <Link to={`/admin/blogs/edit/${blog.id}`}>
                  <button style={styles.Btn}>Edit</button>
                </Link>
                <button style={styles.Btn} onClick={() => deleteBlog(blog.id)}>
                  Delete
                </button>
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