import { useEffect, useState } from "react";
import { IPost } from "../interfaces/IPost";
import { useParams } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";

function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useAxiosFetch(`/posts/${id}`);
  const [post, setPost] = useState<IPost>();

  console.log("data", data);
  console.log("fetchError", fetchError);
  console.log("isLoading", isLoading);

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  console.log("post", post);

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
              <textarea className="w-full resize-none break-words bg-transparent outline-none"></textarea>
            </div>
            <div className="flex flex-col sm:w-[300px] items-start">
              <div className="w-full flex flex-col items-start mb-5 space-y-7">
                <div className="w-full">
                  <p>Author: </p>
                  <p>{post?.author}</p>
                </div>
                <div className="w-full">
                  <p>Published at:</p>
                  <p>{post?.createdAt.toDateString()}</p>
                </div>
                <div className="w-full">
                  <p>ID:</p>
                  <p>{post?.id}</p>
                </div>
              </div>
              <div className="flex w-full justify-around sm:justify-between">
                <button className="border-2 border-dark-0 py-1 px-3 rounded-md">
                  Edit
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
