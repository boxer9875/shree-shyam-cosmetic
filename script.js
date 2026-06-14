import { db } from "./firebase.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase Products

async function loadProducts() {

    const productGrid = document.getElementById("productGrid");

    if (!productGrid) return;

    productGrid.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        productGrid.innerHTML += `
      <div class="product">
        <img src="${data.image}" style="width:100%;height:180px;object-fit:cover;border-radius:10px;">
        <h3>${data.name}</h3>
        <p>₹${data.price}</p>
      </div>
    `;

    });

}

loadProducts();

// Sticky Navbar

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
        }
    }

});