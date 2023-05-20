import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";
import ThemeSwitcher from "./ThemeSwitcher";

export default function WebNavBar() {
  return (
    <div className="flex h-16 w-full items-center justify-between overflow-hidden px-4 md:px-8">
      <div className="flex w-1/2 items-center">
        <Link
          to="/"
          className="mr-4 text-2xl text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear md:mr-10 lg:text-3xl"
        >
          Fikra
        </Link>
        <div className="w-2/3 md:ml-5">
          <Searchbar />
        </div>
      </div>

      <NavigationPanelOnline />
      <ThemeSwitcher />
    </div>
  );
}

function NavigationPanelOnline() {
  return (
    <div className="flex w-1/2 items-center justify-end space-x-7 text-base lg:text-lg">
      <Link to="/">Feed</Link>
      <Link to="/explore">Explore</Link>
      <Link
        to="/cheesecake"
        className="mr-2 text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear"
      >
        cheesecake
      </Link>
    </div>
  );
}

// function NavigationPanelOffline() {
//   return (
//     <div className="flex items-center justify-end w-1/3 text-sm md:text-base lg:text-lg">
//       <Link
//         className="hover:text-gray-400 mr-2 hover:transition-all hover:ease-linear"
//         to="/login"
//       >
//         Login
//       </Link>

//       <Link
//         className="bg-[#ac2f2f] p-2 ml-2 rounded-md hover:text-dark-400 hover:bg-light-200 hover:transition-all hover:ease-linear hover:duration-300"
//         to="/signup"
//       >
//         Sign up
//       </Link>
//     </div>
//   );
// }
