import { AxiosPromise } from "axios";
import { axiosInstance, handleAxiosError } from "./axios";
import { IConnectedUser } from "../interfaces/IConnectedUser";

// TODO: Verify the code quality of following functions
// Do I really need to make try catch blocks in every function, error handeling ??

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

export async function register(
  email: string,
  username: string,
  password: string
): AxiosPromise<IConnectedUser> {
  const data = {
    username: username,
    email: email,
    password: password,
  };
  try {
    const response = await axiosInstance.post("/auth/signup", data);
    return response;
  } catch (e: unknown) {
    const error = handleAxiosError(e);
    throw error;
  }
}

export async function signOut(): AxiosPromise<void> {
  try {
    const response = await axiosInstance.post("/auth/signout");
    return response;
  } catch (e: unknown) {
    const error = handleAxiosError(e);
    throw error;
  }
}
