import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAef0b2KDrdWCcKJBmOW88PX4FZLtrn8Co",
  authDomain: "pnaa-8b56f.firebaseapp.com",
  projectId: "pnaa-8b56f",
  storageBucket: "pnaa-8b56f.appspot.com",
  messagingSenderId: "1072615861967",
  appId: "1:1072615861967:web:8ed5ad49a18b5a2b0651ba",
  measurementId: "G-HW8Z1LHJSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;