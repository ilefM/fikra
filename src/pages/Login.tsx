import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center space-y-5 mt-10">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg p-2 mt-1"
        />
      </div>
      <div className="flex flex-col mt-4 w-full">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 rounded-lg p-2 mt-1"
        />
      </div>
      <button className="bg-dark-200 w-full rounded-lg p-2 mt-4">Login</button>
      <div className="mt-10 flex flex-col sm:space-x-3">
        <p>Don't have an account ?</p>
        <Link to="/signup" className="text-center underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
