import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 w-full h-16 m-0 shadow-lg bg-black-secondary lg:text-lg text-base">
      <NavigationPanel />
      <div className="flex justify-center items-center w-3/12">
        <Searchbar />
      </div>
      <ControlPanel />
    </nav>
  );
}

function NavigationPanel() {
  return (
    <div className="flex justify-start items-center w-1/3 pr-10">
      <p className="text-2xl lg:text-3xl mr-10">Fikra</p>

      <div className="flex items-center w-2/3 space-x-5 lg:space-x-10">
        <Link
          className="hover:text-gray-400 hover:tansition-all hover:duration-150 hover:ease-linear"
          to="/"
        >
          Feed
        </Link>

        <Link
          className="hover:text-gray-400 hover:tansition-all hover:duration-150 hover:ease-linear"
          to="/about"
        >
          About
        </Link>
      </div>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="flex items-center justify-end w-1/3">
      <Link
        className="hover:text-gray-400 hover:transition-all hover:duration-150 hover:ease-linear"
        to="/login"
      >
        Login
      </Link>

      <div className="h-10 w-px m-2 bg-slate-200"></div>

      <Link
        className="bg-black-primary p-2 rounded-md hover:text-black-primary hover:bg-slate-100 hover:transition-all hover:duration-400 hover:ease-linear"
        to="/signup"
      >
        Sign up
      </Link>
    </div>
  );
}
