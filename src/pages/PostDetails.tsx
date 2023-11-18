import { useEffect, useState } from "react";
import { IPost } from "../interfaces/IPost";
import { useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";
import { ConvertDateToYYYYMMDDFormat } from "../utils/dateConverter";
import { updatePost } from "../api/posts";

function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useGetPost(id ? id : "");
  const [post, setPost] = useState<IPost>();
  const [postUpdated, setPostUpdated] = useState<IPost>();

  useEffect(() => {
    if (data) {
      setPost(data);
      setPostUpdated(data);
    }
  }, [data]);

  function saveChanges() {
    if (post !== postUpdated && postUpdated) {
      try {
        updatePost(postUpdated);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    }
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
          // TODO: Make the textarea height fit the content
          <div className="flex flex-col sm:flex-row w-full sm:max-w-[700px] md:max-w-[800px] sm:justify-between">
            <div className="mb-6 sm:mb-0 h-1/2 rounded-lg sm:w-[200px] md:w-[400px] bg-dark-200 p-3 shadow-md">
              <textarea
                className="w-full resize-none break-words bg-transparent outline-none"
                defaultValue={post?.content}
                onChange={(e) => {
                  postUpdated &&
                    setPostUpdated({ ...postUpdated, content: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col sm:w-[300px] items-start">
              <div className="w-full flex flex-col items-start mb-5 space-y-7">
                <div className="w-full">
                  <p>Author: </p>
                  <p>{post?.author}</p>
                </div>
                <div className="w-full">
                  <p>Published at:</p>
                  <p>
                    {post ? ConvertDateToYYYYMMDDFormat(post.createdAt) : "N/A"}
                  </p>
                </div>
                <div className="w-full">
                  <p>ID:</p>
                  <p>{post?.id}</p>
                </div>
              </div>
              <div className="flex w-full justify-around sm:justify-between">
                <button
                  className="border-2 border-dark-0 py-1 px-3 rounded-md"
                  onClick={saveChanges}
                >
                  Save
                </button>
                <button className="border-2 border-red-custom py-1 px-3 rounded-md">
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
