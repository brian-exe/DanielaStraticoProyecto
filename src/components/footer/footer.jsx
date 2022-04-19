import { Col, Button } from "react-bootstrap";
import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <Col>
                <h2 className="name-footer">Daniela Stratico</h2>
                <h4 className="subtext-footer">Legales & Comunicacion</h4>
            </Col>
            <Col className="container-menu-footer">
                <Button style={{ textDecoration: 'none', color: 'white' }} variant="link">Servicios</Button>
                <Button style={{ textDecoration: 'none', color: 'white' }} variant="link">Experiencia</Button>
                <Button style={{ textDecoration: 'none', color: 'white' }} variant="link">Contacto</Button>
            </Col>
        </footer>
    );
}

export default Footer;