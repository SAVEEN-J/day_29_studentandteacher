import React, { useContext } from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import Students from './Students'
import Mentor from './Mentor'
import AllAdminDashbordContext from '../Context/AdminDashbordContext';
import { Button, Container, Row, Table } from 'react-bootstrap';
import DashbordTable from './DashbordTable';
import EditMentor from './EditMentor';
import EditStudents from './EditStudents';

function Admindashbord() {
  const{trvaluestudent,trvalueMentor,setTrvalueStudent,setTrvalueMentor,handleDeletestudent,handleDeletementor} =useContext(AllAdminDashbordContext);
console.log("trvaluestudent",trvaluestudent);
console.log("trvalueMentor",trvalueMentor);

  return (
    <Container>
     <Row>
       <div className="container">
       <Link to="/">
      <Button type='button' className='btn btn-info btn-icon-split' >Dashbord</Button>
      </Link>&nbsp;&nbsp;
    <Link to="/student">
      <Button type='button' >Student</Button>
      </Link>&nbsp;&nbsp;
    <Link to="/mentor" >
      <Button type='button' >Mentor</Button>
      </Link>&nbsp;&nbsp;
  
{trvaluestudent === 'student' && !trvalueMentor && (
  <Link to="/edit_student">
    <Button variant="info">Edit Student</Button>
  </Link>
)}&nbsp;

{trvalueMentor === 'mentor' && !trvaluestudent && (
  <Link to="/edit_mentor">
    <Button variant="info">Edit Mentor</Button>
  </Link>
)}&nbsp;&nbsp;
     {trvaluestudent == 'student' ? (
             <Button variant="danger" onClick={handleDeletestudent}>Delete Student</Button> 
          ):trvalueMentor == 'mentor' ? (
            <Button variant="danger" onClick={handleDeletementor}>Delete Mentor</Button>
          ) : null}&nbsp;&nbsp;


     
    

     
</div><br /><br /><br />
    <Routes>
           <Route path='/' element={ <DashbordTable /> } />
            <Route path='/student' element={ <Students /> } />
            <Route path='/mentor' element= { <Mentor />} />
            <Route path='/edit_student' element= { <EditStudents />} />
            <Route path='/edit_mentor' element= { <EditMentor />} />


              {/* <Route path="newstudent" element={<NewStudent />} />
              <Route path=":id" element={<EditStudents />} /> */}
            
    </Routes>
    </Row>
    
 

    </Container>
  )
}

export default Admindashbord;