import { FormEvent, useState } from "react";

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
    <div className="p-3 mb-6  rounded-lg w-full bg-[#212930] text-lg">
      <form onSubmit={publishPost} className="flex flex-col items-start">
        <p className="text-xl mb-2">New project idea</p>
        <input
          type="text"
          placeholder="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="text-gray-400 focus:text-white bg-transparent outline-none w-full border-b border-gray-500"
        />
        <button className="mt-5 text-[#FF4545] hover:text-gray-400 hover:transition-all hover:ease-linear">
          Publish
        </button>
      </form>
    </div>
  );
}
