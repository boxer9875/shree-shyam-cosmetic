import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    if (!name || !price || !image) {
        alert("Sab fields bharna zaroori hai!");
        return;
    }

    await addDoc(collection(db, "products"), {
        name,
        price,
        image
    });

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";

    alert("✅ Product Added Successfully");

    loadProducts();

});

async function loadProducts() {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((item) => {

        const data = item.data();

        productList.innerHTML += `
        <div class="card">
            <img src="${data.image}">
            <h3>${data.name}</h3>
            <h2>₹${data.price}</h2>

            <button class="deleteBtn" onclick="deleteProduct('${item.id}')">
                Delete
            </button>
        </div>
        `;
    });

}

window.deleteProduct = async function (id) {

    if (confirm("Delete Product?")) {

        await deleteDoc(doc(db, "products", id));

        loadProducts();

    }

}

loadProducts();