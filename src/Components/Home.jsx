import React from 'react'
import "./Home.css";
import Common from './Common';
import web from '../Images/home image.jpg';



function Home() {

  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc={web}
        visit='/service'
        btname="Get started" />

<div className='container-fluid nav_bg'>
            <div className='row ' id='bba'>
                 <div className='col-10 mx-auto w-100  text-center' id='Ani'>
                    
                        <p >Ⓒ 2023 ABHISHEK. All Rights Reserved | terms and Conditions Applied </p>
                   
             
                 </div>
            </div>
        </div>


    </>
  )
}
export default Home;