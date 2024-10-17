import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.getCurrentUser()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
