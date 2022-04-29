import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';


export const NavMenu = () => {
    return (
        <Navbar expand="md">
            <Container style={{justifyContent:'center'}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#experience">Sobre Mi</Nav.Link>
                        <Nav.Link href="#services">Servicios</Nav.Link>
                        <Nav.Link href="#contact">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
