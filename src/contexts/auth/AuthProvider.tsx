import { ReactNode, useState } from "react";
import { IConnectedUser } from "../../interfaces/IConnectedUser";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IConnectedUser | null>(null);

  const value = { user, setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
