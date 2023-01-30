import React, { useEffect, useState } from "react";
import cookie from "cookie";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://tex-mex-pop.vercel.app/users/create-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(
            "Email already exits. Please try another one or try logging in."
          );
        }
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
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        return setError(err.message);
      });
  };

  useEffect(() => {
    console.log(username, password, email);
  }, [username, password, email]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Sign Up</h4>
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
        <input
          required
          type="Email"
          label="Email"
          name="Email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Sign Up</button>
        <span style={{ color: "red" }}>{error}</span>
      </form>
    </div>
  );
}
