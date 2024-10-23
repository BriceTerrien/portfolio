import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fonction pour configurer les animations
function setupAnimations() {
    // Vérifier si l'écran est supérieur ou égal à 768px
    if (window.innerWidth >= 768) {
        // Ajouter les animations GSAP ici
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
                trigger: ".contact",
                start: "top 100%",
                end: "bottom 85%",
                scrub: true,
                toggleActions: "play none none none"
            },
            y: '-15vh',
        });
    } 
}

// Appel initial pour configurer les animations
setupAnimations();

// Ajouter un écouteur d'événements pour les changements de taille de fenêtre
window.addEventListener('resize', setupAnimations);