import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterLogin from "../RegisterAndLogin/RegisterLogin";
import JobDetail from "../Pages/JobDetail";
import JobListings from "../Pages/JobListings";
import JobApplicationProcess from "../Pages/JobApplicationProcess";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/registerandlogin" element={<RegisterLogin />}></Route>
      <Route path="/joblistings" element={<JobListings />}></Route>
      <Route path="/jobdetail/:id" element={<JobDetail />}></Route>
      <Route
        path="/jobapplications"
        element={<JobApplicationProcess />}
      ></Route>
      <Route path="/candidate" element={<JobApplicationProcess />}></Route>
      <Route path="/employee" element={<JobApplicationProcess />}></Route>
    </Routes>
  );
}
