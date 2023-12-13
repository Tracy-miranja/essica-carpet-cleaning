// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import '../header/header.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
      <div className='head'>hello</div>
      <Navbar expand="lg" className="bg-body-tertiary navbar-sticky">
        <Container fluid className="navsection">
          <div>
            <Navbar.Brand href="Home">
              <img src={logo} alt="Essica" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link href="/Services">Service</Nav.Link>
                <Nav.Link href="/Blog">Blog</Nav.Link>
                <Nav.Link href="/Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="d-lg">
            <Button variant="primary">
              Book Now<Badge bg="secondary"></Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
