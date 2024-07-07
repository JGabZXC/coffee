const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // if(hamburger.classList.contains('active')) {
    //     document.querySelector('body').style.position = 'fixed';
    // } else {
    //     document.querySelector('body').style.position = 'static';
    // }
});

const navMenuItems = document.querySelectorAll('.nav-menu li');

navMenuItems.forEach(item => item.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    document.querySelector('body').style.position = 'static';
}));