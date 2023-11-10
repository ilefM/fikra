function PostDetails() {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:max-w-[900px] sm:justify-around">
      <div className="mb-6 sm:mb-0 rounded-lg sm:max-w-[300px] md:w-[300px] bg-dark-200 p-3 shadow-md">
        <textarea className="w-full h-full resize-none break-words bg-transparent outline-none"></textarea>
      </div>
      <div className="flex flex-col sm:w-[300px] items-start">
        <div className="w-full flex flex-col items-start mb-5">
          <div className="w-full mb-2">
            <p>Author: </p>
            <p>binary_dev</p>
          </div>
          <div className="w-full mb-2">
            <p>Published at:</p>
            <p>2023-01-01</p>
          </div>
          <div className="w-full mb-2">
            <p>ID:</p>
            <p>952fd418-54d1-4530-a397-a34dbaa07f04</p>
          </div>
        </div>
        <div className="flex w-full justify-around sm:justify-between">
          <button className="border-2 border-dark-0 py-1 px-3 rounded-md">
            Edit
          </button>
          <button className="border-2 border-red-custom py-1 px-3 rounded-md">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
