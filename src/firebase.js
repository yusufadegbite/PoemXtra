// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0jV8tgxMx-Mk7DMqTORXc6KZfX2_-kN0",
    authDomain: "poemextra-aefd0.firebaseapp.com",
    projectId: "poemextra-aefd0",
    storageBucket: "poemextra-aefd0.firebasestorage.app",
    messagingSenderId: "215302672318",
    appId: "1:215302672318:web:8ee574922824e6ad3ff3ef",
    measurementId: "G-GR4PHQ25R8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


