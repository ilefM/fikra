import axios, { AxiosInstance } from "axios";

const getApiUrl = (): string => {
  let apiUrl: string = import.meta.env.VITE_BASE_FIKRA_API_LOCALHOST_URL;
  if (import.meta.env.PROD) {
    apiUrl = import.meta.env.VITE_BASE_FIKRA_API_URL;
  }
  return apiUrl;
};

const url = getApiUrl();

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function handleAxiosError(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    return new Error(error.response?.data?.message || "server request failed");
  }
  return new Error("Unexpected error occurred");
}
