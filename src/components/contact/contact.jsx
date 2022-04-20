import { Container, Row, Col, Form, Button } from "react-bootstrap";
import React from 'react';
const {useState} = React;

function Contact() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    //const nroTelefono = "541168090888";
    const nroTelefono = "541111111111";


    const onNombreChange = ({target:{value}}) => setNombre(value);
    const onMensajeChange = ({target:{value}}) => setMensaje(value);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const buildWhatsappUrl= (nombre, mensaje)=> {
        return "https://wa.me/"+ nroTelefono + "?text=Hola mi nombre es *" + nombre.trim() + "*. Mi consulta es: *" + mensaje.trim() + "*."
    }

    //https://mail.google.com/mail/u/0/?source=mailto&to=daniela.stratico@gmail.com&fs=1&tf=cm&body=hola&su=consulta

    const onSubmit = e => {
        e.preventDefault()
        const whatsappUrl = buildWhatsappUrl(nombre, mensaje);
        openInNewTab(whatsappUrl);
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
                    <Row>
                        <Form className="col-md-6">
                            <Form.Group className="mb-3" controlId="nombre">
                                <Form.Control type="text" placeholder="Nombre" 
                                        onChange={onNombreChange} 
                                        value={nombre} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control style={{ resize: 'none' }} as="textarea" rows={3} placeholder="Mensaje..."
                                        onChange={onMensajeChange} 
                                        value={mensaje} />
                            </Form.Group>
                            <Button type="submit" onClick={onSubmit} className="btn-pink">
                                Enviar
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;