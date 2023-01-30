import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cookie from "cookie";

export default function Header({ loggedIn, setLoggedIn }) {
  const cookies = cookie.parse(document.cookie);

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, { maxAge: 0 });
    document.cookie = cookie.serialize("token", null, { maxAge: 0 });
    setLoggedIn(false);
  };

  useEffect(() => {
    if (cookies.loggedIn) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <header
      style={{
        height: 100,
        width: "100%",
        backgroundColor: "beige",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginTop: 0 }}>TexMexPop</h1>

      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">Home</Link>
        <Link to="/add-restaurant">Add Restaurant</Link>
        {loggedIn ? null : <Link to="/signup">SignUp</Link>}
        {loggedIn ? (
          <span
            style={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
            onClick={handleLogout}
          >
            Logout
          </span>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
