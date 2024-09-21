import { axiosInstance } from "./axios";

export async function signIn() {
  const repsonse = await axiosInstance.post("/auth/signin");
}
