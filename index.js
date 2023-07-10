// js code
// document.querySelector('.hamburger').addEventListener('click',()=>{
//     const navbar = document.querySelector('.navbar');
//     const isNavbarOpen = document.querySelector('.navbargo');
//     const hamburger = document.querySelector('.hamburger');
//     const isHamburgerActive = document.querySelector('.active');
//     navbar.classList.toggle('navbargo');
//     if(isNavbarOpen){
//         navbar.style.transitionDelay = '';
//     }
//     else{
//         navbar.style.transitionDelay = '0.2s';
//     }
//     hamburger.classList.toggle('active');
//     if(isHamburgerActive){
//         hamburger.style.transitionDelay = '0.5s';
//     }
//     else{
//         hamburger.style.transitionDelay = '';
//     }
//     document.querySelectorAll('.navbar .nav-ul li a').forEach((item) =>{
//         item.classList.toggle('visible');
//     });
// });

// jquery code
$('.hamburger').click(function () {
    const navbar = $('.navbar');
    const isNavbarOpen = navbar.hasClass('navbargo');
    const hamburger = $('.hamburger');
    const isHamburgerActive = hamburger.hasClass('active');

    navbar.toggleClass('navbargo');

    if (isNavbarOpen) {
        navbar.css({transitionDelay: ''});
    } 
    else {
        navbar.css({transitionDelay: '0.2s'});
    }

    hamburger.toggleClass('active');

    if (isHamburgerActive) {
        hamburger.css('transition-delay', '0.5s');
    } else {
        hamburger.css('transition-delay', '');
    }

    $('.navbar .nav-ul li a').toggleClass('visible');
});
