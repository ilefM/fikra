import { useEffect, useState } from "react";
import useGetPosts from "../hooks/useGetPosts";
import { IPost } from "../interfaces/IPost";
import { motion } from "framer-motion";
import Post from "../components/Post";

function MyProfile() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center w-[700px]">
      <div className="flex w-full justify-between mb-14">
        <div>
          <p>binary dev</p>
          <p className="text-gray-400">@binary_dev</p>
        </div>
        <button className="border border-dark-0 h-10 px-2 rounded-md">
          Edit profile
        </button>
      </div>
    </div>
  );
}

// component to extract in the futur for multiple uses
function userPosts(props: IPost[]) {
  return (
    <div className="flex flex-col w-full">
      <p className="mb-4">Publications</p>
      <div className="flex flex-col items-center space-y-6">
        {props.map((props, i) => (
          <motion.div
            className="w-full"
            key={props.id}
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.35, delay: i * 0.2 }}
          >
            <Post id={props.id} author={props.author} content={props.content} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MyProfile;
