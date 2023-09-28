import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./EmployeeDashboard.css";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const [data, setData] = useState([]);
  const token = Cookies.get("CandidateToken") || Cookies.get("EmployeeToken");

  console.log({ data });

  const navigate = useNavigate();

  const LoginFunc = () => {
    Cookies.remove("EmployeeToken");
    Cookies.remove("userData");
    Cookies.remove("isAuthCan");
    Cookies.remove("isAuthEmp");
    navigate("/");
    window.location.reload();
  };

  const user = JSON.parse(Cookies.get("userData"));
  const id = user._id;
  console.log({ id });

  const getData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/jobapplications/${id}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        const res = await response.json();
        setData(res);
      } else {
        console.log("Error fetching data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const jubStatusFunc = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/jobapplications/update/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: true }),
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
        }
      );

      if (response.ok) {
        console.log(await response.json());
        getData(); // Refresh data after updating status
      } else {
        console.log("Error updating status");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Employe_dashboard_main_container">
      EmployeeDashboard
      <button onClick={LoginFunc}>Logout</button>
      <h1>Candidates apply</h1>
      <div className="employe_container">
        <div className="Employ_table_header">
          <p>Candidate Name</p>

          {/* Render user name here */}
          <p>Job Role</p>
          <p>Status</p>
        </div>
        {data.map((ele) => (
          <div key={ele._id} className="employe_table_data">
            <p>{ele.candidateName}</p>

            {/* Render user name here */}
            <p> {ele.jobData.jobTitle}</p>
            <p>
              <button
                onClick={() => jubStatusFunc(ele._id)}
                disabled={ele.status == true}
                className={
                  ele.status
                    ? "employe_status_btn"
                    : "employe_status_btn_pending"
                }
              >
                {ele.status ? "Approved" : "pending"}
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
