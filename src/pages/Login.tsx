import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center text-lg sm:text-xl">
        Login: This feature is not implemented yet
      </p>
      <div className="mt-10 flex sm:hidden">
        <p>Don't have an account ?</p>
        <Link to="/signup" className="ml-2 text-center underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}
