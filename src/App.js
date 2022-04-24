import { Hero } from './components/hero/hero';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import { NavMenu } from './components/navbar/nav';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import React  from 'react';
import fondoRosa from './assets/fondoRosa.png'

import './style/style.css';
import { Button } from 'react-bootstrap';
import {FaArrowUp} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <NavMenu id="top"/>
      <Hero id="hero"/>
      <Experience />
      <div style={{ 
        backgroundImage:`url(${fondoRosa})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat'}}>
        <Services />
        <Contact/>
        <Footer/>
      </div>
      <Button href="#top"
        className="btn btn-danger btn-floating btn-lg rounded-circle"
        id="btn-back-to-top"
        >
        <FaArrowUp/>
      </Button>
    </div>
  );
}

export default App;
