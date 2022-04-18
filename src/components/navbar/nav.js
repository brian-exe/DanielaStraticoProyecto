import React from 'react';
import { Nav, Container, Navbar, NavDropdown} from 'react-bootstrap';


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
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
