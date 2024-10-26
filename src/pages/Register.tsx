import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";
import useAuth from "../hooks/auth/useAuth";
import { register } from "../api/authApi";
import { getErrorMessage } from "../hooks/error";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { storeUser } = useAuth();
  const { openModal, closeModal } = useLoadingModal();
  const navigate = useNavigate();

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email === "" || username === "" || password === "") {
      setError("All fields are required");
    } else {
      openModal();
      try {
        const response = await register(email, username, password);
        storeUser(response.data.userId, response.data.username);
        closeModal();
        navigate("/");
      } catch (e: unknown) {
        const message = getErrorMessage(e);
        message === "Credentials already taken"
          ? setError(message)
          : setError("An error occured while creating your account");
        closeModal();
      }
    }
  }

  return (
    <form
      className="w-11/12 sm:max-w-[450px] p-3 sm:p-5 bg-dark-300 rounded-2xl flex flex-col items-center"
      onSubmit={handleRegister}
    >
      <h1 className="text-2xl font-bold mb-8">Register</h1>
      <p className="text-red-400 text-sm">{error}</p>
      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 text-black rounded-md p-2 mt-1"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="email">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="border border-gray-300 text-black rounded-md p-2 mt-1"
          onChange={(e) => setUsername(e.target.value)}
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
        className="bg-dark-200 hover:bg-dark-200/70 w-full rounded-lg p-2 mt-4"
        type="submit"
      >
        Register
      </button>

      <div className="mt-4 flex flex-col sm:space-x-3">
        <p>Already have an account ?</p>
        <Link to="/signin" className="text-center underline">
          Sign in
        </Link>
      </div>
    </form>
  );
}
