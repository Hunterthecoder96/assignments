import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [text, setText] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ');
    return wordsArr.filter((word) => word !== '').length;
  }

  function startClock() {
    setIsTimeRunning(true);
    setTimeRemaining(10);
    setText('');
  }
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsTimeRunning(false);
      setWordCount(calculateWordCount(text));
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div className="App">
      <h1>Speed Typer</h1>
      <textarea
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startClock}>
        start
      </button>
      <h1>Word Count:{wordCount}</h1>
    </div>
  );
}

export default App;
