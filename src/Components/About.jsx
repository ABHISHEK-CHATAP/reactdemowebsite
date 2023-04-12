import React from 'react'
import Common from './Common';
import web from '../Images/about img.jpg';
import "./About.css";


function About() {
  return (
    <>
      <Common name="Welcome to About"
        imgsrc={web}
        visit='/contact'
        btname="Contact Now" />

<div className='container-fluid nav_bg' style={{height:'40px'}}>
            <div className='row' id='bba'>
                 <div className='col-10 mx-auto w-100  text-center' id='Ani'>
                    
                        <p>Ⓒ 2023 ABHISHEK. All Rights Reserved | terms and Conditions Applied </p>
                   
             
                 </div>
            </div>
        </div>
    </>
  )
}
export default About;