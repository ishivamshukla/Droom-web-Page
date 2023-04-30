import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';


const NavbarPage = () => {
  return (
    <Container fluid  style={{width: '95%',  position: 'absolute', top: 120,  left: 0, right: 0 }} className={' bg-light start-50 translate-middle '}>
      <Navbar bg={"light"} expand={"md"} >
      <Container>
        <Navbar.Toggle aria-controls={"basic-navbar-nav"}  />
        <Navbar.Collapse id={"basic-navbar-nav"} className={'d-md-block d-lg-block justify-content-center'}>
        <Nav className={'d-flex justify-content-center'}>
        
        <Row className={'d-flex flex-row'}>
        <Col  className={'px-4'} >
          <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaHome size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Buy</span>
          </Nav.Link>
        </Col>
        <Col  className={'px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaUser size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Sell</span>
          </Nav.Link>
        </Col>
        <Col  className={'px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaCog size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Exchange</span>
          </Nav.Link>
        </Col>
        <Col  className={'px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaBell size={34} color={'green'} />
            <span style={{ fontSize: '12px' }}>Loan</span>
          </Nav.Link>
        </Col>
        <Col  className={'px-4'}  >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaEnvelope size={34} color={'green'} />
            <span style={{ fontSize: '12px' }}>Insurance</span>
          </Nav.Link>
        </Col>
        <Col  className={'px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaChartBar size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>RSA</span>
          </Nav.Link>
        </Col>
        </Row>
      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

export default NavbarPage