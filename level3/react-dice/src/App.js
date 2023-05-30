import React, { useState } from 'react';
import './Die.css';
import Die from './Die';

export default function App() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5]);
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  const roll = () => {
    setNumber([random1, random2]);
  };

  return (
    <div>
      <div className="die">
        <Die number={number[0]} className="dice1" />
        <Die number={number[1]} className="dice2" />
      </div>
      <div>
        <button onClick={roll}>ROLL!</button>
      </div>
    </div>
  );
}
