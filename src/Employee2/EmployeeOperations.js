import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import studentstyles from "./Employee.module.css"
import axios from 'axios'
const EmployeeOperations = () => {
  const [Data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/employee")
    .then((res)=>{
      setData(res.data);
      })
      .catch(( err)=>{console.log(err)})
      },[])
      const deleteData=(sid)=>{
        alert(sid);
        axios.delete(`http://localhost:4000/employee/${sid}`)
        .then((res)=>{
       alert("successful y deleted");
          })
          .catch(( err)=>{console.log(err)})
        
      }

  return (
    
    <main>
    <section className={studentstyles.bg_image}>
    <div className="container">
    <div className="row">
        <div className="col-md-12 ">
<div className="text-center">
<h5>Student data</h5>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb justify-content-center">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">Studentdata</li>
  </ol>
</nav>
</div>
</div>
</div>
    </div>
    </section>
    <section>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    
                    <div className=" table-responsive">
                <table class="table table-bordered">
                <thead>
    <tr>
     
      <th >Name</th>
      <th>Email</th>
      <th >Address</th>
      <th>
        salary
      </th>
      <th>phone</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
    Data.map((stu)=>{
    return(
      <tr>
        <td>
          {stu.name}
        </td>
        <td>
          {stu.email}
        </td>
        <td>
          {
            stu.address
          }
        </td>
        <td>
            {
                stu.salary
            }
        </td>
        <td>{stu.phone}</td>
        <td>
          <button className='btn btn-danger me-3' onClick={()=>{deleteData(stu._id)}}>Delete</button>
          <NavLink to={`/deleteEmployee/${stu._id} `}>
          <button className='btn btn-success'>Edit</button></NavLink>
           
           
        </td>
      </tr>
    )
    })
  }
  </tbody>
</table>
</div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default EmployeeOperations