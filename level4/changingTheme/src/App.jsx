import { useState } from 'react';
import Navbar from './Navbar';
// import Main from './Main';
// import Footer from './Footer';
import './App.css';
import ThemeContext from './ThemeContext';

function App(props) {
  const [color, setColor] = useState('dark');

  const toggleTheme = () => {
    setColor((prevColor) => (prevColor === 'dark' ? 'light' : 'dark'));
  };
  return (
    <div className="App">
      <ThemeContext.Provider value={{ color: color, toggleTheme: toggleTheme }}>
        <Navbar />
        {/* <Main />
        <Footer /> */}
        <button
          onClick={context.toggleTheme}
          className={`${context.color}-theme`}
        >
          Switch modes
        </button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
