import React from 'react'
import StarRatings from "react-star-ratings"

export default function Rating({rating}) {
    return (
        <StarRatings
          numberOfStars={5}
          rating={rating}
          starDimension="30px"
          starSpacing="10px"
        />
      );
    
}
