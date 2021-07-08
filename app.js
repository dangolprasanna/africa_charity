const nav_bar = document.querySelector('.navbar');
const section1 = document.querySelector('.container');
const nav = document.querySelector('.navigation');
const nav_icon = document.querySelector('#nav_icon');
var clicks = 0;
nav.addEventListener('click', () => {
    if (clicks % 2 == 0) {
        nav_bar.style.transform = "translateX(-14rem)";
        nav_icon.style.transform = "rotate(90deg)"
        section1.style.filter = "blur(4px)";
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
    duration: 1,
    delay: 1
});

ScrollTrigger.defaults({ scroller: ".container" });
const sec2 = document.querySelector('.sec2');
gsap.from('.sec2_container', {
    scrollTrigger: {
        trigger: sec2,
        start: "top: 20%",
        toggleElement: "play play play reverse",
    },
    duration: 1,
    opacity: 0,
    delay: 0.5,
    y: 50
})
gsap.from('#sec2_heading', {
    scrollTrigger: {
        trigger: ".sec2",
        start: "top: 20%",
        toggleElement: "restart play play reverse",
    },
    duration: 1,
    opacity: 0,
    y: 50
})
gsap.from('#sec3_heading', {
    scrollTrigger: {
        trigger: ".sec3",
        start: "top: 20%",
        toggleElement: "restart play play reverse",
    },
    duration: 1,
    opacity: 0,
    y: -100
})
gsap.from('.countries', {
    scrollTrigger: {
        trigger: ".sec3",
        start: "top: 20%",
        toggleElement: "restart play play reverse",
    },
    delay: 0.4,
    duration: 1,
    opacity: 0,
    y: 50
})

gsap.from('.donation_box', {
    scrollTrigger: {
        trigger: ".sec3",
        start: "top: 20%",
        toggleElement: "restart play play reverse",
    },
    delay: 1,
    duration: 0.8,
    opacity: 0,
    y: 50,
    scale: 1.5
})