import React from 'react'
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { LoadingToRedirect } from './LoadingToRedirect';


export const UserRoute = ({children, ...rest}) => {
  const navigate= useNavigate()
    const {currentUser}= useSelector((state)=>state.user);
  return currentUser ? children : navigate("/login") 
    
}
{/* <Route {...rest} /> */}
