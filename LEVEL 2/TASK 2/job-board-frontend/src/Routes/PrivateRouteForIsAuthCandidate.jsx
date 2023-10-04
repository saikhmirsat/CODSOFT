import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrivateRouteForIsAuthCandidate({ children }) {
  const isAuthEmp = localStorage.getItem("isAuthEmp");
  const isAuthCan = localStorage.getItem("isAuthCan");

  if (isAuthEmp) {
    alert("Your not authorized");
    return <Navigate to="/" />;
  }

  return children;
}
