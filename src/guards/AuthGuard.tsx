import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const { getCurrentUser } = useAuth();
  const location = useLocation();

  if (!getCurrentUser()) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
}
