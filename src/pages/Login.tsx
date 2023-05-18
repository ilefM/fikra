import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg sm:text-xl text-center">
        Login: This feature is not implemented yet
      </p>
      <div className="sm:hidden flex mt-10">
        <p>Don't have an account ?</p>
        <Link to="/signup" className="ml-2 underline text-center">
          Sign up
        </Link>
      </div>
    </div>
  );
}
