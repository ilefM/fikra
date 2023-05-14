import { IPost } from "../interfaces/IPost";

export default function Post(props: IPost) {
  return (
    <div className="flex flex-col items-start p-3 pt-4 rounded-lg shadow-lg w-full bg-[#212930] text-base transition-all duration-300 ease-linear">
      <p className="font-medium pb-2 text-clip">{props.username}</p>
      <p>{props.content}</p>
    </div>
  );
}
