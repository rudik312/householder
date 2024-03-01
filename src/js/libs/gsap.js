import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollSmoother } from "gsap/ScrollSmoother.min.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

document.addEventListener("DOMContentLoaded", function (event) {
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
    end: "+=600",
    scrub: true,
    // markers: true,
  });

  gsap.to(".install__parallax", {
    scrollTrigger: ".install__content", // start the animation when ".box" enters the viewport (once)
    start: "10%",
    end: "30%",
    y: "-50%",
    markers: true,
  });


  
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".install",
  //     scrub: 1,
  //     pin: '.install__parallax',
  //     pinSpacing: true,
  //     start: "10%",
  //     end: "30%",
  //     markers: true,
  //   },
  // });

  // ScrollTrigger.create({
  //   trigger: ".install__parallax",
  //   pin: true,
  //   start: "top top",
  //   end: "+=600",
  //   scrub: true,
  //   markers: true,
  // });




  // gsap.from('.draw', {
  //   // drawSVG: "0%",
  //   ease: "expo.out",
  //   scrollTrigger: {
  //     trigger: '.install__content',
  //     // start: "clamp(top center)",
  //     start: "bottom bottom",
  //     scrub: true,
  //     pin: '.install__parallax',
  //     pinSpacing: false,
  //     markers:true,
  //   }
  // })

  // pin: '.install__container',
  // pinSpacing: false,
  // start: "top top",

  // gsap.fromTo(".install__parallax", { top: '100px' }, {
  //   top: '50px',
  //   scrollTrigger: {
	// 		trigger: '.install__parallax',
	// 		start: 'top',
	// 		end: '820',
	// 		scrub: true
	// 	}
  // });

  // ScrollTrigger.create({
  //   trigger: ".install__parallax",
  //   // pin: true,
  //   // start: "bottom bottom",
  //   start: "+500",
  //   // end: "+=950",
  //   // scrub: true,
  //   markers: true,
  // });

});
