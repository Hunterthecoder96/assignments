import React from 'react';
import './Die.css';
import dice1 from './dicepics/dice1.PNG';
import dice2 from './dicepics/dice2.PNG';
import dice3 from './dicepics/dice3.PNG';
import dice4 from './dicepics/dice4.PNG';
import dice5 from './dicepics/dice5.PNG';
import dice6 from './dicepics/dice6.PNG';

export default function die({ number }) {
  const dicePics = [dice1, dice2, dice3, dice4, dice5, dice6];
  return (
    <div className="square">
      <img src={dicePics[number - 1]} />
    </div>
  );
}
