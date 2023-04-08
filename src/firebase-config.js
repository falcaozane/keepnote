// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBj1UgKrCzpStxxKG5KQE7TVj4ZyZQtB5I",
  authDomain: "note-it-b376e.firebaseapp.com",
  projectId: "note-it-b376e",
  storageBucket: "note-it-b376e.appspot.com",
  messagingSenderId: "167540759437",
  appId: "1:167540759437:web:5cfa1b47beb95229e23bc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);