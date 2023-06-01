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
    <div>
      Shortboards
      {shortboard.map((board) => (
        <div key={board.id}>
          <h1>{board.brand}</h1>
          <h2>{board.size}</h2>
          <h3>${board.value}</h3>
        </div>
      ))}
    </div>
  );
}
