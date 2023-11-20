import React from 'react';

function RatingStars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < rating ? 'checked' : ''}`}
      data-rating={index + 1}
    >
      &#9733;
    </span>
  ));

  return (
    <div className="rating" id="rating">
      {stars}
    </div>
  );
}

export default RatingStars;