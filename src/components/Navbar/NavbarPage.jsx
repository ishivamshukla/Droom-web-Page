import React from 'react'
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaHome, FaUser, FaCog, FaBell, FaEnvelope, FaChartBar } from 'react-icons/fa';




const NavbarPage = () => {
  return (
    <Navbar fluid style={{ position: 'absolute', top: 120,  left: 0, right: 0  }} className='w-75 bg-body start-50 translate-middle d-flex flex-wrap justify-content-center ' >
      
      <Nav className="mx-auto" >
        <Nav.Item >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaHome size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Buy</span>
          </Nav.Link>
        </Nav.Item >
        <Nav.Item >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaUser size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Sell</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item  >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaCog size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>Exchange</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaBell size={34} color='green' />
            <span style={{ fontSize: '12px' }}>Loan</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaEnvelope size={34} color='green' />
            <span style={{ fontSize: '12px' }}>Insurance</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link href="/" className="d-flex flex-column align-items-center">
            <FaChartBar size={34} color='green'/>
            <span style={{ fontSize: '12px' }}>RSA</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
    </Navbar>
  )
}

export default NavbarPage