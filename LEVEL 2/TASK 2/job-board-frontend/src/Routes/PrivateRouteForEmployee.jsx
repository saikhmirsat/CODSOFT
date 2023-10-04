import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRouteForEmployee({ children }) {
  // const isAuth = localStorage.getItem("isAuthCan");
  const isAuthCan = Cookies.get("isAuthCan");
  const isAuthEmp = Cookies.get("isAuthEmp");

  if (isAuthCan) {
    alert("Your not authorized");
    return <Navigate to="/" />;
  }

  return children;
}
