// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsZB0t8AnpCXuxRQAAMFs-OixA4CprRvs",
  authDomain: "netflixgpt-c0bad.firebaseapp.com",
  projectId: "netflixgpt-c0bad",
  storageBucket: "netflixgpt-c0bad.firebasestorage.app",
  messagingSenderId: "177423787473",
  appId: "1:177423787473:web:7e6918b7f31cdf4c06acf0",
  measurementId: "G-NW5GS9NFX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
