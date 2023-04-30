import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';


const NavbarPage = () => {
  return (
    <Container fluid  style={{width: '95% ', position: 'absolute', top: 120,  left: 0, right: 0 }} className={' bg-light start-50 translate-middle '}>
    <Navbar fluid className={'navbar mx-auto'}  >
      <Nav className={'nav mx-auto'}>
        <Row className={'nav-row'}>
        <Col className={'nav-col px-4'} >
          <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaHome size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Buy</span>
          </Nav.Link>
        </Col>
        <Col className={'nav-col px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaUser size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Sell</span>
          </Nav.Link>
        </Col>
        <Col className={'nav-col px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaCog size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>Exchange</span>
          </Nav.Link>
        </Col>
        <Col className={'nav-col px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaBell size={34} color={'green'} />
            <span style={{ fontSize: '12px' }}>Loan</span>
          </Nav.Link>
        </Col>
        <Col className={'nav-col px-4'}  >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaEnvelope size={34} color={'green'} />
            <span style={{ fontSize: '12px' }}>Insurance</span>
          </Nav.Link>
        </Col>
        <Col className={'nav-col px-4'} >
        <Nav.Link href="/" className={"d-flex flex-column align-items-center"}>
            <FaChartBar size={34} color={'green'}/>
            <span style={{ fontSize: '12px' }}>RSA</span>
          </Nav.Link>
        </Col>
        </Row>
      </Nav>
    </Navbar>
    </Container>
  )
}

export default NavbarPage