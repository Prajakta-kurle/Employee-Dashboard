import React, { useEffect, useState } from 'react'
import Button from '../Camponents/UI/Button'
import EmployeeTable from '../Camponents/Employees/EmployeeTable'

function Employee() {
  const [Employees, setEmployees] = useState([])

  const fetchEmployees=async()=>
  {
    try
    {
       const res= await fetch("https://dummyjson.com/users")
       const data=await res.json();
       setEmployees(data.users)
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

        <Button>+ Add Employee</Button>

        {/*Search*/}
        <div>
        <input
        type="text"
        placeholder='Search by name'
        className='w-full border-b px-6 py-4 rounded-lg'
        />
        </div>

      </div>

       {/*EmployeeTable*/}
        <div className='bg-white rounded-2xl shadow p-6 m-6'>
         <EmployeeTable Employees={Employees}/>
        </div>

    </div>
  )
}

export default Employee
