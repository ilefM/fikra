import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

export default function Layout() {
  return (
    <div className="flex flex-col bg-[#14181D] min-h-screen w-full h-full text-white m-0 p-0 overflow-hidden">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
      <div className="flex flex-col items-center pt-16 pb-8 px-8">
        <Outlet />
      </div>
    </div>
  );
}
