import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="#1c2230" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651727515/Fylo/logo_czhozh.svg"
              width="120"
              className="d-inline-block align-top zoom"
              alt="Fylo logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#sing in">Sign In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
