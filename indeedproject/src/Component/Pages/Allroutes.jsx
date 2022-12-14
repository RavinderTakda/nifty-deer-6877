import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginUser } from "../Authentication/Login";
import {  SignUpUser } from "../Authentication/SignUp";
import CompanyReviews from "../CompanyReviews/CompanyReviews";
import { HomePage } from "../FindJob/HomePage";
import { Searchbox } from "../FindJob/Searchbox";
import SinglePage from "../CompanyReviews/SinglePage";
import { CompanyInfo } from "../SalaryGuide/CompanyInfo";
import Salary from "../SalaryGuide/Salary";
import { ApplyJobForm } from "../FindJob/ApplyJobForm";
import { UserRoute } from "./UserRoute";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/companyreview" element={<CompanyReviews />} />
        <Route path="/companyreview/:id" element={<SinglePage />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/findjob" element={<Searchbox />} />
        <Route path="/" element={<HomePage />} />

        <Route path="/career/salaries/:id" element={<CompanyInfo />} />
        <Route
          path="/applyjob"
          element={
            <UserRoute>
              <ApplyJobForm />
            </UserRoute>
          }
        />
      </Routes>
    </div>
  );
};
