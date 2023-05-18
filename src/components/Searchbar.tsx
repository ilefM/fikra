import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
  return (
    <div className="flex items-center justify-between bg-gray-700 h-10 w-full p-3 rounded-3xl cursor-text">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none w-full"
      />
      <BiSearch size="22px" color="#F1F5F9" className="ml-1" />
    </div>
  );
}
