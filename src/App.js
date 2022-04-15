import { Hero } from './hero/hero';
import { NavMenu } from './navbar/nav';
import Experience from './experience/experience';
import Services from './services/services';
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
