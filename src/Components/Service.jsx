import React from 'react'
import Card from './Card';
import Sdata from "./Sdata";
import './Service.css';



const Service = () => {
  return (
    <>
      <div className='my-3'>
        <h2 className="text-center">Our Services</h2>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row' id='zoho'>
          <div className='col-10 mx-auto'>

            <div className='row gy-4 ' id='Ayush'>
              {
                Sdata.map((val, ind) => {
                  return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                })
              }
            </div>

          </div>
        </div>
      </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
   {/* id = bba and id= Ani   se footer move and stable h raha ahai */}

      <div className='container-fluid'>
        <div className='row' id='bba'>
          <div className='col-10 mx-auto w-100  text-center' id='Ani' >

            <p id='Hello'>Ⓒ 2023 ABHISHEK. All Rights Reserved | terms and Conditions Applied </p>


          </div>
        </div>
      </div>


    </>
  )
}
export default Service;