import { Container, Row } from "react-bootstrap";
import ServiceCard from "./service-card";
import React, { useState } from 'react';
import legalesImg from '../../assets/legalesImg.png'
import comunicacionImg from '../../assets/comunicacionImg.png'
import coachingImg from '../../assets/coachingImg.png'
import Modal from 'react-bootstrap/Modal'

function Services() {
    const [showComunicacionModal, setShowComunicacionModal] = useState(false);
    const [showLegalesModal, setShowLegalesModal] = useState(false);
    const [showConsultoriaModal, setShowConsultoriaModal] = useState(false);

    const handleClose = (setFunction) => setFunction(false);
    const handleShow = (setFunction) => setFunction(true);

    return (
        <Container id="services" className="container-services">
            <Row>
                <div className='container-title-exp cont-title-services'>
                    <h2 className='title-exp'>SERVICIOS</h2>
                </div>
            </Row>
            <Row className="services-cards-container" >
                <ServiceCard
                    onClick={() => { handleShow(setShowConsultoriaModal) }}
                    title="Consultoría"
                    imgSrc={coachingImg} />
                <ServiceCard
                    onClick={() => { handleShow(setShowLegalesModal) }}
                    title="Legales"
                    imgSrc={legalesImg} />
                <ServiceCard
                    onClick={() => { handleShow(setShowComunicacionModal) }}
                    title="Comunicacion"
                    imgSrc={comunicacionImg} />


            </Row>

            {/*  DEJO ABAJO LOS TRES MODALES PARA ASOCIAR AL SERVICE CARD */}

            <Modal show={showComunicacionModal} onHide={() => { handleClose(setShowComunicacionModal) }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Comunicación</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign:'justify'}}>
                    <p>
                        <b>¿Para qué vas a esperar que el conflicto escale si lo podemos trabajar antes?</b><br></br>
                        Evitemos que tus conflictos se transformen en un problema legal, un conflicto laboral y/o que impacten en tus finanzas.
                        El cambio es constante, los conflictos también lo son y hoy en día es saludable incorporar nuevas herramientas para gestionar las necesidades del negocio y del equipo colaborador.
                        <br></br>
                        <br></br>
                        <b>¿Qué herramientas ofrezco para liderar el cambio?</b> <br></br>
                        El modelo de la programación neurolingüística, la ontología del lenguaje y el pensamiento sistémico.
                        <br></br>
                        <br></br>
                        <b>¿Cómo te acompaño a incorporar herramientas de estos modelos?</b><br></br>
                        Tendremos entrevistas para obtener información de los desafíos que atraviesa la empresa. Haré un diagnóstico de la problemática del negocio. Diseñaremos las facilitaciones o capacitaciones, individuales o grupales, que se ajusten a la necesidad de tu empresa: habilidades blandas (escucha, empatía), organización (gestión del tiempo, educación emocional), desarrollo de pensamiento sistémico.
                    </p>
                </Modal.Body>
            </Modal>

            <Modal show={showLegalesModal} onHide={() => { handleClose(setShowLegalesModal) }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Legales</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Asesoramiento generalista del negocio. <br></br><br></br>

                        Representación Prejudicial – Negociaciones. <br></br><br></br>

                        Contratos: Redacción, administración, renegociación y terminación de contratos, (comerciales, civiles, laborales). <br></br><br></br>

                        Societario: Redacción de actas obligatorias. Inscripción de trámites. <br></br><br></br>

                        Administración de personal: Reclamos laborales y sindicales. <br></br><br></br>

                        Representación en litigios.

                    </p>
                </Modal.Body>
            </Modal>

            <Modal show={showConsultoriaModal} onHide={() => { handleClose(setShowConsultoriaModal) }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Consultoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Análisis integral de las problemáticas de la empresa y abordaje de gestiones humanas y/o técnicas para arribar a una solución:<br></br><br></br>

                        Entrevistas para obtener información de las áreas o personas afectadas en la empresa.<br></br><br></br>

                        Diagnóstico de la problemática del negocio con los indicadores recabados.<br></br><br></br>

                        Presentación de la estrategia o plan de acción.<br></br><br></br>

                        Implementación de la estrategia, ajustes y correcciones necesarias.<br></br><br></br></p>

                    <p>Acompañamiento a la empresa en la evolución de su plan de acción:</p>
                    <ul>
                        <li>Capacitaciones.</li>
                        <li>Facilitaciones.</li>
                    </ul>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Services;