import { IConnectedUser } from "./IConnectedUser";

export interface IAuthContext {
  storeUser: (userId: string, username: string) => void;
  isAuthenticated: () => boolean;
  getCurrentUser: () => IConnectedUser | null;
  removeUser: () => void;
}
