import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from "../Camponents/UI/Button";
import Input from "../Camponents/UI/Input";

function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
     if(!email.trim() && !password.trim())
    {
      alert("Please Enter your email and password")
    }
    else if(!email.trim())
    {
      alert("Please Enter Your Email")
    }
    else if(!password.trim())
    {
      alert("Please Enter Your Password")
    }
    else if(email === "admin@gmail.com" && password === "admin1234")
    {
        localStorage.setItem("token","dummytoken1234");
        navigate("/dashboard")
    }
    else
    {
        alert("Invalid credentials")
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleLogin}
      className="bg-white p-8 rounded-xl shadow w-80 ">
        <h2 className="mb-2 text-xl font-semibold">Admin Login</h2>
        <div className="flex flex-col gap-4">
           <Input
          type="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter Passoword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
