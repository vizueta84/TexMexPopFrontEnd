import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useLocation } from "react-router-dom";

export default function NewRating() {
  const { state } = useLocation();
  const [rating, setRating] = useState(0);
  const changeRating = (newRating) => {
    setRating(newRating);
  };

  console.log(state);
  return (
    <div>
      <h2>{state.restaurant_name}</h2>
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
}
