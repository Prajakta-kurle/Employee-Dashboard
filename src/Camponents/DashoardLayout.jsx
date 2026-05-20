import { Outlet} from "react-router-dom"
import Sidebar from "./Employees/Sidebar";
import Navbar from "./Employees/Navbar";

function DashoardLayout({darkMode}) {
 
  return (
    <div className= "min-h-screen flex flex-col">
      <div className={`${darkMode ? "bg-gray-600 text-white": "bg-white text-black"}`}>
        <Navbar/>
      </div>
     
      <div className="flex flex-1">
        <div className={`w-48 flex-shrink-0 ${darkMode ? "bg-slate-900 text-white": "bg-gray-200 text-black"}`}>
          <Sidebar />
        </div>

      <div className={`flex-1 pt-5 ${darkMode ? "bg-gray-900 text-black": "bg-gray-100 text-black"}`}>
        <Outlet /> {/*child pages/camponant*/}
      </div>
    </div>
    </div>
  );
}

export default DashoardLayout;
