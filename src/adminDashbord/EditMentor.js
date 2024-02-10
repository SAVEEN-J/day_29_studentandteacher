import React, { useContext } from 'react'
import AllAdminDashbordContext from '../Context/AdminDashbordContext'

function EditMentor() {
    const{editMentorName, setEditMentorName,editMentorLName, setEditMentorLName,editMentorMail, setEditMentorMail, handleUpdatementor,handleUpdatecanclementor}= useContext(AllAdminDashbordContext);
  return (
    <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
         
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Edit  Mentor Details</h1>
                        </div>
                        <form class="user">
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                        placeholder="First Name" 
                                        value={editMentorName}
                                        onChange={(e)=>setEditMentorName(e.target.value)}
                                        required/>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                                        placeholder="Last Name" 
                                        value={editMentorLName}
                                        onChange={(e)=>setEditMentorLName(e.target.value)}
                                        required/>
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Email Address" 
                                    value={editMentorMail}
                                    onChange={(e)=>setEditMentorMail(e.target.value)}
                                    required/>
                            </div>
                       
                            <button type='button' class="btn btn-primary" onClick={handleUpdatementor}>
                            Update Account
                           </button>&nbsp;&nbsp;&nbsp;
                           <button type='button' class="btn btn-danger" onClick={handleUpdatecanclementor}>
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

export default EditMentor