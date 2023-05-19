import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Index";

export default function Layout() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden min-h-screen bg-dark-400 text-dark-0 m-0 p-0">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col items-center justify-center mt-8 mb-14 sm:mt-16 sm:mb-8 mx-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
