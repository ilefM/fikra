import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import DefaultNavBar from "./DefaultNavbar";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  function changeTheme() {
    if (darkMode) {
      console.log("switched to light mode");
      setDarkMode(false);
    } else {
      console.log("switched to dark mode");
      setDarkMode(true);
    }
  }

  return (
    <nav className="flex items-center justify-around sm:justify-between w-full overflow-hidden bg-dark-300 sm:bg-transparent px-4 md:px-8 h-12 sm:h-16 fixed sm:relative bottom-0 left-0">
      <div className="hidden sm:block w-full">
        <DefaultNavBar />
      </div>
      <div className="block sm:hidden w-11/12">
        <MobileNavbar />
      </div>
      <button className="sm:ml-5" onClick={changeTheme}>
        {darkMode ? (
          <MdOutlineLightMode size="25" />
        ) : (
          <MdOutlineNightlight size="25" />
        )}
      </button>
    </nav>
  );
}
