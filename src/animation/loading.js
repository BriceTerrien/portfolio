// Animation de la page de chargement
import { gsap } from "gsap";

gsap.fromTo('.loading-page', { opacity: 1, filter: 'blur(0px)'}, {
    opacity: -.5,
    filter: 'blur(10px)', // Flou lors de la disparition
    duration: 1,
    delay: 2.4,
    onStart: function() {
            document.querySelector('.header').style.visibility = 'visible'; 
    },
    onComplete: function() {
        document.querySelector('.loading-page').style.display = 'none';
    }
});

gsap.fromTo('.logo-name', {
    y: 50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.4,
});

gsap.fromTo('.header', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    duration: .5,
    delay: 2.1,

})



