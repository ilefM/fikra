import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);

  function changeTheme() {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  }
  return (
    <span
      className="ease-in-out; cursor-pointer transition duration-300 sm:ml-5"
      onClick={changeTheme}
    >
      {darkMode ? <FaSun size="25" /> : <BsFillMoonFill size="25" />}
    </span>
  );
}
