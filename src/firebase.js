// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import * as auth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMbRQ1fVlM3vwTA3sv8hBgvrzmfLTyHgk",
  authDomain: "remainder-8c6ee.firebaseapp.com",
  projectId: "remainder-8c6ee",
  storageBucket: "remainder-8c6ee.appspot.com",
  messagingSenderId: "113262164217",
  appId: "1:113262164217:web:e4ea09e5941ae6b3378a28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const FBauth = getAuth(app);
