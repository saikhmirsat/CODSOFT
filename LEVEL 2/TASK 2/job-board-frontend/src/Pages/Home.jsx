import React from "react";
import "./Home.css";
import image1 from "../Assets/left_image.png";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home_main_container">
      <div className="home_banner">
        <img
          className="desktop_img"
          src="https://images.sampleforms.com/wp-content/uploads/2017/04/Termination-Clearance-Form.jpg"
          alt=""
        />
        <img className="mobile_img"
          src="https://thumbs.dreamstime.com/b/businesswoman-wearing-headset-working-busy-office-smiling-44096992.jpg"
          alt=""
        />
        <div>
          <h1>We Know A Talent When We See One</h1>
          <p>
            Hire Your Heart's Desire. Fuel Your Career With Us. Find Growth,
            Wherever You Are.
          </p>
          <div>
            <input type="text" name="" id="" placeholder="Search..." />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
