import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SurfboardDetails(props) {
  const { boards } = props;
  const { id } = useParams;

  const foundSurfboard = boards.filter((surfboard) => surfboard._id === id);

  return (
    <div>
      <h1>{foundSurfboard[0].shaper}</h1>
      <h2>{foundSurfboard[0].model}</h2>
      <h3>{foundSurfboard[0].size}</h3>
    </div>
  );
}
