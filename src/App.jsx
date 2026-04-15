import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Science from './components/Science';
import Solution from './components/Solution';
import Workflow from './components/Workflow';
import Architecture from './components/Architecture';
import Business from './components/Business';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Problem />
      <Science />
      <Solution />
      <Workflow />
      <Architecture />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
