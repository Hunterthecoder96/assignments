import React from 'react';

import Header from './components/Header';
const GradientGenerator = () => {
  const [gradient, setGradient] = React.useState(
    'linear-gradient(to right,#ff0000,#ffff00)'
  );
  const [color, setColor] = React.useState(
    'linear-gradient(to left,#ff0000,#ffff00)'
  );

  const handleChange = (e) => {
    setGradient(e.target.value);
  };
  const handleChange2 = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <div
        style={{
          background: gradient,
          height: '200px',
          width: '500px',
          marginLeft: '600px',
        }}
      />
      <br />
      <label htmlFor="gradient-input">Gradient:</label>

      <input
        id="gradient-input"
        type="color"
        value={gradient}
        onChange={handleChange}
      />
      <label htmlFor="gradient-input2">Color:</label>
      <input
        id="gradient-input2"
        type="color"
        value={color}
        onChange={handleChange2}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header style={{ marginLeft: '600px' }} />
      <GradientGenerator />
    </div>
  );
}

export default App;
