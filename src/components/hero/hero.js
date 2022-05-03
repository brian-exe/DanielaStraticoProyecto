import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../../assets/heroImg.png'

export const Hero = () => {
    return (
        <Container id="hero" className='container-hero'>
            <div className='container-text-hero'>
                <h2 className='lg-title-hero'>Consultoría Legal y Comunicación</h2>
                <p className='text-hero'>Facilitar las relaciones y contingencias legales de manera versátil, según las necesidades específicas del contexto.</p>
                <div className='container-btn'>
                    <a className='btn-pink' href="#">Informate <span className='span-plusSign'>+</span></a>
                </div>
            </div>
            <div className='container-img'>
                <img src={heroImg} alt="" />
            </div>
        </Container>
    )
}
