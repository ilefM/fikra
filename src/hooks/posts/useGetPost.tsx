import { useState, useEffect } from "react";
import { getErrorMessage } from "../error";
import { IPostDetails } from "../../interfaces/IPost";
import axios from "axios";
import { getPost } from "../../api/postsApi";

function useGetPost(postID: string) {
  const [data, setData] = useState<IPostDetails | null>();
  const [fetchError, setFetchError] = useState(null as string | null);
  const [isLoading, setIsLoading] = useState(false);

  if (!postID || postID === "") {
    throw new Error("The post ID isn't correct");
  }

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await getPost(postID);
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

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [postID]);

  return { data, fetchError, isLoading };
}

export default useGetPost;
