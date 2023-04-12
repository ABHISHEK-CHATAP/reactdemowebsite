import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from '../Images/h001.png';

function Navbar() {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row abhi'>
          <div className='col-lg-10 col-md-12 col-12 mx-auto head'>
            <nav className="navbar navbar-expand-lg  head">
              <div className="container-fluid">
                <img src={logo} className='navbar-brand' alt='logo'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact="true"  className="nav-link " aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact="true"  className="nav-link " to="/service">Service</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink  exact="true"  className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink exact="true"  className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                  </ul>

                </div>
              </div>
            </nav>



          </div>
        </div>
      </div>


    </>
  )
}
export default Navbar;