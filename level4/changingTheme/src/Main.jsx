import React from 'react';
import ThemeContext from './ThemeContext';

function Main() {
  const { color } = useContext(ThemeContext);
  return (
    <div className={`${color}-theme`}>
      <p>blah blah blah</p>
    </div>
  );
}
export default Main;
