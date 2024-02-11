import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { useNavigate } from "react-router-dom";

const AllAdminDashbordContext=createContext({})
export const AdminDashbordContext=({children})=> {
  let navigator = useNavigate();

    // const[studentbutton,setStudentbutton]=useState('')
    // const[mentorbutton,setMentorbutton]=useState('')

    const [studentsdetails,setStudentsdetails]=useState([]);
    const [mentorsdetails,setMentorsdetails]=useState([]);
    useEffect(() => {
      let studentsdetails = JSON.parse(localStorage.getItem("studentsdetails")) || [
        {
          id: 1,
          name: "saveen",
          lastname: "j",
          email: "saveen6@gmail.com",
        },
        {
          id: 2,
          name: "Sibi",
          lastname: "s",
          email: "sibi@gmail.com",
        },
           ];
      let mentorsdetails = JSON.parse(localStorage.getItem("mentorsdetails")) || [
        {
          id: 1,
          name: "Ruth",
          lastname: "k",
          email: "Ruth1996@gmail.com",
        },
        {
          id: 2,
          name: "Satish",
          lastname: "b",
          email: "Satish1996@gmail.com",
        },
   
      ];
         setStudentsdetails(studentsdetails);
         setMentorsdetails(mentorsdetails);
    }, []);
    // console.log("studentsdetails",studentsdetails);
    let [trvaluestudent, setTrvalueStudent] = useState("null ");
    let [newStudentName, setNewStudentName] = useState("");
    let [editStudentName, setEditStudentName] = useState("");
    let [newStudentLName, setNewStudentLName] = useState("");
    let [editStudentLName, setEditStudentLName] = useState("");
    let [newStudentMail, setNewStudentMail] = useState("");
    let [editStudentMail, setEditStudentMail] = useState("");
    let [EditStudentid, setEditStudentid] = useState("");
   

    let [EditMentorid, setEditMentorid] = useState("");
    let [trvalueMentor, setTrvalueMentor] = useState("null ");
     let [newMentorName, setNewMentorName] = useState("");
    let [editMentorName, setEditMentorName] = useState("");
    let [newMentorLName, setNewMentorLName] = useState("");
    let [editMentorLName, setEditMentorLName] = useState("");
    let [newMentorMail, setNewMentorMail] = useState("");
    let [editMentorMail, setEditMentorMail] = useState("");
let handleRegister=(event)=>{
  event.preventDefault();

let id = studentsdetails.length+1
console.log("id",id);
if (newStudentName ===" " || newStudentLName ==='' || newStudentMail ==='')  {
  alert("Enter All Details")
  return false;
}else{
  let NEWstudent= {
 
    id:id,
    name: newStudentName,
   lastname: newStudentLName,
   email: newStudentMail,
  }
  let allStudents = [...studentsdetails, NEWstudent];
      localStorage.setItem("studentsdetails", JSON.stringify(allStudents));
      setStudentsdetails(allStudents);
      setNewStudentName("");
      setNewStudentLName("");
      setNewStudentMail("")
      navigator("/");


}

}
let handleRegistercancle=()=>{
  setNewStudentName("");
  setNewStudentLName("");
  setNewStudentMail("")
  navigator("/");
};

let handleRegistermentor=(event)=>{
  event.preventDefault();

let id = mentorsdetails.length+1
console.log("id",id);
if (newMentorName ===" " || newMentorLName ==='' || newMentorMail ==='')  {
  alert("Enter All Details")
  return false;
}else{
  let NEWmentor= {
 
    id:id,
    name: newMentorName,
   lastname: newMentorLName,
   email: newMentorMail,
  }
  let allMentors = [...mentorsdetails, NEWmentor];
      localStorage.setItem("mentorsdetails", JSON.stringify(allMentors));
      setMentorsdetails(allMentors);
      setNewMentorName("");
      setNewMentorLName("");
      setNewMentorMail("")
      navigator("/");


}

};

let handleRegistercanclementor=()=>{
  setNewMentorName("");
  setNewMentorLName("");
  setNewMentorMail("")
  navigator("/");

};
// document.getElementById("student").onclick=(e)=>{
//   let trValue= this.id;
//   console.log("Sgngn",trValue);

//  }
//edit student
let tableClickStudent=(event,clickedValue)=>{
  // const table = document.getElementById('studenttable');
  const trValue = event.currentTarget.getAttribute('value');
  setTrvalueStudent(trValue)
  setTrvalueMentor(null)//reset mentor value

  setEditStudentName(clickedValue.name)
  setEditStudentLName(clickedValue.lastname)
  setEditStudentMail(clickedValue.email)
  setEditStudentid(clickedValue.id)
}
let handleUpdate=()=>{
//   console.log("tableClickStudent",trValue);
 let id =EditStudentid
let student = studentsdetails.find((e) => e.id === id);
//  console.log("student",student,id);
let updatedStudent={
  id:student.id,
  name: editStudentName,
 lastname: editStudentLName,
 email: editStudentMail,
}
let newStudents = studentsdetails.map((student) =>
student.id === id ? { ...updatedStudent } : student
);
setStudentsdetails(newStudents);
localStorage.setItem("studentsdetails", JSON.stringify(newStudents));
setEditStudentName("");
setEditStudentLName("");
setEditStudentMail("");
navigator("/");

}
let handleUpdatecancle=()=>{
  setEditStudentName("");
  setEditStudentLName("");
  setEditStudentMail("");
  navigator("/");
}

//edit mentor
let tableClickMentor=(event,clickedValue)=>{
 const trValue = event.currentTarget.getAttribute('value');
 setTrvalueMentor(trValue);
 setTrvalueStudent(null); // Reset student value

 setEditMentorName(clickedValue.name)
 setEditMentorLName(clickedValue.lastname)
setEditMentorMail(clickedValue.email)
setEditMentorid(clickedValue.id)

}
let handleUpdatementor=()=>{
  //   console.log("tableClickStudent",trValue);
   let id =EditMentorid
  let mentor = mentorsdetails.find((e) => e.id === id);
  //  console.log("mentor",mentor,id);
  let updatedMentor={
    id:mentor.id,
    name: editMentorName,
   lastname: editMentorLName,
   email: editMentorMail,
  }
  let newMentor = mentorsdetails.map((mentor) =>
  mentor.id === id ? { ...updatedMentor } : mentor
  );
  setMentorsdetails(newMentor);
  localStorage.setItem("mentorsdetails", JSON.stringify(newMentor));
  setEditMentorName("");
  setEditMentorLName("");
  setEditMentorMail("");
  navigator("/");
  
  }
  let handleUpdatecanclementor=()=>{
    setEditMentorName("");
    setEditMentorLName("");
    setEditMentorMail("");
    navigator("/");
  }

  let handleDeletestudent = () => {
    let id =EditStudentid
    if (window.confirm("Please confirm to delete") === true) {
      let filteredStudents = studentsdetails.filter((e) => e.id !== id);
      setStudentsdetails(filteredStudents);
      localStorage.setItem("studentsdetails", JSON.stringify(filteredStudents));
      // navigator("/");
    }
  };
  let handleDeletementor = () => {
    let id =EditMentorid
    if (window.confirm("Please confirm to delete") === true) {
      let filteredMentorts = mentorsdetails.filter((e) => e.id !== id);
      setMentorsdetails(filteredMentorts);
      localStorage.setItem("mentorsdetails", JSON.stringify(filteredMentorts));
      // navigator("/");
    }
  };



  return (
   <>
<AllAdminDashbordContext.Provider
value={{
    // studentbutton, setStudentbutton,
    // mentorbutton, setMentorbutton,
    studentsdetails,setStudentsdetails,
    mentorsdetails,setMentorsdetails,

    newStudentName,setNewStudentName,
    editStudentName,setEditStudentName,
    newStudentLName,setNewStudentLName,
    editStudentLName,setEditStudentLName,
    newStudentMail,setNewStudentMail,
    editStudentMail,setEditStudentMail,
    handleRegister,handleRegistercancle,

    newMentorName, setNewMentorName,
    editMentorName, setEditMentorName,
    newMentorLName, setNewMentorLName,
    editMentorLName, setEditMentorLName,
    newMentorMail, setNewMentorMail,
    editMentorMail, setEditMentorMail,
    handleRegistermentor,handleRegistercanclementor,
    tableClickMentor,tableClickStudent,
       trvaluestudent,trvalueMentor,
       setTrvalueStudent,setTrvalueMentor,
       handleUpdatecancle,handleUpdate,
       handleUpdatecanclementor,handleUpdatementor,
       handleDeletestudent,handleDeletementor
    
}}>{children}</AllAdminDashbordContext.Provider>


</>
  )
}
export default AllAdminDashbordContext;

// import React, { useState } from 'react';
// import { createContext } from 'react';

// export const AllAdminDashboardContext = createContext({});

// function AdminDashboardContext({ children }) {
//     const [students, setStudents] = useState([]);
//     // const [mentors, setMentors] = useState([]); // Unused state variable

//     return (
//         <AllAdminDashboardContext.Provider value={{ students, setStudents }}>
//             {children}
//         </AllAdminDashboardContext.Provider>
//     );
// }

// export default AdminDashboardContext;
