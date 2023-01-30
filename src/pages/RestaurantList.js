import React from "react";

import RestaurantCard from "../components/RestaurantCard";

export default function RestaurantList({ allRestaurants }) {
  console.log("list of restaurants", allRestaurants);

  return (
    <div>
      {allRestaurants.map((restaurant, i) => {
        return (
          <div key={i}>
            <RestaurantCard restaurant={restaurant} />
          </div>
        );
      })}
    </div>
  );
}
