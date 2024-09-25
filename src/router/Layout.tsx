import { Outlet } from "react-router-dom";
import WebNavBar from "../components/navBar/WebNavbar";
import MobileNavbar from "../components/navBar/MobileNavbar";

export default function Layout() {
  return (
    <div className="m-0 flex h-full min-h-screen w-full flex-col overflow-hidden p-0 text-dark-0">
      <div className="flex flex-col">
        <div className="hidden sm:block">
          <WebNavBar />
        </div>
        <div className="block sm:hidden">
          <MobileNavbar />
        </div>
        <div className="mx-8 mb-14 mt-8 flex flex-col items-center justify-center sm:mb-8 sm:mt-16">
          <Outlet context={} />
        </div>
      </div>
    </div>
  );
}
