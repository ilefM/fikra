import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/auth/useAuth";
import { signOut } from "../../api/authApi";
import useLoadingModal from "../../hooks/loadingModal/useLoadingModal";
import { Store } from "react-notifications-component";

export default function WebNavBar() {
  const { isAuthenticated, getCurrentUser, removeUser } = useAuth();
  const { openModal, closeModal } = useLoadingModal();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      openModal();
      await signOut();
      closeModal();
    } catch (e) {
      closeModal();
      Store.addNotification({
        title: "Error!",
        message: "An error occured, but we did sign out",
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
    removeUser();
    navigate("/");
  }

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
          <>
            <Link
              to="/me"
              className="mr-2 hover:text-gray-400 hover:transition-all hover:ease-linear"
            >
              @{getCurrentUser().username}
            </Link>
            <button
              className="text-red-custom ml-1 hover:text-gray-400 hover:transition-all hover:ease-linea"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
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
