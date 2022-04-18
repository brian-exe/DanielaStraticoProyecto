import { Container, Row} from "react-bootstrap";
import ServiceCard from "./service-card";
import React from 'react';
import legalesImg from '../../assets/legalesImg.png'
import comunicacionImg from '../../assets/comunicacionImg.png'
import coachingImg from '../../assets/coachingImg.png'

function Services() {
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
        </Container>
    );
}

export default Services;