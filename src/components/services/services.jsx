import { Container, Row, Col, Button, Card } from "react-bootstrap";
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
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                    title="Legales"
                    imgSrc={legalesImg} />
                <ServiceCard 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                    title="Legales"
                    imgSrc={comunicacionImg} />
                <ServiceCard 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                    title="Legales"
                    imgSrc={coachingImg} />
            </Row>
        </Container>
    );
}

export default Services;