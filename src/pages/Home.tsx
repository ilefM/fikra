import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { motion } from "framer-motion";
import useGetPosts from "../hooks/useGetPosts";
import { IPost } from "../interfaces/IPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";

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
    <div className="h-full w-10/12 md:w-[700px]">
      <AddPost addNewPost={addPost} />
      {isLoading && <IsLoading />}
      {!isLoading && fetchError && <FetchError error={fetchError} />}
      {!fetchError && !isLoading && posts.length === 0 ? (
        <NoPosts />
      ) : (
        !fetchError &&
        !isLoading && (
          <div className="flex flex-col items-center space-y-6">
            {posts.map((post, i) => (
              <motion.div
                className="w-full"
                key={post.id}
                initial={{ opacity: 0, translateY: -50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.35, delay: i * 0.2 }}
              >
                <Post
                  id={post.id}
                  createdAt={post.createdAt}
                  author={post.author}
                  content={post.content}
                />
              </motion.div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

function NoPosts() {
  return (
    <div className="my-12 text-center text-xl">
      <p>No publication found :/</p>
    </div>
  );
}
