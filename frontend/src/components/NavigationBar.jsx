// src/components/NavigationBar.js
import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button} from 'react-bootstrap';

function NavigationBar() {
  return (
    <>
      
    <Navbar bg="white" variant="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">
          <img
            src={require('../components/image/logo_new.png')}
            alt="Logo"
            width="80"
            height="90"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* Aligns Nav items to the right */}
            {/* Button-styled Links */}
            <Nav.Link href="/"><Button variant="primary" className="me-2">HOME</Button></Nav.Link>
            <Nav.Link href="/about"><Button variant="primary" className="me-2">ABOUT</Button></Nav.Link>
            <Nav.Link href="/event"><Button variant="primary">EVENTS</Button></Nav.Link>
            <Nav.Link href="/redeem"><Button variant="primary">REDEEM</Button></Nav.Link>
            <Nav.Link href="/login"><Button variant="primary">LOGIN</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavigationBar;
