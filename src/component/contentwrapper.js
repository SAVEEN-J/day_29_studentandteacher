import React from 'react'

import Topnavbar from './topnavbar'

import Dashbord from './dashbord';
import Card from './pageContent/pagecontentcard';
// import Chart from './chart';
// import Container from './container';
import {Buttons} from './Components/Buttons'
import {Link, Route, Routes } from "react-router-dom";
import { Cards } from './Components/Cards';

function Contentwrapper({EarningsDAta}) {
  //  console.log(EarningsDAta);
  let Currentyear=new Date().getFullYear();
  let userName="Saveen"
  return (
    <>
       {/* <!-- Content Wrapper --> */}
       <div id="content-wrapper" className="d-flex flex-column">

{/* <!-- Main Content --> */}
        <div id="content">
               <Topnavbar/>
    
                {/* <!-- Begin Page Content --> */}
                <div className="container-fluid">
                               <Dashbord />
                       {/* <!-- Content Row --> */}
                   <div className="row">
               
                        
                     <Routes>
                           <Route path='/cards' element={ <Cards /> } />
                  
                     </Routes>

                </div>
                
                    {/* <!-- Content Row --> */}

                    <div className="row">
                         <Routes>
                        <Route path='/button' element={ <Buttons /> } />

                        </Routes>

                      {/* <Chart /> */}

                    </div>
                     {/* <!-- Content Row --> */}
                 <div className="row">
                  {/* <Container/> */}

                    </div>
   


                </div>
   
    



    </div>

      {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; {userName} Website {Currentyear}</span>
                    </div>
                </div>
            </footer>
            {/* <!-- End of Footer --> */}
    </div>
    
    </>
   
  )
}

export default Contentwrapper