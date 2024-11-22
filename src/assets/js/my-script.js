document.addEventListener("DOMContentLoaded", () => {
    // Back to Top
    const backToTop = document.querySelector('.back-to-top');
    const aboutSection = document.querySelector('#about'); // Elemen About

    function toggleBackToTop() {
        if (!aboutSection) return; // Jika elemen tidak ditemukan, hentikan fungsi.

        const aboutRect = aboutSection.getBoundingClientRect();
        const isVisible = aboutRect.top <= window.innerHeight && aboutRect.bottom >= 0;

        if (isVisible) {
            backToTop.style.display = 'flex'; // Tampilkan tombol
        } else {
            backToTop.style.display = 'none'; // Sembunyikan tombol
        }
    }

    // Navbar
    const navbarNav = document.getElementById("navbarNav");
    const navLinks = document.querySelectorAll(".nav-link");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    // Prevent dropdown from closing when clicking on a dropdown item
    dropdownItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent the dropdown menu from closing
        });
    });

    // Close navbar when nav-link (non-dropdown) is clicked
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

    // Listen to scroll for back-to-top functionality
    window.addEventListener('scroll', toggleBackToTop);
});
