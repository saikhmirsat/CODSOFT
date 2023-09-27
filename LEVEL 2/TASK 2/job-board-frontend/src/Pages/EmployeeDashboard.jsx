import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function EmployeeDashboard() {
  const [data, setData] = useState([]);

  const token = Cookies.get("CandidateToken") || Cookies.get("EmployeeToken");

  const LoginFunc = () => {
    localStorage.removeItem("isAuth");
    window.location.reload();
  };

  const getData = async () => {
    try {
      await fetch(
        `http://localhost:8080/jobstatus/filteredData/650afeccb63b4872712198fe`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: token,
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const jubStatusFunc = async (id) => {
    try {
      await fetch(`http://localhost:8080/jobstatus/update/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: true }),
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          getData();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      EmployeeDashboard
      <button onClick={LoginFunc}>Logout</button>
      <div>
        {data.map((ele) => (
          <div key={ele._id}>
            <h1>{ele.user}</h1>

            <button onClick={() => jubStatusFunc(ele._id)}>
              {ele.status ? "sucess" : "pending"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
