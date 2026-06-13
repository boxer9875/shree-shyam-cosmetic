// ===========================
// Shree Shyam Cosmetics
// Premium Script
// ===========================

// Sticky Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

    }

});


// Fade Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll("section,.product,.cat").forEach((el) => {

    observer.observe(el);

});




// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#FFD700";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};



// Hero Title Animation

const heroTitle = document.querySelector(".overlay h1");

let scale = 1;

setInterval(() => {

    scale = scale === 1 ? 1.03 : 1;

    heroTitle.style.transform = `scale(${scale})`;

    heroTitle.style.transition = "0.8s";

}, 1000);



// Product Hover Effect

document.querySelectorAll(".product").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// Category Click

document.querySelectorAll(".cat").forEach(cat => {

    cat.addEventListener("click", () => {

        alert("Products Page Coming Soon 🚀");

    });

});



// Welcome Message

window.addEventListener("load", () => {

    console.log("Welcome to Shree Shyam Cosmetics");

});



// Current Year in Footer

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}