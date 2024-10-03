import { useEffect, useRef, useState } from "react";
import { IPostDetails } from "../interfaces/IPost";
import { useNavigate, useParams } from "react-router-dom";
import useGetPost from "../hooks/posts/useGetPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/Error";
import { ConvertDateFormat } from "../utils/dateConverter";
import { deletePost, updatePost } from "../api/postsApi";

export default function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useGetPost(id ? id : "");
  const [post, setPost] = useState<IPostDetails>();
  const [postUpdated, setPostUpdated] = useState<IPostDetails>();
  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (data) {
      setPost(data);
      setPostUpdated(data);
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }
  }, [data, post?.content]);

  async function saveChanges() {
    if (post !== postUpdated && postUpdated) {
      try {
        await updatePost(postUpdated);
      } catch (e) {
        if (e instanceof Error) {
          // Handle error
        }
      }
    }
  }

  async function removePost() {
    if (post) {
      const response = await deletePost(post.id);
      if (response.status !== 200) {
        console.log("Error while deleting post");
        return;
      }
      navigate("/");
    }
  }

  function copyId() {
    if (post) navigator.clipboard.writeText(post.id);
  }

  return (
    <>
      {isLoading && <IsLoading />}
      {!isLoading && fetchError && <FetchError error={fetchError} />}
      {!fetchError && !isLoading && !post ? (
        <NoDetails />
      ) : (
        !fetchError &&
        !isLoading && (
          <div className="flex flex-col w-full sm:max-w-[600px]">
            <div className="mb-3 flex flex-col sm:flex-row sm:justify-between w-full">
              <p>{post?.authorUsername}</p>
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

            <div className="mt-9 flex flex-col items-start">
              <div className="flex w-full justify-around">
                <button
                  className="border-2 border-[#8AEA92] text-[#8AEA92] p-[1.5px] px-2 rounded-md"
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button
                  className="border-2 border-red-600 text-red-600 p-[1.5px] px-2 rounded-md"
                  onClick={removePost}
                >
                  Delete
                </button>
              </div>
            </div>
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
