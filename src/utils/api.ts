export const getApiUrl = (): string => {
  let BASE_API_URL: string = import.meta.env.VITE_BASE_FIKRA_API_LOCALHOST_URL;
  if (import.meta.env.PROD) {
    BASE_API_URL = import.meta.env.VITE_BASE_FIKRA_API_URL;
  }
  return BASE_API_URL;
};
