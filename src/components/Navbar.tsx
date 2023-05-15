import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 w-full h-16 m-0">
      <NavigationPanel />
      <div className="flex justify-center items-center w-4/12 ">
        <Searchbar />
      </div>
      <ControlPanel />
    </nav>
  );
}

function NavigationPanel() {
  return (
    <div className="flex justify-start items-center w-1/3 pr-10">
      <Link
        to="/"
        className="text-2xl lg:text-3xl mr-10 hover:text-gray-400 text-red-custom hover:transition-all hover:ease-linear"
      >
        Fikra
      </Link>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="flex items-center justify-end w-1/3 lg:text-lg">
      <Link
        className="hover:text-gray-400 mr-2 hover:transition-all hover:ease-linear"
        to="/login"
      >
        Login
      </Link>

      <Link
        className="bg-[#ac2f2f] p-2 ml-2 rounded-md hover:text-dark-400 hover:bg-light-200 hover:transition-all hover:ease-linear hover:duration-300"
        to="/signup"
      >
        Sign up
      </Link>
    </div>
  );
}
