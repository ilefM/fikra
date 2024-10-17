import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import useGetPosts from "../hooks/posts/useGetPosts";
import { IPost } from "../interfaces/IPost";
import IsLoading from "../components/IsLoading";
import Error from "../components/Error";
import PostsList from "../components/PostsList";
import useAuth from "../hooks/auth/useAuth";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();
  const { isAuthenticated } = useAuth();

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
    <div className="flex flex-col items-center justify-center h-full w-10/12 sm:max-w-[700px]">
      {isAuthenticated() && <AddPost addNewPost={addPost} />}
      {isLoading && <IsLoading />}
      {!isLoading && fetchError && <Error error={fetchError} />}
      {!fetchError && !isLoading && <PostsList posts={posts} />}
    </div>
  );
}
