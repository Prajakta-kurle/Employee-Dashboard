import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Employee from "./Pages/Employee";
import Settings from "./Pages/Settings";
import ProtectedRoute from "./Camponents/Employees/ProtectedRoute";
import DashboardLayout from "./Camponents/DashoardLayout";
import React, { useState } from "react";

function App() {
   const[darkMode,setDarkMode]=useState(false)
  return (
    <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"} min-h-screen flex flex-col`}>
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Layout */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout darkMode={darkMode} />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/settings" element={<Settings  darkMode={darkMode} setDarkMode={setDarkMode}/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;