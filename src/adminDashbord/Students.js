import React, { useContext, useState } from 'react'
// import { Button, Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
 import AllAdminDashbordContext from '../Context/AdminDashbordContext'


function Students() {
  const{newStudentName,setNewStudentName,newStudentLName,setNewStudentLName,newStudentMail,setNewStudentMail,handleRegister,handleRegistercancle} =useContext(AllAdminDashbordContext);


  return (
 
  <div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
     
        <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account for Student</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name" 
                                    value={newStudentName}
                                    onChange={(e)=>setNewStudentName(e.target.value)}
                                    required />
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name" 
                                    value={newStudentLName}
                                    onChange={(e)=>setNewStudentLName(e.target.value)}
                                    required />
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address" 
                                value={newStudentMail}
                                onChange={(e)=>setNewStudentMail(e.target.value)}
                                required/>
                        </div>
               
                        <button type='button' class="btn btn-primary" onClick={handleRegister}>
                            Register Account
                       </button>&nbsp;&nbsp;&nbsp;
                       <button type='button' class="btn btn-danger" onClick={handleRegistercancle}>
                       {/* <span class="icon text-white-50">
                         <i class="fas fa-trash"></i> </span> */}
                       Back to Dashbord
                       </button>
                      
                        </form>
                        </div>
            </div>
        </div>
    </div>
</div>
 </div>


   )
}

export default Students