import { Container, Row, Col, Form, Button, Dropdown, } from "react-bootstrap";
import React from 'react';
import { IoLogoWhatsapp, IoMail } from 'react-icons/io5'
const { useState } = React;

function Contact() {
    const [nombre, setNombre] = useState('');
    const [mensaje, setMensaje] = useState('');
    const nroTelefono = "541168090888";
    const mail = "daniela.stratico@gmail.com";


    const onNombreChange = ({ target: { value } }) => setNombre(value);
    const onMensajeChange = ({ target: { value } }) => setMensaje(value);

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const buildWhatsappUrl = (nombre, mensaje) => {
        return "https://wa.me/" + nroTelefono + "?text=Hola, mi nombre es *" + nombre.trim() + "*. Mi consulta es: *" + mensaje.trim() + "*."
    }

    const buildGmailUrl = (nombre, mensaje) => {
        return "https://mail.google.com/mail/u/0/?source=mailto&to=" + mail + "&fs=1&tf=cm&su=Consulta via web&body=Hola, mi nombre es " + nombre.trim() + ". Mi consulta es: " + mensaje.trim() + "."
    }

    //https://mail.google.com/mail/u/0/?source=mailto&to=daniela.stratico@gmail.com&fs=1&tf=cm&body=hola&su=consulta

    const openWhatsapp = e => {
        e.preventDefault()
        const whatsappUrl = buildWhatsappUrl(nombre, mensaje);
        openInNewTab(whatsappUrl);
    }

    const openGmail = e => {
        e.preventDefault()
        const gmailUrl = buildGmailUrl(nombre, mensaje);
        openInNewTab(gmailUrl);
    }

    return (
        <Container id="contact" className="container-contact" >
            <Row>
                <div className='container-title-exp'>
                    <h2 className='title-exp'>CONTACTO</h2>
                </div>
            </Row>
            <Row className="content-contact">
                <Col>
                    <Row><h2 className="lg-title-contact">Bienvenida tu consulta.</h2></Row>
                    <Row><h4 className="text-presentacion">Estaré respondiendo tu mensaje a la brevedad.</h4></Row>
                </Col>
                <Col>
                    <Row style={{ placeContent: 'center' }}>
                        <Form className="col-md-10 col-lg-10">
                            <Form.Group className="mb-3" controlId="nombre">
                                <Form.Control type="text" placeholder="Tu nombre"
                                    onChange={onNombreChange}
                                    value={nombre} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control style={{ resize: 'none' }} as="textarea" rows={5} placeholder="Escribí tu mensaje..."
                                    onChange={onMensajeChange}
                                    value={mensaje} />
                            </Form.Group>
                            <Dropdown>
                                <Dropdown.Toggle disabled={!(nombre && mensaje)} style={{ borderRadius: '5px', background: '#BC448C', borderColor: '#BC448C', color: 'white', width: '100%' }} variant="success" id="dropdown-basic">
                                    Enviar
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ textAlign: 'center', width: '100%' }}>
                                    <Dropdown.Item onClick={openWhatsapp}>Whatsapp <IoLogoWhatsapp /> </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={openGmail} >Gmail <IoMail /></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;