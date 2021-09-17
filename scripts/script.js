/* VARIABLES */

const menuToggleButton = document.querySelector('#burger-menu-toggle');
const navMenu = document.querySelector('nav');

menuToggleButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    console.log('button works');
    navMenu.style.left = '0px';

}