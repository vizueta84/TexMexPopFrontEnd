import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Map from "./Map";
// import { FaTrash } from "@react-icons/all-files/fa/FaTrash";

export default function RestaurantCard({ restaurant, loggedIn }) {
  const [toggleMap, setToggleMap] = useState(false);
  return (
    <div>
      <h4>
        <Link to={restaurant.link} target="_blank">
          {restaurant.restaurant_name}
        </Link>
      </h4>
      <p>{restaurant.description}</p>
      <Rating rating={restaurant.rating} />
      <Link to={"/new-rating"} state={restaurant}>
        Rate this Restaurant
      </Link>
      <button onClick={() => setToggleMap(!toggleMap)}>
        {toggleMap ? "close map" : "view on map"}
      </button>
      {toggleMap && <Map restaurant={restaurant} />}
      {/* {loggedIn && <FaTrash />} */}
    </div>
  );
}
