import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Longboards() {
  const [longboard, setLongboard] = useState([]);

  useEffect(() => {
    getLongboards();
  }, []);

  function getLongboards() {
    axios
      .get('/longboard')
      .then((res) => setLongboard(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      Longboards
      {longboard.map((board) => (
        <div key={board.id}>
          <h1>{board.brand}</h1>
          <h2>{board.size}</h2>
          <h3>${board.value}</h3>
        </div>
      ))}
    </div>
  );
}
