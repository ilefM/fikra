import { Dispatch, SetStateAction } from "react";
import { IConnectedUser } from "./IConnectedUser";

export interface IAuthContext {
  user: IConnectedUser | null;
  setUser: Dispatch<SetStateAction<IConnectedUser | null>>;
}
