import { IPost } from "../interfaces/IPost";
import { Link } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";

export default function Post(props: IPost) {
  return (
    <div className="flex w-full flex-col items-start rounded-lg bg-dark-200 p-5 shadow-md">
      <div className=" mb-2 flex items-center justify-between w-full">
        <p className="text-clip break-words font-medium">{props.author}</p>
        <Link
          to={`/postDetails/${props.id}`}
          className="hover:transition-all hover:ease-linear
          text-gray-300"
        >
          <CgDetailsMore size={20} />
        </Link>
      </div>
      <p className="whitespace-pre-line break-words break-all">
        {props.content}
      </p>
    </div>
  );
}
