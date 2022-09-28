import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { SignUp } from '../Authentication/SignUp'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import Salary from '../SalaryGuide/Salary'
import { MainCom } from './MainCom'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
          {/* <Route path="/signup" element={<SignUp/>}  /> */}
          {/* {/* <Route path='/' element={<MainCom/>}/> */}
          <Route path='/companyreview' element={<CompanyReviews/>}/>
          <Route path="/salary" element={<Salary/>}/>
        </Routes>
    </div>
  )
}
