import { Link } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";

export default function WebNavBar() {
  const { isAuthenticated, getCurrentUser } = useAuth();

  return (
    <div className="flex h-16 w-full items-center justify-between overflow-hidden px-4 sm:px-8">
      <div className="flex w-1/4 items-center">
        <Link
          to="/"
          className="mr-4 text-xl text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear sm:mr-10"
        >
          Fikra
        </Link>
      </div>
      <div className="flex w-full items-center justify-end space-x-7">
        {/* <div className="w-2/3">
          <Searchbar />
        </div> */}
        <Link to="/">Feed</Link>

        {isAuthenticated() ? (
          <Link
            to="/me"
            className="mr-2 hover:text-gray-400 hover:transition-all hover:ease-linear"
          >
            @{getCurrentUser()?.username}
          </Link>
        ) : (
          <>
            <Link
              className="hover:text-gray-400 mr-2 hover:transition-all hover:ease-linear"
              to="/signin"
            >
              Sign In
            </Link>
            <Link
              className="bg-[#ac2f2f] p-2 ml-2 rounded-md hover:text-dark-400 hover:bg-light-200 hover:transition-all hover:ease-linear hover:duration-300"
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
