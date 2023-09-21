import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function BoardCard(props) {
  const { model, shaper, size, image } = props;
  // const handleRatingChange = (newRating) => {
  //   const response
  // };

  return (
    <div className="card-wrap">
      {/* <Link to={`/surfboard/${_id}`}> */}
      <h1 className="card-shaper">{shaper}</h1>
      <h2 className="card-model">{model}</h2>
      <h3 className="card-size">{size}</h3>
      <img className="card-img" src={image} />
      <Rating initialValue={cardData.rating} />
      {/* </Link> */}
    </div>
  );
}

//need to make detailed view and rating system
