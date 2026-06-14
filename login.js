import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)

        .then(() => {

            alert("Login Successful ✅");

            window.location.href = "admin.html";

        })

        .catch((error) => {

            alert(error.message);

        });

});