window.onscroll = function () { myFunction() };

let navbar = document.getElementById('navbar');

let navLink = document.querySelectorAll('.nav-link');

let logo = document.querySelector('.Logo');

let navbarToggler = document.querySelector('.navbar-toggler-icon');

let scrollTopButton = document.querySelector('.scrollTopButton');

function myFunction() {
    if (this.scrollY >= 40) {

        //navbar
        navbar.classList.remove('navborderTop');

        navbar.classList.add("sticky", "bg-white", "shadow-sm");

        //navbarToggler
        navbarToggler.classList.add('blackToggler');

        navbarToggler.classList.remove('whiteToggler');

        //navLink
        navLink.forEach(function (navItem) {
            navItem.classList.add("text-dark", "animated", "fadeInUp");
        });

        //navLogo
        logo.src = "images/logo/whiteLogo.png"

        logo.width = "40"

        logo.classList.add("animated", "fadeInUp");

    } else {

        //navbar
        navbar.classList.remove("sticky", "bg-white", "shadow-sm");

        navbar.classList.add("navborderTop");


        //navbarToggler
        navbarToggler.classList.add('whiteToggler');

        navbarToggler.classList.remove('blackToggler');

        //navLink
        navLink.forEach(function (navItem) {
            navItem.classList.remove("text-dark");
            navItem.classList.add("text-white");
        });

        //logo
        logo.src = "images/logo/blueLogo.png"

    }

    if (this.scrollY >= 60) {
        scrollTopButton.classList.add('fixed-bottom');
        scrollTopButton.classList.remove('d-none');
    } else {
        scrollTopButton.classList.add('d-none');
        scrollTopButton.classList.remove('fixed-bottom');
    }
}
