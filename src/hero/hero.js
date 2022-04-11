import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../assets/heroImg.png'

export const Hero = () => {
    return (
        <Container className='container-hero'>
            <div className='container-text-hero'>
                <h2 className='lg-title-hero'>Consultoría Legal y Comunicación</h2>
                <p className='text-hero'>Facilitar las relaciones y contingencias legales de manera versátil, según las necesidades específicas del contexto.</p>
            </div>
            <div>
                <img src={heroImg} alt="" />
            </div>
        </Container>
            
    )
}
