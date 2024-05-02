import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Studentdata from './Student/Studentdata'
import Addstudent from './Student/Addstudent'
import StudentOperation from './Student/StudentOperation'
import Editstudent from './Student/Editstudent'
import EmployeeOperations from './Employee2/EmployeeOperations'
import EmployeeData from './Employee2/EmployeeData'
import AddEmployee from './Employee2/AddEmployee'
import DeleteEmployee from './Employee2/DeleteEmployee'

const Rounting = () => {
  return (
    <div>
        <h1>Routing</h1>
        <Routes>
            <Route path="/" element={<Studentdata/>} />
            <Route path="/addstudent" element={<Addstudent/>} />
            <Route path="/*" element={<p>Page not found!</p>} />
            <Route path="/Studentope" element={<StudentOperation/>} />
            <Route path="/editstudent/:id" element={<Editstudent/>} />
            <Route path="/employeedata" element={<EmployeeData/>} />
            <Route path="/addemployee" element={<AddEmployee/>} />
        
            <Route path="/Employeop" element={<EmployeeOperations/>} />
            <Route path="/deleteEmployee/:id" element={<DeleteEmployee/>} />
            
        </Routes>
    </div>
  )
}

export default Rounting