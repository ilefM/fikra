import { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import useGetPosts from "../hooks/posts/useGetPosts";
import { IPost } from "../interfaces/IPost";
import { Store } from "react-notifications-component";
import PostsList from "../components/PostsList";
import useAuth from "../hooks/auth/useAuth";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();

  const { isAuthenticated } = useAuth();
  const { openModal, closeModal } = useLoadingModal();

  useEffect(() => {
    if (fetchError) {
      Store.addNotification({
        title: "Error!",
        message:
          "We encountered an error while processing your action: " + fetchError,
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    }
    if (data) {
      setPosts(data);
    }
  }, [data, fetchError]);

  if (isLoading) {
    openModal();
  } else {
    closeModal();
  }

  async function addPost(post: IPost) {
    setPosts((newPosts) => {
      return [post, ...newPosts];
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-full w-10/12 sm:max-w-[700px]">
      {isAuthenticated() && <AddPost addNewPost={addPost} />}
      <PostsList posts={posts} />
    </div>
  );
}
