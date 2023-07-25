import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import {  Container, Row, Col } from 'bootstrap-4-react';

const Home=()=>{
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
    <div className="section-three">
      <h1 className="motive">Our Team Members</h1>
      {/* image slider */}
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 10"></button>

  </div>
  <Row className="carousel-inner">
  <Col col="md-4 sm-6" className="carousel-item active mx-auto">
    <Row>
      <img src="./images/img2.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>SHAHMIR Khan JADOON</h5>
        <p>MANAGEMENT</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item ">
      <Row>
      <img src="./images/img5.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>MOHSIN AWAN</h5>
        <p>FRONTEND DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
      <Row>
      <img src="./images/arif.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>ARIF KHAN</h5>
        <p>FRONTEND DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img4.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>Zulqarnain Arif</h5>
        <p>FULL STACK DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img3.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>Quaid Ahmed</h5>
        <p>FULL STACK DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img1.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>ZOHAIB SAFDER</h5>
        <p>GRAPHIC DESIGNER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img6.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>TABISH KHAN</h5>
        <p>BACKEND DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img7.jpeg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>Awab Kakar</h5>
        <p>BACKEND DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img9.jpg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>Ali Ranjha</h5>
        <p>BACKEND DEVELOPER</p>
      </Row>
    </Col>
    <Col col="md-4 sm-6" className="carousel-item">
    <Row>
      <img src="./images/img8.jpg" className="d-block w-25 mx-auto pb-5" alt="..."/>
      </Row>
      <Row className="carousel-caption d-none d-md-block">
        <h5>Cheema</h5>
        <p>BACKEND DEVELOPER</p>
      </Row>
    </Col>
    
  </Row>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
    )
}
export default Home;