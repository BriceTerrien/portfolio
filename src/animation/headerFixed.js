// Animation pour que le header disparaisse en scrollant vers le bas et réapparaisse en scrollant vers le haut
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const showAnim = gsap.from('.header', { 
    yPercent: -100,
    paused: true,
    duration: 0.2

  }).progress(1);
  
  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    }
  });
