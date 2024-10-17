// Fonction pour initialiser les particules
function initParticles() {
    // Récupérer le thème actuel depuis localStorage
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Définir la couleur des particules en fonction du thème
    const particleColor = currentTheme === 'light' ? '#061019' : '#e6f0f9';
    const linkColor = currentTheme === 'light' ? '#061019' : '#e6f0f9';

    // Initialiser particlesJS avec la couleur appropriée
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 150, // Nombre de particules
                "density": {
                    "enable": true,
                    "value_area": 789.1476416322727
                }
            },
            "color": {
                "value": particleColor // Couleur des particules en fonction du thème
            },
            "shape": {
                "type": "circle", // Forme des particules
                "stroke": {
                    "width": 0,
                    // "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 3
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0.1,
                    "sync": true
                }
            },
            "size": {
                "value": 2.5, // Taille des particules
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false, // Pas de lignes entre les particules
                "distance": 150,
                "color": linkColor, // Couleur des lignes en fonction du thème
                "opacity": 0.1,
                "width": 0.5
            },
            "move": {
                "enable": true,
                "speed": 0.1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "bubble" // Réaction au survol
                },
                "onclick": {
                    "enable": false,
                    "mode": "push" 
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 300,
                    "duration": 0.8
                },
                "push": {
                    "particles_nb": 500
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// Appeler initParticles au chargement de la page
window.onload = function(){
    initParticles();
}

 // Transmettre les événements de la souris au conteneur des particules
 document.addEventListener('mousemove', function(event) {
    const particlesCanvas = document.querySelector('#particles-js canvas');
    if (particlesCanvas) {
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: event.clientX,
        clientY: event.clientY
      });
      particlesCanvas.dispatchEvent(mouseEvent);
    }
  });

  document.addEventListener('click', function(event) {
    const particlesCanvas = document.querySelector('#particles-js canvas');
    if (particlesCanvas) {
      const clickEvent = new MouseEvent('click', {
        clientX: event.clientX,
        clientY: event.clientY
      });
      particlesCanvas.dispatchEvent(clickEvent);
    }
  });