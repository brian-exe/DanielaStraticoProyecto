import { Container, Row, Col, Button } from "react-bootstrap";
import React from 'react';
import expImg from '../assets/experienceImg.png'

function Experience() {
    return (
        <Container className='container-exp'>
            <Row>
                <div className='container-title-exp'>
                    <h2 className='title-exp'>Experiencia</h2>
                </div>
            </Row>
            <Row>
                <Col className="text-exp">
                    <Row>
                        <h3 className="text-primary-color">¡Hola!</h3>
                        <h3>Soy Dani Stratico</h3> </Row>
                    <Row>
                        <p>Vivo en el mundo legal hace más de 15 años.
                        Durante los primeros 10 años de profesión tuve el privilegio de ejercer como abogada corporativa en varias organizaciones. De todas esas experiencias me llevé un capital profesional enorme.
                        Hoy soy mi propia organización. Una organización coherente con valores personales y profesionales.
                        Mi servicio central es acompañar a las personas y las organizaciones a hacer que los asuntos legales funcionen; transitando pacíficamente los conflictos como parte del proceso de la vida.

                        ¡Gracias por visitar mi web!
                        Un abrazo.
                        </p>
                    </Row>
                    <Row> <label>Conoce más</label> </Row>
                </Col>
                <Col>
                    <Row> <img src={expImg} alt="" /></Row>
                    <Row>
                        <Col>
                            <Row className="text-primary-color container-years-exp "> <h1 className="years-exp">+5 <span className="years-text-exp">años</span></h1> </Row>
                            <Row> <Col> <p>Facilitando procesos individuales y colectivos para generar armonía vincular</p> </Col> </Row>
                        </Col>
                        <Col>
                            <Row className="text-primary-color container-years-exp "> <h1 className="years-exp">+10 <span className="years-text-exp">años</span></h1></Row>
                            <Row> <Col> <p>Desarrollándome en la industria legal en materia de derecho privado</p> </Col> </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;