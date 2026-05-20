import React from "react";
import { Users, Component, Computer, TableOfContents } from "lucide-react";

function Cards({ Employees = [] }) {
  const TotalEmployees = Employees.length; //array.length method all array elementsmke liye .length

  const Departments = new Set(
    Employees.map((e) => e.company?.department).filter(Boolean),
  ).size; //set method to remove duplicates

  const Companies = new Set(
    Employees.map((e) => e.company?.name).filter(Boolean),
  ).size; //map convert it into array

  const Roles = new Set(Employees.map((e) => e.role).filter(Boolean)).size; //here e is an simple var name to represent array elements
  // unique elements ke liye .size

  console.log(Employees);

  const Servises = [
    {
      id: 1,
      Title: "Total Employee",
      Value: TotalEmployees,
      icon: <Users />,
    },
    {
      id: 2,
      Title: "Departments",
      Value: Departments,
      icon: <TableOfContents />,
    },
    {
      id: 3,
      Title: "Company",
      Value: Companies,
      icon: <Component />,
    },
    {
      id: 4,
      Title: "Role",
      Value: Roles,
      icon: <Computer />,
    },
  ]; //Array of Objects

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-50 min-h-screen">
      {Servises.map((item) => (
        <div
          key={item.id}
          className="bg-white transition duration-300 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md" //gray background pe white cards
        >
          <div className="flex items-center gap-5">
            {/*icons*/}
            <div className="h-12 w-12 p-4 bg-indigo-50 text-indigo-600 text-xl rounded-xl flex justify-center items-center">
              {item.icon}
            </div>

            {/*Text*/}
            <div className="flex flex-col">
              <h1 className="text-sm font-medium text-gray-500">
                {item.Title}
              </h1>
              <p className="text-2xl font-semibold text-gray-800">
                {item.Value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
