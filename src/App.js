import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
