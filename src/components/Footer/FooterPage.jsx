import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsPersonCircle } from 'react-icons/bs';
import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaAppStore, FaGooglePlay } from 'react-icons/fa';


const FooterPage = () => {
  return (
    <>
    <footer className={"bg-light py-4 my-4"}>
      <Container>
        <Row>
          <Col sm={4} className={"text-center text-md-left mb-3 mb-md-0"}>
            <div className={"d-flex flex-column align-items-center align-items-md-start"}>
              <div><FaEnvelope size={18} /> info@example.com</div>
              <div><BsPersonCircle size={18} /> +1-123-456-7890</div>
            </div>
          </Col>
          <Col sm={4} className={"text-center mb-3 mb-md-0"}>
            <div className={"d-flex justify-content-center"}>
              <a href="https://www.facebook.com"><FaFacebookF size={24} className={"mx-3"} /></a>
              <a href="https://www.twitter.com"><FaTwitter size={24} className={"mx-3"} /></a>
              <a href="https://www.instagram.com"><FaInstagram size={24} className={"mx-3"} /></a>
              <a href="https://www.twitter.com"><FaLinkedinIn size={24} className={"mx-3"} /></a>
              <a href="https://www.instagram.com"><FaYoutube size={24} className={"mx-3"} /></a>
            </div>
          </Col>
          <Col sm={4} className={"text-center text-md-right"}>
            
            <div className={" row d-flex justify-content-end align-items-center"}>
            <div className=''> <p className=' fw-bold'>Download App</p></div>
             <div className={'col'}>
              <a href="https://www.github.com"><FaAppStore size={24} className={"mx-3"} /></a>
              <a href="/privacy"><FaGooglePlay size={24} className={"mx-3"} /></a>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default FooterPage