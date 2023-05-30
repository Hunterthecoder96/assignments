import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
export default App;
