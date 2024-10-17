import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

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
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.config && error.response?.status === 401) {
      const response = await axiosInstance.post("auth/refresh");
      if (response.status === 200) {
        const response = await axiosInstance(error.config);
        return response;
      }
    }
  }
);

export function handleAxiosError(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    return new Error(error.response?.data?.message || "server request failed");
  }
  return new Error("Unexpected error occurred");
}
