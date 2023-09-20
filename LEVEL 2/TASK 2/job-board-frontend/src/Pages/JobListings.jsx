import React from "react";
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

export default function JobListings() {
  return (
    <div className="Joblisting_main_container">
      <div>
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <div className="Joblisting_search_box">
          <BiSearch size="30px" />
          <input type="text" placeholder="Search your dream jobs" />
          <button>Search</button>
        </div>
        <div className="filter_section_joblisting">
          <div className="tooltip">
            <AiOutlineHome size="20px" />
            <h3>Remote</h3>
            <h3 className="tooltiptext">Remote</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <BiSolidBuildingHouse size="20px" />
            <h3>MNC</h3>
            <h3 className="tooltiptext">MNC</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <BsGraphUpArrow size="20px" />
            <h3>Data Science & Analytics </h3>
            <h3 className="tooltiptext">Data Science & Analytics </h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <BsBoxSeam size="20px" />
            <h3>Supply Chain</h3>
            <h3 className="tooltiptext">Supply Chain</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <SlGraph size="20px" />
            <h3>Marketing</h3>
            <h3 className="tooltiptext">Marketing</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <GrSystem size="20px" />
            <h3>Software & IT</h3>
            <h3 className="tooltiptext">Software & IT</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <FaToolbox size="20px" />
            <h3>Sales</h3>
            <h3 className="tooltiptext">Sales</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <FaRupeeSign size="20px" />
            <h3>Banking & Finance</h3>
            <h3 className="tooltiptext">Banking & Finance</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <BsRocketTakeoff size="20px" />
            <h3>Startup</h3>
            <h3 className="tooltiptext">Startup</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <GrSettingsOption size="20px" />
            <h3>Engineering</h3>
            <h3 className="tooltiptext">Engineering</h3>
            <BiRightArrowAlt size="30px" />
          </div>
          <div className="tooltip">
            <FaSearchDollar size="20px" />
            <h3>Analytics</h3>
            <h3 className="tooltiptext">Analytics</h3>
            <BiRightArrowAlt size="30px" />
          </div>
        </div>

        <div className="Job_container_Jobslistings">
          <div className="job_conatiner_child1"></div>
          <div className="job_conatiner_child2">
            <div className="job_cards">
              <div className="job_card_first_container">
                <div>
                  <h3>Frontend Developer</h3>
                  <p>Diverse Lynx</p>
                </div>
                <div>
                  <img
                    src="https://img.naukimg.com/logo_images/groups/v1/4554388.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="job_card_second_container">
                <div>
                  <FaToolbox /> <p>2-5 year</p>
                </div>
                <div>
                  <FaRupeeSign /> <p>Not disclouse</p>
                </div>
                <div>
                  <GoLocation /> <p>Delhi</p>
                </div>
              </div>
              <div className="job_card_third_container">
                <GoNote size={30} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi ipsa sequi, molestias nulla nobis autem. Quidem,
                  animi asperiores! Quo aliquid, incidunt accusamus autem est
                  recusandae veritatis officiis? Iusto, modi repellat.
                </p>
              </div>
              <div className="job_card_container_four">
                <p>Front </p>
                <p>•</p>
                <p>Monitoring</p>
                <p>•</p>
                <p>designing</p>
                <p>•</p>
                <p>endCodingWeb</p>
              </div>
              <div className="job_card_container_five">
                <div>30+ days ago</div>
                <div>
                  <AiOutlineSave size={25} />
                  <p>Save</p>
                </div>
              </div>
            </div>

            <div className="job_cards">
              <div className="job_card_first_container">
                <div>
                  <h3>Frontend Developer</h3>
                  <p>Diverse Lynx</p>
                </div>
                <div>
                  <img
                    src="https://img.naukimg.com/logo_images/groups/v1/4554388.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="job_card_second_container">
                <div>
                  <FaToolbox /> <p>2-5 year</p>
                </div>
                <div>
                  <FaRupeeSign /> <p>Not disclouse</p>
                </div>
                <div>
                  <GoLocation /> <p>Delhi</p>
                </div>
              </div>
              <div className="job_card_third_container">
                <GoNote size={30} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi ipsa sequi, molestias nulla nobis autem. Quidem,
                  animi asperiores! Quo aliquid, incidunt accusamus autem est
                  recusandae veritatis officiis? Iusto, modi repellat.
                </p>
              </div>
              <div className="job_card_container_four">
                <p>Front </p>
                <p>•</p>
                <p>Monitoring</p>
                <p>•</p>
                <p>designing</p>
                <p>•</p>
                <p>endCodingWeb</p>
              </div>
              <div className="job_card_container_five">
                <div>30+ days ago</div>
                <div>
                  <AiOutlineSave size={25} />
                  <p>Save</p>
                </div>
              </div>
            </div>

            <div className="job_cards">
              <div className="job_card_first_container">
                <div>
                  <h3>Frontend Developer</h3>
                  <p>Diverse Lynx</p>
                </div>
                <div>
                  <img
                    src="https://img.naukimg.com/logo_images/groups/v1/4554388.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="job_card_second_container">
                <div>
                  <FaToolbox /> <p>2-5 year</p>
                </div>
                <div>
                  <FaRupeeSign /> <p>Not disclouse</p>
                </div>
                <div>
                  <GoLocation /> <p>Delhi</p>
                </div>
              </div>
              <div className="job_card_third_container">
                <GoNote size={30} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi ipsa sequi, molestias nulla nobis autem. Quidem,
                  animi asperiores! Quo aliquid, incidunt accusamus autem est
                  recusandae veritatis officiis? Iusto, modi repellat.
                </p>
              </div>
              <div className="job_card_container_four">
                <p>Front </p>
                <p>•</p>
                <p>Monitoring</p>
                <p>•</p>
                <p>designing</p>
                <p>•</p>
                <p>endCodingWeb</p>
              </div>
              <div className="job_card_container_five">
                <div>30+ days ago</div>
                <div>
                  <AiOutlineSave size={25} />
                  <p>Save</p>
                </div>
              </div>
            </div>
            <div className="job_cards">
              <div className="job_card_first_container">
                <div>
                  <h3>Frontend Developer</h3>
                  <p>Diverse Lynx</p>
                </div>
                <div>
                  <img
                    src="https://img.naukimg.com/logo_images/groups/v1/4554388.gif"
                    alt=""
                  />
                </div>
              </div>
              <div className="job_card_second_container">
                <div>
                  <FaToolbox /> <p>2-5 year</p>
                </div>
                <div>
                  <FaRupeeSign /> <p>Not disclouse</p>
                </div>
                <div>
                  <GoLocation /> <p>Delhi</p>
                </div>
              </div>
              <div className="job_card_third_container">
                <GoNote size={30} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi ipsa sequi, molestias nulla nobis autem. Quidem,
                  animi asperiores! Quo aliquid, incidunt accusamus autem est
                  recusandae veritatis officiis? Iusto, modi repellat.
                </p>
              </div>
              <div className="job_card_container_four">
                <p>Front </p>
                <p>•</p>
                <p>Monitoring</p>
                <p>•</p>
                <p>designing</p>
                <p>•</p>
                <p>endCodingWeb</p>
              </div>
              <div className="job_card_container_five">
                <div>30+ days ago</div>
                <div>
                  <AiOutlineSave size={25} />
                  <p>Save</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
