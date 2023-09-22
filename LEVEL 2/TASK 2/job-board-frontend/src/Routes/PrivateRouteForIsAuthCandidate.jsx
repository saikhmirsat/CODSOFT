import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRouteForIsAuthCandidate({ children }) {
  const isAuth = localStorage.getItem("isAuthEmp");

  if (!isAuth) {
    alert("Please login first as a candidate");
    return <Navigate to="/" />;
  }

  return children;
}
