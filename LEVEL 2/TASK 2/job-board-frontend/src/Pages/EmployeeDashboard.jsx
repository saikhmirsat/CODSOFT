import React from "react";

export default function EmployeeDashboard() {
  const LoginFunc = () => {
    localStorage.removeItem("isAuth");
    window.location.reload();
  };

  return (
    <div>
      EmployeeDashboard
      <button onClick={LoginFunc}>Logout</button>
    </div>
  );
}
