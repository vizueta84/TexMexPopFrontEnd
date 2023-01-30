import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "beige",
        textAlign: "center",
      }}
    >
      <h1 style={{marginTop:0}}>TexMexPop</h1>

      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/add-restaurant">Add Restaurant</Link>
        <Link to="/signup">SignUp</Link>
      </nav>
    </header>
  );
}
