import { BiHomeAlt2, BiLogOut, BiSearch } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "../../api/authApi";
import useAuth from "../../hooks/auth/useAuth";
import IsLoading from "../IsLoading";
import Error from "../Error";

export default function MobileNavbar() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { isAuthenticated, getCurrentUser, removeUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    const errorMessage = "server error on the logout action";
    try {
      setIsLoading(true);
      const response = await signOut();
      setIsLoading(false);
      removeUser();
      navigate("/");
      if (response.status != 200) {
        setError(errorMessage);
      }
    } catch (e) {
      setIsLoading(false);
      setError(errorMessage);
    }
  }

  return (
    <>
      {isLoading && <IsLoading />}
      {error && !isLoading && <Error error={error} />}
      {!isLoading && !error && (
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
            <button onClick={handleLogOut}>
              <BiLogOut size="22px" />
            </button>
          ) : (
            <Link to={"/signin"}>
              <BiLogIn size="22px" />
            </Link>
          )}

          {/* <Link to="/me">
        <AiOutlineUser size="22px" />
      </Link> */}
        </div>
      )}
    </>
  );
}
