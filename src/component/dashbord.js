import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Admindashbord from '../adminDashbord/Admindashbord';
import { AdminDashbordContext } from '../Context/AdminDashbordContext';



function Dashbord() {

  return (

<Container>

<div className="d-sm-flex align-items-center justify-content-center between mb-4">
<h2 style={{textAlign:'center'}}> Admindashbord</h2>
</div>
<AdminDashbordContext>
    <Admindashbord/>
 
</AdminDashbordContext>



</Container>
    
  
  )
}

export default Dashbord