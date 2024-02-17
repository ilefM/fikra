import { useState, useEffect } from "react";
import axios from "axios";
import { getErrorMessage } from "./error";
import { IPost } from "../interfaces/IPost";
import { getApiUrl } from "../utils/api";

function useGetPosts() {
  const [data, setData] = useState<IPost[]>([]);
  const [fetchError, setFetchError] = useState(null as string | null);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_API_URL = `${getApiUrl()}/posts`;

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

    fetchData(BASE_API_URL);

    const cleanUp = () => {
      isMounted = false;
      cancelToken.cancel();
    };

    return cleanUp;
  }, [BASE_API_URL]);

  return { data, fetchError, isLoading };
}

export default useGetPosts;
