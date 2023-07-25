import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import { Row } from 'bootstrap-4-react';

const Navbr=()=>{
    return(
        <>
        {/* <Container> */}
        <nav class="navbar navbar-light navbar-expand-lg navbar-bg pr-3">
            <Link to="/" className="navbar-brand icon navbar-item">
            <img src="./images/icon.png" mb="auto"></img>
        <span className='navbar-br-item'> ALPHA SOL'S</span>
            </Link>
            <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbarr pl-3" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link"><span className='navbar-item'>Home</span></Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/Services" className="nav-link navbar-item"><span className='navbar-item'>Services</span></Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/Contact" className="nav-link"><span className='navbar-item'>Contact</span></Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/About us" className="nav-link"><span className='navbar-item'>About Us</span></Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/Projects" className="nav-link"><span className='navbar-item'>Projects</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
      {/* <Navbar expand="lg" bg="dark" className="navbarr">
      <Navbar.Brand href="/" className="icon">
        <img src="./images/icon.png" mb="auto"></img>
        <span>ALPHA SOL</span>
        </Navbar.Brand> */}
        {/* <div className="icon">
        <img src="./images/icon.png"></img>
        <span>ALPHA SOL</span>
        </div> */}
        {/* <Navbar.Toggle />
        <Collapse id="navbar-nav"> */}
        {/* <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About us">About Us</Link>
        <Link to="/Projects">Projects</Link> */}
        {/* <Navbar.Nav ml="auto" pr="3">
              <Nav.ItemLink href="/">Home</Nav.ItemLink>
              <Nav.ItemLink href="Services">Services</Nav.ItemLink>
              <Nav.ItemLink href="/Contact">Contact</Nav.ItemLink>
              <Nav.ItemLink href="/About Us">About Us</Nav.ItemLink>
              <Nav.ItemLink href="/Projects">Projects</Nav.ItemLink>
            </Navbar.Nav>
          </Collapse>
      </Navbar> */}
      <Row>
           <div className="section-one">
      <div className="motive">
        <h1>ALPHA SOL</h1>
        <h2>We Engineer the solutions</h2>
        <h1 className='pt-5'>COOMING SOON!</h1>
      </div>
    </div>
    </Row>
    {/* </Container> */}
        </>
    )
}
export default Navbr;