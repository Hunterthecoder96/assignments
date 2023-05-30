import React from 'react';
import ThemeContext from './ThemeContext';

function Navbar(props) {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`${context.color}-theme`}>
      <p>Home</p>
      <p>Shop</p>
      <p>Links</p>
    </div>
  );
}

export default Navbar;
