import React from "react";
import Cookies from "js-cookie";

export default function CandidateDashboard() {
  const LoginFunc = () => {
    Cookies.set("isAuthCan", false);
    window.location.reload();
  };

  return (
    <div>
      CandidateDashboard
      <button onClick={LoginFunc}>Logout</button>
    </div>
  );
}
