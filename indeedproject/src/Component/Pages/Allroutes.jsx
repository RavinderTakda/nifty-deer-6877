import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../Authentication/SignUp'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import { HomePage } from '../FindJob/HomePage'
import { Searchbox } from '../FindJob/Searchbox'
import Salary from '../SalaryGuide/Salary'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/signup" element={<SignUp/>}  />
          <Route path='/companyreview' element={<CompanyReviews/>}/>
          <Route path="/salary" element={<Salary/>}/>
          <Route path="/findjob"  element={<Searchbox/>} />
          <Route path="/"  element={<HomePage/>} />
        </Routes>
    </div>
  )
}
