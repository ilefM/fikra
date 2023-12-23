import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API_URL } from "../utils/api";
import { getErrorMessage } from "./error";
import { IPostDetails } from "../interfaces/IPost";

function useGetPost(postID: string) {
  const [data, setData] = useState<IPostDetails | null>();
  const [fetchError, setFetchError] = useState(null as string | null);
  const [isLoading, setIsLoading] = useState(false);

  const dataUrl = `${BASE_API_URL}/posts/${postID}`;

  if (postID == "") {
    throw new Error("The post ID isn't correct");
  }

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
          setFetchError(null);
          setData(response.data);
        }
      } catch (e: unknown) {
        if (isMounted) {
          const message = getErrorMessage(e);
          setFetchError(message);
          setData(null);
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

export default useGetPost;
