// BUTTON BACK TO TOP
const backToTop = document.querySelector('.back-to-top');

function toggleBackToTop() {
    if (window.scrollY > 0) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
}

// Navbar
document.addEventListener("DOMContentLoaded", () => {
    const navbarNav = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarNav.classList.contains("show")) {
                const navbarToggler = document.querySelector(".navbar-toggler");
                if (navbarToggler) {
                    navbarToggler.click();
                }
            }
        });
    });

    dropdownItems.forEach(item => {
        item.addEventListener("click", () => {
            if (navbarNav.classList.contains("show")) {
                const navbarToggler = document.querySelector(".navbar-toggler");
                if (navbarToggler) {
                    navbarToggler.click();
                }
            }
        });
    });
});