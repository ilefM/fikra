import { Navigate } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export default function LoggedInGuard({ children }: { children: JSX.Element }) {
  const auth = useAuth();

  if (auth?.user) {
    return <Navigate to="/" />;
  }
  return children;
}
