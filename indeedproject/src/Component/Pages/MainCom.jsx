import React, { useEffect, useState } from 'react'
import { auth } from '../../Firebase'
import CompanyReviews from '../CompanyReviews/CompanyReviews'
import Salary from '../SalaryGuide/Salary'
import { Allroutes } from './Allroutes'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const MainCom = () => {
  const [userName,setUserName] = useState("");
   useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.email);
      }else setUserName("")
      console.log(user);
    })
   },[])

  return (
    <div>
        <Navbar name={userName}/>
        <Allroutes/>
    </div>
  )
}
