import React from 'react'
import { Navigate } from "react-router-dom";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {

  const { component: Component, ...rest } = props;

  return (
    checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/login" /> )
  );
};

export default ProtectedRoute;
