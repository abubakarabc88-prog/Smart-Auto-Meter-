// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update, set, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1zpOUsI8d6oe-CejLjMCguKwibmD0X_I",
  authDomain: "smart-auto-meter.firebaseapp.com",
  databaseURL: "https://smart-auto-meter-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-auto-meter",
  storageBucket: "smart-auto-meter.firebasestorage.app",
  messagingSenderId: "811101350671",
  appId: "1:811101350671:web:032d51923838fa81e16c7a"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

export { db, auth, ref, onValue, update, set, get, signInWithEmailAndPassword, onAuthStateChanged };