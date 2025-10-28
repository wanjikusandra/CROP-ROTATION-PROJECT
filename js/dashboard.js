const menuToggle =document.getElementById('menu-toggle');
const navBar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navBar.classList.toggle('active');
}