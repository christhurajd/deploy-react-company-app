import { useParams } from "react-router-dom";
import BlogForm from "./BlogForm";
//import { blogData } from "./blogData";

import { useEffect, useState } from "react";
import API_BASE_URL from "../services/api";

function EditBlog() {
  const { id } = useParams();

  

  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get(`${API_BASE_URL}/api/blogs`)
  //     .then(res => setBlogs(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs`)
      .then(response => response.json())
      .then(data => {
        console.log(data); // ALWAYS debug once
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const blog = blogs.find(b => b.id === Number(id));
  console.log(blog)
  return <BlogForm initialData={blog} />;
}

export default EditBlog;