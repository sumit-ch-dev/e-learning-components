import React from 'react';
// import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import { Star, StarHalf } from '@mui/icons-material';



const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, index) => {
    return index + 0.5 <= roundedRating ? (
      <Star key={index} />
    ) : (
      <StarHalf key={index} />
    );
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
