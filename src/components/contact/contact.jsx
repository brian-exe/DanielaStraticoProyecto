import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React from 'react';

function Contact() {
    function handleClick() {
        console.log('hola')
    }
    return (
        <Container className="container-contact" >
            <Row>
                <div className='container-title-exp'>
                    <h2 className='title-exp'>Contacto</h2>
                </div>
            </Row>
            <Row className="content-contact">
                <Col>
                    <Row><h2 className="lg-title-hero">Tu consulta es bien recibida.</h2></Row>
                    <Row><h4 className="text-presentacion">Enviá tu consulta y estaré respondiéndote a la brevedad posible.</h4></Row>
                    <Row><h4 className="text-presentacion">Abrazo, <br></br> Daniela.</h4></Row>
                </Col>
                <Col>
                    <Form className="col-md-6">
                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Control type="text" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control style={{ resize: 'none' }} as="textarea" rows={3} placeholder="Mensaje..." />
                        </Form.Group>
                        <Button onClick={handleClick} className="btn-pink">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;