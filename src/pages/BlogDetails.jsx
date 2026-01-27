// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// function BlogDetails() {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [likes, setLikes] = useState(0);
//   const [comment, setComment] = useState("");
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then(res => res.json())
//       .then(data => setPost(data));
//   }, [id]);

//   const addComment = () => {
//     if (comment.trim() === "") return;
//     setComments([...comments, comment]);
//     setComment("");
//   };

//   if (!post) return <p style={{ padding: "40px" }}>Loading...</p>;

//   return (
//     <div style={{ padding: "40px" }}>
//       <Link to="/blog">← Back to Blog</Link>

//       <h1 style={{ marginTop: "20px" }}>{post.title}</h1>
//       <p style={{ marginTop: "15px" }}>{post.body}</p>

//       {/* Like Button */}
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => setLikes(likes + 1)}>
//           👍 Like ({likes})
//         </button>
//       </div>

//       {/* Comment Section */}
//       <div style={{ marginTop: "30px" }}>
//         <h3>Comments</h3>

//         <input
//           value={comment}
//           onChange={e => setComment(e.target.value)}
//           placeholder="Write a comment"
//           style={styles.input}
//         />

//         <button onClick={addComment} style={styles.commentBtn}>
//           Post
//         </button>

//         <div style={{ marginTop: "15px" }}>
//           {comments.map((c, index) => (
//             <p key={index} style={styles.comment}>
//               {c}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "10px"
//   },
//   commentBtn: {
//     marginTop: "10px",
//     padding: "8px 15px"
//   },
//   comment: {
//     background: "#f1f5f9",
//     padding: "10px",
//     borderRadius: "5px",
//     marginTop: "8px"
//   }
// };

// export default BlogDetails;

import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return <p className="container">Blog not found</p>;
  }

  return (
    <div className="container">
      <Link to="/blog">← Back to Blog</Link>

      <h1 className="mt-2">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="blog-detail-img"
      />

      <p className="mt-2">{blog.content}</p>
    </div>
  );
}

export default BlogDetails;