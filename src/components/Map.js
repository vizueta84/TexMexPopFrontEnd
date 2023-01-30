import React from "react";

export default function Map({ restaurant }) {
  const addressParams = [
    restaurant.name,
    restaurant.address,
    restaurant.city,
    restaurant.state,
    restaurant.zip,
  ]
    .join("+")
    .replace(" ", "+");
  console.log(addressParams);
  return (
    <iframe
      title="map"
      width="400"
      height="300"
      // style="border:0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&q=${addressParams}`}
    ></iframe>
  );
}
