const root = document.documentElement;
const darkToggle = document.getElementById('darkToggle');
const darkToggleImg = document.querySelector('.darkToggleImg');
const navLinks = document.querySelector('#navLinks');
const cart = document.querySelector('.cartImg');


let darkMode = false;
console.log('boo');

darkToggle.addEventListener('click', () => {
    if(!darkMode) {
        root.style.setProperty('--main-clr', '#000');
        root.style.setProperty('--scnd-clr', '#fff');
        darkToggle.classList.add('dark');
        darkToggleImg.classList.add('dark');
        navLinks.classList.add('dark');
        cart.classList.add('dark');
        darkMode = true;
        console.log('sheesh');
    } else {
        root.style.setProperty('--main-clr', '#fff');
        root.style.setProperty('--scnd-clr', '#000');
        darkToggle.classList.remove('dark');
        darkToggleImg.classList.remove('dark');
        navLinks.classList.remove('dark');
        cart.classList.remove('dark');
        darkMode = false;
    }
});


const hamburgerMenu = document.querySelector('#hamburgerMenu');
const hamburgerLine = document.querySelector('.hamburgerLine');
const logo = document.querySelector('.logo');
let hamburgerOpen = false;

hamburgerMenu.addEventListener('click', () => {
    if(!hamburgerOpen) {
        logo.classList.add('hamburgerOpen');
        hamburgerMenu.classList.add('hamburgerOpen');
        hamburgerLine.classList.add('hamburgerOpen');
        navLinks.classList.add('hamburgerOpen');
        hamburgerOpen = true;
    } else {
        logo.classList.remove('hamburgerOpen');
        hamburgerMenu.classList.remove('hamburgerOpen');
        hamburgerLine.classList.remove('hamburgerOpen');
        navLinks.classList.remove('hamburgerOpen');
        hamburgerOpen = false;
    }
});