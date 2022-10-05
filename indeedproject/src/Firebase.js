
import { initializeApp } from "@firebase/app";
import {getAuth} from "@firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBm45e-9sL8IVEHo6P4eQNBKYaihRH9ZzE",
  authDomain: "indeedauth.firebaseapp.com",
  projectId: "indeedauth",
  storageBucket: "indeedauth.appspot.com",
  messagingSenderId: "489087098112",
  appId: "1:489087098112:web:f2f9797cf5daed2799a7e5"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
