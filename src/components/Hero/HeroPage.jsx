import React from "react";
import Button from "react-bootstrap/Button";
import {BsFillEarFill, BsChevronRight} from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';


const HeroPage = () => {
  return (
    <>
    <Container fluid className={"py-2"}>
      <Row className={"justify-content-center text-center pt-4"}>
        <Col>
          <h2 style={{color: 'red'}}>Hey Friend,</h2>
        </Col>
      </Row>
      <Row className={"justify-content-center text-center"}>
        <Col>
          <h3>Suno <BsFillEarFill color='#E8BD0D' /> Suno <BsFillEarFill color='#A77B06' /> Suno <BsFillEarFill color='#A77B06' /></h3>
          <h3>Mela Lg Gyaa, Loan Kaaa!</h3>
        </Col>
      </Row>
      <Row className={"d-flex justify-content-center align-items-center"}>
        <Col className={" text-center justify-content-start pt-4"} >
          <h4 className={"p-2"}>Public Transport me <br/> Lagi hai Bheed Baad!</h4>
          <h4 className={"p-2"}>Toh ab Btayiye, <br/>Gadi Lene ka kab hai vichar?</h4>
        </Col>
        <Col className={"d-flex"}>
          <img width={350} src={"https://cdn1.acedms.com/photos/images/insurance-v2/main-img-w.png"} alt={"hero1"} className={"img-fluid"}/>
        </Col>
      </Row>
      <Row>
        <Col className={"d-flex justify-content-center py-4"}>
          <Button className={"rounded-pill fw-bold px-4"} variant={"primary"}>Know More <BsChevronRight /></Button>
        </Col>
      </Row>
    </Container>
    <Container fluid className={"text-center"}>
      <Row claasName={"d-flex align-items-center p-4"}>
        <Col className={"mx-auto"}>
          <h4 className="p-4">Agar Abhi Bhi Nhi Kiya Decide, <br/>
          Toh Last Chance De Rhen Hai Ham,</h4>
          <img src={"https://cdn1.acedms.com/photos/images/web/beta/images/extended-warranty/benefits.png"} alt={"hero2"} className={"img-fluid"} />
        </Col>
      </Row>
      <Row>
        <Col className={"mx-auto p-4"}>
          <p className={"fs-4 "}>For you to</p>
          <h2 style={{color: 'red'}}>Take Loan & Save Money</h2>
          <p className={"fs-4 "}>With Pride!</p>
        </Col>
      </Row>
      
      <Row>
        <Col className={"d-flex justify-content-center py-4"}>
          <Button className={"rounded-pill fw-bold px-4"} variant={"primary"}>Know More <BsChevronRight /></Button>
        </Col>
      </Row>
      <Row className={"p-4"}>
       
        <Col className={"mx-auto pb-2"}>
          <h4 style={{color: 'red'}}>Lower Interest Rate and Much More, Just for You</h4>
          <h6 >Connect with us and get offer like never before and take home a service of your dream</h6>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HeroPage;