import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    console.log(email, username, password);
  }

  return (
    <div className="w-11/12 sm:max-w-[450px] p-3 sm:p-5 bg-dark-300 rounded-2xl flex flex-col items-center mt-12">
      <h1 className="text-2xl font-bold mb-8">Sign up</h1>
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

      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="password">Repeat password</label>
        <input
          type="password"
          id="repeatPassword"
          name="repeatPassword"
          placeholder="Repeat password"
          className="border border-gray-300 text-black rounded-md p-2 mt-1"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        className="bg-dark-200 w-full rounded-lg p-2 mt-10"
        onClick={handleRegister}
      >
        Login
      </button>

      <div className="mt-4 flex flex-col sm:space-x-3">
        <p>Already have an account ?</p>
        <Link to="/signin" className="text-center underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}
