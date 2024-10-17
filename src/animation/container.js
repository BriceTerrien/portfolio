// test pour que quand je passe du about au skill il remonte legerement vers le haut pour combler le trou 
import { gsap } from "gsap/dist/gsap";
    
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.to(".hero", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 95%",
        end: "bottom 100%",
        scrub: true,
        toggleActions: "play none none none",
    },
     y: '-15vh',

});
  

gsap.to(".about", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 85%",
        end: "bottom 80%",
        scrub: true,
        toggleActions: "play none reverse none",
    },
     y: '-15vh',
});
    

gsap.to(".skills", {
scrollTrigger: {
    trigger: ".skills",
    start: "top 100%",
    end: "bottom 85%",
    scrub: true,
    toggleActions: "play none none none"
},
 y: '-15vh',

});

gsap.to(".project", {
    scrollTrigger: {
        trigger: ".project",
        start: "top 100%",
        end: "bottom 85%",
        scrub: true,
        toggleActions: "play none none none"
    },
     y: '-15vh',
    
    });
    


gsap.to(".contact", {
    scrollTrigger: {
        // markers: true,
        trigger: ".contact",
        start: "top 100%",
        end: "bottom 85%",
        scrub: true,
        toggleActions: "play none none none"
    },
     y: '-15vh',
    
    });
    


