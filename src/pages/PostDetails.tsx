function PostDetails() {
  return (
    <div className="flex flex-col sm:flex-row w-7/12 justify-around ">
      <div className="mb-6 w-full sm:w-[500px] rounded-lg bg-dark-200 p-5 shadow-md">
        <textarea className="min-h-[100px] w-full resize-none break-words bg-transparent outline-none"></textarea>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-start mb-4">
          <p>Author: </p>
          <p>Published at:</p>
          <p>ID:</p>
        </div>
        <div className="flex w-full justify-around">
          <button className=" border py-2 px-5 rounded-lg">Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
