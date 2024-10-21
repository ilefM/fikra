import { useEffect, useRef, useState } from "react";
import { IPostDetails } from "../interfaces/IPost";
import { useNavigate, useParams } from "react-router-dom";
import useGetPost from "../hooks/posts/useGetPost";
import { ConvertDateFormat } from "../utils/dateConverter";
import { deletePost, updatePost } from "../api/postsApi";
import useAuth from "../hooks/auth/useAuth";
import { Store } from "react-notifications-component";
import useLoadingModal from "../hooks/loadingModal/useLoadingModal";

export default function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useGetPost(id ? id : "");
  const [post, setPost] = useState<IPostDetails>();
  const [postUpdated, setPostUpdated] = useState<IPostDetails>();
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { isAuthenticated } = useAuth();
  const { openModal, closeModal } = useLoadingModal();

  useEffect(() => {
    if (data) {
      setPost(data);
      setPostUpdated(data);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
    if (fetchError) {
      Store.addNotification({
        title: "Oops!",
        message: "An error occured while charging this post",
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
  }, [data, post?.content, fetchError]);

  async function saveChanges() {
    if (post !== postUpdated && postUpdated) {
      try {
        openModal();
        await updatePost(postUpdated);
        closeModal();
        Store.addNotification({
          title: "Success!",
          message: "Changes saved successfully",
          type: "success",
          insert: "bottom",
          container: "bottom-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true,
          },
        });
      } catch (e) {
        closeModal();
        Store.addNotification({
          title: "Oops!",
          message: "An error occured while performing this action",
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
    }
  }

  async function removePost() {
    if (post) {
      const response = await deletePost(post.id);
      if (response.status !== 200) {
        Store.addNotification({
          title: "Oops!",
          message: "An error occured while performing this action",
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
        return;
      }
      navigate("/");
      Store.addNotification({
        title: "Success!",
        message: "Post deleted successfully",
        type: "success",
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
  }

  function copyId() {
    if (post) navigator.clipboard.writeText(post.id);
  }

  return (
    <>
      {!post ? (
        <NoDetails />
      ) : (
        !fetchError &&
        !isLoading && (
          <div className="flex flex-col w-full sm:max-w-[600px]">
            <div className="mb-3 flex flex-col sm:flex-row sm:justify-between w-full">
              <p>@{post?.authorUsername}</p>
              <div className="flex items-center">
                <button
                  className="mr-2 cursor-pointer text-gray-400"
                  onClick={copyId}
                >
                  {post?.id}
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-dark-200 p-3 shadow-md">
              <textarea
                className="w-full resize-none bg-transparent outline-none"
                defaultValue={post?.content}
                onChange={(e) => {
                  postUpdated &&
                    setPostUpdated({ ...postUpdated, content: e.target.value });
                }}
                rows={1} // Start with one row
                style={{ resize: "none", overflow: "hidden" }}
                ref={textareaRef}
              />
            </div>
            <div className="mt-1">
              <p className="text-gray-400">
                Posted : {post ? ConvertDateFormat(post.createdAt) : ""}
              </p>
              {post?.updatedAt != post?.createdAt ? (
                <p className="text-gray-400">
                  Modified : {post ? ConvertDateFormat(post.updatedAt) : ""}
                </p>
              ) : (
                ""
              )}
            </div>

            {isAuthenticated() ? (
              <div className=" flex flex-col justify-around mt-6 items-start">
                <button
                  className="bg-dark-200 p-2 rounded-md"
                  onClick={saveChanges}
                >
                  Save changes
                </button>
                <button
                  className="text-red-600 mt-2 px-2 rounded-md"
                  onClick={removePost}
                >
                  Delete post
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        )
      )}
    </>
  );
}

function NoDetails() {
  return (
    <div className="my-12 text-center text-xl">
      <p>No details found for this post</p>
    </div>
  );
}
