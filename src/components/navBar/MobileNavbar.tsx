import { BiHomeAlt2, BiSearch, BiUser } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

export default function MobileNavbar() {
  const { isAuthenticated } = useAuth();

  return (
    <>
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
        {isAuthenticated() ? (
          <Link to={"/me"}>
            <BiUser size="22px" />
          </Link>
        ) : (
          <Link to={"/signin"}>
            <BiLogIn size="22px" />
          </Link>
        )}
      </div>
    </>
  );
}
