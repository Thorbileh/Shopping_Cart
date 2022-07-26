// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { dblClick } from "@testing-library/user-event/dist/click";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIZKLjLFSNeO8qdAgb65ZzSjaGuASVThY",
  authDomain: "shopping-cart-app-613c5.firebaseapp.com",
  projectId: "shopping-cart-app-613c5",
  storageBucket: "shopping-cart-app-613c5.appspot.com",
  messagingSenderId: "733691574825",
  appId: "1:733691574825:web:a3b2aac2eea352390e7a38",
  measurementId: "G-3S0CSFDGCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default db;