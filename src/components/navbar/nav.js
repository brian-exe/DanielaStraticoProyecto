import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';
import imgLogo from '../../assets/logo1.png'

export const NavMenu = () => {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#home"><img className='imgLogo' src={imgLogo} alt="" /></Navbar.Brand>
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
