import React from "react";
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {
    return (
        <Navbar bg="light" variant="light" className="full-width-nav">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#portfolio">
                    My Portfolio
                </Nav.Link>
                <Nav.Link href="#clients">Clients</Nav.Link>
                <Nav.Link href="#getintouch">Get in touch</Nav.Link>
            </Nav>
        </Navbar>
    );
}