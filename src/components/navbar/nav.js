
import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';


export const NavMenu = () => {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#home">Daniela Stratico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#experience">SOBRE MI</Nav.Link>
                        <Nav.Link href="#services">SERVICIOS</Nav.Link>
                        <Nav.Link href="#contact">CONTACTO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}