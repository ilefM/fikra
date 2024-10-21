import { Link } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";
import { IPost } from "../interfaces/IPost";
import Post from "./Post";

interface IProps {
  posts: IPost[];
}

export default function PostsList({ posts }: IProps) {
  return (
    <>
      {posts.length !== 0 ? (
        <div className="w-full flex flex-col items-center space-y-6">
          {posts.map((post) => (
            // <motion.div
            //   className="w-full"
            //   key={post.id}
            //   initial={{ opacity: 0, translateY: -50 }}
            //   animate={{ opacity: 1, translateY: 0 }}
            //   transition={{ duration: 0.35, delay: i * 0.2 }}
            // >
            <div className="w-full" key={post.id}>
              <Post
                id={post.id}
                authorUsername={post.authorUsername}
                content={post.content}
              />
            </div>
            // </motion.div>
          ))}
        </div>
      ) : (
        <NoPosts />
      )}
    </>
  );
}

function NoPosts() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="w-full bg-dark-300 rounded-2xl p-10 my-12 text-center space-y-4">
      <p>No publications found :/</p>
      <p>Be the first to talk about your ideas !</p>
      {!isAuthenticated() && (
        <div className="flex justify-center space-x-3">
          <Link to={"/signin"} className="underline">
            Sign in
          </Link>
          <p>or</p>
          <Link to={"/register"} className="underline">
            join Fikra
          </Link>
        </div>
      )}
    </div>
  );
}
