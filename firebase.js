// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_uDqENzILRLGs0UeFzO8NuMxU0RiF3s",
  authDomain: "waltwallmartaisupport.firebaseapp.com",
  projectId: "waltwallmartaisupport",
  storageBucket: "waltwallmartaisupport.appspot.com",
  messagingSenderId: "917381916476",
  appId: "1:917381916476:web:9ab6a8be571afc01d2a039",
  measurementId: "G-LVERGTM75P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);