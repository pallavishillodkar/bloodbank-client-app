import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { BiDonateBlood } from "react-icons/bi";
import "../style/MyNavbar.css";
function MyNavbar() {
  return (
    <div>
      <Navbar className="navmenu"  collapseOnSelect variant="dark" bg="dark" expand="md">
        <Navbar.Brand>  <BiDonateBlood  color="red" size={30} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-link">
            <Link className="link" id="active" to="home">Home</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <RouteLink className="link" to="/registered">Registered</RouteLink>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link className="link" to="view">View</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link className="link" to="request">Request</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <RouteLink className="link" to="/login">Login</RouteLink>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link className="link" to="profile">Profile</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link  className="link" to="aboutus">AboutUs</Link>
          </Nav.Link>
          <Nav.Link className="nav-link">
            <Link  className="link" to="contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
