import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";

function getErrorMessage(error: unknown) {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else {
    message = "An unknown error has occurred.";
  }

  return message;
}

function useAxiosFetch(dataUrl: string) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null as string | null);
  const [isLoading, setIsLoading] = useState(false);

  dataUrl = `${BASE_API_URL}${dataUrl}`;

  useEffect(() => {
    let isMounted = true;
    const cancelToken = axios.CancelToken.source();

    async function fetchData(url: string) {
      setIsLoading(true);
      try {
        const response = await axios.get(url, {
          cancelToken: cancelToken.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (e: unknown) {
        if (isMounted) {
          const message = getErrorMessage(e);
          setFetchError(message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    }

    fetchData(dataUrl);

    const cleanUp = () => {
      isMounted = false;
      cancelToken.cancel();
    };

    return cleanUp;
  }, [dataUrl]);

  return { data, fetchError, isLoading };
}

export default useAxiosFetch;
