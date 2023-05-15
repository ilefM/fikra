import { FormEvent, useState } from "react";
import { BsSendFill } from "react-icons/bs";

interface IProps {
  addNewPost: (content: string) => void;
}

export default function AddPost(props: IProps) {
  const [content, setContent] = useState("");

  function publishPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (content === "") {
      // Display error message
      return;
    }
    props.addNewPost(content);

    setContent("");
  }

  return (
    <div className="p-5 mb-6 rounded-lg w-full shadow-md bg-dark-200">
      <form onSubmit={publishPost} className="flex flex-col w-full items-start">
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="bg-transparent break-words resize-none outline-none w-full min-h-[100px] no-scrollbar"
        />
        <button className="mt-5 text-red-custom hover:text-gray-400 hover:transition-all ml-auto hover:ease-linear">
          <BsSendFill size={17} />
        </button>
      </form>
    </div>
  );
}
