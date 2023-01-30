import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";


export default function AddRestaurant({setAllRestaurants, allRestaurants}) {
  const cookies = cookie.parse(document.cookie);
  const navigate = useNavigate()
  console.log(cookies);
  const [restaurant, setRestaurant] = useState({
    restaurant_name: "",
    link: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRestaurant({
      ...restaurant,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(restaurant));
    fetch("https://tex-mex-pop.vercel.app/restaurants/create-restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies.token}`,
      },
      body: JSON.stringify(restaurant),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        restaurant.id = data.insertId
        setAllRestaurants([
          ...allRestaurants,
          restaurant
        ])
        navigate("/")
      });
  };

  useEffect(() => {
    console.log(restaurant);
  }, [restaurant]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Add New Restaurant</h4>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: 200,
          gap: 10,
        }}
      >
        <input
          required
          type="text"
          label="restaurant name"
          name="restaurant_name"
          placeholder="restaurant name"
          onChange={handleChange}
          value={restaurant.restaurant_name}
        />
        <input
          required
          type="text"
          label="link"
          name="link"
          placeholder="link"
          onChange={handleChange}
          value={restaurant.link}
        />
        <input
          required
          type="text"
          label="description"
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={restaurant.description}
        />
        <input
          required
          type="text"
          label="address"
          name="address"
          placeholder="address"
          onChange={handleChange}
          value={restaurant.address}
        />
        <input
          required
          type="text"
          label="city"
          name="city"
          placeholder="city"
          onChange={handleChange}
          value={restaurant.city}
        />
        <input
          required
          type="text"
          label="state"
          name="state"
          placeholder="state"
          onChange={handleChange}
          value={restaurant.state}
        />
        <input
          required
          type="text"
          label="zip"
          name="zip"
          placeholder="zip"
          onChange={handleChange}
          value={restaurant.zip}
        />
        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}
