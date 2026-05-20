import React, { useEffect, useState } from 'react'
import Button from '../Camponents/UI/Button'
import EmployeeTable from '../Camponents/Employees/EmployeeTable'
import { CiSearch } from "react-icons/ci";
import EmpoyeeForm from '../Camponents/Employees/EmpoyeeForm'

function Employee() {
  const [Employees, setEmployees] = useState([])
  const [searchItem,setSearchItem]=useState("");
  const [filteredEmployees, setFilteredEmployees]=useState([]);
  const [createOpen, setCreateopen]=useState(false);

  const handleSearch=()=>
  {
    const filtered=
      Employees.filter((emp) =>
        `${emp.firstName} ${emp.lastName}`.toLowerCase().includes(searchItem.toLowerCase())
      )
    setFilteredEmployees(filtered);
  }

  const fetchEmployees=async()=>
  {
    try
    {
       const res= await fetch("https://dummyjson.com/users")
       const data=await res.json();
       setEmployees(data.users)
       setFilteredEmployees(data.users)
    }
    catch(e)
    {
          console.log(e)
    }
  };

  useEffect(()=>
  {
    const LoadData=async()=>
    {
      fetchEmployees();
    }
    LoadData();
  },[])
  return (
    <div className='bg-gray-100 p-8 space-y-8'>

      {/*Header*/}
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-3xl font-bold'>Employees</h2>
          <p className='text-gray-400'> View and manage all employees</p>
        </div>

        <Button onClick={()=>setCreateopen(true)}>+ Add Employee</Button>

        {/*Search*/}
        <div className='flex gap-2'>
        <input
        type="text"
        placeholder='Search by name'
        value={searchItem}
        className='w-full border-b px-6 py-4 rounded-lg'
        onChange={(e)=>setSearchItem(e.target.value)}
        />
        <button
        onClick={handleSearch}
        ><CiSearch size={25}/></button>
        </div>

      </div>

       {/*EmployeeTable*/}
        <div className='bg-white rounded-2xl shadow p-6 m-6'>
          {filteredEmployees.length > 0 ? (
     <EmployeeTable Employees={filteredEmployees}/>
          ):
          (<p className='text-red-400 text-center text-lg'>No Employees found</p>)}
         
        </div>

        {createOpen && 
        <EmpoyeeForm
        onClose={()=>setCreateopen(false)}
        onSuccess={()=>
        {
          setCreateopen(false);
          fetchEmployees();
        }
        }/>}
    </div>
  )
}

export default Employee
