import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { Route,Routes } from 'react-router-dom';
import {Redirect}  from 'react-router-dom';
import React from 'react';
import Services from './components/services'
import Contact from './components/contact'
import Projects from './components/projects'
import Aboutus from './components/aboutus'
import Navbr from './components/navbar';

function App() {
  return (
    <>
    <Navbr></Navbr>
    <Routes>
    {/* <Route exact path="/"> */}
            {/* <Redirect to="/Home" /> */}
          {/* </Route> */}
          <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/aboutus" element={<Aboutus />} />
      
    </Routes> 
    </>
  );
}

export default App;
