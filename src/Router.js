import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddRestaurant from "./pages/AddRestaurant";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RestaurantList from "./pages/RestaurantList";
import NewRating from "./pages/NewRating";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
    const [allRestaurants, setAllRestaurants] = useState([])

  useEffect(() => {
    fetch("https://tex-mex-fx23eqhg9-vizueta84.vercel.app/ratings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllRestaurants(data)
      });
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<RestaurantList allRestaurants={allRestaurants} />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/add-restaurant"} element={<AddRestaurant />} />
      <Route path={"/new-rating"} element={<ProtectedRoute component={NewRating} />} />
    </Routes>
  );
};

export default Router;
