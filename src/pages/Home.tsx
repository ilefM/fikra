import Post from "../components/Post";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full w-9/12 md:w-[768px] space-y-8">
      <div className="text-left w-full">
        <h3 className="text-3xl">Posts</h3>
      </div>

      <div className="flex flex-col items-start px-5 py-5 rounded-lg shadow-lg w-full bg-[#242c3b] text-lg space-y-3">
        <p className="text-xl mb-3">Share project idea</p>
        <input
          type="text"
          placeholder="Title"
          className="text-gray-400 focus:text-white bg-transparent outline-none  w-full border p-1 rounded-lg border-slate-200 bg-dark-300"
        />

        <input
          type="text"
          placeholder="Content"
          className="text-gray-400 focus:text-white bg-transparent outline-none  w-full border p-1 rounded-lg border-slate-200 bg-dark-300"
        />
      </div>

      <Post
        username="eifjdsofjdsofjod"
        content="Aenean at fciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sodales finibus augue, a mattis purus venenatis nec."
      />
      <Post
        username="od"
        content="Aenean at fciti sociosqu ad litora torquent per conubia nostra, per incepto."
      />
      <Post username="eifjdsofjdsofjod" content="Aenean at fciti..." />
      <Post
        username="eifjdsofjdsofjod"
        content="Aenean at fciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sodales finibus augue, enean at fciti sociosqu ad litora torqueenean at fciti sociosqu ad litora torqueenean at fciti sociosqu ad litora torqueenean at fciti sociosqu ad litora torquea mattis purus venenatis nec."
      />
    </div>
  );
}
