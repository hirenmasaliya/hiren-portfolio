import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmnjwLYhFeNWcBJWdphEkPG1jJv7HmkaM",
  authDomain: "hirenmasaliya1411.firebaseapp.com",
  databaseURL: "https://hirenmasaliya1411-default-rtdb.firebaseio.com",
  projectId: "hirenmasaliya1411",
  storageBucket: "hirenmasaliya1411.firebasestorage.app",
  messagingSenderId: "18658068022",
  appId: "1:18658068022:web:036a0a53b63f13e27fba97",
  measurementId: "G-GPEX7V49HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);