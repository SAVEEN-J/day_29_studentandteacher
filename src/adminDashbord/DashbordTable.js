import React, { useContext } from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import AllAdminDashbordContext from '../Context/AdminDashbordContext'


function DashbordTable() {
  const {studentsdetails,mentorsdetails,tableClickMentor,tableClickStudent}=useContext(AllAdminDashbordContext);
  return (
    <Container>
    <Row>
        
    <div class="table-responsive col-md-6">
  <h3 style={{textAlign:'center'}}> Students </h3>
  <Table responsive striped bordered hover value="studenttable" id="studenttable">
<thead>
 
  <tr><th>S.No</th><th>Name</th><th>Email</th></tr>
 
</thead>
<tbody>
{/* {console.log("array",studentsdetails)}
{console.log("array",mentorsdetails)} */}

  {studentsdetails.map((value,index)=>(
   
    <tr key={index} id="student" value="student" onClick={(event) => tableClickStudent(event, value)}>
      <td value={value.id}> {value.id}</td>
      <td value={value.name}>{value.name}</td>
      <td value={value.email}>{value.email}</td>
     
    </tr>
  ))}

</tbody>
</Table>
</div>
<div class="table-responsive col-md-6">
<h3 style={{textAlign:'center'}}> Mentors </h3>


<Table responsive striped bordered hover value="mentortable" id="mentortable">
<thead>
<tr><th>S.No</th><th>Name</th><th>Email</th></tr>
   </thead>
<tbody>
  {mentorsdetails.map((value,index)=>(
    <tr  key={index} id="mentor" value="mentor" onClick={(event) => tableClickMentor(event, value)}> 
    <td value={value.id}> {value.id}</td>
      <td value={value.name}>{value.name}</td>
      <td value={value.email}>{value.email}</td>
      </tr>
  ))}
 
</tbody>
</Table>
</div>
</Row>
</Container>
  )
}

export default DashbordTable