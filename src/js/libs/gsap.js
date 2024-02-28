import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollSmoother } from "gsap/ScrollSmoother.min.js";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

document.addEventListener('DOMContentLoaded', function (event) {



const smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
		smooth: 1.5,
		effects: true,
    normalizeScroll: true, 
  });

  ScrollTrigger.create({
    trigger: ".install__content",
    pin: true,
    start: "top top",
    end: "+=1000",
    markers: true
  });


  ScrollTrigger.create({
    trigger: ".install__parallax",
    // pin: true,
    // start: "bottom bottom",
    start: "+=800",
    // end: "+=950",
    markers: true
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


})
  

