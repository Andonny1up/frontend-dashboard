const burger_menu = document.querySelector('.burger-menu');
const exit_menu = document.querySelector('.exit')

const menu = document.querySelector('.sidebar');

// Events
burger_menu.addEventListener("click",toggleMenu);
exit_menu.addEventListener("click",exitMenu)

// Funtions
function toggleMenu(event) {
    menu.classList.toggle('sidebar-open')
}
function exitMenu(event) {
    menu.classList.remove('sidebar-open')
}