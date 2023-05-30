import React, { useState } from 'react';
// import './header.css';

function Header() {
  const [selectedOption, setSelectedOption] = useState('option 1');

  function handleChange(event) {
    setSelectedOption(event.target.value);
    console.log('selected option:', event.target.value);
  }
  return (
    <header className="header">
      <h1>Skully Sauce</h1>
      <h3>Where we light your Bunghole aflame!!!</h3>
      <nav className="links">
        <a value="option 1">home</a>
        <a value="option 2"> shop</a>
        <a value="option 3">recipes</a>
      </nav>
    </header>
  );
}

export default Header;
