import { Outlet } from "react-router-dom";
import WebNavBar from "../components/navBar/WebNavbar";
import MobileNavbar from "../components/navBar/MobileNavbar";

export default function Layout() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden min-h-screen bg-dark-400 text-dark-0 m-0 p-0">
      <div className="flex flex-col">
        <div className="hidden sm:block">
          <WebNavBar />
        </div>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
        <div className="flex flex-col items-center justify-center mt-8 mb-14 sm:mt-16 sm:mb-8 mx-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
