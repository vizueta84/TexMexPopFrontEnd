import React, { useEffect, useState } from "react";
import cookie from "cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://tex-mex-fx23eqhg9-vizueta84.vercel.app/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        document.cookie = cookie.serialize("loggedIn", "true", {
          maxAge: 1000 * 60,
        });
        document.cookie = cookie.serialize("token", data.token, {
          maxAge: 1000 * 60,
        });
      });
  };

  useEffect(() => {
    console.log(username, password);
  }, [username, password]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Login</h4>
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
          label="Username"
          name="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          required
          type="Password"
          label="Password"
          name="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
