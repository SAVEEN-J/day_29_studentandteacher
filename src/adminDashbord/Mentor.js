import React, { useContext } from 'react'
import AllAdminDashbordContext from '../Context/AdminDashbordContext'
function Mentor() {
   const{newMentorName, setNewMentorName,newMentorLName, setNewMentorLName,newMentorMail, setNewMentorMail, handleRegistermentor,handleRegistercanclementor}= useContext(AllAdminDashbordContext);
  return (
      <div class="container">

<div class="card o-hidden border-0 shadow-lg my-5">
    <div class="card-body p-0">
     
        <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div class="col-lg-7">
                <div class="p-5">
                    <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Create an Account for Mentor</h1>
                    </div>
                    <form class="user">
                        <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                                <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                    placeholder="First Name" 
                                    value={newMentorName}
                                    onChange={(e)=>setNewMentorName(e.target.value)}
                                    required/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-user" id="exampleLastName"
                                    placeholder="Last Name" 
                                    value={newMentorLName}
                                    onChange={(e)=>setNewMentorLName(e.target.value)}
                                    required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                placeholder="Email Address" 
                                value={newMentorMail}
                                onChange={(e)=>setNewMentorMail(e.target.value)}
                                required/>
                        </div>
                   
                        <button type='button' class="btn btn-primary" onClick={handleRegistermentor}>
                            Register Account
                       </button>&nbsp;&nbsp;&nbsp;
                       <button type='button' class="btn btn-danger" onClick={handleRegistercanclementor}>
                       {/* <span class="icon text-white-50">
                         <i class="fas fa-trash"></i> </span> */}
                       Back to Dashbord
                       </button>
                      
                     
                    </form>
                    <hr />
                
                </div>
            </div>
        </div>
    </div>
</div>

</div>



   )
}

export default Mentor