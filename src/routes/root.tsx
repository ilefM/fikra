import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="p-4">
        <ul className="flex flex-row justify-end space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
