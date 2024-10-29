import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
