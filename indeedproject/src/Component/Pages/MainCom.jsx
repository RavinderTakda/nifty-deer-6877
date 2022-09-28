import React from 'react'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import { Allroutes } from './Allroutes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainCom = () => {
  return (
    <div>
        <Navbar/>
        <Allroutes/>
        {/* <Footer/> */}
        <CompanyReviews/>
    </div>
  )
}
