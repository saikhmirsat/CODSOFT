import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import RegisterLogin from "../RegisterAndLogin/RegisterLogin";
import JobDetail from "../Pages/JobDetail";
import JobListings from "../Pages/JobListings";
import JobApplicationProcess from "../Pages/JobApplicationProcess";
import CandidateDashboard from "../Pages/CandidateDashboard";
import EmployeeDashboard from "../Pages/EmployeeDashboard";
import EmployeePostJobs from "../Pages/EmployeePostJobs";
import PrivateRouteForEmployee from "./PrivateRouteForEmployee";
import PrivateRouteForIsAuthCandidate from "./PrivateRouteForIsAuthCandidate";

export default function Allroutes() {
  const isAuth = localStorage.getItem("isAuth");
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
      <Route path="/candidate" element={<CandidateDashboard />}></Route>
      <Route path="/employee" element={<EmployeeDashboard />}></Route>
      <Route path="/employeejobpost" element={<EmployeePostJobs />}></Route>
    </Routes>
  );
}
