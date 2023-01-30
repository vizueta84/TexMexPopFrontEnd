import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

export default function RestaurantList({ allRestaurants }) {
  console.log("list of restaurants", allRestaurants);

  return <div>
    {allRestaurants.map((restaurant,i)=> {
        return(
            <div key={i}>
                <h4>
                    <Link to={restaurant.link} target="_blank">
                    {restaurant.restaurant_name}
                    </Link>
                </h4>
                <p>{restaurant.description}</p>
                <Rating rating={restaurant.rating}/>
                <Link to={'/new-rating'}  state={restaurant}>Rate this Restaurant</Link>
            </div>
        )
    })}
  </div>;
}
