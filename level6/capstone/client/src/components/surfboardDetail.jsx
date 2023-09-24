import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../Context/UserProvider';
import { useParams } from 'react-router-dom';

export default function SurfboardDetails() {
  const { publicSurfboards, getAllSurfboards } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    getAllSurfboards();
  }, []);

  const foundSurfboard = publicSurfboards.find(
    (surfboard) => surfboard._id === id
  );

  return (
    <div>
      <h1>{foundSurfboard.shaper}</h1>
      <h2>{foundSurfboard.model}</h2>
      <h3>{foundSurfboard.size}</h3>
      <h4>{foundSurfboard.rating.score}</h4>
      <h4>{foundSurfboard.description}</h4>
    </div>
  );
}
