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
                        <Nav.Link href="#home">Servicios</Nav.Link>
                        <Nav.Link href="#link">Sobre Mi</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
