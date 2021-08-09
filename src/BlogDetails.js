import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:3300/blogs/" + id);

  const deleteHandler = () => {
    fetch("http://localhost:3300/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Data is loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <h5>Written by {blog.author}</h5>
          <br />
          <div>{blog.body}</div>
          <button onClick={deleteHandler}>Delete Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
