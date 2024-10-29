import { useEffect, useState } from "react";
import { IPost } from "../../interfaces/IPost";
import axios from "axios";
import { getUserPosts } from "../../api/postsApi";
import { getErrorMessage } from "../error";

function useGetUserPosts(userId: string) {
  const [data, setData] = useState<IPost[]>([]);
  const [fetchError, setFetchError] = useState(null as string | null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getUserPosts(userId);
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

    fetchData();

    const intervalId = setInterval(() => fetchData(), 240000);

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
      clearInterval(intervalId);
    };

    return cleanUp;
  }, [userId]);

  return { data, fetchError, isLoading };
}

export default useGetUserPosts;
