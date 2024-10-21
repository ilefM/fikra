import { useEffect, useState } from "react";
import useGetPosts from "../hooks/posts/useGetPosts";
import { IPost } from "../interfaces/IPost";
import PostsList from "../components/PostsList";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";
import { Store } from "react-notifications-component";

export default function MyProfile() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { data, fetchError, isLoading } = useGetPosts();
  const { openModal, closeModal } = useLoadingModal();

  useEffect(() => {
    if (isLoading) {
      openModal();
    } else {
      closeModal();
    }

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
          duration: 3000,
          onScreen: true,
        },
      });
    }
    if (data) {
      setPosts(data);
    }
  }, [data, fetchError, isLoading, openModal, closeModal]);

  return (
    <div className="flex flex-col items-center max-w-[600px] w-full">
      <div className="flex flex-col xs:flex-row justify-between mb-14 w-full">
        <div>
          <p>binary dev</p>
          <p className="text-gray-400">@binary_dev</p>
        </div>
        <button
          className="bg-dark-200 mt-3 xs:mt-0 border-dark-0 h-10 px-3 rounded-md"
          onClick={() => alert("This feature is not implemented yet ")}
        >
          Edit profile
        </button>
      </div>
      <div className="flex flex-col w-full">
        <PostsList posts={posts} />
      </div>
    </div>
  );
}
