import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HeaderPage = () => {
  return (
    <>
    <Navbar  className={'bg-body mb-4 pb-4'} >
      <Container  className={' justify-content-center mb-4 pb-4'}>
        <Navbar.Brand  href="/">
          <img
            src={"https://cdn1.acedms.com/photos/images/droomresponsive/img/content/homepage-v5/droom-logo.png"}
            width={"240"}
            height={"30"}
            className={"d-inline-block align-top"}
            alt={"Logo" }
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
    </>
  )
}

export default HeaderPage;