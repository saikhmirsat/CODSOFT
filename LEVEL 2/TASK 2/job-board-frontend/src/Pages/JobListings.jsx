import React, { useEffect, useState } from "react";
import "./JobListings.css";
import {
  BiSearch,
  BiRightArrowAlt,
  BiSolidBuildingHouse,
} from "react-icons/bi";
import { AiOutlineHome, AiOutlineSave } from "react-icons/ai";
import { SlGraph } from "react-icons/sl";
import { GoLocation, GoNote } from "react-icons/go";
import { GrSystem, GrSettingsOption } from "react-icons/gr";
import { FaRupeeSign, FaToolbox, FaSearchDollar } from "react-icons/fa";
import { BsGraphUpArrow, BsBoxSeam, BsRocketTakeoff } from "react-icons/bs";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function JobListings() {
  const [data, setData] = useState([]);
  console.log({ data });

  const navigate = useNavigate();

  const token = Cookies.get("CandidateToken") || Cookies.get("EmployeeToken");

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      await fetch(`http://localhost:8080/jobs`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  function customFormatDistanceToNow(date) {
    const now = new Date();
    const diffInMilliseconds = now - date;
    const secondsAgo = Math.floor(diffInMilliseconds / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo >= 30) {
      const monthsAgo = Math.floor(daysAgo / 30);
      return `${monthsAgo} month${monthsAgo === 1 ? "" : "s"} ago`;
    } else if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
    } else {
      return `${secondsAgo} second${secondsAgo === 1 ? "" : "s"} ago`;
    }
  }

  const GotoDetailPageFunc = (id) => {
    navigate(`/jobdetail/${id}`);
  };

  return (
    <div className="Joblisting_main_container">
      <div>
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <div className="Joblisting_search_box">
          <BiSearch size="30px" className="Search_icon_joblisting" />
          <input type="text" placeholder="Search your dream jobs" />
          <button>Search</button>
        </div>
        <div className="filter_section_joblisting">
          <div className="tooltip">
            <AiOutlineHome size="20px" className="filter_stickers" />
            <h3>Remote</h3>
            <h3 className="tooltiptext">Remote</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <BiSolidBuildingHouse size="20px" className="filter_stickers" />
            <h3>MNC</h3>
            <h3 className="tooltiptext">MNC</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <BsGraphUpArrow size="20px" className="filter_stickers" />
            <h3>Data Science & Analytics </h3>
            <h3 className="tooltiptext">Data Science & Analytics </h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <BsBoxSeam size="20px" className="filter_stickers" />
            <h3>Supply Chain</h3>
            <h3 className="tooltiptext">Supply Chain</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <SlGraph size="20px" className="filter_stickers" />
            <h3>Marketing</h3>
            <h3 className="tooltiptext">Marketing</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <GrSystem size="20px" className="filter_stickers" />
            <h3>Software & IT</h3>
            <h3 className="tooltiptext">Software & IT</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <FaToolbox size="20px" className="filter_stickers" />
            <h3>Sales</h3>
            <h3 className="tooltiptext">Sales</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <FaRupeeSign size="20px" className="filter_stickers" />
            <h3>Banking & Finance</h3>
            <h3 className="tooltiptext">Banking & Finance</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <BsRocketTakeoff size="20px" className="filter_stickers" />
            <h3>Startup</h3>
            <h3 className="tooltiptext">Startup</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <GrSettingsOption size="20px" className="filter_stickers" />
            <h3>Engineering</h3>
            <h3 className="tooltiptext">Engineering</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
          <div className="tooltip">
            <FaSearchDollar size="20px" className="filter_stickers" />
            <h3>Analytics</h3>
            <h3 className="tooltiptext">Analytics</h3>
            <BiRightArrowAlt size="30px" className="filter_stickers" />
          </div>
        </div>

        <div className="Job_container_Jobslistings">
          <div className="job_conatiner_child1">
            <div>
              <p>Sort by date</p>
              
            </div>
          </div>
          <div className="job_conatiner_child2">
            {data &&
              data.map((ele) => (
                <div
                  key={ele._id}
                  className="job_cards"
                  onClick={() => GotoDetailPageFunc(ele._id)}
                >
                  <div className="job_card_first_container">
                    <div>
                      <h3>{ele.jobTitle}</h3>
                      <p>{ele.companyName}</p>
                    </div>
                    <div>
                      <img src={ele.CompanyLogo} alt="" />
                    </div>
                  </div>
                  <div className="job_card_second_container">
                    <div>
                      <FaToolbox /> <p>{ele.experience} year</p>
                    </div>
                    <div>
                      <FaRupeeSign /> <p>{ele.salary} lakh per anual</p>
                    </div>

                    <div>
                      <GoLocation /> <p>{ele.location}</p>
                    </div>
                  </div>

                  <div className="job_card_third_container">
                    <GoNote size={30} className="third_container_sticker" />
                    <p>
                      {`${ele.what_looking_in_collegue[1]}.
                        ${ele.what_looking_in_collegue[2]} & ${ele.what_looking_in_collegue[3]}`}
                    </p>
                  </div>

                  <div className="job_card_container_four">
                    {ele.skills.map((skill, index) => (
                      <React.Fragment key={index}>
                        <p>{skill}</p>
                        {index !== ele.skills.length - 1 && <p>•</p>}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="job_card_container_five">
                    <div>
                      {" "}
                      {customFormatDistanceToNow(new Date(ele.JobPostDate), {
                        addSuffix: true,
                      })}
                    </div>
                    <div>
                      <AiOutlineSave size={25} />
                      <p>Save</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
