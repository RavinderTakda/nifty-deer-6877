import{createUserWithEmailAndPassword,
    signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup,
    sendPasswordResetEmail} from "@firebase/auth";
import { auth } from "../../../Firebase"
import * as types from "./actionTypes"

export const SignUp = (email,password)=> dispatch=>{
    dispatch({type:types.USER_SIGNUP_REQUEST})
    return createUserWithEmailAndPassword(auth,email,password)
}

export const login=(email,password)=> dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    return signInWithEmailAndPassword(auth,email,password)
}

export const LogOut= (payload)=> dispatch=>{
    return signOut(auth)
}

export const passwordReset=(email)=>dispatch=>{
    return sendPasswordResetEmail(auth,email);
}

export const setUser=(user)=>({
    type:types.SET_USER,
    payload:user,
})

export const GoogleSignIn=()=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    const GoogleAuth = new GoogleAuthProvider();
    return signInWithPopup(auth,GoogleAuth) 
}