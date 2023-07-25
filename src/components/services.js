import React, { Component } from 'react';
import {  Container, Row, Col } from 'bootstrap-4-react';

const Services=()=>{
  const colStyle = {
    marginTop: '2vh',
    marginBottom:'2vh'
  };
    return(
        <>
        <Container>
    <Row>
      <div className="section-two" id="services">
        <Row>
      <h1>Services We Offer</h1>
      </Row>
      <Row>
      {/* <div className="service-container"> */}
        <Col col="md-6 sm-11" className="service-container" style={colStyle}>
      <div className="service-card">
        <Col className="service-card-content">
          <img src="./images/app.png" className="service-card-img"></img>
          <h2>App Development</h2>
        </Col>
        <Col className="service-card-desc">
        <h3>Android Development</h3>
        <h3>React Native Development</h3>
        </Col>
      </div>
      </Col>
      <Col col="md-6 sm-11" className="service-container" style={colStyle}>
      <div className="service-card">
        <Col className="service-card-content">
        <img src="./images/web.png" className="service-card-img"></img>
        <h2>Web Development</h2>
        </Col>
        <Col className="service-card-desc">
        <h3>React</h3>
        <h3>Wordpress</h3>
        <h3>HTML/CSS/ES6</h3>
        <h3>PHP</h3>
        </Col>
      </div>
      </Col>
      </Row>
      <Row>
      <Col col="md-6 sm-11" className="service-container" style={colStyle}>
      <div className="service-card">
        <Col className="service-card-content">
        <img src="./images/uiux.png" className="service-card-img"></img>
        <h2>UI/UX Design</h2>
        </Col>
        <Col className="service-card-desc">
        <h3>UI/UX</h3>
        <h3>Graphic Designing</h3>
        <h3>Web Design</h3>
        </Col>
      </div>
      </Col>
      <Col col="md-6 sm-11" className="service-container" style={colStyle}>
      <div className="service-card">
        <Col className="service-card-content">
        <img src="./images/consult.png" className="service-card-img"></img>
        <h2>Consultaion</h2>
        </Col>
        <Col className="service-card-desc">
        <h3>Consultaion on the aspiring techniologies</h3>
        </Col>
      </div>
      </Col>
      </Row>
      </div>
    </Row>
  </Container>
        </>
    )
}
export default Services;