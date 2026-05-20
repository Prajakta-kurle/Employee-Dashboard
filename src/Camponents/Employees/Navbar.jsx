import React from "react";
import Logo from "../../assets/logo.png";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout=()=>
  {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-sm border-b">
      {/*Left Section*/}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="logo" className="w-9 h-7" />
        <span className={`font-semibold text-lg`}>
          Employee DashBoard
        </span>
      </div>

      {/*Right Section*/}
      <div className="flex items-center gap-4">
        <Button onClick={handleLogout} variant="primary">
          LogOut
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
