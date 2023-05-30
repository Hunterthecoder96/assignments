import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FiveDay from './Components/FiveDay';
import Home from './Components/Home';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="page">
      <nav className="Header">
        <h1 className="link">Weather Channel</h1>

        <Link
          to="/"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
          className="link"
        >
          Current Weather
        </Link>
        <Link
          to="/fiveday"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
          className="link"
        >
          5 Day Forecast
        </Link>
        <Link
          to="/blog"
          style={{
            padding: 5,
            FontSize: 20,
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '10px',
          }}
          className="link"
        >
          Share Your Story
        </Link>
      </nav>

      <Routes className="test">
        <Route path="/" element={<Home />} />
        <Route path="/fiveday" element={<FiveDay />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
