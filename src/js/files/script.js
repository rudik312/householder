// Подключение функционала "Чертоги фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const myScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  // offset: [0, 0],
  // repeat: false,


  // direction: "vertical", // or horizontal
  lerp: 0.05, // inertia
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
  offset: document.querySelector('.install__heading').offsetHeight
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

