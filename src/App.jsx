import React from 'react'
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";







function App() {
  return (
    <>
    <Navbar/>
    
      <Routes>
        <Route  exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/Home" element={ <Navigate to="/Home" /> } />
      </Routes>


      

     
    </>
  )
}

export default App;
