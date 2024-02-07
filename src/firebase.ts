// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtRtPZ75Y5ybOSM8-MrnpLTlNWmdf8fnU",
  authDomain: "test-app-d7e65.firebaseapp.com",
  projectId: "test-app-d7e65",
  storageBucket: "test-app-d7e65.appspot.com",
  messagingSenderId: "1053463685028",
  appId: "1:1053463685028:web:8eae10c9e1392dc14f8331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
