import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRouteForEmployee({ children }) {
  // const isAuth = localStorage.getItem("isAuthCan");
  const isAuth = Cookies.get("isAuthCan");

  if (!isAuth) {
    alert("Please login first as a employee");
    return <Navigate to="/" />;
  }

  return children;
}
