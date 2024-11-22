// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHzRQMT-KtS4p4qYBL7iRDP0EgW9wISrI",
  authDomain: "netflixgpt-6b978.firebaseapp.com",
  projectId: "netflixgpt-6b978",
  storageBucket: "netflixgpt-6b978.firebasestorage.app",
  messagingSenderId: "817372546520",
  appId: "1:817372546520:web:2f4976dc6f431d873b9ead",
  measurementId: "G-V5B7TNQP3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
