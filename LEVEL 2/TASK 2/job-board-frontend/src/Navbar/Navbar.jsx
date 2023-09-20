import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const isAuth = localStorage.getItem("isAuth");
  console.log(isAuth);

  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };

  const closeHamburgerFunc = () => {
    setHamburger(false);
  };

  return (
    <div className="Navbar">
      <div className="Navbar_normal">
        <div className="Nav_logo_con">
          <h2>Logo</h2>
        </div>
        <div className="Nav_right_items">
          <Link to="/joblistings">Jobs</Link>

          {isAuth === "employee" ? (
            <Link to="/employeejobpost">Post Jobs</Link>
          ) : (
            ""
          )}
          {isAuth === "candidate" ? (
            <Link to="/jobapplications">Job Applications</Link>
          ) : (
            ""
          )}
          {isAuth === "employee" ? <Link to="/employee">Dashboard</Link> : ""}
          {isAuth === "candidate" ? <Link to="/candidate">Dashboard</Link> : ""}
          {isAuth === "candidate" || isAuth === "employee" ? (
            ""
          ) : (
            <Link to="/registerandlogin">Register & Login</Link>
          )}
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
          <Link onClick={closeHamburgerFunc} to="/joblistings">
            Jobs
          </Link>

          {isAuth === "employee" ? (
            <Link onClick={closeHamburgerFunc} to="/employeejobpost">
              Post Jobs
            </Link>
          ) : (
            ""
          )}
          {isAuth === "candidate" ? (
            <Link onClick={closeHamburgerFunc} to="/jobapplications">
              Job Applications
            </Link>
          ) : (
            ""
          )}
          {isAuth === "employee" ? (
            <Link onClick={closeHamburgerFunc} to="/employee">
              Dashboard
            </Link>
          ) : (
            ""
          )}
          {isAuth === "candidate" ? (
            <Link onClick={closeHamburgerFunc} to="/candidate">
              Dashboard
            </Link>
          ) : (
            ""
          )}

          {isAuth === "candidate" || isAuth === "employee" ? (
            ""
          ) : (
            <Link
              onClick={closeHamburgerFunc}
              style={{ border: "unset" }}
              to="/registerandlogin"
            >
              Register & Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
