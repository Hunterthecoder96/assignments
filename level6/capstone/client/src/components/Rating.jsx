import React, { useState } from 'react';

const Rating = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'active' : ''}`}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
