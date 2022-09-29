import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Authentication/Login'
import { SignUp } from '../Authentication/SignUp'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import SinglePage from '../CompanyReviews/SinglePage'
import Salary from '../SalaryGuide/Salary'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/signup" element={<SignUp/>}  />
          <Route path='/login' element={<Login/>}/>
          <Route path='/companyreview' element={<CompanyReviews/>}/>
          <Route path='/companyreview/:id' element={<SinglePage/>}/>
          <Route path="/salary" element={<Salary/>}/>
        </Routes>
    </div>
  )
}
