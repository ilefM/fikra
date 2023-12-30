import { useEffect, useState } from "react";
import { IPostDetails } from "../interfaces/IPost";
import { useNavigate, useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";
import { ConvertDateToYYYYMMDDFormat } from "../utils/dateConverter";
import { deletePost, updatePost } from "../api/postsApi";

function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useGetPost(id ? id : "");
  const [post, setPost] = useState<IPostDetails>();
  const [postUpdated, setPostUpdated] = useState<IPostDetails>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setPost(data);
      setPostUpdated(data);
    }
  }, [data]);

  async function saveChanges() {
    if (post !== postUpdated && postUpdated) {
      try {
        const res = await updatePost(postUpdated);
        console.log(res);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    }
  }

  async function removePost() {
    if (post) {
      const status = await deletePost(post.id);
      if (status !== 200) {
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
              <p>{post?.author}</p>
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
                className="w-full h-[200px] resize-none break-words bg-transparent outline-none"
                defaultValue={post?.content}
                onChange={(e) => {
                  postUpdated &&
                    setPostUpdated({ ...postUpdated, content: e.target.value });
                }}
              />
            </div>
            <p className="text-gray-400">
              Posted : {post ? ConvertDateToYYYYMMDDFormat(post.createdAt) : ""}
            </p>
            {post?.updatedAt != post?.createdAt ? (
              <p className="text-gray-400">
                Modified :{" "}
                {post ? ConvertDateToYYYYMMDDFormat(post.updatedAt) : ""}
              </p>
            ) : (
              ""
            )}

            <div className="mt-9 flex flex-col items-start">
              <div className="flex w-full justify-around">
                <button
                  className="border-2 border-dark-0 py-1 px-3 rounded-md"
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button
                  className="border-2 border-red-custom py-1 px-3 rounded-md"
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

export default PostDetails;
