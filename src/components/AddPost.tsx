import { FormEvent, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { addNewPost } from "../api/posts";

interface IProps {
  addNewPost: (content: string) => void;
}

export default function AddPost(props: IProps) {
  const [content, setContent] = useState("");

  async function publishPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const data = await addNewPost(content);
      console.log(data);

      props.addNewPost(content);
    } catch (e) {
      console.log(e);
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
          className="no-scrollbar min-h-[100px] w-full resize-none break-words bg-transparent outline-none"
        />
        <button className="ml-auto mt-5 text-red-custom hover:text-gray-400 hover:transition-all hover:ease-linear">
          <BsSendFill size={17} />
        </button>
      </form>
    </div>
  );
}
