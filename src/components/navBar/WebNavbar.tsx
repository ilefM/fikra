import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";

export default function WebNavBar() {
  return (
<<<<<<< HEAD
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
=======
    <div className="flex h-16 w-full items-center justify-between overflow-hidden px-4 sm:px-8">
      <div className="flex w-1/4 items-center">
        <Link
          to="/"
          className="lg:text-3xl mr-4 text-2xl text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear sm:mr-10"
        >
          Fikra
        </Link>
>>>>>>> main
      </div>

      <NavigationPanelOnline />
    </div>
  );
}

function NavigationPanelOnline() {
  return (
<<<<<<< HEAD
    <div className="flex w-1/2 items-center justify-end space-x-7 text-base lg:text-lg">
=======
    <div className="lg:text-lg flex w-full items-center justify-end space-x-7 text-base">
      <div className="w-2/3">
        <Searchbar />
      </div>
>>>>>>> main
      <Link to="/">Feed</Link>

      <Link
<<<<<<< HEAD
        to="/cheesecake"
        className="mr-2 text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear"
=======
        to="/me"
        className="mr-2 hover:text-gray-400 hover:transition-all hover:ease-linear"
>>>>>>> main
      >
        @binary_dev
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
