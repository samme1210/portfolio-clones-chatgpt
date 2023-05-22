import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFcG0n93GG4y8sljdxhUJkAJESek_9-g0",
  authDomain: "portfolio-clones-chatgpt.firebaseapp.com",
  projectId: "portfolio-clones-chatgpt",
  storageBucket: "portfolio-clones-chatgpt.appspot.com",
  messagingSenderId: "555005862122",
  appId: "1:555005862122:web:26e801af90d05e6c7d3793",
  measurementId: "G-VBC0S6KCMM"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app); 
const analytics = getAnalytics(app);

export { db }