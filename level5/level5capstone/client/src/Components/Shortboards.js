import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Shortboards() {
  const [shortboard, setShortboard] = useState([]);

  useEffect(() => {
    getShortboards();
  }, []);

  function getShortboards() {
    axios
      .get('/shortboard')
      .then((res) => setShortboard(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="board-wrap">
      Shortboards
      <div className="card-wrap">
        {shortboard.map((board) => (
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
