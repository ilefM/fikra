import { ReactNode, useEffect, useState } from "react";
import { IConnectedUser } from "../../interfaces/IConnectedUser";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IConnectedUser | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  function storeUser(userId: string, username: string) {
    setUser({ userId, username });
  }

  function isAuthenticated() {
    return user ? true : false;
  }

  function getCurrentUser(): IConnectedUser | null {
    if (user) {
      return user;
    }
    return null;
  }

  function removeUser() {
    setUser(null);
    localStorage.removeItem("user");
  }

  const value = {
    storeUser,
    isAuthenticated,
    getCurrentUser,
    removeUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
