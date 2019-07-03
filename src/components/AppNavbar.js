import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNavbar = (props) => {
  let homeClass = null;
  let portfolioClass = null;
  let aboutClass = null;
  let contactClass = null;
  switch (props.activePage) {
    case "home":
      homeClass = "active";
      break;
    case "portfolio":
      portfolioClass = "active";
      break;
    case "about":
      aboutClass = "active";
      break;
    case "contact":
      contactClass = "active";
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="AppNavbar">
        <Navbar.Brand>Burchill Development</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/" className={homeClass}>Home</Nav.Link>
            <Nav.Link href="#/portfolio" className={portfolioClass}>Portfolio</Nav.Link>
            <Nav.Link href="#/about" className={aboutClass}>About Me</Nav.Link>
            <Nav.Link href="#/contact" className={contactClass}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default AppNavbar;