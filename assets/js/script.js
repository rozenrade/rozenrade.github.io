const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');

btn.addEventListener('click', () => {
  menu.classList.toggle('translate-x-0');  // fait glisser le menu dans l’écran
  menu.classList.toggle('translate-x-full'); // remet hors écran
  menu.classList.toggle('opacity-100');    // menu visible
  menu.classList.toggle('opacity-0');      // menu invisible
});
