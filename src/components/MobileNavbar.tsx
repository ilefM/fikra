import { BiHomeAlt2, BiSearch } from "react-icons/bi";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
	return (
		<div className="h-14 flex items-center justify-evenly  bg-black-secondary">
			<div className="h-30 w-30">
				<Link to="/">
					<BiHomeAlt2 size="20px" />
				</Link>
			</div>
			<div className="h-30 w-30 flex items-center">
				<button>
					<BiSearch size="20px" />
				</button>
			</div>
			<div className="h-30 w-30">
				<Link to="/login">
					<SlLogin size="20px" />
				</Link>
			</div>
		</div>
	);
}
