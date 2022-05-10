import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../../assets/heroImg.png'

export const Hero = () => {
    return (
        <Container id="hero" className='container-hero'>
            <div className='container-text-hero'>
                <h2 className='lg-title-hero'>Consultoría Legal </h2>
                <h2 className='lg-title-hero'>& Comunicación</h2>
                <p className='text-hero'>
                    Facilito los asuntos y las relaciones legales, de manera versátil y con foco en la gestión tanto de las problemáticas técnicas como de las humanas.
                </p>
                <div className='container-btn'>
                    <a className='btn-pink' href="#services">Informate <span className='span-plusSign'>+</span></a>
                </div>
            </div>
            <div className='container-img'>
                <img src={heroImg} alt="" />
            </div>
        </Container>
    )
}
