import React, { useEffect, useState } from 'react'
import Navbar from '../Camponents/Employees/Navbar'
import Sidebar from '../Camponents/Employees/Sidebar'
import Cards from "../Camponents/Employees/Cards"
import EmployeeTable from "../Camponents/Employees/EmployeeTable"
import EmpoyeeForm from '../Camponents/Employees/EmpoyeeForm'
import Button from '../Camponents/UI/Button'

function Dashboard() {
  const[Employees, setEmployees]=useState([]);
  const[createOpen, setcreateOpen]=useState(false);
 
  const fetchEmployees=async()=>
  {
     try
  {
   const res = await fetch("https://dummyjson.com/users");
   const data=await res.json();
   setEmployees(data.users);
  }
  catch(e)
  {
    console.log(e)
  }
  };

  useEffect(()=>
  {
    const loadData = async()=>
    {
      await fetchEmployees();
    }
    loadData();
  },[])
  
  return (
    <div className='min-h-screen bg-gray-100'>
         {/*Top Navbar*/}
           {/* <Navbar/> */}
        
         <div className='flex'> {/*grid flex layout manag..in here main paarent page*/}
          {/*sidebar*/}
            {/* <div className='w-64 bg-white shadow-md min-h-screen'>
              <Sidebar/>
            </div> */}

            {/*Main Content*/}
            <div className='flex-1 p-8 space-y-8'>
              {/*Page Header*/}
              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                    Employee Dashboard
                  </h1>
                  <p className='text-gray-500 text-sm'>
                    Manage And Monitor Your Employees
                  </p>
                </div>
              </div>

              {/*State cards*/}
                <Cards Employees={Employees}/>
                <div className='flex justify-end m-3'>
                  <Button variant='primary'
                  onClick={()=>setcreateOpen(true)}
                  >
                   + Add Employee
                  </Button>
                </div>

                {/*Table Section*/}
                <div className='bg-white rounded-2xl shadow-lg p-6'>
                   <EmployeeTable Employees={Employees} fetchEmployees={fetchEmployees}/>
                </div> 
            </div>
             
         </div>
        {createOpen && (
          <EmpoyeeForm
          onClose={()=>setcreateOpen(false)}
          onSuccess={()=>
          {
            setcreateOpen(false)
            fetchEmployees();
          }
          }/>
        )}
      
    </div>
  )
}

export default Dashboard
