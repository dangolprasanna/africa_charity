const nav_bar = document.querySelector('.navbar');
const section1 = document.querySelector('.container');
const nav = document.querySelector('.navigation');
const nav_icon = document.querySelector('#nav_icon');
var clicks = 0;
nav.addEventListener('click', () => {
    if (clicks % 2 == 0) {
        nav_bar.style.transform = "translateX(-14rem)";
        nav_icon.style.transform = "rotate(90deg)"
        section1.style.filter = "blur(2px)";
    } else if (clicks % 2 != 0) {
        nav_bar.style.transform = "translateX(0rem)";
        nav_icon.style.transform = "rotate(0deg)"
        section1.style.filter = "blur(0px)";
    }
    clicks++;
});
gsap.from('img', {
    opacity: 0,
    duration: 2
});
gsap.from('#heading', {
    opacity: 0,
    y: -50,
    duration: 1
});
gsap.from('.quote', {
    opacity: 0,
    y: 100,
    duration: 2,
    delay: 1
});
gsap.from('.sec2_container', {
    duration: 3,
    delay: 3,
    opacity: 0,
    y: 50
})