import { Hero } from './components/hero/hero';
import { NavMenu } from './components/navbar/nav';
import Experience from './components/experience/experience';
import Services from './components/services/services';
import React, { Component }  from 'react';
import './style/style.css';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Hero />
      <Experience />
      <Services />
    </div>
  );
}

export default App;
