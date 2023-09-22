import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function JobDetail() {
  const [data, setData] = useState({});

  const token = Cookies.get("CandidateToken");
  console.log(token);

  const { id } = useParams();

  useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    try {
      await fetch(`http://localhost:8080/jobs/${id}`, {
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

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}
