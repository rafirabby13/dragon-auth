// Import the functions you need from the SDKs you need
import dotenv from 'dotenv'
dotenv.config()
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBv1popiYi0Piu9RRU5bt9VF63k5NoyLso',
  authDomain: "dragon-auth-f3d25.firebaseapp.com",
  projectId: "dragon-auth-f3d25",
  storageBucket: "dragon-auth-f3d25.firebasestorage.app",
  messagingSenderId: "696967001856",
  appId: "1:696967001856:web:9b43144c22c8cbadf8e5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;