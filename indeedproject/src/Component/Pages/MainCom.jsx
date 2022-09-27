import React from 'react'
import { Allroutes } from './Allroutes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainCom = () => {
  return (
    <div>
        <Navbar/>
        <Allroutes/>
        <Footer/>
    </div>
  )
}
