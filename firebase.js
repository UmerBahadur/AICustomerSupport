
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };
