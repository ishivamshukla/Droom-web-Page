import React from "react";
// import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import {BsFillEarFill} from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';


const HeroPage = () => {
  return (
    <>
    <Container>
      <Row className="justify-content-center text-center">
        <Col>
          <h2 style={{color: 'red'}}>Hey Friend,</h2>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col>
          <h3>Suno, Suno, Suno</h3>
          <h3>Mela Lg Gyaa, Loan Kaaa!</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className=" text-center pt-4">
          <h4 className="p-2">Public Transport me <br/> Lagi hai Bheed Baad!</h4>
          <h4 className="p-4">Toh ab Btayiye, <br/> Gadi Lene ka kab hai vichar?</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <img src={"https://cdn1.acedms.com/photos/images/insurance-v2/main-img-w.png"} alt="hero1" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center p-4">
          <Button variant="primary">Know More</Button>
        </Col>
      </Row>
    </Container>
    <Container className="text-center">
      <Row claasName="d-flex align-items-center p-4">
        <Col className="mx-auto">
          <h4 className="p-4">Agar Abhi Bhi Nhi Kiya Decide, <br/>
          Toh Last Chnace De Rhe Hai Ham!</h4>
          <img src={"https://cdn1.acedms.com/photos/images/insurance-v2/main-img-w.png"} alt="hero2" className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto p-4">
        <p>For you to</p>
          <h2 style={{color: 'red'}}>Take Loan & Save Money</h2>
          <p>With Pride!</p>
          <Button variant="primary">Know More</Button>
        </Col>
      </Row>
      <Row className="p-4">
        <Col className="mx-auto">
          <h4 style={{color: 'red'}}>Lower Interest Rate and Much More, Just for You</h4>
          <h6 style={{letterSpacing: "2.8px"}}>Connect with us and get offer never before and take home a service of your dream</h6>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HeroPage;