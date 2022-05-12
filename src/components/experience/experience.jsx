import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import expImg from '../../assets/experienceImg.png';

function Experience() {
    return (
        <Container id="experience" className='container-exp'>
            <Row>
                <div className='container-title-exp'>
                    <h2 className='title-exp'>SOBRE MI</h2>
                </div>
            </Row>
            <div className="container-experiencia-text-img">
                <Col className="text-exp">
                    {/* <Row>
                        <h3 className="text-nombre">Soy Daniela Stratico</h3>
                    </Row> */}
                    <Row className="conatiner-text-presentacion">
                        <p className="text-presentacion">
                            Abogo con mirada estratégica y estilo empático, para que las personas y las organizaciones logren que sus asuntos legales avancen y se gestionen según sus estilos,  necesidades y preferencias.
                            <br></br>
                            Un blend de conocimiento técnico y acompañamiento humano en la gestión legal de lo habitual, de los conflictos y de los cambios.
                        </p>
                        {/* <p className="text-presentacion">Un abrazo.</p> */}
                    </Row>
                </Col>
                <Col className="cont-text-img-exp">
                    <Row className="img-exp"> <img src={expImg} alt="" /></Row>
                </Col>
            </div>
        </Container>
    );
}

export default Experience;