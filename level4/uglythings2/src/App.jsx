import React, { useContext } from 'react';
import './App.css';
import Form from './Components/Form';
import DomDisplay from './Components/DomDisplay';

function App(props) {
  return (
    <div className="App">
      <Form />
      <DomDisplay />
    </div>
  );
}

export default App;
