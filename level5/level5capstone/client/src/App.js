import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shortboards from './Components/Shortboards';
import Longboards from './Components/Longboards';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <nav className="Header">
        <h1>Natural Art Surf Shop</h1>
        <Link
          to="/"
          className="link"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
        >
          Home
        </Link>
        <Link
          to="/shortboards"
          className="link"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
        >
          Shortboards
        </Link>
        <Link
          to="/longboards"
          className="link"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
        >
          Longboards
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shortboards" element={<Shortboards />} />
        <Route path="/longboards" element={<Longboards />} />
      </Routes>
    </div>
  );
}

export default App;
