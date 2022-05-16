import { Col } from "react-bootstrap";
import React from 'react';
import logoWpp from '../../assets/logoWhatsapp.png'
import logoLinkedIn from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagram.png'

function Footer() {
    return (
        <footer className="footer">
            <Col>
                <h2 className="name-footer">Daniela Stratico</h2>
                <h4 className="subtext-footer">Legales & Comunicacion</h4>
                <div>
                    <a href="https://wa.me/541168090888"><img className="logoFooter" src={logoWpp} alt="logo whatsapp" /></a>
                    <a href="https://www.linkedin.com/in/daniela-stratico/" ><img className="logoFooter" src={logoLinkedIn} alt="" /></a>
                    <a href="https://www.instagram.com/danistratico/" ><img className="logoFooter" src={logoInstagram} alt="" /></a>
                </div>
                <p className="copyright"> Copyright © Daniela Stratico | Todos los derechos reservados.</p>
            </Col>
            
        </footer>
    );
}

export default Footer;