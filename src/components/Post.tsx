type PostContent = {
  username: string;
  content: string;
};

export default function Post(props: PostContent) {
  return (
    <div className="flex flex-col items-start px-5 pb-3 pt-4 rounded-lg shadow-lg w-full bg-[#323d51] text-base">
      <p className="font-medium pb-2 text-clip">{props.username}</p>
      <p>{props.content}</p>
    </div>
  );
}
