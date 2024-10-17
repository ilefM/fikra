import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signIn } from "../api/authApi";
import { getErrorMessage } from "../hooks/error";
import IsLoading from "../components/IsLoading";
import useAuth from "../hooks/auth/useAuth";

export default function SignIn() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { storeUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleSignIn(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (login === "" || password === "") {
      setError("Crendentials must not be empty");
    } else {
      setIsLoading(true);
      try {
        const response = await signIn(login, password);
        storeUser(response.data.userId, response.data.username);
        const from = location.state?.from.pathname || "/";
        setIsLoading(false);
        navigate(from, { replace: true });
      } catch (e: unknown) {
        setIsLoading(false);
        const message = getErrorMessage(e);
        setError(message);
      }
    }
  }

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
        <form
          onSubmit={handleSignIn}
          className="w-11/12 sm:max-w-[450px] p-3 sm:p-5 bg-dark-300 rounded-2xl flex flex-col items-center mt-12"
        >
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <p className="text-red-400 text-sm">{error}</p>
          <div className="flex flex-col w-full mt-2">
            <label htmlFor="email">Email or username</label>
            <input
              type="email"
              id="email"
              name="email"
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
            className="bg-dark-200 w-full rounded-lg p-2 mt-10 hover:bg-dark-200/25 hover:transition-colors hover:duration-200"
            type="submit"
          >
            Sign In
          </button>

          <div className="mt-4 text-sm flex flex-col justify-center items-center">
            <p className="text-gray-400">Don't have an account ?</p>
            <Link to="/signup" className="text-center underline">
              Join Fikra
            </Link>
          </div>
        </form>
      )}
    </>
  );
}
