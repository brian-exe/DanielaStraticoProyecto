import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import expImg from '../../assets/experienceImg.png'

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
                        <h3 className="text-primary-color text-title">¡Hola!</h3>
                        <h3 className="text-nombre">Soy Dani Stratico</h3>
                    </Row>
                    <Row className="conatiner-text-presentacion">
                        <p className="text-presentacion">Vivo en el mundo legal hace más de 15 años.
                            Durante los primeros 10 años de profesión tuve el privilegio de ejercer como abogada corporativa en varias organizaciones. De todas esas experiencias me llevé un capital profesional enorme.
                            Hoy soy mi propia organización. Una organización coherente con valores personales y profesionales.
                            Mi servicio central es acompañar a las personas y las organizaciones a hacer que los asuntos legales funcionen; transitando pacíficamente los conflictos como parte del proceso de la vida.
                        </p>
                        <p className="text-presentacion">¡Gracias por visitar mi web!</p>
                        <p className="text-presentacion">Un abrazo.</p>
                    </Row>
                    <Row> <div className="container-bt-sm"><a className="btn-pink" href="https://www.linkedin.com/in/daniela-stratico/">Conoce más</a> </div> </Row>
                </Col>
                <Col className="cont-text-img-exp">
                    <Row className="img-exp"> <img src={expImg} alt="" /></Row>
                    <Row>
                        <Col className="container-years">
                            <Row className="text-primary-color container-years-exp "> <h1 className="years-exp">+5 <span className="years-text-exp">años</span></h1> </Row>
                            <Row> <Col> <p className="description-years">Facilitando procesos individuales y colectivos para generar armonía vincular</p> </Col> </Row>
                        </Col>
                        <Col className="container-years">
                            <Row className="text-primary-color container-years-exp "> <h1 className="years-exp">+10 <span className="years-text-exp">años</span></h1></Row>
                            <Row> <Col> <p className="description-years">Desarrollándome en la industria legal en materia de derecho privado</p> </Col> </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;