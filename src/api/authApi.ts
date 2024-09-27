import { AxiosPromise } from "axios";
import { axiosInstance, handleAxiosError } from "./axios";
import { IConnectedUser } from "../interfaces/IConnectedUser";

export async function signIn(
  login: string,
  password: string
): AxiosPromise<IConnectedUser> {
  const data = {
    login: login,
    password: password,
  };

  try {
    const response = await axiosInstance.post("/auth/signin", data);

    return response;
  } catch (e: unknown) {
    const error = handleAxiosError(e);
    throw error;
  }
}
