// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const toTop = document.querySelector('#to-top');

hamburger.addEventListener('click',function() {
    hamburger.classList.toggle('hambuger-active');
    navMenu.classList.toggle('hidden');
})


// script ketika screen di scroll maka tambahakan function

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// when you click outside navbar
// window.addEventListener('click', function(e){
//     if (e.target != hamburger && e.target != navMenu){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

// dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

