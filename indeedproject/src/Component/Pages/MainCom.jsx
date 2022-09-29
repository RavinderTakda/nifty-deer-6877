import React from 'react'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import Salary from '../SalaryGuide/Salary'
import { Allroutes } from './Allroutes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainCom = () => {
  return (
    <div>
        <Navbar/>
        <Allroutes/>
        {/* <Salary/> */}
        {/* <Footer/> */}
        {/* <CompanyReviews/> */}
    </div>
  )
}
