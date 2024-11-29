// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0yLNwFzOIXIQBGsiiY8eZFJK5KZrT7gs",
  authDomain: "coffee-store-c3b8d.firebaseapp.com",
  projectId: "coffee-store-c3b8d",
  storageBucket: "coffee-store-c3b8d.firebasestorage.app",
  messagingSenderId: "819439064331",
  appId: "1:819439064331:web:19d5c1bc5f7d316eacfe0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
