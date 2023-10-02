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
      <Route
        path="/jobdetail/:id"
        element={
          <PrivateRouteForEmployee>
            <PrivateRouteForIsAuthCandidate>
              <JobDetail />
            </PrivateRouteForIsAuthCandidate>
          </PrivateRouteForEmployee>
        }
      ></Route>
      <Route
        path="/jobapplications"
        element={
          <PrivateRouteForIsAuthCandidate>
            <JobApplicationProcess />
          </PrivateRouteForIsAuthCandidate>
        }
      ></Route>
      <Route
        path="/candidate"
        element={
          <PrivateRouteForIsAuthCandidate>
            <CandidateDashboard />
          </PrivateRouteForIsAuthCandidate>
        }
      ></Route>
      <Route
        path="/employee"
        element={
          <PrivateRouteForEmployee>
            <EmployeeDashboard />
          </PrivateRouteForEmployee>
        }
      ></Route>
      <Route
        path="/employeejobpost"
        element={
          <PrivateRouteForEmployee>
            <EmployeePostJobs />
          </PrivateRouteForEmployee>
        }
      ></Route>
    </Routes>
  );
}
