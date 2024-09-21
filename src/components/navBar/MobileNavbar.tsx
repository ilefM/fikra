import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className="fixed bottom-0 left-0 flex h-12 w-full items-center justify-around bg-dark-300">
      <Link to="/">
        <BiHomeAlt2 size="22px" />
      </Link>

      <Link to="/explore">
        <MdOutlineExplore size="22px" />
      </Link>

      <button>
        <BiSearch size="22px" />
      </button>

      <Link to={"/signin"}>
        <BiLogIn size="22px" />
      </Link>
      {/* <Link to="/me">
        <AiOutlineUser size="22px" />
      </Link> */}
    </div>
  );
}
