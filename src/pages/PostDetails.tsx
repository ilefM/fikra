function PostDetails() {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:max-w-[900px] justify-around">
      <div className="mb-6 sm:mb-0 w-full sm:w-[300px] rounded-lg bg-dark-200 p-5 shadow-md">
        <textarea className="resize-none break-words bg-transparent outline-none"></textarea>
      </div>
      <div className="border flex flex-col sm:w-2/4 items-start">
        <div className="flex flex-col items-start mb-4">
          <div className="w-full flex justify-between">
            <p>Author: </p>
            <p>binary_dev</p>
          </div>
          <div className="w-full flex justify-between">
            <p>Published at:</p>
            <p>2023-01-01</p>
          </div>
          <div className="w-full flex justify-between">
            <p>ID:</p>
            <p>952fd418-54d1-4530-a397-a34dbaa07f04</p>
          </div>
        </div>
        <div className="flex w-full justify-around">
          <button className=" border py-1 px-4 sm:py-2 sm:px-5 rounded-lg">
            Edit
          </button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
