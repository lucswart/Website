const navSlide = () => {
    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //toggle de nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //links animeren
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
    })
}

//Burger animatie
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

})

//Alle functies bij een
const app = () => {
    navSlide();
}

app();