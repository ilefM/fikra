import { useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function ThemeSwitcher() {
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
    <span className="sm:ml-5" onClick={changeTheme}>
      {darkMode ? <FaSun size="25" /> : <BsFillMoonFill size="25" />}
    </span>
  );
}
