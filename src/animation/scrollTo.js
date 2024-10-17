// Assurer l'utilisation du ScrollToPlugin

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
  gsap.registerPlugin(ScrollToPlugin);

    // Sélectionner tous les liens de navigation
    const menuLinks = document.querySelectorAll('.header a');

    // Ajouter un écouteur d'événement à chaque lien
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien
            
            const targetId = this.getAttribute('href'); // Obtenir l'ID de la section cible
            
            // Si l'ID commence par "/", c'est la page d'accueil
            if (targetId === "/") {
                window.location.href = targetId; // Rediriger vers la page d'accueil
                return; // Sortir de la fonction
            }

            // Obtenir la position Y de la section cible
            const targetSection = document.querySelector(`#${targetId}`);
            if (targetSection) {
                // Ajustez l'offset ici (par exemple, 50 pixels vers le bas)
                const offset = -100; // Ajustement de l'offset
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - (window.innerHeight / 2) + (targetSection.offsetHeight / 2) + offset;

                // Utiliser GSAP pour faire défiler en douceur
                gsap.to(window, {
                    duration: 1, // Durée de l'animation en secondes
                    scrollTo: { y: targetPosition }, // Défilement vers la position spécifiée
                    ease: "power2.inOut", // Fonction d'animation
                });
            }
        });
    });

