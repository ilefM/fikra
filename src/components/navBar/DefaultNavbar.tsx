import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";

export default function DefaultNavBar() {
  return (
    <div className="hidden sm:flex items-center w-full">
      <div className="flex items-center w-1/2">
        <Link
          to="/"
          className="text-2xl lg:text-3xl mr-4 md:mr-10 hover:text-gray-400 text-red-custom hover:transition-all hover:ease-linear"
        >
          Fikra
        </Link>
        <div className="w-2/3">
          <Searchbar />
        </div>
      </div>
      <NavigationPanelOnline />
    </div>
  );
}

function NavigationPanelOnline() {
  return (
    <div className="flex items-center justify-end text-base lg:text-lg space-x-7 w-1/2">
      <Link to="/">Feed</Link>
      <Link to="/explore">Explore</Link>
      <Link
        to="/cheesecake"
        className="text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear mr-2"
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
