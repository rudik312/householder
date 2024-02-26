import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


window.onload = function () {
  
  const myScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.06, // inertia
    // offset: [0, 0],
    // repeat: false,
    // initPosition: { x: 0, y: 100 },

    // direction: "vertical", // or horizontal
    // touchMultiplier: 2,

    // class: "is-inview",
    // initClass: 'has-scroll-init',
    // scrollbarClass: 'c-scrollbar',
    // scrollingClass: 'has-scroll-scrolling',
    // draggingClass: 'has-scroll-dragging',
    // smoothClass: "has-scroll-smooth",
    // scrollbarContainer: false,
    // getSpeed: false,
    // getDirection: false,
    // multiplier: 1,
    // firefoxMultiplier: 50,
    // touchMultiplier: 2,
    // scrollFromAnywhere: false,
    // gestureDirection: "vertical", // or horizontal, both
    // reloadOnContextChange: false,
    // resetNativeScroll: true,
    // offset: document.querySelector(".install__heading").offsetHeight,
  });

  // как установить срабатывание scroll, когда секция начинается

  // const section = document.querySelector('.install__parallax'); // выбираем секцию, которую нужно отслеживать

  // const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //         if (entry.isIntersecting) {
  //             // выполнить нужные действия, когда секция появляется на экране
  //
  //         }
  //     });
  // });

  // observer.observe(section);
};