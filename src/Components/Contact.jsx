import React, { useState } from 'react'
import './Contact.css';


function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    Phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };


  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your Name is :- ${data.fullName} \n 
    Your Mobile No is :- ${data.Phone} \n 
    Your E-mail is :- ${data.email} \n
     Here what You want to say :- ${data.msg}`);

  }

  return (
    <>
      <div className='my-4'>
        <h2 className='text-center' id='contact'>Contact us</h2>
      </div>

      <div className='container contact_div'>
        <div id='form' className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit} >
              <div class="abc">
                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='fullName' value={data.fullName} onChange={InputEvent} placeholder="Enter FullName" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone No</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='Phone' value={data.Phone} onChange={InputEvent} placeholder="mobile No" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={InputEvent}></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>



      <div className='container-fluid ' >
            <div className='row ' id='bba'>
                 <div className='col-10 mx-auto text-center' id='shir'>
                    
                        <p id='Ab'>Ⓒ 2023 ABHISHEK. All Rights Reserved | terms and Conditions Applied </p>
                   
             
                 </div>
            </div>
        </div>
    </>
  )
}

export default Contact;