import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { SlLogin } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 w-screen h-12 flex items-center justify-between px-4 bg-[#1A2026]">
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
    </div>
  );
}
