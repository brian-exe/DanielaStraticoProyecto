import { Hero } from './hero/hero';
import { NavMenu } from './navbar/nav';
import Experience from './experience/experience';
import Services from './services/services';
import Contact from './contact/contact';
import Footer from './footer/footer';
import { Container } from 'react-bootstrap';
import React, { Component }  from 'react';
import fondoRosa from './assets/fondoRosa.png'

import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <Experience />
      <div style={{ 
        backgroundImage:`url(${fondoRosa})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'}}>
        <Services />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
