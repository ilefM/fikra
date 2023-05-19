import { useState } from "react";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { motion } from "framer-motion";
import { postsDefault } from "../components/postsData";

export default function Home() {
  const [posts, setPosts] = useState(postsDefault);

  function addPost(content: string) {
    setPosts((newPosts) => {
      return [
        {
          id: crypto.randomUUID(),
          username: "new user",
          content,
        },
        ...newPosts,
      ];
    });
  }

  return (
    <div className="h-full w-10/12 md:w-[700px]">
      <AddPost addNewPost={addPost} />
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
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
                username={post.username}
                content={post.content}
              />
            </motion.div>
          ))}
        </div>
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
