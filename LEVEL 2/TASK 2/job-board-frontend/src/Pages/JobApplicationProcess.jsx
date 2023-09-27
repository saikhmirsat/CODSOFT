import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function JobApplicationProcess() {
  const [jobStatus, setJobStatus] = useState([]);

  const token = Cookies.get("CandidateToken") || Cookies.get("EmployeeToken");

  const userData = JSON.parse(Cookies.get("userData"));

  useEffect(() => {
    fetch(`http://localhost:8080/jobstatus/${userData._id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res); // Log the entire response for inspection
        setJobStatus(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Job Application Process</h2>
      {jobStatus.length > 0 ? (
        <div>
          {jobStatus.map((item, index) => (
            <div key={index}>
              <p>User ID: {item.user}</p>
              <p>Status: {item.status ? "Success" : "Pending"}</p>
              <p>Job Title: {item.jobData.jobTitle}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
