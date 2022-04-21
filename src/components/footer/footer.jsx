import { Col } from "react-bootstrap";
import React from 'react';
import logoWpp from '../../assets/logoWhatsapp.png'
import logoLinkedIn from '../../assets/logoLinkedin.png'


function Footer() {
    return (
        <footer className="footer">
            <Col>
                <h2 className="name-footer">Daniela Stratico</h2>
                <h4 className="subtext-footer">Legales & Comunicacion</h4>
                <div>
                    <img className="logoFooter" src={logoWpp} alt="logo whatsapp" />
                    <img className="logoFooter" src={logoLinkedIn} alt="" />
                </div>
                <p className="copyright"> Copyright © Daniela Stratico | Todos los derechos reservados.</p>
            </Col>
            
        </footer>
    );
}

export default Footer;