import React, { useState } from "react";

function EmpoyeeForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    department: "",
    company: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.value]: e.target.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    onSuccess();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter FirstName"
            className="p-2 border mb-2 w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            className="p-2 border mb-2 w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            className="p-2 border mb-2 w-full"
            placeholder="Enter Role"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            className="p-2 border mb-2 w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            className="p-2 border mb-2 w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            name="Company"
            placeholder="Enter Company "
            className="p-2 border mb-2 w-full"
            onChange={handleChange}
          />

          <div className="flex gap-3">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Create
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmpoyeeForm;
