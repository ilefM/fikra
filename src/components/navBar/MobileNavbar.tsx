import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 flex items-center justify-around bg-dark-300 w-full h-12">
      <Link to="/">
        <BiHomeAlt2 size="22px" />
      </Link>

      <button>
        <BiSearch size="22px" />
      </button>

      <Link to="/explore">
        <MdOutlineExplore size="22px" />
      </Link>

      <Link to="/profile">
        <AiOutlineUser size="22px" />
      </Link>

      <ThemeSwitcher />
    </div>
  );
}
