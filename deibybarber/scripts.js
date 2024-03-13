
let menuIcon = document.getElementById('burger-menu');
let navmenu = document.querySelector('.header_nav');

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active');
    navmenu.classList.toggle('active');
});

var images = Array.from(document.querySelectorAll('.carousel-image'));
var progressBar = document.querySelector('.carousel-progress-bar');
var currentImageIndex = 0;

setInterval(function() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    progressBar.style.width = ((currentImageIndex + 1) / images.length) * 100 + '%';
}, 3000);