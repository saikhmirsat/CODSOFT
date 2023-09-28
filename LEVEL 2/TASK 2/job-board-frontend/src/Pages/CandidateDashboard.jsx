import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const LoginFunc = () => {
    Cookies.remove("EmployeeToken");
    Cookies.remove("userData");
    Cookies.remove("isAuthCan");
    Cookies.remove("isAuthEmp");
    window.location.reload();
    navigate("/");
    window.location.reload();
  };

  return (
    <div>
      CandidateDashboard
      <button onClick={LoginFunc}>Logout</button>
    </div>
  );
}
