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
    <div className="board-wrap">
      Longboards
      <div className="card-wrap">
        {longboard.map((board) => (
          <div className="card" key={board.id}>
            <h1 className="brand">{board.brand}</h1>
            <h2 className="size">{board.size}</h2>
            <h3 className="value">${board.value}</h3>
            <img src={board.image} />
          </div>
        ))}
      </div>
    </div>
  );
}
