import { motion } from "framer-motion";
import { IPost } from "../interfaces/IPost";

export default function Post(props: IPost) {
  return (
    <motion.div
      className="flex w-full flex-col items-start rounded-lg bg-dark-200 p-5 shadow-md
    "
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.35 }}
    >
      <p className="mb-2 text-clip break-words font-medium">{props.author}</p>
      <p className="word-break break-words">{props.content}</p>
    </motion.div>
  );
}
