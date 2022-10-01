import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { LoadingToRedirect } from './LoadingToRedirect';


export const UserRoute = ({children, ...rest}) => {
    const {currentUser}= useSelector((state)=>state.user);
  return currentUser ? children : <LoadingToRedirect/>;
    
}
{/* <Route {...rest} /> */}
