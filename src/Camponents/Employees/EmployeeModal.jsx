import React, { useState } from "react";

function EmployeeModal({ Employees, mode, onClose, onSuccess }) {
  const isView = mode === "View";
  const [formData, setFormData] = useState(Employees);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://dummyjson.com/users/${Employees.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      onSuccess();
    } catch (e) {
      console.log(e);
    }
  };
  return <div className="fixed inset-0 bg-gray-400 flex justify-center items-center">
    <div className="relative bg-white p-6 w-96 rounded-lg shadow-lg z-50">
        <h2 className="text-xl mb-4 text-bold">
        {isView? "View" : "Edit"}
        </h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isView}
            className="border p-2 mb-2 w-full"
            />
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={isView}
            className="border p-2 mb-2 w-full"
            />
            <input
            type="text"
            name="department"
            value={formData.company?.department}
            onChange={handleChange}
            disabled={isView}
            className="border p-2 mb-2 w-full"
            />
            <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            disabled={isView}
            className="border p-2 mb-2 w-full"
            />

            {!isView &&
            (
                <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded">
                    Save
                </button>
            )
            }

            <button
            type="button"
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded">
                Close
            </button>

        </form>

    </div>
    
  </div>;
}

export default EmployeeModal;
