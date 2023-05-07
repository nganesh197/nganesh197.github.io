const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() { 
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');

        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    }else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}


$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('header').addClass('scrolled');
        $('a').addClass('scrolled');
        $('.menu-nav__item').addClass('scrolled');
        $('.menu-btn__burger').addClass('scrolled');
        $('.logo').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
        $('a').removeClass('scrolled');
        $('.menu-nav__item').removeClass('scrolled');
        $('.menu-btn__burger').removeClass('scrolled');
        $('.logo').removeClass('scrolled');
    }
});