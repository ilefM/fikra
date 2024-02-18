import { useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

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
    <button className="sm:ml-5" onClick={changeTheme}>
      {darkMode ? (
        <MdOutlineLightMode size="25" />
      ) : (
        <MdOutlineNightlight size="25" />
      )}
    </button>
  );
}
