import { useEffect, useState } from "react";
import { IPostDetails } from "../interfaces/IPost";
import { useParams } from "react-router-dom";
import useGetPost from "../hooks/useGetPost";
import IsLoading from "../components/IsLoading";
import FetchError from "../components/FetchError";
import { ConvertDateToYYYYMMDDFormat } from "../utils/dateConverter";
import { updatePost } from "../api/posts";
import { IoCopyOutline } from "react-icons/io5";

function PostDetails() {
  const { id } = useParams();
  const { data, fetchError, isLoading } = useGetPost(id ? id : "");
  const [post, setPost] = useState<IPostDetails>();
  const [postUpdated, setPostUpdated] = useState<IPostDetails>();

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
            <div className="flex justify-between mb-3">
              <p>{post?.author}</p>
              <p>{post ? ConvertDateToYYYYMMDDFormat(post.createdAt) : ""}</p>
            </div>

            <div className=" mb-9 rounded-lg bg-dark-200 p-3 shadow-md">
              <textarea
                className="w-full h-[200px] resize-none break-words bg-transparent outline-none"
                defaultValue={post?.content}
                onChange={(e) => {
                  postUpdated &&
                    setPostUpdated({ ...postUpdated, content: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col items-start">
              <div className="w-full flex flex-col items-start mb-16 space-y-5">
                <div>
                  <p>Post ID :</p>
                  <div className="flex items-center">
                    <p className="mr-2">{post?.id}</p>
                    <button onClick={copyId}>
                      <IoCopyOutline size="18" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-around">
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
