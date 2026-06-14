// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDi5vV4Pmx0q91_G47-8FlzCGkDmdJREfg",
    authDomain: "shree-shyam-cosmetics.firebaseapp.com",
    projectId: "shree-shyam-cosmetics",
    storageBucket: "shree-shyam-cosmetics.firebasestorage.app",
    messagingSenderId: "945311875243",
    appId: "1:945311875243:web:c84f3543c40a731cf277ee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);