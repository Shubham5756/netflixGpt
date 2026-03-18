// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWvl2xJ7OeUgaHS1tRkIrrdsUBZE4GyEg",
  authDomain: "netflixgpt-d8981.firebaseapp.com",
  projectId: "netflixgpt-d8981",
  storageBucket: "netflixgpt-d8981.firebasestorage.app",
  messagingSenderId: "403863708208",
  appId: "1:403863708208:web:8eb5e338b8b177ad5143f5",
  measurementId: "G-K9STMYLQ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 