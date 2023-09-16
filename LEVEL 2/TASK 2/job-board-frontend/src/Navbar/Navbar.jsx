import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="Navbar">
      <div className="Navbar_normal">
        <div className="Nav_logo_con">
          <h2>Logo</h2>
        </div>
        <div className="Nav_right_items">
          <a href="#">Jobs</a>
          <a href="#">Job Applications</a>
          <Link to="/registerandlogin">Register & Login</Link>
        </div>
      </div>
      <div className="Navbar_mobile">
        <div className="mobile_nav_container">
          <div>
            <h2>Logo</h2>
          </div>
          <div>
            <button onClick={toggleHamburger}>
              {hamburger ? (
                <RxCrossCircled size="25px" />
              ) : (
                <GiHamburgerMenu size="25px" />
              )}
            </button>
          </div>
        </div>
        <div className={`mobile_nav_items ${hamburger ? "show" : "hide"}`}>
          <a href="">Profile</a>
          <a href="">Jobs</a>
          <a href="" style={{ border: "non" }}>
            Register & Login
          </a>
        </div>
      </div>
    </div>
  );
}
