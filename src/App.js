
import { Hero } from './components/hero/hero';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import { NavMenu } from './components/navbar/nav';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import React from 'react';
import fondoRosa from './assets/fondoRosa.png'
import ScrollButton from './components/scrollToTop/scrollToTop';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavMenu id="top" />
      <Hero id="hero" />
      <ScrollButton />
      <Experience />
      
      <div  style={{
        backgroundImage: `url(${fondoRosa})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%'
      }}>
        <div style={{height:'100px'}}></div>
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;