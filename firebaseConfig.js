import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDkJK9YAqfTPogXWzfVeM3qg4CdfLYboU0",
  authDomain: "login-signup-ca113.firebaseapp.com",
  projectId: "login-signup-ca113",
  storageBucket: "login-signup-ca113.appspot.com",
  messagingSenderId: "248065357745",
  appId: "1:248065357745:web:d2197a8f5779de2935ef90"
};

// Initialize Firebase



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword}