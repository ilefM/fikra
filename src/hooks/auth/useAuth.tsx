import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

export default function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw Error("the auth context is empty");
  }

  return authContext;
}
