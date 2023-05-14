import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
  return (
    <div className="flex items-center justify-between bg-[#273139] h-10 w-full p-3 rounded-lg cursor-text">
      <input
        type="text"
        placeholder="Search"
        className="text-gray-400 focus:text-white bg-transparent outline-none w-full"
      />
      <BiSearch size="22px" color="#9ca3af" className="ml-1" />
    </div>
  );
}
