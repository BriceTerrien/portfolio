import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import Lenis from 'lenis'

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

let selection1 = Splitting({ target: '.one' });
let selection2 = Splitting({ target: '.two' });


gsap.registerPlugin(ScrollTrigger);

gsap.from(selection1[0].chars, {
  transformOrigin: "top", // testez d'autres animations facilemen
  stagger: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".one",
    start: "top 87.5%",
    end: "bottom 88.5%",
    scrub: true,
  }
});

gsap.from(selection2[0].chars, {
    transformOrigin: "top", // testez d'autres animations facilement
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".two",
      start: "top 91%",
      end: "bottom 92%",
      scrub: true,
    }
});

const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 400);
});

gsap.ticker.lagSmoothing(0);
