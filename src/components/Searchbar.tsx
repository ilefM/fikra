import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
  return (
    <div className="flex h-9 w-full cursor-text items-center justify-between rounded-3xl bg-gray-700 px-3">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent outline-none"
      />
      <BiSearch size="22px" color="#F1F5F9" className="ml-1" />
    </div>
  );
}
