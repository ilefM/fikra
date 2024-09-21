import { AxiosPromise } from "axios";
import { axiosInstance, handleAxiosError } from "./axios";
import { ILoggerUser } from "../interfaces/ILoggerUser";

export async function signIn(
  login: string,
  password: string
): AxiosPromise<ILoggerUser> {
  const data = {
    login: login,
    password: password,
  };

  try {
    const response = await axiosInstance.post("/auth/signin", data);

    return response;
  } catch (e: unknown) {
    console.log("enter in catch");
    const error = handleAxiosError(e);
    throw error;
  }
}
