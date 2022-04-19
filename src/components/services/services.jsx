import { Container, Row } from "react-bootstrap";
import ServiceCard from "./service-card";
import React, { useState } from 'react';
import legalesImg from '../../assets/legalesImg.png'
import comunicacionImg from '../../assets/comunicacionImg.png'
import coachingImg from '../../assets/coachingImg.png'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

function Services() {
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <Container className="container-services">
                <Row>
                    <div className='container-title-exp'>
                        <h2 className='title-exp'>Servicios</h2>
                    </div>
                </Row>
                <Row className="services-cards-container">
                    <ServiceCard
                        title="Legales"
                        imgSrc={legalesImg} />
                    <ServiceCard
                        title="Comunicación"
                        imgSrc={comunicacionImg} />
                    <ServiceCard
                        title="Consultoría"
                        imgSrc={coachingImg} />
                </Row>
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }

    export default Services;