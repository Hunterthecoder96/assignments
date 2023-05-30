import React from 'react';
import ThemeContext from './ThemeContext';

function Footer() {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`${color}-theme`}>
      <footer> hope you enjoy your day </footer>
    </div>
  );
}

export default Footer;
