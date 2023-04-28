import React from 'react'
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';




const NavbarPage = () => {
  return (
    <Navbar fluid bg="light" variant="light" style={{ position: 'absolute', top: 60,  left: 0, right: 0}}>
      
      <Nav className="mx-auto" >
      {/* <div className='d-flex justify-content-between'> */}
        <Nav.Item className="px-auto" >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaHome size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Buy</span>
          </Nav.Link>
        </Nav.Item >
        <Nav.Item className="px-auto">
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaUser size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Sell</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-auto" >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaCog size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Exchange</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-auto">
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaBell size={34} color='green' />
            <span style={{ fontSize: '12px' }}>Loan</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-auto">
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaEnvelope size={34} color='green' />
            <span style={{ fontSize: '12px' }}>Insurance</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="px-auto">
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaChartBar size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>RSA</span>
          </Nav.Link>
        </Nav.Item>
        {/* </div> */}
      </Nav>
      
    </Navbar>
  )
}

export default NavbarPage