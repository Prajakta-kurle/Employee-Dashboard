import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
import ConfirmModal from "./ConfirmModal";

function EmployeeTable({ Employees, fetchEmployees }) {
  //which item is selected for action
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  //which modal to show: view edit ""
  const [ModalType, setModalType] = useState("");
  //for delete confirmation
  const [isConfirmOpen, setisConfirmOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://dummyjson.com/users/${id}`, { method: "DELETE" });
      setisConfirmOpen(false);
      fetchEmployees();
    } catch (e) {
      console.log(e);
    }
  };

  return (  
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left">
        {/*Header*/}
        <thead className="text-xs uppercase text-gray-500 border-b">
          <tr>
            <th className="font-semibold px-6 py-3">Name</th>
            <th className="font-semibold px-6 py-3">Department</th>
            <th className="font-semibold px-6 py-3">Role</th>
            <th className="font-semibold px-6 py-3">Email</th>
            <th className="font-semibold px-6 py-3">Company</th>
            <th className="font-semibold px-6 py-3">Actions</th>
          </tr>
        </thead>

        {/*Body*/}
        <tbody className="divide-y divide-gray-200 transition">
          {Employees.map((data) => (
            <tr key={data.id} className="transition hover:bg-gray-50">
              {/*Name*/}
              <td className="font-medium px-6 py-4 text-gray-800">
                {data.firstName} {data.lastName}
              </td>

              {/*Department Badge*/}
              <td className="px-6 py-4">
                <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                  {data.company?.department}
                </span>
              </td>

             {/*Role*/}
              <td className="text-gray-600 px-6 py-4">{data.role}</td>

              {/*Email*/}
              <td className="text-gray-600 px-6 py-4">{data.email}</td>

              {/*Company*/}
              <td className="text-gray-600  px-6 py-4">{data.company?.name}</td>

              {/*Actions*/}
              <td className="px-6 py-4">
                <div className="flex gap-5 justify-center">
                  <Eye
                    className="text-gray-500 hover:text-blue-600 hover:scale-110 cursor-pointer transition"
                    size={20}
                    onClick={() => {
                      setSelectedEmployee(data);
                      setModalType("View");
                    }}
                  />
                  <Pencil
                    className="text-gray-500 hover:text-blue-600 transition  hover:scale-110 cursor-pointer"
                    size={18}
                    onClick={() => {
                      setSelectedEmployee(data);
                      setModalType("Edit");
                    }}
                  />
                  <Trash2
                    className="text-gray-500 hover:text-blue-600 transition hover:scale-110 cursor-pointer"
                    size={18}
                    onClick={() => {
                      setSelectedEmployee(data);
                      setisConfirmOpen(true);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* view and edit modal */}
      {ModalType && selectedEmployee && (
        <EmployeeModal
          Employees={selectedEmployee}
          mode={ModalType}
          onClose={() => setModalType("")} //close modal
          onSuccess={() => {
            setModalType("");
            fetchEmployees(); //refresh table
          }}
        />
      )}

      {/*Delete Confirmation*/}
      {isConfirmOpen && selectedEmployee && (
        <ConfirmModal
          message={`Are You Sure you want to delete ${selectedEmployee.firstName}?`}
          onCancel={() => setisConfirmOpen(false)} //cancel
          onConfirm={() => handleDelete(selectedEmployee.id)} //delete api
        />
      )}
    </div>
  );
}

export default EmployeeTable;
