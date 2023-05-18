import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

export default function Layout() {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden min-h-screen bg-dark-400 text-dark-0 m-0 p-0">
      <div className="hidden sm:block">
        <div className="flex flex-col">
          <Navbar />
          <div className="flex flex-col items-center pt-16 pb-8 px-8">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="block sm:hidden w-full">
        <div className="flex flex-col">
          <div className="flex flex-col items-center pt-8 mb-14">
            <Outlet />
          </div>
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}

// export default function Layou() {
//   return (
//     <div className="flex flex-col bg-dark-400 min-h-screen h-full text-dark-0 m-0 p-0 overflow-x-hidden">
//       <div className="hidden sm:block">
//         <Navbar />
//       </div>
//       <div className="block sm:hidden">
//         <MobileNavbar />
//       </div>
//       <div className="flex flex-col items-center pt-16 pb-8 px-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// }
