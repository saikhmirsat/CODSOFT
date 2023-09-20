import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouteForEmployee({ children }) {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth == "employee") {
    return;
  } else {
    alert("Please login first as a employee");
    return <Navigate to="/" />;
  }

  return children;
}
