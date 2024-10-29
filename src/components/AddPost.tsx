import { FormEvent, useEffect, useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { addNewPost } from "../api/postsApi";
import { IPost } from "../interfaces/IPost";

interface IProps {
  addNewPost: (post: IPost) => void;
}

export default function AddPost(props: IProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  }, [content]);

  async function publishPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await addNewPost(content);
      props.addNewPost(response.data);
    } catch (e) {
      console.error(e);
    }

    setContent("");
  }

  return (
    <div className="mb-6 w-full rounded-lg bg-dark-200 p-5 shadow-md">
      <form onSubmit={publishPost} className="flex w-full flex-col items-start">
        <textarea
          placeholder="Share your pet project idea"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="no-scrollbar w-full resize-none break-words bg-transparent outline-none"
          rows={2}
          ref={textAreaRef}
        />
        <button
          type="submit"
          disabled={content.trim() === ""}
          className={`ml-auto mt-5 ${
            content.trim() === ""
              ? "text-gray-500"
              : "text-gray-100 cursor-pointer"
          }  hover:transition-all hover:ease-linear`}
        >
          <BsSendFill size={17} />
        </button>
      </form>
    </div>
  );
}
