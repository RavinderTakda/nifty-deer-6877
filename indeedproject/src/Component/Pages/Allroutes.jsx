import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Authentication/Login'
import { SignUp } from '../Authentication/SignUp'
import CompanyReviews from '../CompanyReviews/CompanyReviews'

import { HomePage } from '../FindJob/HomePage'
import { Searchbox } from '../FindJob/Searchbox'

import SinglePage from '../CompanyReviews/SinglePage'
import { CompanyInfo } from '../SalaryGuide/CompanyInfo'

import Salary from '../SalaryGuide/Salary'
import { UserRoute } from './UserRoute'

export const Allroutes = () => {
  return (
    <div>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/companyreview' element={<CompanyReviews/>}/>
          <Route path='/companyreview/:id' element={<SinglePage/>}/>
          <Route path="/salary" element={<Salary/>}/>

          <Route path="/findjob"  element={<Searchbox/>} />
          <Route path="/"  element={<UserRoute><HomePage/></UserRoute>} />
          <Route path='/career/salaries/:id' element={<CompanyInfo/>}/>

        </Routes>
    </div>
  )
}
