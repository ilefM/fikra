import { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";
import { IPost } from "../interfaces/IPost";
import PostsList from "../components/PostsList";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";

export default function MyProfile() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center max-w-[600px] w-full">
      <div className="flex flex-col xs:flex-row justify-between mb-14 w-full">
        <div>
          <p>binary dev</p>
          <p className="text-gray-400">@binary_dev</p>
        </div>
        <button className="bg-dark-200 mt-3 xs:mt-0 border-dark-0 h-10 px-3 rounded-md">
          Edit profile
        </button>
      </div>
      <div className="flex flex-col w-full">
        {isLoading && <IsLoading />}
        {!isLoading && fetchError && <FetchError error={fetchError} />}
        {!fetchError && !isLoading && <PostsList posts={posts} />}
      </div>
    </div>
  );
}
