import React from 'react'
import { NavLink } from 'react-router-dom';


function Common(props) {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row' id='Syyo'>
                                <div className='col-md-6 pt-5   pt-lg-0 order-2 order-lg-1 display-flex justify-content-center flex-column' id='Kusum' >
                                    <h1 className='kuku'>
                                        {props.name} <strong className='brand-name '> ABHISHEK</strong>
                                    </h1>
                                    <h2 className='my-3 fmm'>
                                        we are the team of talented developer making websites
                                    </h2>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 '>
                                    <img src={props.imgsrc} className='img-fluid-animated' alt='home img' id='header-img' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section>


        </>
    )
}
export default Common;