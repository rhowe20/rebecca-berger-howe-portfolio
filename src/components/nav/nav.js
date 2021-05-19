import React from "react"
import {Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./nav.css";

function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" className="color" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#about">Home</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">eList</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Dungeons & Dragons Helper
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">U-Notes</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar;