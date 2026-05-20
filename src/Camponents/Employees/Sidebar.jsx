import { Link } from "react-router-dom";
import React from "react";

function Sidebar({darkMode}) {
  return (
    <div className="h-full p-5">
      {" "}
      {/*internal styling in camponant and layout grid flex in main parent page*/}
      <h2 className="text-xl mb-4 font-semibold ml-2">Menu</h2>
      <nav className="">
        <ul className="flex flex-col gap-4">
            <li>
          <Link
            to="/dashboard"
            className={`${darkMode ? "hover:bg-gray-400" : "hover:bg-gray-400"} transition p-2 rounded-lg cursor-pointer`}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/employee"
            className={`${darkMode ? "hover:bg-gray-400" : "hover:bg-gray-400"} transition p-2 rounded-lg cursor-pointer`}
          >
            Employee
          </Link>
        </li>

        <li>
          <Link
            to="/settings"
            className={`${darkMode ? "hover:bg-gray-400" : "hover:bg-gray-400"} transition p-2 rounded-lg cursor-pointer`}
          >
            Settings
          </Link>
        </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
