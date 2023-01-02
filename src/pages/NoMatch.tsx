import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="text-center">
      <h1>No match</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
}
