// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm45e-9sL8IVEHo6P4eQNBKYaihRH9ZzE",
  authDomain: "indeedauth.firebaseapp.com",
  projectId: "indeedauth",
  storageBucket: "indeedauth.appspot.com",
  messagingSenderId: "489087098112",
  appId: "1:489087098112:web:f2f9797cf5daed2799a7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// const provider = new GoogleAuthProvider();
// export const signInWithGoogle=()=>{
//     signInWithPopup(auth,provider)
//     .then((res)=>{
//         console.log(res.data)
//         const email = res.user.email;
        
//         localStorage.setItem("email", email)

//     }).catch((err)=>{
//         console.log(err)
//     })
    
    
// }