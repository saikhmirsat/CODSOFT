import React from "react";
import "./Home.css";
import image1 from "../Assets/left_image.png";

export default function Home() {
  return (
    <div className="home_main_container">
      <img className="image_1_home" src={image1} alt="" />
      <img
        className="image_2_home"
        src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png?f=webp"
        alt=""
      />

      <div>
        <div className="Home_heading_div">
          <h1>CODESOFT</h1>
          <h2>
            Discover your dream job or hire top talent effortlessly with{" "}
            <b>CODSOFT</b>. We connect employers and candidates seamlessly,
            simplifying the hiring process. Join us today and take the next step
            in your career journey!
          </h2>
        </div>

        <button className="home_btn_job">Click Here For Jobs</button>
      </div>
    </div>
  );
}
