import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Variable pour stocker le ScrollTrigger
let scrollTrigger;

function initScrollAnimation() {
  // Vérifie si la largeur de la fenêtre est supérieure ou égale à 1200px
  if (window.innerWidth >= 1200) {
    // Si le ScrollTrigger n'existe pas, crée-le
    if (!scrollTrigger) {
      scrollTrigger = gsap.to("[data-speed]", {
        x: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window),
        ease: "none",
        scrollTrigger: {
          start: 200,
          end: "max",
          invalidateOnRefresh: true,
          scrub: 1,
          // Donne un ID au ScrollTrigger pour le référencer plus tard
          id: "parallaxScroll"
        }
      });
    }
  } else {
    // Si la largeur est inférieure à 1200px, tuer le ScrollTrigger spécifique
    if (scrollTrigger) {
      scrollTrigger.scrollTrigger.kill(); // Tuer uniquement le ScrollTrigger que nous avons créé
      scrollTrigger = null; // Réinitialiser la variable
    }
  }
}

// Initialiser l'animation au chargement
initScrollAnimation();

// Écouter l'événement de redimensionnement de la fenêtre
window.addEventListener('resize', initScrollAnimation);