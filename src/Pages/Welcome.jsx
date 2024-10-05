import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/language">Go to Language</Link>
    </div>
  );
}
