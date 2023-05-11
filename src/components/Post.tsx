type Post = {
	username: string;
	content: string;
};

export default function Post(props: Post) {
	return (
		<div className="flex flex-col items-start border px-5 py-3 rounded-lg w-10/12 text-base">
			<p className="font-medium pb-2 text-clip">{props.username}</p>
			<p>{props.content}</p>
		</div>
	);
}
