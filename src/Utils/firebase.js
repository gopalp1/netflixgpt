// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgFQ1cWavCTzYb9r4xhcl8K5x1UXhshls",
  authDomain: "netflixgpt-24b1a.firebaseapp.com",
  projectId: "netflixgpt-24b1a",
  storageBucket: "netflixgpt-24b1a.appspot.com",
  messagingSenderId: "740817394624",
  appId: "1:740817394624:web:0bb7ba5cb31a588ebf4625",
  measurementId: "G-T4W26PK9QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();
