import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <p>page is not found....</p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default NotFound;
