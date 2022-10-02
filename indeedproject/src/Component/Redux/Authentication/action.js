
import * as types from "./actionTypes"
import {auth,googleAuthProvider} from "../../../Firebase"


const registerRequest =()=>{
    return{
        type:types.REGISTER_REQUEST
    }
}
const registerSuccess =(user)=>{
    return{
        type:types.REGISTER_SUCCESS,
        payload:user
    }
}
const registerFail =(err)=>{
    return{
        type:types.REGISTER_FAILURE,
        payload:err
    }
}

const loginRequest =()=>{
    return{
        type:types.LOGIN_REQUEST
    }
}
const loginSuccess =(user)=>{
    return{
        type:types.LOGIN_SUCCESS,
        payload:user
    }
}
const loginFail =(err)=>{
    return{
        type:types.LOGIN_FAILURE,
        payload:err
    }
}

const logOutRequest =()=>{
    return{
        type:types.LOGOUT_REQUEST
    }
}
const logOutSuccess =()=>{
    return{
        type:types.LOGOUT_SUCCESS,
        
    }
}
const logOutFail =(err)=>{
    return{
        type:types.LOGOUT_FAILURE,
        payload:err
    }
}

export const setUser=(user)=>({
    type:types.SET_USER,
    payload:user,
})

const GoogleRequest =()=>{
    return{
        type:types.GOOGLE_SIGN_IN_REQUEST
    }
}
const GoogleSuccess =(user)=>{
    return{
        type:types.GOOGLE_SIGN_IN_SUCCESS,
        payload:user
    }
}
const GoogleFail =(err)=>{
    return{
        type:types.GOOGLE_SIGN_IN_FAILURE,
        payload:err
    }
}




export const RegisterUser=(email,password,displayName)=>{
    return function(dispatch){
        dispatch(registerRequest());
        auth.createUserWithEmailAndPassword(email,password)
        .then(({user})=>{
            user.updateProfile({
                displayName:displayName,
                email:email
            });
            dispatch(registerSuccess(user));
        })
        .catch((error)=>dispatch(registerFail(error.message)))
    }
} 

export const LoginUser=(email,password)=>{
    console.log(email,password)
    return function(dispatch){
        dispatch(loginRequest());
        auth
        .signInWithEmailAndPassword(email,password)
        .then(({user})=>{
            dispatch(loginSuccess(user));
        })
        .catch((error)=>dispatch(loginFail(error.message)))
    }
} 

export const LogOutUser=()=>{
    return function(dispatch){
        dispatch(logOutRequest());
        auth
        .signOut()
        .then(()=>{
            dispatch(logOutSuccess());
        })
        .catch((error)=>dispatch(logOutFail(error.message)))
    }
} 


export const GoogleSignIn=()=>{
    return function(dispatch){
        dispatch(GoogleRequest());
        auth
        .signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(GoogleSuccess(user));
        })
        .catch((error)=>dispatch(GoogleFail(error.message)))
    }
} 