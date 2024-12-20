import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signIn } from "../api/authApi";
import useAuth from "../hooks/auth/useAuth";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";

export default function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { storeUser } = useAuth();
  const { openModal, closeModal } = useLoadingModal();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (login === "" || password === "") {
      setError("Crendentials must not be empty");
    } else {
      openModal();
      try {
        const response = await signIn(login, password);
        storeUser(response.data.userId, response.data.username);
        const from = location.state?.from.pathname || "/";
        closeModal();
        navigate(from, { replace: true });
      } catch (e) {
        closeModal();
        setError("Invalid credentials");
      }
    }
  }

  return (
    <form
      onSubmit={handleSignIn}
      className="w-11/12 sm:max-w-[450px] p-3 sm:p-5 bg-dark-300 rounded-2xl flex flex-col items-center"
    >
      <h1 className="text-2xl font-bold mb-4">Sign In</h1>
      <p className="text-red-400 text-sm">{error}</p>
      <div className="flex flex-col w-full mt-2">
        <label htmlFor="email">Email or username</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Email or username"
          className="border border-gray-300 text-black rounded-md p-2 mt-1"
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 text-black rounded-md p-2 mt-1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="bg-dark-200 hover:bg-dark-200/70 w-full rounded-lg p-2 mt-10 hover:transition-colors hover:duration-200"
        type="submit"
      >
        Sign In
      </button>

      <div className="mt-4 text-sm flex flex-col justify-center items-center">
        <p className="text-gray-400">Don't have an account ?</p>
        <Link to="/register" className="text-center underline">
          Join Fikra
        </Link>
      </div>
    </form>
  );
}
