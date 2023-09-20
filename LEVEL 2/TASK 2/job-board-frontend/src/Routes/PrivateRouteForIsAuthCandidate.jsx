import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouteForIsAuthCandidate({ children }) {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth == "candidate") {
    return;
  } else {
    alert("Please login first as a candidate");
    return <Navigate to="/" />;
  }

  return children;
}
