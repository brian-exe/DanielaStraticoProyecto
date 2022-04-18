import { Container, Row, Col, Button} from "react-bootstrap";
import React from 'react';


function Footer() {
    return ( 
        <div style={{backgroundColor:'#565454', color:'white', marginTop:'30px'}}>
            <Row>
                <Row style={{display:'flex', justifyContent:'space-between'}}>
                    <Col>
                        <h1>Daniela Stratico</h1>
                        <h4>Legales & Comunicacion</h4>
                    </Col>
                    <Col style={{textAlign:'right'}}>
                        <Button style={{ textDecoration:'none', color:'white'}} variant="link">Servicios</Button>
                        <Button style={{ textDecoration:'none', color:'white'}} variant="link">Experiencia</Button>
                        <Button style={{ textDecoration:'none', color:'white'}} variant="link">Contacto</Button>
                    </Col>
                </Row>
            </Row>
        </div>
    );
}

export default Footer;