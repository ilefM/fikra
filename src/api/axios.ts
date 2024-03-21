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
