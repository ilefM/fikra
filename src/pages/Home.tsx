import { useState } from "react";
import AddPost from "../components/AddPost";
import { IPost } from "../interfaces/IPost";
import Post from "../components/Post";

const postsDefault: IPost[] = [
  {
    id: crypto.randomUUID(),
    username: crypto.randomUUID(),
    content: "this is some content",
  },
  {
    id: crypto.randomUUID(),
    username: crypto.randomUUID(),
    content: "this is some content",
  },
];

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>(postsDefault);

  function addPost(content: string) {
    setPosts((newPosts) => {
      return [
        {
          id: crypto.randomUUID(),
          username: "new user",
          content,
        },
        ...newPosts,
      ];
    });
  }

  return (
    <div className="h-full w-9/12 md:w-[768px]">
      <AddPost addNewPost={addPost} />
      {posts.length === 0 ? (
        <NoPosts />
      ) : (
        <div className="flex flex-col items-center space-y-6">
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              content={post.content}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function NoPosts() {
  return (
    <div className="my-12 text-xl">There is no posts :/ . Add a new one.</div>
  );
}
