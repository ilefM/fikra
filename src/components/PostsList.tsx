import { motion } from "framer-motion";
import { IPost } from "../interfaces/IPost";
import Post from "./Post";

interface IProps {
  posts: IPost[];
}

export default function PostsList({ posts }: IProps) {
  return (
    <div className="flex flex-col items-center space-y-6">
      {posts.map((post, i) => (
        <motion.div
          className="w-full"
          key={post.id}
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.35, delay: i * 0.2 }}
        >
          <Post id={post.id} author={post.author} content={post.content} />
        </motion.div>
      ))}
    </div>
  );
}