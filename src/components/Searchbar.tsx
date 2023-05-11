import { BiSearch } from "react-icons/bi";

export default function Searchbar() {
	return (
		<div className="flex items-center justify-between bg-gray-600 h-10 w-full p-2 rounded-lg cursor-text">
			<input
				type="text"
				placeholder="Search"
				className="text-gray-400 focus:text-white bg-transparent outline-none w-full"
			/>
			<BiSearch size="22px" className="ml-1" />
		</div>
	);
}
