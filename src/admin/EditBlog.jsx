import { useParams } from "react-router-dom";
import BlogForm from "./BlogForm";
import { blogData } from "./blogData";

function EditBlog() {
  const { id } = useParams();
  const blog = blogData.find(b => b.id === Number(id));

  return <BlogForm initialData={blog} />;
}

export default EditBlog;