import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddRestaurant from "./pages/AddRestaurant";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RestaurantList from "./pages/RestaurantList";
import NewRating from "./pages/NewRating";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";


const Router = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("https:/tex-mex-pop.vercel.app/ratings")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllRestaurants(data);
      });
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path={"/"}
          element={
            <RestaurantList
              allRestaurants={allRestaurants}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route
          path={"/login"}
          element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        />
        <Route path={"/signup"} element={<SignUp />} />
        <Route
          path={"/add-restaurant"}
          element={
            <ProtectedRoute
              component={AddRestaurant}
              setAllRestaurants={setAllRestaurants}
              allRestaurants={allRestaurants}
            />
          }
        />
        <Route
          path={"/new-rating"}
          element={<ProtectedRoute component={NewRating} />}
        />
      </Routes>
    </>
  );
};

export default Router;
