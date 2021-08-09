import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:3300/blogs");

  return (
    <div className="home">
      {error && <div>System error....</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {isPending && <h5>Data is Loading...</h5>}
    </div>
  );
};

export default Home;
