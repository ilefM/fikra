import { useEffect, useState } from "react";
import useGetUserPosts from "../hooks/posts/useGetUserPosts";
import { IPost } from "../interfaces/IPost";
import PostsList from "../components/PostsList";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";
import { Store } from "react-notifications-component";
import { signOut } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/auth/useAuth";

export default function MyProfile() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { removeUser, getCurrentUser } = useAuth();
  const userId = getCurrentUser().userId;
  const { data, fetchError, isLoading } = useGetUserPosts(userId);
  const { openModal, closeModal } = useLoadingModal();
  const navigate = useNavigate();

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

  async function handleLogOut() {
    try {
      openModal();
      await signOut();
      closeModal();
    } catch (e) {
      closeModal();
      Store.addNotification({
        title: "Error!",
        message: "An error occured, we signed you out",
        type: "danger",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true,
        },
      });
    }
    removeUser();
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center max-w-[600px] w-full">
      <div className="flex flex-col items-start mb-14 w-full">
        <p>@{getCurrentUser().username}</p>
        <button className="text-red-custom mt-4" onClick={handleLogOut}>
          Logout
        </button>
      </div>
      <div className="flex flex-col w-full">
        <PostsList posts={posts} />
      </div>
    </div>
  );
}
