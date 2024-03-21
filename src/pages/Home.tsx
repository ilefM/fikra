import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import useGetPosts from "../hooks/posts/useGetPosts";
import { IPost } from "../interfaces/IPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";
import PostsList from "../components/PostsList";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  async function addPost(post: IPost) {
    setPosts((newPosts) => {
      return [post, ...newPosts];
    });
  }

  return (
    <div className="h-full w-10/12 sm:max-w-[700px]">
      <AddPost addNewPost={addPost} />
      {isLoading && <IsLoading />}
      {!isLoading && fetchError && <FetchError error={fetchError} />}
      {!fetchError && !isLoading && <PostsList posts={posts} />}
    </div>
  );
}
