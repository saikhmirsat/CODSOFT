import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_normal">
        <div className="Nav_logo_con">
          <h2>Logo</h2>
        </div>
        <div className="Nav_right_items">
          <a href="">Jobs</a>
          <a href="">Job Applications</a>
          <a href="">Register & Login</a>
          <a href=""></a>
        </div>
      </div>
      <div className="Navbar_mobile"></div>
    </div>
  );
}
