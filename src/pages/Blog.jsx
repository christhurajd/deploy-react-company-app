// import { useEffect, useState } from "react";
// import BlogCard from "../components/BlogCard";

// function Blog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
//       .then(res => res.json())
//       .then(data => setPosts(data));
//   }, []);

//   return (
//     <div style={{ padding: "40px" }}>
//       <h1>Company Blog</h1>
//       <p>Latest insights, articles, and updates from our team.</p>

//       <div style={styles.container}>
//         {posts.map(post => (
//           <BlogCard key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     gap: "20px",
//     marginTop: "30px",
//     flexWrap: "wrap"
//   }
// };

// export default Blog;

//import blogs from "../data/blogs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import API_BASE_URL from "../services/api";

function Blog() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/blogs`)
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Our Blog</h1>
      <p className="text-center">
        Latest insights from our software experts
      </p>
{console.log(blogs)}
      <div className="card-container">
        {/* {(Array.isArray(blogs) ? blogs : []).map(blog => ( */}
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            {/* <img
              src="/images/blog-react.jpg" //{blog.image}
              alt={blog.title}
              className="blog-img"
            /> */}

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.shortDesc}</p>

              <Link to={`/blog/${blog.id}`} className="btn">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;