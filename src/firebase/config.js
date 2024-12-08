// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFYW3XfToOsssnb9ks3pETWN0XMlIXLBs",
  authDomain: "react-with-firebase-8390f.firebaseapp.com",
  projectId: "react-with-firebase-8390f",
  storageBucket: "react-with-firebase-8390f.firebasestorage.app",
  messagingSenderId: "990540733906",
  appId: "1:990540733906:web:ea0d0fc0078debe06e7c0b",
  measurementId: "G-RLNF5QXN9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);