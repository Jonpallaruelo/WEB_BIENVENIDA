const navbar = document.getElementById('navbar');
const colorId = document.getElementById('color')
const a = document.getElementById('nav-link')



window.addEventListener('scroll', () => {
    if (window.scrollY > 80 || document.documentElement.scrollTop > 40) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});
