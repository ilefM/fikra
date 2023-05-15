import { motion } from "framer-motion";
import { IPost } from "../interfaces/IPost";

export default function Post(props: IPost) {
  return (
    <motion.div
      className="flex flex-col items-start p-5 rounded-lg shadow-md w-full bg-dark-200
    "
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p className="font-medium mb-2 text-clip break-words">{props.username}</p>
      <p className="word-break break-words">{props.content}</p>
    </motion.div>
  );
}
